<template>
  <div
    ref="nightsky"
    class="night-sky relative h-[calc(100vh-50px)] md:h-[75vh] w-lvw bg-gradient-to-b from-[#2a2c3b] to-chestnut-600">
    <div ref="sun" class="sun"></div>
    <div class="stars absolute w-full h-full"></div>
    <div class="trees absolute w-full h-full z-[11]"></div>
    <div class="wild-beard z-10">
      <NuxtImg
        class="absolute -bottom-[20%] left-[22%] min-[390px]:-bottom-[15%] md:left-[32%] w-44 min-[390px]:w-48 md:w-64 lg:w-56 min-[1440px]:w-48 2xl:-bottom-[15%] z-[11]"
        preload
        src="~/assets/wildbeard.svg" />
      <NuxtImg
        class="absolute bottom-0 -left-1/2 w-[200%] max-w-none lg:w-[125%] lg:-left-[15%] 2xl:w-[90%] 2xl:left-[unset] 2xl:right-0 z-10"
        preload
        src="~/assets/mountains.svg" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const sun = ref(null);
const nightsky = ref(null);
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
 * @property {number} r
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

  for (let i = 0; i < 200; i++) {
    stars.push({
      r: Math.floor(Math.random() * 5 + 1),
      x: Math.floor(Math.random() * maxX + 1),
      y: Math.floor(Math.random() * maxY + 1),
      o: Math.floor(Math.random() * 50 + 1),
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
function generateTrees (xOffset, yOffset, size) {
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
      randY += 40;
      color = '#4e966c';
    } else if (size === 'large') {
      randY += 100;
      color = '#45835f';
    }

    lastX = randX;
    trees.push({
      points,
      x: randX,
      y: randY,
      color,
    });
  }

  return trees;
}

/**
 * @param {Star[]} stars
 */
function drawStars (stars) {
  const container = document.querySelector('.stars');

  for (const star of stars) {
    const s = document.createElement('span');

    s.classList.add('star');
    s.style.position = 'absolute';
    s.style.top = `${star.y}px`;
    s.style.left = `${star.x}px`;
    s.style.display = 'block';
    s.style.width = `${star.r}px`;
    s.style.height = `${star.r}px`;
    s.style.backgroundColor = 'white';
    s.style.borderRadius = '50%';
    s.style.opacity = star.o / 100;
    s.style.zIndex = 1;
    s.dataset.opacity = star.o / 100;
    container.appendChild(s);
  }
}

/**
 * @param {{ small: Tree[], medium: Tree[], large: Tree[] }} trees
 */
function drawTrees (trees) {
  const container = document.querySelector('.trees');

  for (const size of ['large', 'medium', 'small']) {
    for (const tree of trees[size]) {
      const t = document.createElement('span');
      let p1 = '45px';
      let p2 = '100px';

      if (size === 'medium') {
        p1 = '65px';
        p2 = '150px';
      } else if (size === 'large') {
        p1 = '85px';
        p2 = '200px';
      }

      t.classList.add('tree', `tree--${size}`);
      t.style.position = 'absolute';
      t.style.left = `${tree.x}px`;
      t.style.bottom = 0;
      t.style.width = 0;
      t.style.height = 0;

      t.style.borderLeft = `${p1} solid transparent`;
      t.style.borderRight = `${p1} solid transparent`;
      t.style.borderBottom = `${p2} solid ${tree.color}`;

      container.appendChild(t);
    }
  }
}

/**
 * @param {number} a
 * @param {number } b
 *
 * @returns {number}
 */
function percentDifference (a, b) {
  return ((a - b) / (a + b) / 2) * 100;
}

onMounted(() => {
  const stars = generateStars(innerWidth, innerHeight);
  const trees = {
    small: generateTrees(-150, 0, 'small'),
    medium: generateTrees(-150, 0, 'medium'),
    large: generateTrees(-150, 0, 'large'),
  };

  /**
   * @param {number} height
   * @param {number} starting
   * @param {number} scrollY
   */
  const updateSunPosition = (height, starting, scrollY) => {
    const startingPerc = percentDifference(height, height - starting);
    let val = (startingPerc + scrollY / 10) * -1;

    if (val > 0 || val > startingPerc) {
      val = startingPerc;
    }

    sun.value.style.bottom = `${val}%`;
  };

  /**
   * @param {number} height
   * @param {number} scrollY
   */
  const updateStars = (height, scrollY) => {
    const stars = document.querySelectorAll('.stars .star');
    const offsetDiff = percentDifference(height, height - scrollY) * 3;

    stars.forEach((star) => {
      const ogOpacity = parseFloat(star.dataset.opacity);
      const opacity = ogOpacity + offsetDiff / 100;
      star.style.opacity = opacity;
    });
  };

  /**
   * @param {number} height
   * @param {number} scrollY
   */
  const update = (height, scrollY) => {
    updateStars(height, scrollY);
    updateSunPosition(height, startingSunPos, scrollY);
    const offsetDiff = percentDifference(height, height - scrollY) * 2;
    const steps = [3, 8, 12, 17, 22, 27, 32, 37, 42, 47];
    const step = steps.findIndex(n => n >= offsetDiff);
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
    endColor = colorSteps.reverse()[step] ?? '#432951';
    nightsky.value.style.setProperty('--tw-gradient-to', endColor);
  };
  const startingSunPos = parseInt(
    getComputedStyle(sun.value).bottom.replace('px', ''),
  );

  drawStars(stars, innerHeight, 0);
  drawTrees(trees);
  updateSunPosition(innerHeight, startingSunPos, 0);

  window.addEventListener('scroll', () => {
    update(innerHeight, scrollY);
  });
});
</script>

<style lang="scss" scoped>
.night-sky {
  overflow: hidden;
  z-index: 1;

  .sun {
    position: absolute;
    bottom: -20%;
    left: 5%;
    display: block;
    width: 350px;
    height: 350px;
    // background-color: #8d3d3e;
    border-radius: 50%;
    content: ' ';
    z-index: 10;

    @apply bg-chestnut;

    @media (min-width: 400px) {
      bottom: -10%;
      left: 3%;
      width: 400px;
      height: 400px;
    }

    @media (min-width: 810px) {
      bottom: -5%;
      left: 25%;
      width: 50vw;
      height: 50vw;
    }

    @media (min-width: 1024px) {
      right: 15%;
      bottom: -15%;
      left: initial;
      width: 500px;
      height: 500px;
    }
  }
}
</style>
