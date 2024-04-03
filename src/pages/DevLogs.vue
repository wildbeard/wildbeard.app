<template>
  <nav class="fixed right-0 py-3 px-5 z-10">
    <ul class="flex justify-end p-0 text-xl">
      <li>
        <router-link
          to="/resume"
          class="text-white py-3 px-2">
          Resume
        </router-link>
      </li>
      <li class="text-white">
        <a
          href="https://codepen.io/wildbeard"
          target="_blank"
          class="text-white py-3 px-2">
          <FontAwesomeIcon
            :icon="faCodepen"
            title="Link to my CodePen" />
        </a>
      </li>
      <li class="text-white">
        <a
          href="https://linkedin.com/in/prestonhaddock"
          target="_blank"
          class="text-white py-3 px-2">
          <FontAwesomeIcon
            :icon="faLinkedin"
            title="Link to my LinkedIn" />
        </a>
      </li>
    </ul>
  </nav>

  <div class="relative bg-bossanova h-[75vh]">
    <div class="absolute inset-y-0 right-0 w-1/2 h-1/2 flex items-center">
      <h1 class="text-7xl font-hobo text-white">
        Dev Logs
      </h1>
    </div>
    <canvas ref="canvas"></canvas>
  </div>

  <div class="bg-bossanova py-8">
    <div class="container mx-auto px-4">
      <h2 class="mb-8 font-hobo text-3xl text-white text-center leading-10">
        Hey, I'm Press: Software Engineer
      </h2>

      <p class="mb-2 text-white">
        While the header above <span class="italic">says</span> Software
        Engineer what it means is: I'm a passionate engineer who loves focusing
        on the user experience and page performance.
      </p>
      <p class="text-white">
        I love building websites and tools that anyone can use and enjoy. I've
        found myself helping out across various industries ranging from sports,
        distilling, and creative agencies to direct to consumer food delivery
        and outdoor landscape design.
      </p>
    </div>
  </div>
</template>

<script setup>
// @todo: Get TS to work w/nvim
import { ref, onMounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const canvas = ref(null);
onMounted(() => {
  init();
});

function generateStars(width, maxHeight) {
  const stars = [];

  for (let i = 0; i < 500; i++) {
    stars.push({
      r: Math.floor(Math.random() * 2 + 1),
      x: Math.floor(Math.random() * width + 1),
      y: Math.floor(Math.random() * maxHeight + 1),
      o: `${Math.floor(Math.random() * 100 + 1)}%`,
    });
  }

  return stars;
}

/**
 * @typedef {object} Tree
 * @property {number[][]} points
 * @property {number} x
 * @property {number} y
 */

/**
 * @param {Number} xOffset
 * @param {Number} yOffset
 *
 * @returns {Tree[]}
 */
function generateTrees(xOffset, yOffset) {
  const trees = [];
  const sizes = {
    small: [
      [75, 150],
      [150, 0],
    ],
    medium: {},
    large: {},
  };
  let lastX = xOffset;

  for (let i = 0; i < 100; i++) {
    const randX = Math.floor(Math.random() * 100) + lastX;
    const randY = Math.floor(
      Math.random() * (yOffset + 75 - (yOffset + 1)) + yOffset,
    );

    trees.push({
      points: sizes.small,
      x: randX,
      y: randY,
    });

    lastX = randX;
  }

  return trees;
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {Star[]} stars
 */
function drawStars(ctx, stars) {
  for (const star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255 255 255 / ${star.o})`;
    ctx.fill();
    ctx.closePath();
  }
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {Tree[]} trees
 */
function drawTrees(ctx, trees) {
  for (let tree of trees) {
    ctx.beginPath();
    ctx.moveTo(tree.x, tree.y);

    for (let point of tree.points) {
      ctx.lineTo(tree.x + point[0], tree.y + -1 * point[1]);
    }

    ctx.fillStyle = '#5fbb85';
    ctx.fill();
    ctx.closePath();
  }
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} x
 * @param {number} y
 */
function drawSun(ctx, x, y) {
  ctx.moveTo(x, y);
  ctx.beginPath();
  ctx.arc(x, y, 250, 0, Math.PI, Math.PI, true);
  ctx.fillStyle = '#BD584C';
  ctx.fill();
  ctx.closePath();
}

function resetCanvas(ctx, width, height) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = '#432951';
  ctx.fillRect(0, 0, width, height);
}

function init() {
  const ctx = canvas.value.getContext('2d');
  const width = innerWidth;
  const height = innerHeight * 0.75;
  const stars = generateStars(width, height);
  const trees = generateTrees(-150, height);

  canvas.value.width = width;
  canvas.value.height = height;

  // @todo: Implement an update and render fn
  resetCanvas(ctx, width, height);
  drawStars(ctx, stars);
  drawSun(ctx, width * 0.75, height);
  drawTrees(ctx, trees);
}
</script>
