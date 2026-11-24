import type { Content } from "./types";

/**
 * Azerbaijani page. Describe only what GRC360 does today: planned work (Jira, scheduled e-mail
 * digests, a ready framework library) is not listed as a feature.
 */
export const az: Content = {
  locale: "az",
  meta: {
    title: "GRC360 · Risk, uyğunluq və audit platforması",
    description:
      "GRC360 risk reyestrlərini, nəzarətləri, siyasətləri, auditləri və tənzimləyici öhdəlikləri bir platformada birləşdirir. Azərbaycan dilində, öz serverlərinizdə.",
    ogTitle: "Risk, uyğunluq və audit bir platformada. Öz serverlərinizdə.",
  },
  nav: [
    { href: "#modules", label: "Modullar" },
    { href: "#security", label: "Təhlükəsizlik" },
    { href: "#who", label: "Kimlər üçün" },
    { href: "#setup", label: "Qurulum" },
    { href: "#faq", label: "Suallar" },
  ],
  headerCta: "Demo",
  mainNavLabel: "Əsas menyu",
  hero: {
    eyebrow: "Risk · Uyğunluq · Audit",
    titleA: "Risk, uyğunluq və audit bir platformada.",
    titleB: "Öz serverlərinizdə.",
    lead:
      "GRC360 risk reyestrlərini, nəzarətləri, siyasətləri, auditləri və tənzimləyici öhdəlikləri bir yerə yığır. Azərbaycan dilində işləyir və məlumatlarınız sizin infrastrukturunuzdan çıxmır.",
    primary: "Demo sifariş edin",
    secondary: "Modullara baxın",
    badges: ["Öz serverinizdə (on-prem)", "Azərbaycan və ingilis dilində", "MFA və SSO", "Bir neçə təşkilat bir sistemdə"],
    badgesLabel: "Əsas xüsusiyyətlər",
  },
  sectorsLabel: "Kimlər üçün",
  sectors: ["Banklar", "Sığorta", "Dövlət qurumları", "Telekom", "Enerji", "Holdinqlər"],
  problem: {
    eyebrow: "Problem",
    title: "Excel cədvəlləri və e-poçt zəncirləri auditdən keçmir",
    lead:
      "Risklər, istisnalar və audit tapıntıları müxtəlif fayllarda olanda heç kim tam mənzərəni görmür. GRC360 onları bir sistemə, bir tarixçəyə yığır.",
    rows: [
      {
        before: "Risklər Excel faylında, hər şöbədə öz versiyası",
        after: "Bir risk reyestri, hər riskin sahibi, ehtimal × təsir balı və təşkilatın öz risk matrisi",
      },
      {
        before: "İstisnalar e-poçt zənciri ilə təsdiqlənir, sonra kim nə dediyi tapılmır",
        after: "Addım-addım təsdiq: kim, nə vaxt, hansı şərhlə; vaxt keçəndə xatırlatma",
      },
      {
        before: "Audit tapıntıları cədvəldə qalır, bağlanıb-bağlanmadığı bilinmir",
        after: "Tapıntı, məsələ və tapşırıq bir-birinə bağlıdır; statusu Command Center-də görünür",
      },
      {
        before: "Xarici SaaS alətləri məlumatı ölkədən çıxarır",
        after: "GRC360 sizin serverinizdə və ya ölkədaxili məlumat mərkəzində quraşdırılır",
      },
    ],
  },
  platform: {
    eyebrow: "Platforma",
    title: "Bir sistem: risk, nəzarət, siyasət, uyğunluq və audit",
    lead: "Modullar bir-birinə bağlıdır: risk nəzarətə, nəzarət standarta, audit tapıntısı tapşırığa. Hər şey bir tarixçədə qalır.",
    tabsLabel: "Modullar",
  },
  modules: [
    {
      id: "risk",
      name: "Risklər",
      title: "Aktiv, biznes və üçüncü tərəf riskləri bir reyestrdə",
      points: [
        "Ehtimal və təsir şkalasını, risk matrisini və səviyyə adlarını təşkilat özü qurur",
        "Hər riskin sahibi, nəzarətləri, müalicə planı və növbəti baxış tarixi",
        "İstilik xəritəsi və risk iştahası (appetite) ilə müqayisə",
      ],
      screen: "risk",
    },
    {
      id: "approval",
      name: "Təsdiqlər",
      title: "Risk istisnaları addım-addım təsdiqlənir",
      points: [
        "Səviyyəyə görə ayrı addımlar: aşağı risk bir nəfər, yüksək risk komitə",
        "Addımı qrup və ya konkret şəxs təsdiq edir; eyni adam iki addımı təsdiq edə bilməz",
        "Hər addımın SLA-sı var; vaxtın yarısı, dörddə biri qalanda xatırlatma gedir",
      ],
      screen: "approval",
    },
    {
      id: "compliance",
      name: "Uyğunluq",
      title: "Standartlar, qanunlar və öhdəliklər",
      points: [
        "ISO 27001, PCI DSS və ya daxili standartı paket kimi yükləyin, tələb-tələb qiymətləndirin",
        "Azərbaycan qanunlarını və tənzimləyici tələbləri öhdəlik kimi izləyin",
        "Uyğunluq analizi, istisnalar və xarici audit tapıntıları bir yerdə",
      ],
      screen: "compliance",
    },
    {
      id: "controls",
      name: "Nəzarətlər",
      title: "Daxili nəzarətlər və auditləri",
      points: [
        "Hər nəzarətin sahibi, test cədvəli və nəticəsi",
        "Açıq məsələ, gecikən audit və ya texniki baxış nəzarətin statusunda dərhal görünür",
        "Biznesin davamlılığı planları və bərpa tapşırıqları",
      ],
      screen: "controls",
    },
    {
      id: "policy",
      name: "Siyasətlər",
      title: "Siyasətlər, versiyalar və tanışlıq təsdiqi",
      points: [
        "Hər dərc olunan mətn versiya kimi saxlanılır, versiyalar arası fərq görünür",
        "İşçilərdən siyasətlə tanış olduqlarını təsdiq etmələri istənir",
        "Baxış tarixləri və siyasət istisnaları",
      ],
      screen: "policy",
    },
    {
      id: "vendor",
      name: "Üçüncü tərəflər",
      title: "Təchizatçılar, müqavilələr və məlumat axınları",
      points: [
        "Təchizatçı reyestri, xidmət müqavilələri və onların riskləri",
        "Aktivlər və aktivlər arası məlumat axınları",
        "Təchizatçı riski ümumi risk reyestrinə bağlıdır",
      ],
      screen: "vendor",
    },
    {
      id: "command",
      name: "Command Center",
      title: "Rəhbərlik üçün bir ekran",
      points: [
        "Açıq risklər, gecikən tapşırıqlar, uyğunluq faizi və gözləyən təsdiqlər",
        "Layihələr, tapşırıqlar, xərclər və təhlükəsizlik insidentləri",
        "Hər modulun öz paneli, ümumi mənzərə isə bir səhifədə",
      ],
      screen: "command",
    },
  ],
  security: {
    eyebrow: "Suverenlik və təhlükəsizlik",
    title: "Məlumatlarınız sizin serverinizdə qalır",
    lead: "GRC360 xarici buluda bağlı deyil. Bankın, qurumun və ya holdinqin öz infrastrukturunda işləyir, daxili təhlükəsizlik tələblərinə uyğun qurulur.",
    items: [
      { title: "Öz serverinizdə", text: "Linux serverdə Docker ilə quraşdırılır. Məlumat bazası (PostgreSQL) və fayllar sizin infrastrukturunuzda qalır." },
      { title: "Təşkilatlar ayrı", text: "Hər təşkilatın məlumatı verilənlər bazası səviyyəsində (row-level security) ayrılır. Bir sistemdə bir neçə törəmə şirkət işləyə bilər." },
      { title: "MFA və SSO", text: "İki addımlı giriş (TOTP, ehtiyat kodlar), adminlər üçün məcburi MFA. OIDC və SAML ilə Microsoft Entra ID, ADFS və ya Google ilə giriş. LDAP qoşulması." },
      { title: "Rol əsaslı giriş", text: "Hər modul, səhifə və əməliyyat üçün ayrıca hüquq. Kim nəyi görür və dəyişir, admin müəyyən edir." },
      { title: "Hər hərəkət qeyddə", text: "System Log kimin, nə vaxt, haradan və nəyi dəyişdiyini yazır. Təsdiq tarixçəsi dəyişdirilə bilməyən zəncir kimi saxlanılır." },
      { title: "Fayllar yoxlanılır", text: "Yüklənən fayllar tipə görə yoxlanılır və ClamAV antivirusundan keçirilə bilər." },
    ],
  },
  audience: {
    eyebrow: "Kimlər üçün",
    title: "Tənzimlənən sektorlar üçün hazırlanıb",
    lead: "Yerli qanunvericilik və beynəlxalq standartlar eyni sistemdə: öhdəlikləri, nəzarətləri və sübutları bir yerdə idarə edin.",
    items: [
      { title: "Banklar və maliyyə", text: "Tənzimləyicinin tələblərini öhdəlik kimi izləyin, risk istisnalarını komitə qaydası ilə təsdiqləyin, auditora tarixçəni göstərin." },
      { title: "Dövlət qurumları", text: "Məlumat qurumun öz serverində qalır. İnterfeys Azərbaycan dilindədir." },
      { title: "Telekom və enerji", text: "Kritik aktivləri, təchizatçıları və biznesin davamlılığı planlarını bir sistemdə idarə edin." },
      { title: "Holdinqlər", text: "Hər törəmə şirkət ayrı təşkilat kimi işləyir; məlumatlar bir-birinə qarışmır, idarəetmə bir yerdən aparılır." },
    ],
  },
  steps: {
    eyebrow: "Qurulum",
    title: "Demodan işə salınmağa üç addım",
    items: [
      { title: "Demo", text: "Sizin proseslərinizə uyğun ssenari ilə platformanı göstəririk və tələbləri birlikdə müəyyən edirik." },
      { title: "Quraşdırma və köçürmə", text: "Serverinizdə quraşdırırıq. Mövcud reyestrləri Excel və CSV şablonları ilə köçürürük." },
      { title: "Təlim və dəstək", text: "Komandanıza təlim keçirik, sonra Azərbaycan dilində dəstək veririk." },
    ],
  },
  faq: {
    eyebrow: "Suallar",
    title: "Tez-tez verilən suallar",
    items: [
      { q: "Quraşdırmaq üçün nə lazımdır?", a: "Linux server, Docker və PostgreSQL. Fayllar üçün S3-uyğun saxlama (məsələn, MinIO) və istəyə görə ClamAV. Bulud versiyası da mümkündür." },
      { q: "Hansı dillərdə işləyir?", a: "İnterfeys Azərbaycan və ingilis dilindədir; istifadəçi dili özü seçir. Server xəta mesajları da seçilmiş dildə gəlir." },
      { q: "Excel-dəki mövcud məlumatlarımızı köçürə bilərikmi?", a: "Bəli. Hər reyestr üçün hazır şablon var: yükləyin, doldurun, sistem sətir-sətir yoxlayır və xətaları göstərir. Eyni formada ixrac da edilir." },
      { q: "Hansı standartları dəstəkləyir?", a: "Uyğunluq paketi istənilən standart və ya qanun üçün qurulur: ISO 27001, PCI DSS, NIST CSF, daxili siyasətlər, yerli qanunvericilik. Paketi təşkilat özü yükləyir və tələb-tələb qiymətləndirir." },
      { q: "Qiymət necə müəyyən edilir?", a: "Qiymət quraşdırma növündən və təşkilatın ölçüsündən asılıdır. Demo zamanı sizin üçün təklif hazırlayırıq." },
      { q: "Başqa sistemlərlə qoşulurmu?", a: "LDAP, SSO (OIDC və SAML), REST API və CSV/Excel idxal-ixrac hazırdır. Digər qoşulmaları ehtiyacınıza görə birlikdə planlaşdırırıq." },
    ],
  },
  demo: {
    eyebrow: "Demo",
    title: "GRC360-ı öz proseslərinizdə görün",
    lead: "Formu doldurun. Sizinlə əlaqə saxlayıb təşkilatınızın risk və uyğunluq prosesinə uyğun demo təşkil edəcəyik.",
    emailLabel: "E-poçt",
    phoneLabel: "Telefon",
    addressLabel: "Ünvan",
    form: {
      name: "Ad, soyad",
      company: "Təşkilat",
      email: "İş e-poçtu",
      phone: "Telefon",
      role: "Vəzifə",
      rolePlaceholder: "məs. CISO, risk meneceri",
      sector: "Sektor",
      sectorChoose: "Seçin",
      sectorOther: "Digər",
      note: "Nəyi görmək istəyirsiniz?",
      notePlaceholder: "məs. risk istisnalarının təsdiqi, ISO 27001 hazırlığı",
      submit: "Demo sifariş edin",
      hint: "Demonu sizin proseslərinizə uyğun hazırlayırıq.",
      noAddress: "Əlaqə ünvanı hələ əlavə olunmayıb. Sorğu göndərilmədi.",
      opened: "E-poçt proqramınız açılmalıdır. Açılmadısa, bizə {email} ünvanına yazın.",
      subject: "GRC360 demo sorğusu",
      bodyLabels: { name: "Ad", company: "Təşkilat", role: "Vəzifə", sector: "Sektor", email: "E-poçt", phone: "Telefon" },
    },
  },
  footer: { tagline: "Risk, uyğunluq və audit platforması" },
  screens: {
    screenLabel: "GRC360 ekranı",
    matrixLabel: "Risk matrisi: ehtimal × təsir",
    matrixCell: "Ehtimal {l} × təsir {i} = {s}",
    command: {
      title: "Command Center",
      kpis: ["Açıq risk", "Gözləyən təsdiq", "ISO 27001 uyğunluğu"],
      matrix: "Risk matrisi · ehtimal × təsir",
      overdue: "Gecikən işlər",
      overdueRows: [
        ["Nəzarət auditi: Ehtiyat nüsxə", "3 gün", "wait"],
        ["Siyasət baxışı: Giriş nəzarəti", "5 gün", "wait"],
        ["Təchizatçı riski: Data center", "bu həftə", "next"],
      ],
    },
    approval: {
      title: "Gözləyir: Köhnə VPN üçün risk istisnası",
      levelHead: "Səviyyə · bağlı ən yüksək risk",
      level: "Yüksək · 16",
      levelWhy: "Ödəniş sisteminin dayanması: 4 × 4",
      stepsHead: "Təsdiq addımları",
      steps: [
        ["Risk sahibləri (qrup) · hər hansı biri", "təsdiqləndi", "ok"],
        ["CISO · SLA 2 gün", "1 gün qalıb", "wait"],
        ["Risk komitəsi · 3 nəfərdən 2-si", "növbədə", "next"],
      ],
    },
    compliance: {
      title: "ISO/IEC 27001:2022 · uyğunluq analizi",
      rows: [
        ["A.5 Təşkilati nəzarətlər", 81],
        ["A.6 İnsanlarla bağlı nəzarətlər", 64],
        ["A.7 Fiziki nəzarətlər", 90],
        ["A.8 Texnoloji nəzarətlər", 58],
      ],
      obligationsHead: "Öhdəliklər",
      obligations: [
        ["Fərdi məlumatlar haqqında qanun · subyektin hüquqları", "uyğun", "ok"],
        ["Daxili tənzimləyici tələb · insident hesabatı", "qismən", "wait"],
      ],
    },
    controls: {
      title: "Nəzarətlər",
      rows: [
        ["Ehtiyat nüsxələrin həftəlik bərpa testi", "audit gecikir", "wait"],
        ["İmtiyazlı hesabların rüblük baxışı", "keçdi", "ok"],
        ["Şəbəkə seqmentasiyası", "keçdi", "ok"],
        ["Laptop disk şifrələməsi", "açıq məsələ", "wait"],
      ],
      planHead: "Davamlılıq planı · Data center itkisi",
      plan: "RTO 4 saat · RPO 1 saat · 6 bərpa tapşırığı",
    },
    policy: {
      title: "Məlumat təhlükəsizliyi siyasəti · v4",
      versionsHead: "Versiyalar",
      versions: [
        ["v4 · dərc olunub", "cari", "ok"],
        ["v3 → v4 fərqi: 2 bölmə dəyişib", "fərqə bax", "next"],
      ],
      attestHead: "Tanışlıq təsdiqi",
      attestLabel: "Təsdiq edən işçilər",
    },
    vendor: {
      title: "Təchizatçılar",
      rows: [
        ["Bulud hostinq provayderi · 2 müqavilə", "yüksək risk", "level"],
        ["Kart prosessinq xidməti · 1 müqavilə", "orta risk", "wait"],
        ["Ofis təchizatı", "aşağı risk", "ok"],
      ],
      flowHead: "Məlumat axını",
      flow: "Core banking → Kart prosessinq · fərdi məlumat · şifrəli kanal",
    },
    risk: {
      title: "Aktiv riskləri",
      heat: "İstilik xəritəsi",
      top: "Ən yüksək",
      rows: [
        ["Ödəniş sisteminin dayanması", "20", "level"],
        ["Fidyə proqramı", "16", "level"],
        ["İmtiyazlı girişdən sui-istifadə", "12", "wait"],
      ],
    },
  },
};
