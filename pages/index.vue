<template>
  <div>
    <div class="absolute top-0 right-0 left-0 py-4 z-10">
      <div
        class="container mx-auto px-4 lg:px-0 lg:flex lg:items-center lg:justify-between">
        <img
          preload
          class="mx-auto lg:mx-0 w-32"
          src="/logo.png"
          title="The Wild Beard"
          alt="Wild Beard">
        <nav
          class="fixed right-0 bottom-0 left-0 lg:relative lg:right-[unset] lg:bottom-[unset] lg:left-[unset] lg:w-max py-2 px-5 lg:p-0 lg:text-xl bg-slate-200 lg:bg-transparent border-t-bossanova-800 border-t-4 lg:border-t-transparent lg:border-t-0 z-10">
          <ul class="flex justify-between">
            <li class="lg:mr-2">
              <nuxt-link
                no-prefetch
                to="/resume"
                class="text-bossanova lg:text-white md:py-3 md:px-2">
                <FontAwesomeIcon
                  :icon="faFileCode"
                  class="w-[0.875rem] lg:w-4 mr-1"
                  aria-hidden="true" />
                Resume
              </nuxt-link>
            </li>
            <li class="lg:mr-2">
              <NuxtLink
                external
                href="https://codepen.io/wildbeard"
                target="_blank"
                class="text-bossanova lg:text-white md:py-3 md:px-2">
                <FontAwesomeIcon
                  :icon="faCodepen"
                  class="w-[0.875rem] lg:w-4 mr-1"
                  aria-hidden="true" />
                Codepen
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                external
                href="https://github.com/wildbeard"
                target="_blank"
                class="text-bossanova lg:text-white md:py-3 md:px-2">
                <FontAwesomeIcon
                  :icon="faGithub"
                  class="w-[0.875rem] lg:w-4 mr-1"
                  aria-hidden="true" />
                Github
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="relative bg-bossanova">
      <div
        class="absolute w-3/4 top-[20%] min-[420px]:top-[15%] left-[12.5%] xl:top-[25%] z-10">
        <h1
          class="font-sans font-extrabold text-3xl min-[420px]:text-5xl md:text-6xl text-center text-[#cbbccf] md:leading-10 tracking-wide z-10">
          Hey! I'm Press.
          <span class="block font-bold text-2xl text-[#9b899f] mt-6">I like turning pretty pictures into code.</span>
        </h1>
      </div>

      <NightSky />
    </div>

    <div class="bg-bossanova py-8">
      <div class="container mx-auto px-4">
        <h2
          class="mb-8 font-hobo text-3xl text-white text-center tracking-wide leading-10">
          How I Work
        </h2>
      </div>

      <div class="container mx-auto px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="hidden md:block w-1/4 px-4">
            <SVGAnimatedDesk class="w-full" />
          </div>

          <div class="md:w-3/4 px-4">
            <div class="text-white">
              <p class="mb-2">
                I'm a frontend developer who enjoys translating designs into
                pixel-perfect websites and components. On top of that, it's a
                joy to create websites and tools anyone can use and enjoy. I
                like looking at something and saying "We did that and I was a
                part of it."<br>
                Lately, I've found myself doing a lot of development for growth
                teams. It wasn't something I knew I wanted to do until I fell
                headfirst into it. I enjoy helping product, marketing, and
                design teams increase conversion through better page
                performance, A/B testing, and better UI/UX patterns.
              </p>

              <h4 class="my-3 text-lg leading-6">
                What I Work With
              </h4>

              <p class="mb-2">
                I've worked with a lot more web technologies than I'd like to
                admit. I've written backend code in ASP, ASP.NET, .Net, and
                <span class="text-[#8993be] font-semibold">PHP</span>. On the
                frontend I started with vanilla JS and jQuery. From there, I've
                dabbled in Knockout and React before settling on
                <span class="text-[#42b883] font-semibold">Vue</span>. After
                bouncing around I finally decided to settle on the my holy
                trinity:
                <span class="text-[#f9322c] font-semibold">Laravel</span>,
                <span class="text-[#42b883] font-semibold">Vue</span>, and
                <span class="text-[#38bdf8] font-semibold">TailwindCSS</span>.
                Despite convience of
                <span class="text-[#38bdf8] font-semibold">TailwindCSS</span>, I
                absolutely love writing with
                <span class="text-[#cf649a] font-semibold">Sass</span>.
              </p>

              <p>
                During my time as a dev, I've bounced between editors. I started
                school with Notepad++, moved to Brackets, Atom, and settled on
                VSCode. However, when a bug with Vetur was causing significant
                memory and cpu usage (crippling my laptop!) I swapped to
                <span class="text-[#00b952] font-semibold">Neovim</span>. It
                needs no introduction but there's nothing better than those
                sweet, sweet, vim motions. As a bonus, I'm a bit more efficient
                when SSH'ing into servers!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-8 pb-20 bg-[#2a2c3b]">
      <div class="container mx-auto px-4">
        <h2
          class="mb-8 font-hobo text-3xl text-white text-center tracking-wide leading-10">
          How I Unwind
        </h2>
      </div>

      <div class="container mx-auto px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="md:w-3/4 px-4 text-white">
            <p class="mb-2">
              While not working you can usually find me spending time with my
              better half, playing games, working on project cars, or doing
              something outdoors. I also try and maintain a healthy amount of
              incomplete projects (*ahem* cars) to keep myself busy when I have
              free time.
            </p>

            <div class="flex flex-wrap mt-4">
              <div class="lg:w-1/2 lg:pr-4">
                <h4 class="text-white text-lg border-b-2 mb-4">
                  Cars
                </h4>

                <p class="mb-2">
                  <span class="block font-semibold">22 Tacoma 6MT:</span>
                  This is my go-to truck and daily driver. While it's mostly a
                  grocery getter it does serve a bigger purpose. From snow
                  travel to logging and taking us up and over mountain tops and
                  into the wilderness.
                </p>

                <p class="mb-2">
                  <span class="block font-semibold">'93 F150:</span>
                  This was my grandfather's farm truck. I've spent more time in
                  this truck's bed as a kid going fishing and helping out around
                  the farm than I have spent driving it. It's beat up and not
                  pretty but it runs and it made the trip from OK. to CO. during
                  the heat of summer.
                </p>

                <p class="mb-2">
                  <span class="block font-semibold">'95 240sx:</span>
                  Arguably the worst lawn ornament I own. It doesn't run, the
                  trunk doesn't latch, and there's a spare motor in the
                  passenger seat. What started out as a high school project has
                  become the "I'll get to it someday" project.
                </p>
              </div>

              <div class="lg:w-1/2 lg:pl-4">
                <h4 class="mt-4 lg:mt-0 text-white text-lg border-b-2 mb-4">
                  Games
                </h4>
                <ul>
                  <li class="mb-2">
                    <FontAwesomeIcon :icon="faSteamSquare" class="mr-1" />
                    <a
                      href="https://store.steampowered.com/app/892970/Valheim/"
                      target="_blank"
                      class="text-white font-semibold underline">Valheim</a>
                    It's like Minecraft but with Vikings and better in every
                    way.
                  </li>
                  <li class="mb-2">
                    <FontAwesomeIcon :icon="faSteamSquare" class="mr-1" />
                    <a
                      href="https://store.steampowered.com/app/251570/7_Days_to_Die/"
                      target="_blank"
                      class="text-white font-semibold underline">7DTD</a>
                    This game is beyond scuffed. But it's fun.
                  </li>
                  <li class="mb-2">
                    <FontAwesomeIcon :icon="faSteamSquare" class="mr-1" />
                    <a
                      href="https://store.steampowered.com/app/1604030/V_Rising/"
                      target="_blank"
                      class="text-white font-semibold underline">V-Rising</a>
                    Vampires &amp; Gothic Castles. Need I say more?
                  </li>
                  <li class="mb-2">
                    <FontAwesomeIcon :icon="faSteamSquare" class="mr-1" />
                    <a
                      href="https://store.steampowered.com/app/671860/BattleBit_Remastered/"
                      target="_blank"
                      class="text-white font-semibold underline">Battlebit Remastered</a>
                    This is what Battlefield would look like if EA cared.
                  </li>
                  <li class="mb-2">
                    <FontAwesomeIcon :icon="faSteamSquare" class="mr-1" />
                    <a
                      href="https://store.steampowered.com/app/1063730/New_World/"
                      target="_blank"
                      class="text-white font-semibold underline">New World</a>
                    There's no better David &amp; Goliath story. Except AGS is
                    both David and Goliath.
                  </li>
                  <li>
                    <FontAwesomeIcon :icon="faGithub" class="mr-1" />
                    <a
                      href="https://github.com/wildbeard/into-the-arena"
                      target="_blank"
                      class="text-white font-semibold underline">A Godot Game</a>
                    I've always wanted to make a game and now's my chance. I've
                    been learning the Godot game engine in my spare time and
                    tinkering with some concepts on pen &amp; paper.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="hidden md:block w-1/4 px-4">
            <img
              src="@/assets/wildbeardtruck.svg"
              class="w-full"
              alt="A portrait of me lost in the shower"
              loading="lazy">
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
  faGithub,
  faSteamSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
</script>
