/* ================================================================
   MLBB JOKI PRO — main.js
   ================================================================ */

const WA_NUMBER = '6289603601883';

// ----------------------------------------------------------------
// DATA: JOKI GENDONG
// ----------------------------------------------------------------
const GENDONG_DATA = [
  {
    rank: 'Grand Master',
    sub: 'Tier I–V',
    rClass: 'gm',
    icon: '🏅',
    img: 'img/rank-grandmaster.png',
    price: 'Rp 3.000',
    per: '/ bintang',
    features: ['Dikerjakan owner sendiri', 'Main bareng via party', 'Fast respon WA'],
    featured: false,
  },
  {
    rank: 'Epic',
    sub: 'Tier I–V',
    rClass: 'epic',
    icon: '🔷',
    img: 'img/rank-epic.png',
    price: 'Rp 4.000',
    per: '/ bintang',
    features: ['Dikerjakan owner sendiri', 'Main bareng via party', 'Fast respon WA'],
    featured: false,
  },
  {
    rank: 'Legend',
    sub: 'Tier I–V',
    rClass: 'legend',
    icon: '🌟',
    img: 'img/rank-legend.png',
    price: 'Rp 5.000',
    per: '/ bintang',
    features: ['Dikerjakan owner sendiri', 'Main bareng via party', 'Fast respon WA'],
    featured: true,
  },
  {
    rank: 'Mythic',
    sub: 'Romawi I–V',
    rClass: 'mythic',
    icon: '🔥',
    img: 'img/rank-mythic.png',
    price: 'Rp 6.000',
    per: '/ bintang',
    features: ['Dikerjakan owner sendiri', 'Main bareng via party', 'Fast respon WA'],
    featured: false,
  },
  {
    rank: 'Mythic Honor',
    sub: 'Honor',
    rClass: 'honor',
    icon: '👑',
    img: 'img/rank-honor.png',
    price: 'Rp 7.000',
    per: '/ bintang',
    features: ['Dikerjakan owner sendiri', 'Main bareng via party', 'Fast respon WA'],
    featured: false,
  },
  {
    rank: 'Mythic Glory',
    sub: 'Glory',
    rClass: 'glory',
    icon: '✨',
    img: 'img/rank-glory.png',
    price: 'Rp 8.000',
    per: '/ bintang',
    features: ['Dikerjakan owner sendiri', 'Main bareng via party', 'Fast respon WA'],
    featured: false,
  },
  {
    rank: 'Mythic Immortal',
    sub: 'Immortal',
    rClass: 'immortal',
    icon: '🏆',
    img: 'img/rank-immortal.png',
    price: 'Rp 9.000',
    per: '/ bintang',
    features: ['Dikerjakan owner sendiri', 'Main bareng via party', 'Fast respon WA'],
    featured: false,
  },
];

// ----------------------------------------------------------------
// DATA: JOKI AKUN
// ----------------------------------------------------------------
const AKUN_DATA = [
  {
    rank: 'Grand Master',
    sub: 'Target GM',
    rClass: 'gm',
    icon: '🏅',
    img: 'img/rank-grandmaster.png',
    price: 'Rp 2.000',
    per: '/ bintang',
    features: ['Dikerjakan owner sendiri', 'Update progress via WA', 'Garansi naik rank'],
    featured: false,
  },
  {
    rank: 'Epic',
    sub: 'Target Epic',
    rClass: 'epic',
    icon: '🔷',
    img: 'img/rank-epic.png',
    price: 'Rp 3.000',
    per: '/ bintang',
    features: ['Dikerjakan owner sendiri', 'Update progress via WA', 'Garansi naik rank'],
    featured: false,
  },
  {
    rank: 'Legend',
    sub: 'Target Legend',
    rClass: 'legend',
    icon: '🌟',
    img: 'img/rank-legend.png',
    price: 'Rp 4.000',
    per: '/ bintang',
    features: ['Dikerjakan owner sendiri', 'Update progress via WA', 'Garansi naik rank'],
    featured: true,
  },
  {
    rank: 'Mythic',
    sub: 'Romawi I–V',
    rClass: 'mythic',
    icon: '🔥',
    img: 'img/rank-mythic.png',
    price: 'Rp 5.000',
    per: '/ bintang',
    features: ['Dikerjakan owner sendiri', 'Update progress via WA', 'Garansi naik rank'],
    featured: false,
  },
  {
    rank: 'Mythic Honor',
    sub: 'Target Honor',
    rClass: 'honor',
    icon: '👑',
    img: 'img/rank-honor.png',
    price: 'Rp 7.000',
    per: '/ bintang',
    features: ['Dikerjakan owner sendiri', 'Update progress via WA', 'Garansi naik rank'],
    featured: false,
  },
  {
    rank: 'Mythic Glory',
    sub: 'Target Glory',
    rClass: 'glory',
    icon: '✨',
    img: 'img/rank-glory.png',
    price: 'Rp 8.000',
    per: '/ bintang',
    features: ['Dikerjakan owner sendiri', 'Update progress via WA', 'Garansi naik rank'],
    featured: false,
  },
  {
    rank: 'Mythic Immortal',
    sub: 'Target Immortal',
    rClass: 'immortal',
    icon: '🏆',
    img: 'img/rank-immortal.png',
    price: 'Rp 10.000',
    per: '/ bintang',
    features: ['Dikerjakan owner sendiri', 'Update progress via WA', 'Garansi naik rank'],
    featured: false,
  },
];

