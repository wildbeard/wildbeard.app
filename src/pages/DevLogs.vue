<template>
  <div class="absolute top-0 right-0 left-0 py-4 z-10">
    <div
      class="container mx-auto px-4 lg:px-0 lg:flex lg:items-center lg:justify-between">
      <img
        class="mx-auto lg:mx-0"
        src="@/assets/logo.svg"
        title="The Wild Beard"
        alt="Wild Beard">
      <nav
        class="fixed right-0 bottom-0 left-0 lg:relative lg:right-[unset] lg:bottom-[unset] lg:left-[unset] lg:w-max py-2 px-5 lg:p-0 lg:text-xl bg-slate-200 lg:bg-transparent border-t-bossanova-800 border-t-4 lg:border-t-transparent lg:border-t-0 z-10">
        <ul class="flex justify-between">
          <li class="lg:mr-2">
            <router-link
              to="/resume"
              class="text-bossanova lg:text-white py-3 px-2">
              <FontAwesomeIcon
                :icon="faFileCode"
                class="mr-1"
                aria-hidden="true" />
              Resume
            </router-link>
          </li>
          <li class="lg:mr-2">
            <a
              href="https://codepen.io/wildbeard"
              target="_blank"
              class="text-bossanova lg:text-white py-3 px-2">
              <FontAwesomeIcon
                :icon="faCodepen"
                class="mr-1"
                aria-hidden="true " />
              Codepen
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/prestonhaddock"
              target="_blank"
              class="text-bossanova lg:text-white py-3 px-2">
              <FontAwesomeIcon
                :icon="faLinkedin"
                class="mr-1"
                aria-hidden="true " />
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <div class="relative bg-bossanova">
    <div class="absolute w-3/4 top-[20%] left-[12.5%] z-10">
      <h1
        class="font-sans font-extrabold text-6xl text-center text-[#cbbccf] md:leading-10 tracking-wide z-10">
        Hey! I'm Press.
        <span class="block font-bold text-2xl text-[#9b899f] mt-6">I like turning pretty pictures into code.</span>
      </h1>
    </div>

    <NightSky />
  </div>

  <div class="bg-bossanova py-8">
    <div class="container mx-auto px-4">
      <h2
        class="mb-8 font-hobo text-3xl text-[#f2f2f2] text-center tracking-wide leading-10">
        What I Do
      </h2>
    </div>

    <div class="container mx-auto px-4 pb-12 lg:pb-0">
      <div class="flex flex-wrap -mx-4">
        <div class="flex flex-wrap w-full md:w-1/2 px-4">
          <BasicCard class="mb-4">
            <div>
              <h3 class="mb-4 text-xl leading-8">
                Work Related
              </h3>
              <p class="mb-2">
                The header above
                <span class="italic font-semibold">says</span> Software Engineer
                what it means is: I'm a passionate engineer who loves focusing
                on the user experience and page performance. I enjoy the process
                of taking designs of any kind and turning them into usuable
                features on the web.
              </p>
              <p>
                I love building websites and tools that anyone can use and
                enjoy. I've found myself helping out across various industries
                ranging from sports, distilling, and creative agencies to direct
                to consumer food delivery and outdoor landscape design.
              </p>

              <h4 class="my-3 text-lg leading-6">
                Skills
              </h4>

              <p>
                I love working with most web based technologies but love
                <span class="text-[#42b883] font-semibold">Vue</span>,
                <span class="text-[#8993be] font-semibold">PHP</span>,
                <span class="text-[#38bdf8] font-semibold">TailwindCSS</span>,
                and <span class="font-semibold">Javascript</span>. Well, loving
                Javascript might be pushing it. No one really
                <span class="font-semibold italic">loves</span> Javascript.
              </p>
            </div>
          </BasicCard>

          <BasicCard>
            <div>
              <h3 class="mb-4 text-xl leading-8">
                Work Un-related
              </h3>
              <p class="mb-2">
                While not working you can usually find me spending time with my
                better half, playing games, working on project cars, or doing
                something outdoors. I also try and maintain a healthy amount of
                incomplete projects (*ahem* cars) to keep myself busy when I
                have free time.
              </p>

              <h3 class="my-4 text-xl leading-8">
                Learnings
              </h3>
              <p class="mb-2">
                <span class="block font-semibold">Game Dev</span>
                I've always played games -- all the way back to Super Mario
                Brothers on NES. Recently, I've been going through the process
                of writing down ideas for a game. Are they good? Probably not.
                But aside from that, I am learning game dev using the Godot
                engine. Learning is slow but you checkout
                <a
                  href="https://github.com/wildbeard/into-the-arena"
                  target="_blank"
                  class="underline">the game here</a>.
              </p>

              <p class="mb-2">
                <span class="block font-semibold">Neovim</span>
                At the time the Vue LSP Vetur had a memory leak (or something)
                in vscode. It would consume insane amounts of CPU and RAM on my
                poor little Macbook. Stage left enters Neovim. I quit vscode
                cold turkey and jumped straight into hljk. Now, anytime I need
                to write some form of text if there's no vim-motions I feel a
                deep sadness.
              </p>
            </div>
          </BasicCard>
        </div>

        <div class="flex flex-wrap w-full md:w-1/2 px-4">
          <BasicCard class="mb-4">
            <h3 class="mb-4 text-xl leading-8">
              Working On:
            </h3>

            <p class="mb-2">
              <span class="block font-semibold">22 Tacoma 6MT:</span>
              This is my go-to truck and daily driver. While it's mostly a
              grocery getter it does serve a bigger purpose. From snow travel to
              logging and taking us up and over mountain tops and into the
              wilderness.
            </p>

            <p class="mb-2">
              <span class="block font-semibold">'93 F150:</span>
              This was my grandfather's farm truck. I've spent more time in this
              truck's bed as a kid going fishing and helping out around the farm
              than I have spent driving it. It's beat up and not pretty but it
              runs and it made the trip from OK. to CO. during the heat of
              summer.
            </p>

            <p class="mb-2">
              <span class="block font-semibold">'95 240sx:</span>
              Arguably the worst lawn ornament I own. It doesn't run, the trunk
              doesn't latch, and there's a spare motor in the passenger seat.
              What started out as a high school project has become the "I'll get
              to it someday" project.
              <span class="block font-semibold">The Goal:</span> Auto or Rally
              Cross. <span class="block font-semibold">The Plan:</span> There is
              no plan.
            </p>
          </BasicCard>

          <BasicCard>
            <h3 class="mb-4 text-xl leading-8">
              Playing:
            </h3>

            <ul class="">
              <li class="mb-2">
                <FontAwesomeIcon
                  :icon="faSteamSquare"
                  class="mr-1" />
                <a
                  href="https://store.steampowered.com/app/892970/Valheim/"
                  target="_blank"
                  class="font-semibold underline">Valheim</a>
                It's like Minecraft but with Vikings and better in every way.
              </li>
              <li class="mb-2">
                <FontAwesomeIcon
                  :icon="faSteamSquare"
                  class="mr-1" />
                <a
                  href="https://store.steampowered.com/app/251570/7_Days_to_Die/"
                  target="_blank"
                  class="font-semibold underline">7DTD</a>
                This game is beyond scuffed. But it's fun.
              </li>
              <li class="mb-2">
                <FontAwesomeIcon
                  :icon="faSteamSquare"
                  class="mr-1" />
                <a
                  href="https://store.steampowered.com/app/1604030/V_Rising/"
                  target="_blank"
                  class="font-semibold underline">V-Rising</a>
                Vampires &amp; Gothic Castles. Need I say more?
              </li>
              <li class="mb-2">
                <FontAwesomeIcon
                  :icon="faSteamSquare"
                  class="mr-1" />
                <a
                  href="https://store.steampowered.com/app/671860/BattleBit_Remastered/"
                  target="_blank"
                  class="font-semibold underline">Battlebit Remastered</a>
                This is what Battlefield would look like if EA cared.
              </li>
              <li class="mb-2">
                <FontAwesomeIcon
                  :icon="faSteamSquare"
                  class="mr-1" />
                <a
                  href="https://store.steampowered.com/app/1063730/New_World/"
                  target="_blank"
                  class="font-semibold underline">New World</a>
                There's no better David &amp; Goliath story. Except AGS is both
                David and Goliath.
              </li>
            </ul>
          </BasicCard>
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
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
//
import BasicCard from '../components/BasicCard.vue';
import CampfireIcon from '../components/svg/CampfireIcon.vue';
import NightSky from '../components/NightSky.vue';
</script>
