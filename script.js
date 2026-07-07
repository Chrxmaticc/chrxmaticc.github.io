// ========== TOPBAR ==========
function loadTopbar() {
  const topbar = document.createElement('header');
  topbar.className = 'topbar';
  topbar.innerHTML = `
    <span class="logo">Chrxmaticc AI</span>
    <nav>
      <a href="index.html">Home</a>
      <a href="features.html">Features</a>
      <a href="commands.html">Commands</a>
      <a href="faq.html">FAQ</a>
      <a href="embed-builder.html">Embed Builder</a>
    </nav>
  `;
  document.body.prepend(topbar);
}

// ========== FOOTER ==========
function loadFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    Chrxmaticc AI &copy; 2026 &mdash;
    <a href="https://github.com/Chrxmaticc">GitHub</a> &middot;
    <a href="https://twitch.tv/chrxmeelst">Twitch</a>
  `;
  document.body.appendChild(footer);
}

// ========== STATS ==========
async function fetchStats() {
  try {
    const res = await fetch('https://chrxmee-ai-discord-bot.onrender.com/stats');
    const data = await res.json();
    document.getElementById('stat-servers').textContent = data.servers || '36';
    document.getElementById('stat-uptime').textContent = formatUptime(data.uptime || 0);
    document.getElementById('stat-commands').textContent = data.commands || '0';
  } catch (e) {}
}

function formatUptime(seconds) {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  return d > 0 ? `${d}d ${h}h` : `${h}h`;
}

// ========== GUILDS ==========
function buildTicker(guilds, rowClass) {
  const row = document.querySelector(`.ticker-row.${rowClass}`);
  if (!row || !guilds.length) return;
  const icons = guilds.filter(g => g.icon).slice(0, 30);
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
  } catch (e) {}
}

// ========== SCROLL TRANSITION ==========
function setupScrollTransition() {
  const indicator = document.querySelector('.scroll-indicator');
  if (!indicator) return;
  indicator.addEventListener('click', () => {
    const transition = document.querySelector('.page-transition');
    transition.classList.add('active');
    setTimeout(() => { window.location.href = 'features.html'; }, 400);
  });
  window.addEventListener('scroll', () => {
    if (window.scrollY / window.innerHeight > 0.8) {
      const transition = document.querySelector('.page-transition');
      transition.classList.add('active');
      setTimeout(() => { window.location.href = 'features.html'; }, 400);
    }
  }, { once: true });
}

// ========== FAQ ==========
function setupFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => item.classList.toggle('open'));
  });
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  loadTopbar();
  loadFooter();
  fetchStats();
  fetchGuilds();
  setupScrollTransition();
  setupFaq();
  setInterval(fetchStats, 60000);
});
