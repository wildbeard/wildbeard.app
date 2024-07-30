---
title: 'Devlog 000: The Start of an RPG'
description: "Robert's RPG has been kicked off."
date: 2024-07-28
tags: ['godot', 'games', 'devlog', 'robert']
draft: false
---

### Preface
Well, well, well, what do we have here? A video game and a blog post? It sounds like someone might have recently been let go from their job. If we're being honest, I think being let go is the reason most software devs turned indie devs get started. Don't quote me on that, though, as I did *absolutely* no research to substantiate that claim.

It is true, though; I did get let go on April Fool's Day. Imagine trying to explain that to friends and family on "prank day." Regardless, we're here now, so let's get **[Devlog 000]{.text-logo}** started.

### The Idea
All games, good or bad, start with an idea. But this idea was not my own, and this is why the game is called "[Robert's RPG]{.text-logo}." Robert approached me and asked if I wanted to use their idea and make game of it. After some back and forth, I said "Sure, it can't be that hard."

[Robert's RPG]{.text-logo} is simple on paper: a 2D turn-based RPG Roguelite*. When you level, you are presented with a handful of options to choose from, like new skills or extra stats. When you beat a boss, you might get some gold, or you might get a legendary weapon. All in all, you have the chance to do really well or really poorly, and it is all thanks to RNG.

While I thought the game couldn't be that hard to make, it actually is quite difficult. I am building everything from scratch. Item and skill balancing? My math? I really should have paid better attention in class.

[*=A Roguelite is like a <a href="https://en.wikipedia.org/wiki/Roguelike" target="_blank">Roguelike</a>, but maybe not as hardcore.]{.text-xs.italic}

### The Game Engine 
I had thought about using Unity, but after the <a href="https://www.theverge.com/23873852/unity-new-pricing-model-news-updates" target="_blank">shitstorm</a> Unity caused for itself, I decided against it. Obviously, there are any number of other options, like Godot, Unreal, RPGMaker, and the list goes on. I settled with Godot because it is free, open source, community-driven, lightweight, and (to my novice eyes) performant and capable. If you're interested in seeing some of the games made with Godot, check out <a href="https://godotengine.org/showcase/" target="_blank">Godot's showcase</a>. If you're on Reddit, the <a href="https://reddit.com/r/godot" target="_blank">Godot subreddit</a> is very active with showcases, demos, and helpful people. It's even being considered by the <a href="https://caseyyano.com/on-evaluating-godot-b35ea86e8cf4" target="_blank">Slay the Spire devs</a>. Their writeup can explain the pros/cons of the engine better than I can, so give it a read.

Now, my choice might have been biased, as I've tinkered with Godot for a little while now. What started with following a <a href="https://www.youtube.com/watch?v=mAbG8Oi-SvQ&list=PL9FzW-m48fn2SlrW0KoLT4n5egNdX-W9a" target="_blank">good tutorial</a> by <a href="https://www.youtube.com/@uheartbeast/videos" target="_blank">Heartbeast</a> has led me to make a small game myself, and to participate in a <a href="https://itch.io/jam/mini-jam-157-electric/results" target="_blank">Game Jam</a> with a small team. Not to brag, but our game, <a href="https://indigosingularity.itch.io/spintobegin" target="_blank">Spin to Begin</a>, came in 7<sup>th</sup> overall and 2<sup>nd</sup> in usage of the limitation. Outside of the tutorial, the game jam, and a side project (since abandoned; it wasn't fun), that's about where my experience ends with Godot.

### Making Things Difficult
There are so many <a href="https://godotengine.org/asset-library/asset" target="_blank">Godot plugins</a>. They range from asset management, pre-built movement systems, to visual heightmap editors. There are even entire game templates for RPGs! Yes, you read that right &mdash;I can get an off-the-shelf RPG and kickstart my development. While I want [Robert's RPG]{.text-logo} to come to life, and plugins would make it easier, I've decided not to use any.

Why am I not using any of these plugins? This might be a naive take, but this is a learning experience, and while I can simplify the process with plugins, that's not necessarily helping me learn in the grand scheme of things. I ***don't know how*** to make games, so I want to ***learn to do it***. I want to experience the pitfalls of the weird systems I've come up with and how to fix them. I want to tailor how the item and spell system work to my liking. I want to ***break*** things. I want my math to be so egregiously incorrect that I one-shot a goblin just by looking at him. I want to make mistakes and learn from them.

### Outro
I'll do my best to keep writing about the progress of [Robert's RPG]{.text-logo}. I can't promise anything, though. I am not much of a writer, and I rewrote this post about as many times as I'm going to rewrite [Robert's RPG]{.text-logo}. Maybe I'll try to write about other things, like cars and finding a job.
