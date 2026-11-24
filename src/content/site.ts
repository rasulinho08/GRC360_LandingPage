/**
 * Everything the page says, in one place. Change the words here; the components only lay them out.
 *
 * Rule for this file: describe only what GRC360 does today. Planned work (Jira, scheduled e-mail
 * digests, a ready framework library) is not listed as a feature.
 */

/** Contact details. Fill these in before the site goes live; empty values are hidden on the page. */
export const CONTACT = {
  /** Where the demo form sends its request (opened in the visitor's mail app). */
  email: "",
  phone: "",
  address: "",
  company: "Strativu",
};

export const NAV = [
  { href: "#modullar", label: "Modullar" },
  { href: "#tehlukesizlik", label: "Təhlükəsizlik" },
  { href: "#kimler-ucun", label: "Kimlər üçün" },
  { href: "#qurulum", label: "Qurulum" },
  { href: "#suallar", label: "Suallar" },
];

export const HERO = {
  eyebrow: "Risk · Uyğunluq · Audit",
  title: "Risk, uyğunluq və audit bir platformada. Öz serverlərinizdə.",
  lead:
    "GRC360 risk reyestrlərini, nəzarətləri, siyasətləri, auditləri və tənzimləyici öhdəlikləri bir yerə yığır. Azərbaycan dilində işləyir və məlumatlarınız sizin infrastrukturunuzdan çıxmır.",
  primary: { href: "#demo", label: "Demo sifariş edin" },
  secondary: { href: "#modullar", label: "Modullara baxın" },
  badges: ["Öz serverinizdə (on-prem)", "Azərbaycan və ingilis dilində", "MFA və SSO", "Bir neçə təşkilat bir sistemdə"],
};

export const SECTORS = ["Banklar", "Sığorta", "Dövlət qurumları", "Telekom", "Enerji", "Holdinqlər"];

export const PROBLEMS = [
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
];

export type Module = {
  id: string;
  name: string;
  title: string;
  points: string[];
  screen: "risk" | "approval" | "compliance" | "controls" | "policy" | "command" | "vendor" | "continuity";
};

export const MODULES: Module[] = [
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
];

export const SECURITY = [
  { title: "Öz serverinizdə", text: "Linux serverdə Docker ilə quraşdırılır. Məlumat bazası (PostgreSQL) və fayllar sizin infrastrukturunuzda qalır." },
  { title: "Təşkilatlar ayrı", text: "Hər təşkilatın məlumatı verilənlər bazası səviyyəsində (row-level security) ayrılır. Bir sistemdə bir neçə törəmə şirkət işləyə bilər." },
  { title: "MFA və SSO", text: "İki addımlı giriş (TOTP, ehtiyat kodlar), adminlər üçün məcburi MFA. OIDC və SAML ilə Microsoft Entra ID, ADFS və ya Google ilə giriş. LDAP qoşulması." },
  { title: "Rol əsaslı giriş", text: "Hər modul, səhifə və əməliyyat üçün ayrıca hüquq. Kim nəyi görür və dəyişir, admin müəyyən edir." },
  { title: "Hər hərəkət qeyddə", text: "System Log kimin, nə vaxt, haradan və nəyi dəyişdiyini yazır. Təsdiq tarixçəsi dəyişdirilə bilməyən zəncir kimi saxlanılır." },
  { title: "Fayllar yoxlanılır", text: "Yüklənən fayllar tipə görə yoxlanılır və ClamAV antivirusundan keçirilə bilər." },
];

export const AUDIENCES = [
  { title: "Banklar və maliyyə", text: "Tənzimləyicinin tələblərini öhdəlik kimi izləyin, risk istisnalarını komitə qaydası ilə təsdiqləyin, auditora tarixçəni göstərin." },
  { title: "Dövlət qurumları", text: "Məlumat qurumun öz serverində qalır. İnterfeys Azərbaycan dilindədir." },
  { title: "Telekom və enerji", text: "Kritik aktivləri, təchizatçıları və biznesin davamlılığı planlarını bir sistemdə idarə edin." },
  { title: "Holdinqlər", text: "Hər törəmə şirkət ayrı təşkilat kimi işləyir; məlumatlar bir-birinə qarışmır, idarəetmə bir yerdən aparılır." },
];

export const STEPS = [
  { title: "Demo", text: "Sizin proseslərinizə uyğun ssenari ilə platformanı göstəririk və tələbləri birlikdə müəyyən edirik." },
  { title: "Quraşdırma və köçürmə", text: "Serverinizdə quraşdırırıq. Mövcud reyestrləri Excel və CSV şablonları ilə köçürürük." },
  { title: "Təlim və dəstək", text: "Komandanıza təlim keçirik, sonra Azərbaycan dilində dəstək veririk." },
];

export const FAQ = [
  {
    q: "Quraşdırmaq üçün nə lazımdır?",
    a: "Linux server, Docker və PostgreSQL. Fayllar üçün S3-uyğun saxlama (məsələn, MinIO) və istəyə görə ClamAV. Bulud versiyası da mümkündür.",
  },
  {
    q: "Hansı dillərdə işləyir?",
    a: "İnterfeys Azərbaycan və ingilis dilindədir; istifadəçi dili özü seçir. Server xəta mesajları da seçilmiş dildə gəlir.",
  },
  {
    q: "Excel-dəki mövcud məlumatlarımızı köçürə bilərikmi?",
    a: "Bəli. Hər reyestr üçün hazır şablon var: yükləyin, doldurun, sistem sətir-sətir yoxlayır və xətaları göstərir. Eyni formada ixrac da edilir.",
  },
  {
    q: "Hansı standartları dəstəkləyir?",
    a: "Uyğunluq paketi istənilən standart və ya qanun üçün qurulur: ISO 27001, PCI DSS, NIST CSF, daxili siyasətlər, yerli qanunvericilik. Paketi təşkilat özü yükləyir və tələb-tələb qiymətləndirir.",
  },
  {
    q: "Qiymət necə müəyyən edilir?",
    a: "Qiymət quraşdırma növündən və təşkilatın ölçüsündən asılıdır. Demo zamanı sizin üçün təklif hazırlayırıq.",
  },
  {
    q: "Başqa sistemlərlə qoşulurmu?",
    a: "LDAP, SSO (OIDC və SAML), REST API və CSV/Excel idxal-ixrac hazırdır. Digər qoşulmaları ehtiyacınıza görə birlikdə planlaşdırırıq.",
  },
];
