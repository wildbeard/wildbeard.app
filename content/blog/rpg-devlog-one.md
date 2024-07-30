---
title: 'Devlog 001: This is not a How To'
description: 'In the words of Adam Savage: "[One day builds] are not a how to but a what happened."'
date: 2024-08-01
tags: ['games', 'devlog']
draft: true
---

### This isn't a How To
If you know who Adam Savage is, of Mythbuster's fame, you might have seen his Youtube channel <a href="https://www.youtube.com/channel/UCiDJtJKMICpb9B1qf7qjEOA" target="_blank">Tested</a>. On his channel, he documents his One Day Builds with the mindset of "this isn't a how to guide but rather what happened." I am probably butchering that quote but you get the point: I'm not trying to teach anyone anything, I just want to document what happened.

### This is What Happened
We rushed in and quickly got in over our heads! That's what happened. In my haste I started building before I knew *what* it was we were actually going to build. Before we knew it, I had a simple demo consisting of a player and enemies squares on a blank battlefield, attacking in a pre-determined order, hitting each other for randomized damage. "That's great!" I thought, I've created a basic turn based game!

So I added a little bit more functionality to the battlefield. The player could now pick *which* enemy they wanted to hit for randomized damage. Great! I can now target enemies! But this is where progress came to screeching halt. I was now faced with needing to add abilities the player and enemies could use to the game.

Not knowing anything about abilities or how they would look and function was the first big roadblock we hit. This might be due to the lack of a [Game Design Document]{.text-logo}

### The Game Design Document
The [Game Design Document]{.text-logo} or [GDD]{.text-logo} is basically an on-paper proof of concept that lays out a lot of [what]{.text-logo} your game is, [who]{.text-logo} the game is for, and [how]{.text-logo} it should look, feel, and function. It starts out with a high level concept, think of a Tweet in the pre-Elon Twitter days, and usually ends with detailed game systems designs. Since I have never built anything like this before I could no longer pull systems out of thin air. It was time to look to writing systems down that we agreed on. I think rushing to code instead of the high level design is a very important step that we dropped the ball on.

### Our Game Design Document
<img src="https://wildbeard.dev/blog/gdd-fun.png" class="w-full h-72 mt-0 mb-4 object-cover" alt="Our GDD is really cool." />
Our GDD is far from perfect. I mean this is the first half of the first page and we already have memes and abaondonded systems in it! But, the GDD doesn't need to be perfect. We started with some game systems like abilities, leveling, and stats; then we documented how these systems would interact with each other. We can fill in gaps like setting, monetization, a name, etc., later. So Robert and I took to Discord, joined a call, and talked about a lot of following:
* What is the core gameplay loop? What keeps the player wanting to play?
* What does Leveling look like? Can you level up mid combat? What do you get from leveling?
* What do Attributes look like? Are we using basic strength, intelligence, and dexterity or are we adding others? What do these stats do?
* What do Abilities look like? Do they scale off attributes and weapons?
* How do we structure Abilities? What needs to be accounted for in an Ability? Are there passives? Can an ability hit more than one target?
* What does Equipment and Weapons look like? Do they offer any stats or damage buff/nerfs?

Nothing we wrote was super in depth. It was mostly brainstorming and writing down what we thought was "okay" for the time being. As time went on and I built more systems we discovered that the GDD needed to be updated. My Product Engineer brain was telling me "This doesn't feel right." And my Product Engineer brain might be right. But in a Product/SDLC you typically have domain experts to help fill out these requirements before anyone starts building. Since neither Robert or I are domain experts in game development, I need to be okay with us changing the requirements under my feet.

### GDD Example: Abilities
In the inital demo I was simply randomizng damage between 1-10 for players and 1-5 for enemies on each character's turn. That doesn't lend to compelling gameplay. So, we needed to sit down and discuss how an ability system would work. We needed to go over how damage functioned, what type of damage it did (planning ahead!), and what cooldowns looked like if any at all. We gave abilities placeholder names for the time being and our first and most basic ability looked something like:

<ul>
    <li class="mb-2 pl-0">
        Slash: Slashes an enemy for (x wep) + (% str mod)
        <ul class="my-0">
            <li class="my-1">Cooldown: 0</li>
            <li class="my-1">Damage Type: Physical</li>
            <li class="my-1">Base DMG: 15</li>
            <li class="my-1">% Weapon DMG: 25%</li>
            <li class="my-1">% Strength Modifier: 25%</li>
        </ul>
    </li>
</ul>

Okay, great! Now that I have the *basic* structure of an ability I can build a system around it! The `Ability.gd` class extends Godot's `Resource`. This allows us to build the structure of the class and then save the data in a structured manner. Think JSON but exclusive to Godot.

Below is how the `Ability.gd` class started. I extracted the values from the GDD like cooldown, base damage, and weapon damage percent, and turned them into structured data the game can understand.

<img alt="Ability creation in Godot" src="https://wildbeard.dev/blog/ability-godot-ui.png" class="float-right my-0 pl-4" />

```gdscript Ability.gd
extends Resource
class_name Ability

@export var name: String
@export_multiline var description: String

@export_enum("Physical", "Magical") var damage_type: int
@export_enum("Active", "Passive") var ability_type: int

@export var cooldown: int = 0
@export var damage_base: int = 10
@export var damage_weap_modifier: float
@export_enum("Physical", "Magical") var damage_stat_type: int
@export var damage_stat_modifer: Array[float]
```
<div class="clear-right -mt-2"></div>

With the data structured above I can now start creating simple abilities to have my characters randomly pick from. But our ability has no way of determining how much damage it can do. Let's add `getAttackDamage` to the `Ability.gd` file:

```gdscript
func getAttackDamage() -> int:
    var base: int = self.damage_base
	var statMod: float = 0
	var weapMod: float = 0
	var idx: int = 0

	for key in self.damage_stat_type:
		var dmgStat: String = key.to_upper()
        # Stats aren't implemented so we'll give everyone a base of 10
        # regardless of what stat the ability scales off of.
		var baseStat: int = 10
		
		statMod += (baseStat * (self.damage_stat_modifier[idx] / 100))

    # We don't have weapons so just throw them a bone
    weapMod = ((self.damage_weap_modifier / 100) * 1.5)

    return roundi(base + statMod + weapMod)
```

Sweet! Our ability can now calculate some damage based on the data we provide it. Everything is rounded to an integer out of personal preference. I prefer seeing 92 HP and not 92.4 HP.

Jumping back to the Battle Scene (not shown; I'm ashamed of it) we can create a new ability object and call `getAttackDamage()` to pass to `target.getHit()`! Our characters are now using rudimentary abilities instead of randomized numbers!

### Final Thoughts
The keen eyed among you might have noticed references to `damage_stat_type` in the ability's definition. At the moment this is unimplemented due to the fact characters do not yet have stats. This takes us back to the [GDD]{.text-logo}. I can now reference the GDD to see if we've spec'd out how character stats work. If we have the stats system documented (we did!) I can get straight to on building stats and tying them into the ability system and, eventually, the inventory and UI.
