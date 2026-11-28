import type { Site } from "./types";

/**
 * Azərbaycan dilində məhsul sənədləri. Tətbiqin özünə əsasən yazılmış ilk versiya; komandanın tam
 * sənədləri bunu əvəz edəcək və ya genişləndirəcək. Yalnız məhsulun bu gün etdiyini yazın.
 */
export const docsAz: Site["docs"] = {
  eyebrow: "Sənədlər",
  title: "GRC360 sənədləri",
  lead: "GRC360-ı necə quraşdırmaq, təşkilatınızı necə qurmaq və hər modulda necə işləmək.",
  note: "Bu, sənədlərin ilk versiyasıdır. Lazım olan bir şey yoxdursa, hello@strativu.com ünvanına yazın.",
  groups: [
    { title: "Başlanğıc", pages: ["overview", "installation", "first-steps"] },
    { title: "İdarəetmə", pages: ["users-and-access", "authentication", "import-export", "administration"] },
    { title: "Modullarda iş", pages: ["risk-scoring", "approvals", "compliance-packages", "controls-and-policies", "operations-and-dashboard"] },
  ],
  pages: [
    {
      slug: "overview",
      title: "Ümumi baxış",
      summary: "GRC360 nədən ibarətdir və modullar necə əlaqəlidir.",
      sections: [
        {
          heading: "GRC360 nədir",
          body: [
            "GRC360 idarəetmə, risk və uyğunluq platformasıdır. Reyestrlərinizi (risklər, aktivlər, təchizatçılar, nəzarətlər, siyasətlər, öhdəliklər) bir sistemdə saxlayır; hər qeydin sahibi, baxış tarixləri və tarixçəsi var.",
            "Sizin serverlərinizdə quraşdırılır, Azərbaycan və ingilis dilində işləyir.",
          ],
        },
        {
          heading: "Modullar",
          body: ["Hər modul sol menyuda bir qrup səhifədir. İstifadəçinin nəyi görməsi onun qruplarının hüquqlarından asılıdır."],
          list: [
            "Command Center: tapşırıqlar, risk istilik xəritələri, uyğunluq və layihə irəliləyişi bir səhifədə.",
            "Governance Hub: əhatə, məsələlər və auditləri ilə məqsədlər.",
            "Organization Hub: istifadəçilər, şöbələr və qruplar (rollar).",
            "Third Parties: təchizatçılar və xidmət müqavilələri.",
            "Asset Management: baxışları ilə aktivlər, məlumat aktivləri və məlumat axınları.",
            "Control Center: daxili nəzarətlər, siyasət və standartlar, siyasət istisnaları, davamlılıq planları.",
            "Risk Management: aktiv, biznes və üçüncü tərəf riskləri və risk istisnaları.",
            "Compliance Hub: uyğunluq paketləri, uyğunluq analizi, öhdəliklər, uyğunluq istisnaları və xarici audit tapıntıları.",
            "Operations Center: layihələr (tapşırıq və xərclərlə) və təhlükəsizlik insidentləri.",
            "Settings (yalnız adminlər): autentifikasiya, sistem məlumatı, sağlamlıq, yeniləmələr, sistem jurnalı və məlumatların silinməsi.",
          ],
        },
        {
          heading: "Qeydlər necə bağlanır",
          body: [
            "Qeydlər kopyalanmır, bir-birinə bağlanır: risk öz aktivlərinə və nəzarətlərinə, nəzarət dəstəklədiyi standartlara, audit tapıntısı onu bağlayan tapşırığa. Qeydi dəyişmək onu göstərildiyi hər yerdə dəyişir.",
          ],
        },
      ],
    },
    {
      slug: "installation",
      title: "Quraşdırma",
      summary: "Server üçün nə lazımdır və servislər necə birləşir.",
      sections: [
        {
          heading: "Tələblər",
          body: ["GRC360 Linux serverdə bir neçə Docker konteyneri kimi işləyir."],
          list: [
            "Docker və Docker Compose olan Linux server",
            "PostgreSQL 16 (verilənlər bazası; row-level security təşkilatları ayırır)",
            "Redis (sessiyalar və keş)",
            "Fayllar üçün S3-uyğun saxlama, məsələn MinIO",
            "Yüklənən faylların antivirus yoxlaması üçün ClamAV (istəyə görə)",
            "Monitorinq üçün Prometheus və Grafana (istəyə görə)",
          ],
        },
        {
          heading: "Servislər",
          body: [
            "nginx veb tətbiqi verir və API sorğularını tətbiq serverinə ötürür. Tətbiq serveri PostgreSQL, Redis, fayl saxlaması və aktivdirsə ClamAV ilə işləyir. Hamısı sizin şəbəkənizdə işləyir; heç nə kənar servisə göndərilmir.",
          ],
        },
        {
          heading: "Quraşdırma",
          steps: [
            "Serveri və istifadəçilərin açacağı DNS adını hazırlayın.",
            "Mühit dəyərlərini təyin edin: verilənlər bazası, fayl saxlaması, poçt serveri və ictimai ünvan.",
            "Stack-i Docker Compose ilə işə salın. Verilənlər bazasının sxemi işə düşəndə avtomatik yaradılır və yenilənir.",
            "Ünvanı brauzerdə açın və ilk admin hesabı ilə daxil olun.",
          ],
          body: [],
          note: "GRC360-ı komandanızla birlikdə quraşdırırıq; dəqiq dəyərlər şəbəkənizdən və təhlükəsizlik qaydalarınızdan asılıdır.",
        },
      ],
    },
    {
      slug: "first-steps",
      title: "İlk addımlar",
      summary: "Başlanğıc sehrbazı, məhsul turu və şəxsi ayarlar.",
      sections: [
        {
          heading: "Başlanğıc sehrbazı",
          body: ["Admin ilk dəfə daxil olanda GRC360 əsas tətbiqdən əvvəl qısa sehrbaz açır:"],
          steps: [
            "Xoş gəldiniz: sehrbazın nəyi quracağı.",
            "Təşkilat: təşkilatın əsas məlumatları.",
            "İdxal: mövcud reyestrləri Excel və ya CSV şablonlarından gətirin (keçmək olar).",
            "Bələdçi: hər modulun harada olduğu.",
            "Hazır: tətbiq Command Center-də açılır.",
          ],
        },
        {
          heading: "Məhsul turu",
          body: ["Bələdçi tur hər gün istifadə olunan ekranları göstərir. İlk girişdə başlayır, istənilən vaxt üst paneldəki kömək (?) düyməsindən və ya profil menyusundan təkrar oynatmaq olar."],
        },
        {
          heading: "Dil, tema və profil",
          body: [
            "Hər istifadəçi üst paneldən Azərbaycan və ya ingilis dilini, açıq və ya tünd temanı seçir. Server mesajları seçilmiş dildə gəlir.",
            "Profile sizin məlumatlarınızı və iki addımlı girişi, Account isə qruplarınızı, girişlərinizi və daxil olduğunuz cihazları göstərir.",
          ],
        },
      ],
    },
    {
      slug: "users-and-access",
      title: "İstifadəçilər, qruplar və giriş",
      summary: "Hüquqlar necə verilir: qruplar, giriş matrisi və giriş sorğuları.",
      sections: [
        {
          heading: "İstifadəçilər və şöbələr",
          body: ["İstifadəçilər Organization Hub → Users-də yaradılır və şöbəyə aid olur. Yeni istifadəçi parol təyin etmək üçün aktivləşdirmə linki alır."],
        },
        {
          heading: "Qruplar və giriş matrisi",
          body: [
            "Hüquqlar ayrı istifadəçilərə yox, qruplara verilir. Hər modul və səhifə üçün qrup oxuya, yarada, redaktə edə, silə, idxal və ixrac edə və ya ayarları idarə edə bilər; bəzi səhifələrdə audit nəticələri və ya təyinat kimi əlavə əməliyyatlar var.",
            "İstifadəçiyə qruplarından əlavə ayrıca hüquqlar da verilə bilər.",
          ],
        },
        {
          heading: "Bağlı əməliyyatlar və giriş sorğuları",
          body: [
            "İstifadəçinin istifadə edə bilmədiyi düymələr kilid nişanı ilə görünür qalır. Klikləyəndə giriş sorğusu göndərmək təklif olunur; adminlər gözləyən sorğuları Groups səhifəsində görür və təsdiq və ya rədd edir.",
          ],
          note: "Settings yalnız Administrators qrupuna aiddir və başqa qrupa verilə bilməz.",
        },
      ],
    },
    {
      slug: "authentication",
      title: "Giriş və autentifikasiya",
      summary: "Parollar, iki addımlı giriş, vahid giriş (SSO) və LDAP.",
      sections: [
        {
          heading: "İki addımlı giriş (MFA)",
          body: ["İstifadəçilər iki addımlı girişi autentifikator tətbiqi (TOTP) ilə aktivləşdirir və ehtiyat kodlar alır. Adminlər üçün məcburidir."],
        },
        {
          heading: "Vahid giriş (SSO)",
          body: ["Settings → Authentication-da adminlər OIDC və ya SAML qoşulmaları əlavə edir (məsələn, Microsoft Entra ID, ADFS və ya Google) və aktivləşdirməzdən əvvəl yoxlayır."],
        },
        {
          heading: "LDAP",
          body: ["LDAP qoşulmaları istifadəçilərə kataloq hesabı ilə daxil olmağa imkan verir. Hər qoşulma eyni səhifədən yoxlanıla bilər."],
        },
        {
          heading: "Sessiyalar",
          body: ["Adminlər təşkilatın aktiv sessiyalarını görür və bağlaya bilir; hər istifadəçi öz sessiyalarını Account-da görür və bağlayır."],
        },
      ],
    },
    {
      slug: "import-export",
      title: "İdxal və ixrac",
      summary: "Mövcud reyestrləri gətirmək və məlumatı çıxarmaq.",
      sections: [
        {
          heading: "Şablonlar",
          body: ["Hər reyestrin idxal şablonu var. Import templates səhifəsi onları modullar üzrə, hər birinin gözlədiyi sütunlarla göstərir."],
        },
        {
          heading: "İdxal",
          steps: [
            "Reyestri açın və Import CSV seçin.",
            "Doldurulmuş şablonu yükləyin.",
            "GRC360 heç nə saxlamazdan əvvəl hər sətri yoxlayır və xətaları göstərir.",
            "Sətirləri düzəldib yenidən idxal edin; düzgün sətirlər yaradılır.",
          ],
          body: [],
        },
        {
          heading: "İxrac",
          body: ["İxrac reyestri şablonla eyni formatda yazır, ona görə ixrac edilmiş faylı redaktə edib geri idxal etmək olar. İxrac üçün həmin səhifədə ixrac hüququ lazımdır."],
        },
      ],
    },
    {
      slug: "risk-scoring",
      title: "Risklərin qiymətləndirilməsi",
      summary: "Şkalalar, hədd matrisi, risk iştahası və baxışlar.",
      sections: [
        {
          heading: "Şkalalar və bal",
          body: ["Hər reyestr təşkilatınızın qurduğu ehtimal və təsir şkalalarından istifadə edir. Riskin balı ehtimal × təsirdir: müalicədən əvvəl (ilkin) və sonra (qalıq)."],
        },
        {
          heading: "Hədd matrisi",
          body: ["Reyestrin ayarlarında adminlər balları öz ad və rəngləri olan səviyyələrə bölür, məsələn Aşağı, Orta, Yüksək. Riskin səviyyəsi, cədvəldəki rəngi və istilik xəritəsindəki yeri bu matrisdən gəlir."],
        },
        {
          heading: "Risk iştahası",
          body: ["Risk iştahası diqqət tələb edən həddi müəyyən edir. Həddi keçən risklər reyestrdə nişanlanır."],
        },
        {
          heading: "Baxışlar və istisnalar",
          body: ["Hər riskin növbəti baxış tarixi var; baxışlar nəticəsi ilə Reviews tabında qeydə alınır. Risk müalicə olunmayıb qəbul ediləndə risk istisnası yaradılır və təsdiqə göndərilir."],
        },
      ],
    },
    {
      slug: "approvals",
      title: "Təsdiqlər",
      summary: "Təsdiq addımlarını, SLA-nı, xatırlatmaları və həvaləni qurmaq.",
      sections: [
        {
          heading: "Təsdiq addımları",
          body: [
            "Adminlər hər axın üçün təsdiq addımlarını Approvals → Approval steps-də qurur. Standart zəncir məcburidir; saxlanandan sonra matrisinizdəki hər risk səviyyəsi üçün ayrıca zəncir əlavə etmək olar.",
            "Hər addımı qrup (istənilən bir üzv və ya müəyyən sayda üzv) və ya konkret şəxs təsdiq edir. Addımlar avtomatik nömrələnir.",
          ],
          note: "Eyni şəxs eyni sorğunun iki addımını təsdiq edə bilməz.",
        },
        {
          heading: "SLA və xatırlatmalar",
          body: ["Hər addımın saat və ya gün ilə qərar vaxtı var. Vaxtın yarısı, dörddə biri və onda biri qalanda təsdiqləyənlərə tətbiqdaxili xatırlatma gedir."],
        },
        {
          heading: "Qərar vermək",
          body: [
            "Sorğular Waiting for me bölməsində qeydin detalları və sorğu edənin qeydi ilə görünür. Təsdiqə şərh əlavə etmək olar; imtina şərh tələb edir. Hər qərar şəxs və vaxtla saxlanılır.",
            "Sorğu edənlər öz sorğularını My requests-də izləyir və gözləmədə olarkən geri götürə bilir.",
          ],
        },
        {
          heading: "Həvalə",
          body: ["Məzuniyyətə çıxan təsdiqləyən öz təsdiqlərini tarix aralığı üçün həmkarına həvalə edə bilər."],
        },
      ],
    },
    {
      slug: "compliance-packages",
      title: "Uyğunluq paketləri və öhdəliklər",
      summary: "Standartları yükləmək, qiymətləndirmək və hüquqi öhdəlikləri izləmək.",
      sections: [
        {
          heading: "Paketlər",
          body: ["Uyğunluq paketi standartı, qanunu və ya daxili siyasəti bəndlər siyahısı kimi saxlayır. Paketlər Compliance Hub → Compliance Packages-də yaradılır, bəndləri əllə əlavə olunur və ya CSV-dən idxal edilir."],
          note: "GRC360 standartların mətnini vermir; təşkilatınız istifadə hüququ olan məzmunu özü yükləyir.",
        },
        {
          heading: "Uyğunluq analizi",
          body: ["Paketi seçib bənd-bənd qiymətləndirin: statusu və tədbiri qeyd edin, sübutları, istisnaları və xarici audit tapıntılarını bağlayın. Analiz hər bölmə və bütün paket üzrə faizi göstərir."],
        },
        {
          heading: "Öhdəliklər",
          body: ["Qanunlar və tənzimləyici tələbləri öhdəlik kimi izlənir; hər birinin sahibi, baxış tarixi və dinamik statusu var. Hər qanunun öhdəlikləri və uyğunluq faizi ilə öz profili var; gecikən baxışlar və status uyğunsuzluqları nişanlanır."],
        },
      ],
    },
    {
      slug: "controls-and-policies",
      title: "Nəzarətlər və siyasətlər",
      summary: "Nəzarət auditləri, məsələlər və texniki baxışlar; siyasət versiyaları və tanışlıq.",
      sections: [
        {
          heading: "Nəzarətlər",
          body: ["Hər daxili nəzarətin sahibi, cədvəli və nəticəsi var. Auditlər, məsələlər və texniki baxışlar nəzarət reyestrinin tablarıdır; açıq məsələ və ya gecikən audit nəzarətin statusunda dərhal görünür. Sübut faylları auditlərə əlavə olunur."],
        },
        {
          heading: "Siyasətlər və standartlar",
          body: ["Siyasətlər versiya kimi dərc olunur, həyat dövrü paneli kimin nəyi nə vaxt dərc etdiyini göstərir. Baxışlar hər siyasət üçün planlanır, siyasət istisnaları digər istisnalar kimi təsdiqlənir."],
        },
        {
          heading: "Tanışlıq",
          body: ["İşçilər onları gözləyən siyasətləri My tasks → Policies to attest-də tapır və hər birini qəbul və ya rədd edir."],
        },
        {
          heading: "Davamlılıq planları",
          body: ["Davamlılıq planları bərpa hədəflərini (RTO, RPO), auditlərini və sahibi və son tarixi olan bərpa tapşırıqlarını saxlayır."],
        },
      ],
    },
    {
      slug: "operations-and-dashboard",
      title: "Əməliyyatlar və Command Center",
      summary: "Layihələr, tapşırıqlar, insidentlər və rəhbərlik paneli.",
      sections: [
        {
          heading: "Layihələr, tapşırıqlar və xərclər",
          body: ["Layihələrdə tapşırıqlar və xərclər tab kimi saxlanılır. Layihə öz son tarixini keçəndə və ya gecikən tapşırığı olanda gecikmiş sayılır. Hazır görünüşlər gecikən və yaxınlaşan işi göstərir."],
        },
        {
          heading: "Təhlükəsizlik insidentləri",
          body: ["İnsidentlər təşkilatınızın mərhələ ayarlarında təyin etdiyi mərhələlərdən keçir. Bitməmiş mərhələ nişanlanır və bir baxışda görünür."],
        },
        {
          heading: "Command Center",
          body: ["Command Center vaxtı keçmiş, bugünkü və gələcək tapşırıqları, üç risk reyestri üçün istilik xəritələrini (bütün açıq risklər və ya son 7, 30, 90 gündə dəyişənlər), çərçivə üzrə uyğunluğu, ümumi layihə irəliləyişini və öhdəlikləri göstərir. İcmal CSV-yə ixrac oluna bilər."],
        },
      ],
    },
    {
      slug: "administration",
      title: "Sistemin idarə edilməsi",
      summary: "Sistem jurnalı, sağlamlıq, yeniləmələr, ehtiyat nüsxələr və məlumatların silinməsi.",
      sections: [
        {
          heading: "Sistem jurnalı",
          body: ["Sistem jurnalı kimin nəyi, nə vaxt və haradan dəyişdiyini yazır. Filtrlənə və ixrac edilə bilər."],
        },
        {
          heading: "Sistemin sağlamlığı",
          body: ["System health servislərin vəziyyətini göstərir; admin keşi təmizləyə, jurnalları və diaqnostikanı yükləyə və dəstəyə göndərə bilər."],
        },
        {
          heading: "Sistem haqqında və yeniləmələr",
          body: ["About system quraşdırılmış versiyanı və sistem məlumatlarını göstərir; Updates mövcud yeniləmələri siyahılayır."],
        },
        {
          heading: "Məlumatların silinməsi",
          body: ["Clear data önizləmədən və təşkilatın adını yazıb təsdiq etdikdən sonra təşkilatın qeydlərini silir. Silinən hər sətrin ehtiyat nüsxəsi əvvəlcə saxlanılır; saxlanmasa, heç nə silinmir. Ehtiyat nüsxələri eyni səhifədən yükləmək olar."],
          note: "Məlumatların silinməsi ayrıca hüquqdur və yalnız adminlərə aiddir.",
        },
      ],
    },
  ],
};
