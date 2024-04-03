<template>
  <div class="relative bg-bossanova h-screen">
    <div class="absolute inset-y-0 right-0 w-1/2 h-1/2 flex items-center">
      <h1 class="text-7xl font-hobo text-white">
        Dev Logs
      </h1>
    </div>
    <canvas
      ref="canvas"
      class="w-screen h-screen z-0"></canvas>
  </div>
</template>

<script setup>
// @todo: Get TS to work w/nvim
import { ref, onMounted } from 'vue';

const canvas = ref(null);
onMounted(() => {
  console.log('mounted');
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
  const width = document.body.offsetWidth;
  const height = document.body.offsetHeight;
  const stars = generateStars(width, height * 0.75);
  const trees = generateTrees(-150, height * 0.75);

  canvas.value.width = width;
  canvas.value.height = height;

  // @todo: Implement an update and render fn
  resetCanvas(ctx, width, height);
  drawStars(ctx, stars);
  drawSun(ctx, width * 0.75, height * 0.75);
  drawTrees(ctx, trees);
}
</script>