// ----------------------------------------------------------------
// PARTICLE SYSTEM
// ----------------------------------------------------------------
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createParticles(n) {
    return Array.from({ length: n }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.18,
      vy: -Math.random() * 0.25 - 0.05,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() < 0.6 ? 'rgba(201,168,76,' : 'rgba(255,215,0,',
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ')';
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.0004;
      if (p.y < -10 || p.alpha <= 0) {
        p.y = H + 10;
        p.x = Math.random() * W;
        p.alpha = Math.random() * 0.5 + 0.1;
      }
    }
    requestAnimationFrame(draw);
  }

  resize();
  particles = createParticles(90);
  window.addEventListener('resize', resize);
  draw();
}

// ----------------------------------------------------------------
// CARD RENDERER
// ----------------------------------------------------------------
function buildPriceCard(d, i, jenis) {
  const delay = (i * 0.06).toFixed(2);
  const pesanText = encodeURIComponent(
    `Halo kak, saya mau order *${jenis}*\nTarget rank: *${d.rank}*\nID MLBB: `
  );
  const waLink = `https://wa.me/${WA_NUMBER}?text=${pesanText}`;

  const imgHTML = `
    <div class="rank-img-strip">
      <img src="${d.img}" alt="${d.rank}"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="rank-img-placeholder ri-${d.rClass}" style="display:none">
        <span class="rip-icon rc-${d.rClass}">${d.icon}</span>
        <span class="rip-name rc-${d.rClass}">${d.rank}</span>
      </div>
      <div class="rank-img-fade"></div>
      <div class="rank-img-fade-top"></div>
      ${d.featured ? '<div class="featured-crown">⭐ Populer</div>' : ''}
    </div>`;

  const featuresHTML = d.features
    .map(f => `<div class="pf-item"><div class="pf-bullet rbg-${d.rClass}"></div>${f}</div>`)
    .join('');

  return `
  <div class="price-card ${d.featured ? 'is-featured' : ''}" style="animation-delay:${delay}s">
    ${imgHTML}
    <div class="price-body">
      <div class="rank-header">
        <div class="rank-badge-dot rbg-${d.rClass}"></div>
        <div class="rank-title rc-${d.rClass}">${d.rank}</div>
        <div class="rank-subtitle">${d.sub}</div>
      </div>
      <div class="price-divider"></div>
      <div class="price-label">Harga</div>
      <div class="price-amount rc-${d.rClass}">
        ${d.price}
        <span class="price-per">${d.per}</span>
      </div>
      <div class="price-features">${featuresHTML}</div>
      <a href="${waLink}" target="_blank" class="btn-order">
        <span>💬 Pesan Sekarang</span>
      </a>
    </div>
  </div>`;
}

function renderPriceGrid(data, containerId, jenis) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = data.map((d, i) => buildPriceCard(d, i, jenis)).join('');
}

// ----------------------------------------------------------------
// SCROLL REVEAL
// ----------------------------------------------------------------
function initScrollReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animationPlayState = 'running';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.price-card, .info-pill, .choose-card').forEach(el => {
    el.style.animationPlayState = 'paused';
    io.observe(el);
  });
}

// ----------------------------------------------------------------
// INIT
// ----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  renderPriceGrid(GENDONG_DATA, 'grid-gendong', 'Joki Gendong');
  renderPriceGrid(AKUN_DATA,    'grid-akun',    'Joki Akun');
  initScrollReveal();
});
