<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const canvas = ref(null);

/**
 * @typedef {object} Tree
 * @property {number[][]} points
 * @property {number} x
 * @property {number} y
 * @property {string} color
 */

/**
 * @typedef {object} Star
 * @property {number} x
 * @property {number} y
 * @property {string} o
 */

/**
 * @param {number} maxX
 * @param {number} maxY
 *
 * @returns {Star[]} stars
 */
function generateStars(maxX, maxY) {
  const stars = [];

  for (let i = 0; i < 500; i++) {
    stars.push({
      r: Math.floor(Math.random() * 2 + 1),
      x: Math.floor(Math.random() * maxX + 1),
      y: Math.floor(Math.random() * maxY + 1),
      o: `${Math.floor(Math.random() * 50 + 1)}%`,
    });
  }

  return stars;
}

/**
 * @param {Number} xOffset
 * @param {Number} yOffset
 * @param {'small' | 'medium' | 'large'} size
 *
 * @returns {Tree[]} trees
 */
function generateTrees(xOffset, yOffset, size) {
  const trees = [];
  const sizes = {
    small: [
      [50, 100],
      [100, 0],
    ],
    medium: [
      [100, 200],
      [200, 0],
    ],
    large: [
      [150, 300],
      [300, 0],
    ],
  };
  let lastX = xOffset;

  for (let i = 0; i < 100; i++) {
    const points = sizes[size];
    const randX = Math.floor(Math.random() * 100) + lastX;
    let randY = Math.floor(
      Math.random() * (yOffset + 75 - (yOffset + 1)) + yOffset,
    );
    let color = null;

    if (size === 'small') {
      color = '#5fbb85';
    } else if (size === 'medium') {
      randY += 20;
      color = '#4e966c';
    } else if (size === 'large') {
      randY += 60;
      color = '#45835f';
    }

    lastX = randX;
    trees.push({
      points: points,
      x: randX,
      y: randY,
      color,
    });
  }

  return trees;
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {Star[]} stars
 * @param {number} height
 * @param {number} yOffset
 */
function drawStars(ctx, stars, height, yOffset) {
  const offsetDiff = percentDifference(height, height - yOffset);
  const steps = [3, 8, 12, 17, 22, 27, 32, 37, 42, 47];
  const step = steps.findIndex((n) => n >= offsetDiff);

  for (const star of stars) {
    const opacity =
      yOffset <= 0
        ? star.o.replace('%', '')
        : parseInt(star.o.replace('%', '')) + steps[step] * 3;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255 255 255 / ${opacity}%)`;
    ctx.fill();
    ctx.closePath();
  }
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {{ small: Tree[], medium: Tree[], large: Tree[] }} trees
 */
function drawTrees(ctx, trees) {
  for (let size of ['large', 'medium', 'small']) {
    for (let tree of trees[size]) {
      ctx.beginPath();
      ctx.moveTo(tree.x, tree.y);

      for (let point of tree.points) {
        ctx.lineTo(tree.x + point[0], tree.y + -1 * point[1]);
      }

      ctx.fillStyle = tree.color;
      ctx.fill();
      ctx.closePath();
    }
  }
}

/**
 * @param {number} xPos
 * @param {number} yPos
 * @param {number} yOffset
 */
function getSunPosition(xPos, yPos, yOffset) {
  return {
    x: xPos,
    y: yPos + yOffset / 2,
  };
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {{ x: number, y: number }} position
 */
function drawSun(ctx, position) {
  ctx.moveTo(position.x, position.y);
  ctx.beginPath();
  ctx.arc(position.x, position.y, 250, 0, Math.PI, Math.PI, true);
  ctx.fillStyle = '#BD584C';
  ctx.fill();
  ctx.closePath();
}

/**
 * @param {number} a
 * @param {number } b
 *
 * @returns {number}
 */
function percentDifference(a, b) {
  return ((a - b) / (a + b) / 2) * 100;
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} width
 * @param {number} height
 * @param {number} yOffset
 */
function resetCanvas(ctx, width, height, yOffset) {
  const gradient = ctx.createLinearGradient(width / 2, 0, width / 2, height);
  const offsetDiff = percentDifference(height, height - yOffset);
  const steps = [3, 8, 12, 17, 22, 27, 32, 37, 42, 47];
  const step = steps.findIndex((n) => n >= offsetDiff);
  const colorSteps = [
    '#442a51',
    '#482b51',
    '#4b2c51',
    '#553050',
    '#5d3350',
    '#653650',
    '#6a384f',
    '#743c4f',
    '#7a3e4f',
    '#7f404f',
  ];
  let endColor = '#BD584c';

  gradient.addColorStop(0, '#432951');
  endColor = colorSteps.reverse()[step] ?? '#432951';
  gradient.addColorStop(1, endColor);

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

function init() {
  const ctx = canvas.value.getContext('2d');
  const width = innerWidth;
  const height = innerHeight * 0.75;
  const stars = generateStars(width, height);
  const trees = {
    small: generateTrees(-150, height, 'small'),
    medium: generateTrees(-150, height, 'medium'),
    large: generateTrees(-150, height, 'large'),
  };
  let sunPosition = getSunPosition(width * 0.75, height - 100, 0);

  canvas.value.width = width;
  canvas.value.height = height;

  const update = () => {
    const { scrollY } = window;
    sunPosition = getSunPosition(width * 0.75, height - 100, scrollY);
  };

  const render = () => {
    resetCanvas(ctx, width, height, scrollY);
    drawStars(ctx, stars, height, scrollY);
    drawSun(ctx, sunPosition);
    drawTrees(ctx, trees);
  };

  update();
  render();

  window.addEventListener('scroll', () => {
    update();
    render();
  });
}

onMounted(() => {
  init();
});
</script>
