<template>
  <nav
    class="fixed right-0 py-2 px-5 bg-bossanova-600/50 border-bossanova-50 border-l-[1px] border-b-[1px] rounded-bl-xl z-10">
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

  <div class="bg-bossanova py-8 h-[75vh]">
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
 * @property {string} color
 */

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
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} width
 * @param {number} height
 * @param {number} yOffset
 */
function resetCanvas(ctx, width, height, yOffset) {
  const gradient = ctx.createLinearGradient(width / 2, 0, width / 2, height);
  const offsetDiff =
    ((height - (height - yOffset)) / ((height + (height - yOffset)) / 2)) * 100;
  let endColor = '#BD584c';
  gradient.addColorStop(0, '#432951');

  // Works for now but we need more steps to make the transition smoother
  if (offsetDiff >= 15 && offsetDiff <= 25) {
    endColor = '#90474e';
  } else if (offsetDiff >= 25 && offsetDiff <= 35) {
    endColor = '#89444e';
  } else if (offsetDiff >= 35 && offsetDiff <= 55) {
    endColor = '#713b4f';
  } else if (offsetDiff >= 55) {
    endColor = '#432951';
  }

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
  let gradientOffset = 0;

  canvas.value.width = width;
  canvas.value.height = height;

  const update = () => {
    const { scrollY } = window;
    sunPosition = getSunPosition(width * 0.75, height - 100, scrollY);
    gradientOffset = scrollY;
  };

  const render = () => {
    resetCanvas(ctx, width, height, gradientOffset);
    drawStars(ctx, stars);
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
</script>
