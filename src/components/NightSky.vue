<template>
  <div
    ref="nightsky"
    class="night-sky relative h-lvh md:h-[75vh] w-lvw bg-gradient-to-b from-40% from-[#2a2c3b] to-chestnut-600">
    <div class="stars absolute w-full h-full"></div>
    <div class="trees absolute w-full h-full z-[11]"></div>
    <div class="wild-beard z-10">
      <img
        class="absolute -bottom-[20%] left-[18%] md:left-[32%] w-64 z-[11]"
        src="@/assets/wildbeard.svg">
      <img
        class="absolute bottom-0 -left-1/2 w-[200%] max-w-none z-10"
        src="@/assets/mountains.svg">
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

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

  for (let i = 0; i < 500; i++) {
    stars.push({
      r: Math.floor(Math.random() * 5 + 1),
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
      randY += 40;
      color = '#4e966c';
    } else if (size === 'large') {
      randY += 100;
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
 * @param {Star[]} stars
 * @param {number} height
 * @param {number} yOffset
 */
function drawStars(stars, height, yOffset) {
  const offsetDiff = percentDifference(height, height - yOffset);
  const steps = [3, 8, 12, 17, 22, 27, 32, 37, 42, 47];
  const step = steps.findIndex((n) => n >= offsetDiff);
  const container = document.querySelector('.stars');

  for (const star of stars) {
    const opacity =
      yOffset <= 0
        ? star.o.replace('%', '')
        : parseInt(star.o.replace('%', '')) + steps[step] * 3;
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
    s.style.opacity = `${opacity / 100}`;
    s.style.zIndex = 1;
    container.appendChild(s);
  }
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} xOffset
 * @param {number} yOffset
 */
function drawMountains(ctx, xOffset, yOffset) {
  const mountains = [
    {
      shadow: [
        [0, 100],
        [200, 275],
        [235, 200],
        [215, 140],
        [300, yOffset],
        [0, yOffset],
      ],
      notShadow: [
        [200, 275],
        [450, yOffset],
        [200, yOffset],
        [200, 275],
      ],
    },
    {
      notShadow: [
        [xOffset - 250, 75],
        [xOffset - 100, 175],
        [xOffset, yOffset],
        [xOffset - 250, yOffset],
      ],
      shadow: [
        [xOffset - 100, 175],
        [xOffset + 175, yOffset],
        [xOffset - 175, yOffset],
      ],
    },
    {
      shadow: [
        [xOffset - 325, 250],
        [xOffset - 100, yOffset],
        [xOffset - 500, yOffset],
        [xOffset - 390, 150],
        [xOffset - 350, 160],
      ],
      notShadow: [
        [xOffset - 600, yOffset],
        [xOffset - 450, yOffset],
        [xOffset - 390, 140],
        [xOffset - 335, 140],
        [xOffset - 325, 250],
      ],
    },
    {
      shadow: [
        [xOffset - 699, yOffset],
        [xOffset - 749, 200],
        [xOffset - 925, yOffset],
      ],
      notShadow: [
        [xOffset - 535, yOffset],
        [xOffset - 750, 200],
        [xOffset - 700, yOffset],
      ],
    },
    {
      shadow: [
        [xOffset - 900, yOffset],
        [xOffset - 984, 150],
        [xOffset - 934, 200],
        [xOffset - 924, 265],
        [xOffset - 1115, 175],
        [xOffset - 1250, 200],
        [250, yOffset],
      ],
      notShadow: [
        [xOffset - 699, yOffset],
        [xOffset - 925, 265],
        [xOffset - 935, 200],
        [xOffset - 985, 150],
        [xOffset - 900, yOffset],
      ],
    },
  ];
  const shadeColor = '#97869b';
  const lightColor = '#cbbcce';

  for (let { shadow, notShadow } of mountains) {
    // Light Side
    ctx.beginPath();
    for (let i = 0; i < notShadow.length; i++) {
      const yPos =
        notShadow[i][1] === yOffset ? yOffset : yOffset - notShadow[i][1];

      if (i === 0 || i === notShadow.length) {
        ctx.moveTo(notShadow[i][0], yPos);
      } else {
        ctx.lineTo(notShadow[i][0], yPos);
      }
    }
    ctx.fillStyle = lightColor;
    ctx.fill();
    ctx.closePath();

    // Shadow
    ctx.beginPath();
    for (let i = 0; i < shadow.length; i++) {
      const yPos = shadow[i][1] === yOffset ? yOffset : yOffset - shadow[i][1];

      if (i === 0 || i === shadow.length) {
        ctx.moveTo(shadow[i][0], yPos);
      } else {
        ctx.lineTo(shadow[i][0], yPos);
      }
    }
    ctx.fillStyle = shadeColor;
    ctx.fill();
    ctx.closePath();
  }
}

/**
 * @param {{ small: Tree[], medium: Tree[], large: Tree[] }} trees
 */
function drawTrees(trees) {
  const container = document.querySelector('.trees');

  for (let size of ['large', 'medium', 'small']) {
    for (let tree of trees[size]) {
      const t = document.createElement('span');
      let p1 = '35px';
      let p2 = '100px';

      if (size === 'medium') {
        p1 = '53px';
        p2 = '150px';
      } else if (size === 'large') {
        p1 = '75px';
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
  ctx.arc(position.x, position.y, 250, 0, Math.PI * 2, Math.PI, true);
  ctx.fillStyle = '#BD584C';
  ctx.fill();
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
    const isMobile = matchMedia('(max-width: 810px)').matches;
    const sunX = isMobile ? width / 2 : width * 0.75;
    sunPosition = getSunPosition(sunX, height - 100, scrollY);
  };

  const render = () => {
    resetCanvas(ctx, width, height, scrollY);
    drawStars(ctx, stars, height, scrollY);
    drawSun(ctx, sunPosition);
    drawMountains(ctx, width, height);
    drawTrees(trees);
  };

  update();
  render();

  window.addEventListener('scroll', () => {
    update();
    render();
  });
}

onMounted(() => {
  const stars = generateStars(innerWidth, innerHeight);
  const trees = {
    small: generateTrees(-150, 0, 'small'),
    medium: generateTrees(-150, 0, 'medium'),
    large: generateTrees(-150, 0, 'large'),
  };

  drawStars(stars, innerHeight, 0);
  drawTrees(trees);
});
</script>

<style lang="scss" scoped>
.night-sky {
  overflow: hidden;
  z-index: 1;

  &::after {
    position: absolute;
    bottom: -25%;
    left: -25%;
    display: block;
    width: 150vw;
    height: 150vw;
    // background-color: #8d3d3e;
    border-radius: 50%;
    content: ' ';
    z-index: 1;

    @apply bg-chestnut;

    @media (min-width: 810px) {
      bottom: -5%;
      left: 25%;
      width: 50vw;
      height: 50vw;
    }
  }
}
</style>
