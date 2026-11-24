# GRC360 landing page

GRC360-ın təqdimat səhifəsi (Azərbaycan dilində). Next.js 16, statik export.

## İşə salmaq

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # statik sayt out/ qovluğuna yazılır
```

`out/` qovluğu istənilən veb serverdə və ya CDN-də (nginx, Vercel, Netlify, S3) yerləşdirilə bilər.

## Mətnləri dəyişmək

Səhifənin bütün mətnləri bir yerdədir: `src/content/site.ts`.

- **Yayımdan əvvəl** `CONTACT` bölməsini doldurun: `email`, `phone`, `address`. Boş sahələr səhifədə görünmür; e-poçt boşdursa, demo formu sorğu göndərmir və bunu ziyarətçiyə deyir.
- Qayda: yalnız GRC360-ın bu gün etdiyini yazın. Planlaşdırılan işlər (Jira, e-poçt digest-ləri, hazır framework kitabxanası) funksiya kimi göstərilmir.

## Struktur

- `src/app/page.tsx` — bölmələr: hero, sektorlar, problem, modullar, təhlükəsizlik, kimlər üçün, qurulum, suallar, demo.
- `src/components/Screens.tsx` — məhsul ekranlarının maketləri. Bunlar ekran şəkli deyil: sahələr məhsulda var, adlar və rəqəmlər nümunədir.
- `src/components/ModuleTabs.tsx`, `src/components/DemoForm.tsx` — interaktiv hissələr.
- `public/brand/` — GRC360 loqosu.

## Yoxlama

```bash
npm run typecheck && npm run lint && npm run build
```
