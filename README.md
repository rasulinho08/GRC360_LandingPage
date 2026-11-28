# GRC360 landing page

GRC360-ın təqdimat səhifəsi: Azərbaycanca `/`, ingiliscə `/en/`. Next.js 16, statik export.

## İşə salmaq

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # statik sayt out/ qovluğuna yazılır
```

`out/` qovluğu istənilən veb serverdə və ya CDN-də (nginx, Vercel, Netlify, S3) yerləşdirilə bilər.

## Səhifələr

Hər səhifə iki dildədir: Azərbaycanca `/...`, ingiliscə `/en/...`.

| Ünvan | Səhifə |
| --- | --- |
| `/` | Ana səhifə |
| `/platform/` | Platformaya ümumi baxış |
| `/platform/<modul>/` | Modul səhifəsi; standartlar `compliance` səhifəsindədir (`#frameworks`). Modullar: `risk-management`, `approvals`, `compliance`, `controls`, `policies`, `third-parties`, `operations`, `command-center` |
| `/solutions/<sektor>/` | Sektor səhifəsi: `banks`, `government`, `telecom-energy`, `holdings` |
| `/security/` | Təhlükəsizlik və quraşdırma |
| `/company/` | Şirkət (Strativu) |
| `/guide/` | Bələdçi: GRC360-dan necə istifadə etməli (12 səhifə) |
| `/guide/<səhifə>/` | Bələdçi səhifəsi |
| `/contact/` | Demo sorğusu |

Səhifə quruluşu vanta.com-dakı nümunələrə (mega menyu, məhsul hero-su, modul kartları, alternativ bölmələr, FAQ, son CTA), dizayn isə Strativu saytının dizayn sisteminə əsaslanır (`src/app/globals.css`: tokenlər, Geist + JetBrains Mono; `src/components/primitives.tsx`, `Reveal.tsx`, `SystemDiagram.tsx`, `ClosingCTA.tsx`, `Footer.tsx`). Footer Strativu saytının footer-i ilə eyni quruluşdadır.

## Mətnləri dəyişmək

- Bütün mətnlər: `src/site/az.ts` və `src/site/en.ts` (forması `src/site/types.ts`). Bir dildə dəyişəndə digərini də yeniləyin.
- Bələdçi: `src/site/docs-az.ts` və `src/site/docs-en.ts`. Hər səhifə bölmələrdən ibarətdir (`body`, `list`, `steps`, `note`); qruplar və sıra `groups`-dadır.
- Tema: açıq və tünd. Üst paneldəki düymə ilə dəyişir, seçim brauzerdə saxlanılır; ilk girişdə sistemin teması götürülür.
- Şirkət məlumatları (e-poçt, ünvan, LinkedIn, hüquqi linklər, Formspree): `src/site/company.ts`. Strativu saytındakı `site.ts`-dən götürülüb.
- Demo forması Strativu saytının Formspree formasına göndərir; alınmasa ziyarətçinin e-poçt proqramını açır.
- Qayda: yalnız GRC360-ın bu gün etdiyini yazın; uydurma müştəri, rəqəm və sertifikat yoxdur.

## Məhsul görüntüləri və demo video

- `src/components/Fragments.tsx` — GRC360 ekranlarının çəkilmiş fraqmentləri. Sahələr məhsulda var, adlar və rəqəmlər nümunədir.
- `public/media/grc360-film.mp4` — GRC360 məhsul filmi (40 san, 1080p, səsli; Strativu komandasından). Səssiz başlayır, idarəetmə düymələri ilə səsi açmaq olar.
- `scripts/record-demo/` — tətbiqin nümunə məlumatla ekran yazısını yenidən çəkmək üçün skript (hazırda saytda istifadə olunmur).

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
