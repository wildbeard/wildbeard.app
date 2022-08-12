<template>
  <div class="home container mt-4 mx-auto px-5 md:px-0">
    <h1 class="font-bold">
      I Break, Build, and Tinker with Things
    </h1>
    <h4 class="mt-4 font-semibold">
      Things You Should Include on Your Personal Site:
    </h4>

    <ol class="mt-4 list-decimal">
      <li>
        <strong>A Bio</strong><br>
        Hey, my name's Preston. I'm currently 27 years old. I write for a living and have been doing so since ~2011.
        I don't write books, blog posts (I've written three), or news articles. I write code. Mainly web based development.<br>
        While not at work I continue to work in my spare time. If I find time outside of my spare time, I'll play games,
        attempt to go outside, and maybe even eat or sleep.<br>
        I have three cats. If that matters.
      </li>
      <li>
        <strong>Projects</strong><br>
        There's not much in the way of this. My <span class="strikethrough">house</span> apartment is full of projects.<br>
        <strong>Working with my hands</strong>
        <ul class="list-disc">
          <li>Refurbished coffee table -- Co-refurbished with my brother</li>
          <li>A hand made computer desk &amp; dining room table -- Co-developed with the better half</li>
          <li>A bird feeder</li>
          <li>A leather quiver</li>
          <li>Various Arduino based projects like a "Soil is too dry, water me before I die" thing</li>
        </ul>
        <strong>Code (also working with my hands)</strong>
        <ul class="list-disc">
          <li>
            Numerous tinkerings on <a
              href="//codepen.io/wildbeard"
              target="_blank">my CodePen</a>.<br>
            These range from silly images, simple games, and snippets of tools to help me when needed.
            <BlockQuote>
              CodePen is a definitive place for developers to showcase their work. It's like a designer being featured on Behance. It's nothing to scoff at.
              <template #author>
                - My friend (<a
                  href="//jonbensondesigns.com"
                  target="_blank">jonbensondesigns.com</a>) hyping me up
              </template>
            </BlockQuote>
            <ul class="list-disc">
              <li>I've had a handful of Pens picked and listed right there on the homepage </li>
              <li>
                I participated in the <a
                  href="//codepen.io/collection/DKyvWY"
                  target="_blank">Daily CSS Challenges</a> (when I had time) and most of those became Picked Pens<sup>*</sup>
              </li>
              <li>
                I also jumped onto the <a
                  href="//codepen.io/wildbeard/pen/JNQzEZ"
                  target="_blank">Fidget Spinner Bandwagon</a> -- What do you know it became a Picked Pen<sup>*</sup><br>
                Not to brag, but the day this Pen got Picked a lot of others followed and made their own. Trend. Setter. :^)
              </li>
              <li>
                Oh, and there's this <a
                  href="//codepen.io/wildbeard/pen/BRXEGd"
                  target="_blank">Self Portrait</a> -- A Picked Pen<sup>*</sup>
              </li>
              <li>
                Also this popular <a
                  href="//codepen.io/wildbeard/pen/eZZPZr"
                  target="_blank">Pen</a> -- I have no idea why it is so popular I thought it was dumb when I made it
              </li>
              <li><sup>*</sup> = Picked Pens mean nothing in reality only that one of the editors saw it liked it</li>
            </ul>
          </li>
          <li>
            I've got a few of the typical developer side projects on my <a
              href="//github.com/wildbeard"
              target="_blank">Github</a> -- You know the ones we start but never finish.
          </li>
        </ul>
      </li>
      <li>
        <strong>A Blog</strong><br>
        See #1. Maybe I'll get around to writing about problems and solutions I've faced.
      </li>
      <li>
        <strong>Testimonials</strong><br>
        Not sure about this. I've had a consistent job since 2011. That has to mean something.
      </li>
      <li>
        <strong>A Picture of Yourself</strong><br>
        <BlockQuote>
          Oh, and there's this <a
            href="//codepen.io/wildbeard/pen/BRXEGd"
            target="_blank">Self Portrait</a> -- A Picked Pen<sup>*</sup>
          <template #author>
            - Me a few seconds ago
          </template>
        </BlockQuote>
      </li>
      <li>
        <strong>Contact Information</strong><br>
        Email: My first &amp; last name @ gmail<br>
        Twitter: <a
          href="//twitter.com/wild_beard"
          target="_blank">Nothing Earth shattering</a><br>
        LinkedIn: <a
          href="//linkedin.com/in/prestonhaddock"
          target="_blank">Hey, It's Me!</a>
      </li>
      <li>
        <strong>A Welcome Page</strong><br>
        Uh, welcome?
      </li>
    </ol>
  </div>
</template>

<script setup>
import BlockQuote from '../components/BlockQuote.vue';
</script>

<style lang="scss" scoped>
ol,
ul {
  @apply pl-8;
  li {
    @apply mb-4 pl-1 leading-relaxed;
  }
}
ul li {
  @apply mb-0;
}
strong {
  @apply font-serif font-semibold;
}
</style>
