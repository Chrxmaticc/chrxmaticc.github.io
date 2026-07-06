// ========== LIVE STATS ==========
async function fetchStats() {
  try {
    const res = await fetch('https://chrxmee-ai-discord-bot.onrender.com/stats');
    const data = await res.json();
    document.getElementById('stat-servers').textContent = data.servers || '36';
    document.getElementById('stat-uptime').textContent = formatUptime(data.uptime || 0);
    document.getElementById('stat-users').textContent = data.users || '0';
    document.getElementById('stat-commands').textContent = data.commands || '0';
  } catch (e) {
    console.log('Stats fetch failed, using defaults');
  }
}

function formatUptime(seconds) {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  return d > 0 ? `${d}d ${h}h` : `${h}h`;
}

// ========== GUILD TICKER ==========
function buildTicker(guilds, rowClass) {
  const row = document.querySelector(`.ticker-row.${rowClass}`);
  if (!row || !guilds.length) return;
  const icons = guilds.filter(g => g.icon).slice(0, 30);
  // Double for seamless loop
  const html = [...icons, ...icons].map(g =>
    `<img src="https://cdn.discordapp.com/icons/${g.id}/${g.icon}.png?size=64" alt="${g.name}" title="${g.name}">`
  ).join('');
  row.innerHTML = html;
}

async function fetchGuilds() {
  try {
    const res = await fetch('https://chrxmee-ai-discord-bot.onrender.com/guilds');
    const guilds = await res.json();
    const half = Math.ceil(guilds.length / 2);
    buildTicker(guilds.slice(0, half), 'left');
    buildTicker(guilds.slice(half), 'right');
  } catch (e) {
    console.log('Guild fetch failed');
  }
}

// ========== SCROLL TO FEATURES ==========
function setupScrollTransition() {
  const indicator = document.querySelector('.scroll-indicator');
  if (!indicator) return;

  indicator.addEventListener('click', () => {
    const transition = document.querySelector('.page-transition');
    transition.classList.add('active');
    setTimeout(() => {
      window.location.href = 'features.html';
    }, 400);
  });

  // Also trigger on scroll past 80% of hero
  window.addEventListener('scroll', () => {
    const scrollPercent = window.scrollY / window.innerHeight;
    if (scrollPercent > 0.8) {
      const transition = document.querySelector('.page-transition');
      transition.classList.add('active');
      setTimeout(() => {
        window.location.href = 'features.html';
      }, 400);
    }
  }, { once: true });
}

// ========== FAQ TOGGLE ==========
function setupFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  fetchStats();
  fetchGuilds();
  setupScrollTransition();
  setupFaq();
  setInterval(fetchStats, 60000); // Refresh stats every minute
});
