<template>
  <nav
    class="fixed right-0 py-2 px-5 bg-bossanova-600/50 border-bossanova-50 border-l-[1px] border-b-[1px] rounded-bl-xl z-10">
    <ul class="flex justify-end p-0 text-xl">
      <li>
        <router-link
          to="/resume"
          class="text-[#f2f2f2] py-3 px-2">
          Resume
        </router-link>
      </li>
      <li class="text-[#f2f2f2]">
        <a
          href="https://codepen.io/wildbeard"
          target="_blank"
          class="text-[#f2f2f2] py-3 px-2">
          <FontAwesomeIcon
            :icon="faCodepen"
            title="Link to my CodePen" />
        </a>
      </li>
      <li class="text-[#f2f2f2]">
        <a
          href="https://linkedin.com/in/prestonhaddock"
          target="_blank"
          class="text-[#f2f2f2] py-3 px-2">
          <FontAwesomeIcon
            :icon="faLinkedin"
            title="Link to my LinkedIn" />
        </a>
      </li>
    </ul>
  </nav>

  <div class="relative bg-bossanova h-[75vh]">
    <div class="absolute inset-y-0 right-0 w-1/2 h-1/2 flex items-center">
      <h1 class="text-7xl font-hobo text-white md:leading-10 tracking-wide">
        Dev Logs
      </h1>
    </div>
    <NightSky />
  </div>

  <div class="bg-bossanova-600 py-8">
    <div class="container mx-auto px-4">
      <h2
        class="mb-8 font-hobo text-3xl text-[#f2f2f2] text-center tracking-wide leading-10">
        Hey, I'm Press: Software Engineer
      </h2>
    </div>

    <div class="container mx-auto px-4">
      <div class="flex flex-wrap -mx-4">
        <div class="flex w-full md:w-1/2 px-4">
          <div class="py-2 px-4 bg-bossanova-600 rounded-lg">
            <h3 class="mb-4 text-xl text-[#f2f2f2] leading-8">
              Work Related
            </h3>
            <p class="mb-2 text-[#f2f2f2]">
              The header above
              <span class="italic font-semibold">says</span> Software Engineer
              what it means is: I'm a passionate engineer who loves focusing on
              the user experience and page performance. I enjoy the process of
              taking designs of any kind and turning them into usuable features
              on the web.
            </p>
            <p class="text-[#f2f2f2]">
              I love building websites and tools that anyone can use and enjoy.
              I've found myself helping out across various industries ranging
              from sports, distilling, and creative agencies to direct to
              consumer food delivery and outdoor landscape design.
            </p>

            <h3 class="my-4 text-xl text-[#f2f2f2] leading-8">
              Work Un-related
            </h3>
            <p class="mb-2 text-[#f2f2f2]">
              While not working you can usually find me spending time with my
              better half, playing games, working on project cars, or doing
              something outdoors. I also try and maintain a healthy amount of
              incomplete projects (*ahem* cars) to keep myself busy when I have
              free time.
            </p>

            <h3 class="my-4 text-xl text-[#f2f2f2] leading-8">
              Learnings
            </h3>
            <p class="mb-2 text-[#f2f2f2]">
              <span class="block font-semibold">Game Dev</span>
              I've always played games -- all the way back to Super Mario
              Brothers on NES. Recently, I've been going through the process of
              writing down ideas for a game. Are they good? Probably not. But
              aside from that, I am learning game dev using the Godot engine.
              Learning is slow but you checkout
              <a
                href="https://github.com/wildbeard/into-the-arena"
                target="_blank"
                class="text-[#f2f2f2] underline">the game here</a>.
            </p>

            <p class="mb-2 text-[#f2f2f2]">
              <span class="block font-semibold">Neovim</span>
              At the time the Vue LSP Vetur had a memory leak (or something) in
              vscode. It would consume insane amounts of CPU and RAM on my poor
              little Macbook. Stage left enters Neovim. I quit vscode cold
              turkey and jumped straight into hljk. Now, anytime I need to write
              some form of text if there's no vim-motions I feel a deep sadness.
            </p>
          </div>
        </div>

        <div class="flex w-full md:w-1/2 px-4">
          <div class="py-2 px-4 bg-bossanova-600 rounded-lg">
            <h3 class="mb-4 text-xl text-[#f2f2f2] leading-8">
              Working On:
            </h3>

            <p class="mb-2 text-[#f2f2f2]">
              <span class="block font-semibold">22 Tacoma 6MT:</span>
              This is my go-to truck and daily driver. While it's mostly a
              grocery getter it does serve a bigger purpose. From snow travel to
              logging and taking us up and over mountain tops and into the
              wilderness.
            </p>

            <p class="mb-2 text-[#f2f2f2]">
              <span class="block font-semibold">'93 F150:</span>
              This was my grandfather's farm truck. I've spent more time in this
              truck's bed as a kid going fishing and helping out around the farm
              than I have spent driving it. It's beat up and not pretty but it
              runs and it made the trip from OK. to CO. during the heat of
              summer.
            </p>

            <p class="mb-2 text-[#f2f2f2]">
              <span class="block font-semibold">'95 240sx:</span>
              Arguably the worst lawn ornament I own. It doesn't run, the trunk
              doesn't latch, and there's a spare motor in the passenger seat.
              What started out as a high school project has become the "I'll get
              to it someday" project.
              <span class="block font-semibold">The Goal:</span> Auto or Rally
              Cross. <span class="block font-semibold">The Plan:</span> There is
              no plan.
            </p>

            <h3 class="mb-4 text-xl text-[#f2f2f2] leading-8">
              Playing:
            </h3>

            <ul class="text-[#f2f2f2]">
              <li class="mb-2">
                <FontAwesomeIcon
                  :icon="faSteamSquare"
                  class="mr-1" />
                <a
                  href="https://store.steampowered.com/app/892970/Valheim/"
                  target="_blank"
                  class="text-[#f2f2f2] font-semibold underline">Valheim</a>
                It's like Minecraft but with Vikings and better in every way.
              </li>
              <li class="mb-2">
                <FontAwesomeIcon
                  :icon="faSteamSquare"
                  class="mr-1" />
                <a
                  href="https://store.steampowered.com/app/251570/7_Days_to_Die/"
                  target="_blank"
                  class="text-[#f2f2f2] font-semibold underline">7DTD</a>
                This game is beyond scuffed. But it's fun.
              </li>
              <li class="mb-2">
                <FontAwesomeIcon
                  :icon="faSteamSquare"
                  class="mr-1" />
                <a
                  href="https://store.steampowered.com/app/1604030/V_Rising/"
                  target="_blank"
                  class="text-[#f2f2f2] font-semibold underline">V-Rising</a>
                Vampires &amp; Gothic Castles. Need I say more?
              </li>
              <li class="mb-2">
                <FontAwesomeIcon
                  :icon="faSteamSquare"
                  class="mr-1" />
                <a
                  href="https://store.steampowered.com/app/671860/BattleBit_Remastered/"
                  target="_blank"
                  class="text-[#f2f2f2] font-semibold underline">Battlebit Remastered</a>
                This is what Battlefield would look like if EA cared.
              </li>
              <li class="mb-2">
                <FontAwesomeIcon
                  :icon="faSteamSquare"
                  class="mr-1" />
                <a
                  href="https://store.steampowered.com/app/1063730/New_World/"
                  target="_blank"
                  class="text-[#f2f2f2] font-semibold underline">New World</a>
                There's no better David &amp; Goliath story. Except AGS is both
                David and Goliath.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// @todo: Get TS to work w/nvim
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faCodepen,
  faLinkedin,
  faSteamSquare,
} from '@fortawesome/free-brands-svg-icons';
//
import NightSky from '../components/NightSky.vue';
</script>
