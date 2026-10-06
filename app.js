// Settings: replace here, nothing else in the page needs editing.
const CONFIG = {
  telegram: 'Artfreelancer',
  // Form delivery: FormSubmit (formsubmit.co) forwards each request to this e-mail.
  // The very first submission sends an "Activate Form" letter to the address; until it is
  // confirmed, requests are not delivered. After activation FormSubmit offers a random alias —
  // put it here instead of the e-mail to keep the address out of the page source.
  formEndpoint: 'https://formsubmit.co/ajax/artemdesigner.work@gmail.com',
};

/* Telegram links -------------------------------------------------------- */
document.querySelectorAll('[data-tg]').forEach((a) => {
  a.href = `https://t.me/${CONFIG.telegram}`;
});

/* Fallback form --------------------------------------------------------- */
const form = document.getElementById('apply-form');
const done = document.getElementById('apply-done');
const status = document.getElementById('apply-status');
const fields = {
  url: form.elements.url,
  telegram: form.elements.telegram,
  consent: form.elements.consent,
};
const MARKETS = ['wildberries.ru', 'ozon.ru'];
let attempted = false;

function parseCardUrl(raw) {
  const value = raw.trim();
  if (!value) return { error: 'Вставьте ссылку на карточку товара.' };
  let url;
  try {
    url = new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`);
  } catch {
    return { error: 'Это не похоже на ссылку. Скопируйте адрес карточки из браузера или приложения.' };
  }
  const host = url.hostname.toLowerCase();
  const ok = MARKETS.some((m) => host === m || host.endsWith(`.${m}`));
  if (!ok) return { error: 'Нужна ссылка на карточку с wildberries.ru или ozon.ru.' };
  return { value: url.href };
}

function parseTelegram(raw) {
  let value = raw.trim().replace(/^https?:\/\/(t\.me|telegram\.me)\//i, '').replace(/^@/, '');
  if (!value) return { error: 'Укажите username, чтобы я мог прислать разбор.' };
  if (!/^[A-Za-z][A-Za-z0-9_]{4,31}$/.test(value)) {
    return { error: 'Username — от 5 до 32 латинских букв, цифр или «_», например @shop_owner.' };
  }
  return { value: `@${value}` };
}

function setError(input, message) {
  const box = document.getElementById(input.getAttribute('aria-describedby'));
  box.textContent = message || '';
  input.setAttribute('aria-invalid', message ? 'true' : 'false');
}

function validate() {
  const url = parseCardUrl(fields.url.value);
  const tg = parseTelegram(fields.telegram.value);
  const consentError = fields.consent.checked ? '' : 'Без согласия я не смогу связаться с вами.';
  setError(fields.url, url.error);
  setError(fields.telegram, tg.error);
  setError(fields.consent, consentError);
  const firstInvalid = [url.error && fields.url, tg.error && fields.telegram, consentError && fields.consent].find(Boolean);
  return { ok: !firstInvalid, firstInvalid, data: { url: url.value, telegram: tg.value } };
}

Object.values(fields).forEach((input) => {
  const evt = input.type === 'checkbox' ? 'change' : 'input';
  input.addEventListener(evt, () => { if (attempted) validate(); });
  input.addEventListener('blur', () => { if (attempted) validate(); });
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  attempted = true;
  status.textContent = '';
  const result = validate();
  if (!result.ok) { result.firstInvalid.focus(); return; }

  const concern = form.elements.concern.value || 'не указано';
  const showDone = (tg) => {
    document.getElementById('done-tg').textContent = tg;
    form.hidden = true;
    done.hidden = false;
    done.focus();
  };
  // bots fill the hidden field; pretend success and send nothing
  if (form.elements._honey.value) { showDone(result.data.telegram); return; }

  const button = form.querySelector('[type="submit"]');
  button.setAttribute('aria-busy', 'true');
  try {
    const res = await fetch(CONFIG.formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: `Заявка на разбор: ${result.data.telegram}`,
        _template: 'table',
        _captcha: 'false',
        'Карточка': result.data.url,
        'Telegram': result.data.telegram,
        'Что беспокоит': concern,
        'Согласие на обработку ПД': 'да',
      }),
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok || String(body.success) !== 'true') throw new Error(body.message || String(res.status));
    showDone(result.data.telegram);
  } catch {
    status.textContent = `Не получилось отправить заявку. Напишите напрямую в Telegram @${CONFIG.telegram} — разбор будет тот же.`;
  } finally {
    button.removeAttribute('aria-busy');
  }
});

document.getElementById('apply-again').addEventListener('click', () => {
  form.reset();
  attempted = false;
  Object.values(fields).forEach((f) => setError(f, ''));
  done.hidden = true;
  form.hidden = false;
  status.textContent = '';
  fields.url.focus();
});

/* Report stack: three slides fan off the deck as the section scrolls ---- */
const stage = document.getElementById('stack');
const slides = [...stage.querySelectorAll('.slide')];
const pills = [...stage.querySelectorAll('.pill')];
const desktop = window.matchMedia('(min-width: 861px)');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
let active = -1;
let ticking = false;

function progress() {
  const rect = stage.getBoundingClientRect();
  const run = rect.height - window.innerHeight;
  return run > 0 ? Math.min(1, Math.max(0, -rect.top / run)) : 0;
}

function setActive(i) {
  if (i === active) return;
  active = i;
  pills.forEach((p, k) => {
    p.classList.toggle('is-active', k === i);
    p.setAttribute('aria-selected', String(k === i));
  });
}

function render() {
  ticking = false;
  if (!desktop.matches) {
    slides.forEach((s) => { s.style.transform = ''; s.style.opacity = ''; s.style.filter = ''; s.style.zIndex = ''; s.style.clipPath = ''; });
    return;
  }
  // t runs 0 → 2; each step holds a moment before the next slide lifts.
  const raw = progress() * (slides.length - 1);
  // hold each slide, then lift it over the middle half of its step
  const base = Math.floor(raw);
  const f = Math.min(1, Math.max(0, (raw - base - 0.3) / 0.45));
  const eased = f < 0.5 ? 2 * f * f : 1 - Math.pow(-2 * f + 2, 2) / 2;
  const t = reduced.matches ? Math.round(raw) : Math.min(slides.length - 1, base + eased);
  setActive(Math.min(slides.length - 1, Math.round(t)));

  // the card in front sets the height; layers behind are clipped to it so a taller sheet never sticks out
  const front = slides[Math.min(slides.length - 1, Math.ceil(t - 0.001))];
  const frontH = front.offsetHeight;

  slides.forEach((s, i) => {
    const d = i - t;
    let y, scale, opacity, blur, rot;
    if (d >= 0) {
      // waiting in the deck: peeks above, smaller, dimmer
      y = -d * 30;
      scale = 1 - d * 0.06;
      opacity = 1;
      blur = d * 1.2;
      rot = 0;
    } else {
      // lifted off: rises and tilts away
      const k = Math.min(1, -d);
      y = k * -window.innerHeight * 1.05;
      scale = 1 - k * 0.04;
      opacity = 1 - Math.max(0, k - 0.55) * 2.2;
      blur = 0;
      rot = k * 10;
    }
    const visible = d > 0 ? (frontH + d * 30) / scale : Infinity;
    s.style.clipPath = visible < s.offsetHeight ? `inset(0 0 ${(s.offsetHeight - visible).toFixed(1)}px 0 round 18px)` : '';
    s.style.zIndex = String(10 - i);
    s.style.opacity = Math.max(0, opacity).toFixed(3);
    s.style.filter = d > 0 ? `brightness(${(1 - Math.min(d, 2) * 0.07).toFixed(3)})` : 'none';
    s.style.transform = `translate(-50%, 0) translateY(${y.toFixed(1)}px) rotateX(${rot.toFixed(2)}deg) scale(${scale.toFixed(4)})`;
  });
}

function requestRender() {
  if (!ticking) { ticking = true; requestAnimationFrame(render); }
}

pills.forEach((p) => {
  p.addEventListener('click', () => {
    const i = Number(p.dataset.step);
    if (!desktop.matches) return;
    const top = stage.getBoundingClientRect().top + window.scrollY;
    const run = stage.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (run * i) / (slides.length - 1) + 2, behavior: reduced.matches ? 'auto' : 'smooth' });
  });
});

window.addEventListener('scroll', requestRender, { passive: true });
window.addEventListener('resize', requestRender);
desktop.addEventListener('change', requestRender);
render();
