# GRC360 landing page

GRC360-ın təqdimat səhifəsi: Azərbaycanca `/`, ingiliscə `/en/`. Next.js 16, statik export.

## İşə salmaq

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # statik sayt out/ qovluğuna yazılır
```

`out/` qovluğu istənilən veb serverdə və ya CDN-də (nginx, Vercel, Netlify, S3) yerləşdirilə bilər.

## Mətnləri dəyişmək

Mətnlər dilə görə iki fayldadır: `src/content/az.ts` və `src/content/en.ts` (forması `src/content/types.ts`-də). Bir dildə dəyişiklik edəndə digərini də yeniləyin.

- **Yayımdan əvvəl** `src/content/contact.ts`-i doldurun: `email`, `phone`, `address`. Boş sahələr səhifədə görünmür; e-poçt boşdursa, demo formu sorğu göndərmir və bunu ziyarətçiyə deyir.
- Qayda: yalnız GRC360-ın bu gün etdiyini yazın. Planlaşdırılan işlər (Jira, e-poçt digest-ləri, hazır framework kitabxanası) funksiya kimi göstərilmir.

## Struktur

- `src/app/(az)/` və `src/app/(en)/en/` — hər dilin öz layout-u (düzgün `<html lang>`) və səhifəsi.
- `src/components/Landing.tsx` — bölmələr: hero, sektorlar, problem, modullar, təhlükəsizlik, kimlər üçün, qurulum, suallar, demo.
- `src/components/Screens.tsx` — məhsul ekranlarının maketləri. Bunlar ekran şəkli deyil: sahələr məhsulda var, adlar və rəqəmlər nümunədir.
- `src/components/ModuleTabs.tsx`, `src/components/DemoForm.tsx` — interaktiv hissələr.
- `public/brand/` — GRC360 loqosu.

## Yoxlama

```bash
npm run typecheck && npm run lint && npm run build
```

## Vercel-də yayım

1. [vercel.com](https://vercel.com) → **Add New… → Project** → GitHub-dan bu repo-nu seçin (**Import**).
2. Framework: **Next.js** (avtomatik tanınır). Build Command `npm run build`, heç bir env dəyişəni lazım deyil.
3. **Deploy**. Hər `main` push-u avtomatik yenidən yayımlanır; digər branch-lar preview link alır.
4. Domen: Project → **Settings → Domains** → məsələn `grc360.strativu.com`. Vercel göstərdiyi DNS yazısını (adətən `CNAME` → `cname.vercel-dns.com`) domen idarəsinə əlavə edin.

Vercel istəmirsinizsə: `npm run build`, sonra `out/` qovluğunu nginx və ya istənilən statik hostinqə köçürün.
