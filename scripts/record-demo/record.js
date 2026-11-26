const { chromium } = require('playwright');
const fixtures = require('./fixtures.js');
const base = 'http://localhost:3100';
const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
const jwt = `${b64({ alg: 'none' })}.${b64({ sub: 'u1', tenant_id: 't1', tid: 't1', exp: 9999999999 })}.x`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, recordVideo: { dir: process.env.OUT, size: { width: 1440, height: 900 } } });
  await ctx.addCookies([{ name: 'grc_refresh_present', value: '1', url: base }]);
  await ctx.addInitScript(() => {
    localStorage.setItem('grc_user', JSON.stringify({ userId: 'u1', email: 'aysel@example.com', fullName: 'Aysel Mammadova', tenantId: 't1', roles: ['ADMIN'], permissions: [], modules: [] }));
    localStorage.setItem('tenant_id', 't1');
    localStorage.setItem('grc360.tour.seen.u1', '1');
    localStorage.setItem('grc-theme', 'light');
  });
  await ctx.route('**/api/v1/**', async (route) => {
    const p = new URL(route.request().url()).pathname.replace('/api/v1', '');
    if (p === '/auth/refresh') return route.fulfill({ json: { accessToken: jwt, expiresIn: 3600 } });
    if (p === '/auth/me/permissions') return route.fulfill({ json: { roles: ['ADMIN'], permissions: [], modules: [], orgUserId: 'o1' } });
    if (p === '/onboarding') return route.fulfill({ json: { required: false } });
    if (fixtures[p]) return route.fulfill({ json: fixtures[p] });
    if (/unread-count/.test(p)) return route.fulfill({ json: { count: 2 } });
    if (/count/.test(p)) return route.fulfill({ json: { count: 1 } });
    if (p === '/notifications') return route.fulfill({ json: { content: [], totalElements: 0 } });
    return route.fulfill({ json: { content: [], totalElements: 0, totalPages: 0, number: 0, size: 10, items: [] } });
  });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => console.log('PAGEERROR', e.message.slice(0, 160)));
  const smooth = async (to, ms = 3000) => {
    await page.evaluate(async ([to, ms]) => {
      const el = document.querySelector('main');
      const from = el.scrollTop; const t0 = performance.now();
      await new Promise((res) => { const f = (now) => { const k = Math.min(1, (now - t0) / ms); const e = k < .5 ? 2*k*k : 1 - Math.pow(-2*k+2, 2)/2; el.scrollTop = from + (to - from) * e; k < 1 ? requestAnimationFrame(f) : res(); }; requestAnimationFrame(f); });
    }, [to, ms]);
  };
  await page.goto(base + '/command-center', { waitUntil: 'networkidle' });
  await sleep(2500);
  await smooth(700, 3500); await sleep(1500);
  await smooth(1500, 3000); await sleep(1500);
  await smooth(0, 2000); await sleep(600);
  // Risk register, via the sidebar
  await page.click('aside a[href="/risk-management/asset-risks"]').catch(async () => {
    await page.click('aside >> text=Risk Management'); await sleep(500);
    await page.click('aside a[href="/risk-management/asset-risks"]');
  });
  await page.waitForLoadState('networkidle'); await sleep(2500);
  await page.mouse.move(700, 380, { steps: 20 }); await sleep(700);
  await page.mouse.move(700, 470, { steps: 20 }); await sleep(1500);
  // Approvals inbox
  await page.goto(base + '/approvals', { waitUntil: 'networkidle' });
  await sleep(3500);
  await smooth(400, 2500); await sleep(2000);
  await ctx.close();
  await browser.close();
})();
