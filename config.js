// ============================================================
//                 КОНФИГУРАЦИЯ NEVERDIE CLIENT
//          Все настройки — в одном месте. Просто меняй.
// ============================================================

const CONFIG = {

  // ─── ОСНОВНАЯ ИНФОРМАЦИЯ ────────────────────────────────
  clientName: "Neverdie Client",

  // ─── СКАЧИВАНИЕ ЛАУНЧЕРА ───────────────────────────────
  // Вставь прямую ссылку на neverdie.exe (например, GitHub Releases).
  // Кнопка «Скачать» активна только после входа.
  download: {
    url: "https://github.com/oleg123456789123456-cloud/NeverdieClient/releases/download/1.2/neverdie.exe",
    fileName: "neverdie.exe"
  },
  clientTagline: {
    ru: "Превосходство. Скорость. Победа.",
    en: "Supremacy. Speed. Victory.",
    uk: "Перевага. Швидкість. Перемога.",
    pl: "Wyższość. Prędkość. Zwycięstwo.",
    tr: "Üstünlük. Hız. Zafer."
  },
  heroQuote: {
    ru: "Мы не просто клиент — мы стиль игры.",
    en: "We are not just a client — we are a playstyle.",
    uk: "Ми не просто клієнт — ми стиль гри.",
    pl: "Nie jesteśmy tylko klientem — jesteśmy stylem gry.",
    tr: "Biz sadece bir istemci değiliz — biz bir oyun tarzıyız."
  },

  // ─── ЦВЕТА ───────────────────────────────────────────────
  // Меняй hex — всё обновится автоматически через CSS-переменные
  colors: {
    primary:      "#F5F5F5",              // Основной акцент (белый)
    primaryLight: "#FFFFFF",              // Светлый акцент
    primaryDark:  "#CFCFCF",              // Тёмный акцент
    secondary:    "#A3A3A3",              // Второстепенный
    bg:           "#000000",              // Фон страницы (чёрный)
    bgCard:       "#0A0A0A",              // Фон карточек
    bgCardHover:  "#141414",              // Фон карточек при hover
    text:         "#FFFFFF",              // Основной текст
    textMuted:    "#8E8E8E",              // Серый/приглушённый текст
    border:       "#1E1E1E",              // Цвет границ
    success:      "#22C55E",              // Зелёный (галочки)
    glow:         "rgba(255,255,255,0.14)" // Белое свечение кнопок
  },

  // ─── НАВИГАЦИЯ ───────────────────────────────────────────
  nav: {
    links: {
      ru: ["Главная", "Функции", "Видеообзор", "Скачать", "Поддержка"],
      en: ["Home",    "Features", "Video",      "Download","Support"],
      uk: ["Головна", "Функції",  "Відео",      "Завантажити","Підтримка"],
      pl: ["Główna",  "Funkcje",  "Wideo",      "Pobierz",  "Wsparcie"],
      tr: ["Ana",     "Özellikler","Video",     "İndir",    "Destek"]
    },
    anchors: ["#hero", "#features", "#video", "#pricing", "#support"]
  },

  // ─── КОНТАКТЫ ────────────────────────────────────────────
  contact: {
    telegram: "https://t.me/neverdieCheat"
  },

  // ─── ВИДЕО ───────────────────────────────────────────────
  // Вставьте ссылку на YouTube: https://www.youtube.com/watch?v=XXXXXXXXXXX
  // Поддерживаются: watch?v=, youtu.be/, shorts/, embed/
  video: {
    url: "",   // ← Вставьте ссылку сюда. Оставьте "" — покажется красивый плейсхолдер.
    placeholder: {
      ru: "Видео скоро появится",
      en: "Video coming soon",
      uk: "Відео незабаром",
      pl: "Film wkrótce",
      tr: "Video yakında"
    }
  },

  // ─── СКРИНШОТЫ ───────────────────────────────────────────
  // [0] — широкий главный скриншот, [1][2] — два поменьше рядом
  screenshots: [
    {
      url: "screenshots/shot1.png",
      alt: "Neverdie Client — главный скриншот"
    },
    {
      url: "screenshots/shot2.png",
      alt: "Neverdie Client — скриншот 2"
    },
    {
      url: "screenshots/shot3.png",
      alt: "Neverdie Client — скриншот 3"
    }
  ],

  // ─── ФУНКЦИИ (FEATURES) ──────────────────────────────────
  features: {
    ru: [
      { title: "Красивый интерфейс",  desc: "Большое количество визуальных функций, которые сделают вашу игру красочнее. Настройте оформление клиента полностью под себя." },
      { title: "Гибкая настройка",    desc: "Настройте практически любую функцию, используйте конфигурации других пользователей и получайте максимум от клиента." },
      { title: "Высокая оптимизация", desc: "Постоянно улучшаем производительность клиента и самой игры. Стабильный FPS даже на слабых компьютерах." },
      { title: "Частые обновления",   desc: "Регулярно добавляем новые функции и совершенствуем существующие. Преимущества под все актуальные сервера." },
      { title: "Лучшая поддержка",    desc: "Наша поддержка разбирается в своём деле и поможет по любому вопросу. Быстрый ответ 24/7." },
      { title: "Обход античита",      desc: "Передовые технологии обхода популярных античит-систем. Играйте уверенно на любых серверах." }
    ],
    en: [
      { title: "Beautiful Interface", desc: "A large number of visual features to make your game more vibrant. Customize the client appearance entirely to your liking." },
      { title: "Deep Customization",  desc: "Configure almost any feature, use other users' configs and get the most out of the client." },
      { title: "Top Optimization",    desc: "Constantly improving performance. Stable FPS even on weak computers." },
      { title: "Frequent Updates",    desc: "Regularly adding new features and improving existing ones. Advantages for all relevant servers." },
      { title: "Best Support",        desc: "Our support knows their craft and will help with any question. Fast response 24/7." },
      { title: "Anti-cheat Bypass",   desc: "Advanced technologies to bypass popular anti-cheat systems. Play confidently on any servers." }
    ],
    uk: [
      { title: "Гарний інтерфейс",      desc: "Велика кількість візуальних функцій. Налаштуйте оформлення клієнта повністю під себе." },
      { title: "Гнучке налаштування",   desc: "Налаштуйте майже будь-яку функцію, використовуйте конфігурації інших користувачів." },
      { title: "Висока оптимізація",    desc: "Постійно покращуємо продуктивність. Стабільний FPS навіть на слабких комп'ютерах." },
      { title: "Часті оновлення",       desc: "Регулярно додаємо нові функції та вдосконалюємо наявні." },
      { title: "Найкраща підтримка",    desc: "Наша підтримка допоможе з будь-яким питанням. Швидка відповідь 24/7." },
      { title: "Обхід античіту",        desc: "Передові технології обходу популярних античіт-систем." }
    ],
    pl: [
      { title: "Piękny interfejs",      desc: "Duża liczba funkcji wizualnych. Dostosuj wygląd klienta w pełni do siebie." },
      { title: "Pełna konfiguracja",    desc: "Skonfiguruj prawie każdą funkcję, używaj konfiguracji innych użytkowników." },
      { title: "Wysoka optymalizacja",  desc: "Stale ulepszamy wydajność. Stabilny FPS nawet na słabych komputerach." },
      { title: "Częste aktualizacje",   desc: "Regularnie dodajemy nowe funkcje i doskonalimy istniejące." },
      { title: "Najlepsze wsparcie",    desc: "Nasze wsparcie pomoże w każdej kwestii. Szybka odpowiedź 24/7." },
      { title: "Obejście antycheat",    desc: "Zaawansowane technologie omijania systemów antycheat." }
    ],
    tr: [
      { title: "Güzel Arayüz",          desc: "Çok sayıda görsel özellik. İstemcinin görünümünü tamamen kendinize göre özelleştirin." },
      { title: "Derin Özelleştirme",    desc: "Neredeyse her özelliği yapılandırın, diğer kullanıcıların konfigürasyonlarını kullanın." },
      { title: "Yüksek Optimizasyon",   desc: "Performansı sürekli geliştiriyoruz. Zayıf bilgisayarlarda bile stabil FPS." },
      { title: "Sık Güncellemeler",     desc: "Düzenli olarak yeni özellikler ekliyoruz ve mevcut olanları geliştiriyoruz." },
      { title: "En İyi Destek",         desc: "Destek ekibimiz her konuda yardımcı olur. Hızlı yanıt 24/7." },
      { title: "Anti-hile Bypass",      desc: "Popüler anti-hile sistemlerini atlatmak için gelişmiş teknolojiler." }
    ]
  },

  // ─── ТАРИФ ───────────────────────────────────────────────
  // Клиент полностью бесплатный: один free-план со скачиванием.
  pricing: {
    plans: [
      {
        id: "free",
        duration: { ru:"Free", en:"Free", uk:"Free", pl:"Free", tr:"Free" },
        price:    0,
        popular:  true,
        features: {
          ru: ["Все функции клиента", "Бесплатно навсегда", "Обновления включены", "Поддержка в Telegram"],
          en: ["All client features", "Free forever",       "Updates included",    "Telegram support"],
          uk: ["Всі функції клієнта", "Безкоштовно назавжди","Оновлення включені",  "Підтримка в Telegram"],
          pl: ["Wszystkie funkcje",   "Za darmo na zawsze",  "Aktualizacje wliczone","Wsparcie w Telegramie"],
          tr: ["Tüm özellikler",      "Sonsuza dek ücretsiz","Güncellemeler dahil",  "Telegram desteği"]
        }
      }
    ]
  },

  // ─── ПЕРЕВОДЫ UI ─────────────────────────────────────────
  i18n: {
    ru: {
      navBuy:               "Скачать",
      sectionFeatures:      "Наши преимущества",
      featuresSubtitle:     "Всё, что вы получите в нашем бесплатном клиенте.",
      sectionVideo:         "Видеообзор",
      videoSubtitle:        "Посмотрите на реальный геймплей с нашим клиентом.",
      sectionScreenshots:   "Скриншоты",
      screenshotsSubtitle:  "Несколько снимков прямо из игры с нашим клиентом.",
      sectionPricing:       "Скачивание",
      pricingSubtitle:      "Клиент полностью бесплатный. Войдите и нажмите «Скачать».",
      free:                 "Бесплатно",
      freePeriod:           "навсегда",
      btnDownload:          "Скачать",
      sectionSupport:       "Поддержка",
      supportSubtitle:      "Есть вопросы? Мы всегда рады помочь.",
      supportTelegram:      "Telegram",
      footerNav:            "Навигация",
      footerLegal:          "Документы",
      footerPrivacy:        "Обработка персональных данных",
      footerTerms:          "Пользовательское соглашение",
      footerRules:          "Правила пользования",
      footerCopy:           `© ${new Date().getFullYear()} Neverdie Client. Все права защищены.`,
      scrollDown:           "Прокрутите вниз",
      buyNowHero:           "Скачать бесплатно",
      learnMore:            "Узнать больше",
      videoBullet1:         "Реальный геймплей без монтажа",
      videoBullet2:         "Демонстрация всех ключевых функций",
      videoBullet3:         "Настройки интерфейса в деталях",
      videoHint:            "Видео скоро появится здесь",
      navLogin:             "Войти",
      authLogin:            "Вход",
      authRegister:         "Регистрация",
      authNick:             "Ник",
      authPassword:         "Пароль",
      authRepeat:           "Повторите пароль",
      authLoginBtn:         "Войти",
      authRegisterBtn:      "Создать аккаунт",
      errNick:              "Ник: 3–16 символов, только латиница, цифры и _.",
      errPass:              "Пароль: минимум 4 символа.",
      errRepeat:            "Пароли не совпадают.",
      errTaken:             "Этот ник уже занят.",
      errWrong:             "Неверный ник или пароль.",
      welcome:              "Добро пожаловать",
      bye:                  "Вы вышли из аккаунта",
      needLogin:            "Войдите, чтобы скачать лаунчер",
      downloading:          "Загрузка началась",
      noDownloadUrl:        "Ссылка на скачивание скоро появится"
    },
    en: {
      navBuy:               "Download",
      sectionFeatures:      "Our Advantages",
      featuresSubtitle:     "Everything you get in our free client.",
      sectionVideo:         "Video Review",
      videoSubtitle:        "Watch real gameplay footage with our client.",
      sectionScreenshots:   "Screenshots",
      screenshotsSubtitle:  "A few shots straight from the game with our client.",
      sectionPricing:       "Download",
      pricingSubtitle:      "The client is completely free. Log in and hit Download.",
      free:                 "Free",
      freePeriod:           "forever",
      btnDownload:          "Download",
      sectionSupport:       "Support",
      supportSubtitle:      "Have questions? We're always happy to help.",
      supportTelegram:      "Telegram",
      footerNav:            "Navigation",
      footerLegal:          "Documents",
      footerPrivacy:        "Privacy Policy",
      footerTerms:          "Terms of Service",
      footerRules:          "Usage Rules",
      footerCopy:           `© ${new Date().getFullYear()} Neverdie Client. All rights reserved.`,
      scrollDown:           "Scroll down",
      buyNowHero:           "Download for free",
      learnMore:            "Learn more",
      videoBullet1:         "Real gameplay without editing",
      videoBullet2:         "Demonstration of all key features",
      videoBullet3:         "Interface settings in detail",
      videoHint:            "Video coming soon",
      navLogin:             "Log in",
      authLogin:            "Log in",
      authRegister:         "Sign up",
      authNick:             "Nickname",
      authPassword:         "Password",
      authRepeat:           "Repeat password",
      authLoginBtn:         "Log in",
      authRegisterBtn:      "Create account",
      errNick:              "Nickname: 3–16 chars, latin letters, digits and _ only.",
      errPass:              "Password: at least 4 characters.",
      errRepeat:            "Passwords do not match.",
      errTaken:             "This nickname is already taken.",
      errWrong:             "Wrong nickname or password.",
      welcome:              "Welcome",
      bye:                  "You have logged out",
      needLogin:            "Log in to download the launcher",
      downloading:          "Download started",
      noDownloadUrl:        "Download link coming soon"
    },
    uk: {
      navBuy:               "Завантажити",
      sectionFeatures:      "Наші переваги",
      featuresSubtitle:     "Все, що ви отримаєте в нашому безкоштовному клієнті.",
      sectionVideo:         "Відеоогляд",
      videoSubtitle:        "Перегляньте реальний геймплей з нашим клієнтом.",
      sectionScreenshots:   "Скріншоти",
      screenshotsSubtitle:  "Кілька знімків прямо з гри з нашим клієнтом.",
      sectionPricing:       "Завантаження",
      pricingSubtitle:      "Клієнт повністю безкоштовний. Увійдіть і натисніть «Завантажити».",
      free:                 "Безкоштовно",
      freePeriod:           "назавжди",
      btnDownload:          "Завантажити",
      sectionSupport:       "Підтримка",
      supportSubtitle:      "Є питання? Ми завжди раді допомогти.",
      supportTelegram:      "Telegram",
      footerNav:            "Навігація",
      footerLegal:          "Документи",
      footerPrivacy:        "Обробка персональних даних",
      footerTerms:          "Угода користувача",
      footerRules:          "Правила користування",
      footerCopy:           `© ${new Date().getFullYear()} Neverdie Client. Всі права захищені.`,
      scrollDown:           "Гортайте вниз",
      buyNowHero:           "Завантажити безкоштовно",
      learnMore:            "Дізнатись більше",
      videoBullet1:         "Реальний геймплей без монтажу",
      videoBullet2:         "Демонстрація всіх ключових функцій",
      videoBullet3:         "Налаштування інтерфейсу в деталях",
      videoHint:            "Відео незабаром з'явиться тут",
      navLogin:             "Увійти",
      authLogin:            "Вхід",
      authRegister:         "Реєстрація",
      authNick:             "Нік",
      authPassword:         "Пароль",
      authRepeat:           "Повторіть пароль",
      authLoginBtn:         "Увійти",
      authRegisterBtn:      "Створити акаунт",
      errNick:              "Нік: 3–16 символів, лише латиниця, цифри та _.",
      errPass:              "Пароль: мінімум 4 символи.",
      errRepeat:            "Паролі не збігаються.",
      errTaken:             "Цей нік вже зайнятий.",
      errWrong:             "Невірний нік або пароль.",
      welcome:              "Ласкаво просимо",
      bye:                  "Ви вийшли з акаунта",
      needLogin:            "Увійдіть, щоб завантажити лаунчер",
      downloading:          "Завантаження розпочато",
      noDownloadUrl:        "Посилання на завантаження скоро з'явиться"
    },
    pl: {
      navBuy:               "Pobierz",
      sectionFeatures:      "Nasze zalety",
      featuresSubtitle:     "Wszystko, co otrzymasz w naszym darmowym kliencie.",
      sectionVideo:         "Recenzja wideo",
      videoSubtitle:        "Obejrzyj prawdziwą rozgrywkę z naszym klientem.",
      sectionScreenshots:   "Zrzuty ekranu",
      screenshotsSubtitle:  "Kilka zdjęć prosto z gry z naszym klientem.",
      sectionPricing:       "Pobieranie",
      pricingSubtitle:      "Klient jest w pełni darmowy. Zaloguj się i kliknij Pobierz.",
      free:                 "Za darmo",
      freePeriod:           "na zawsze",
      btnDownload:          "Pobierz",
      sectionSupport:       "Wsparcie",
      supportSubtitle:      "Masz pytania? Zawsze chętnie pomożemy.",
      supportTelegram:      "Telegram",
      footerNav:            "Nawigacja",
      footerLegal:          "Dokumenty",
      footerPrivacy:        "Polityka prywatności",
      footerTerms:          "Regulamin",
      footerRules:          "Zasady użytkowania",
      footerCopy:           `© ${new Date().getFullYear()} Neverdie Client. Wszelkie prawa zastrzeżone.`,
      scrollDown:           "Przewiń w dół",
      buyNowHero:           "Pobierz za darmo",
      learnMore:            "Dowiedz się więcej",
      videoBullet1:         "Prawdziwa rozgrywka bez edycji",
      videoBullet2:         "Demonstracja wszystkich kluczowych funkcji",
      videoBullet3:         "Ustawienia interfejsu w szczegółach",
      videoHint:            "Film pojawi się tutaj wkrótce",
      navLogin:             "Zaloguj",
      authLogin:            "Logowanie",
      authRegister:         "Rejestracja",
      authNick:             "Nick",
      authPassword:         "Hasło",
      authRepeat:           "Powtórz hasło",
      authLoginBtn:         "Zaloguj",
      authRegisterBtn:      "Utwórz konto",
      errNick:              "Nick: 3–16 znaków, tylko łacina, cyfry i _.",
      errPass:              "Hasło: minimum 4 znaki.",
      errRepeat:            "Hasła nie są zgodne.",
      errTaken:             "Ten nick jest już zajęty.",
      errWrong:             "Błędny nick lub hasło.",
      welcome:              "Witaj",
      bye:                  "Wylogowano",
      needLogin:            "Zaloguj się, aby pobrać launcher",
      downloading:          "Pobieranie rozpoczęte",
      noDownloadUrl:        "Link do pobrania wkrótce"
    },
    tr: {
      navBuy:               "İndir",
      sectionFeatures:      "Avantajlarımız",
      featuresSubtitle:     "Ücretsiz istemcimizde elde edeceğiniz her şey.",
      sectionVideo:         "Video İnceleme",
      videoSubtitle:        "Müşterimizle gerçek oynanışı izleyin.",
      sectionScreenshots:   "Ekran Görüntüleri",
      screenshotsSubtitle:  "Müşterimizle oyundan birkaç görüntü.",
      sectionPricing:       "İndirme",
      pricingSubtitle:      "İstemci tamamen ücretsiz. Giriş yap ve İndir'e bas.",
      free:                 "Ücretsiz",
      freePeriod:           "sonsuza dek",
      btnDownload:          "İndir",
      sectionSupport:       "Destek",
      supportSubtitle:      "Sorularınız mı var? Her zaman yardım etmekten mutluluk duyarız.",
      supportTelegram:      "Telegram",
      footerNav:            "Navigasyon",
      footerLegal:          "Belgeler",
      footerPrivacy:        "Gizlilik Politikası",
      footerTerms:          "Hizmet Şartları",
      footerRules:          "Kullanım Kuralları",
      footerCopy:           `© ${new Date().getFullYear()} Neverdie Client. Tüm hakları saklıdır.`,
      scrollDown:           "Aşağı kaydır",
      buyNowHero:           "Ücretsiz indir",
      learnMore:            "Daha fazla bilgi",
      videoBullet1:         "Düzenleme olmadan gerçek oynanış",
      videoBullet2:         "Tüm temel özelliklerin gösterimi",
      videoBullet3:         "Arayüz ayarları detaylı olarak",
      videoHint:            "Video yakında burada görünecek",
      navLogin:             "Giriş",
      authLogin:            "Giriş",
      authRegister:         "Kayıt",
      authNick:             "Nick",
      authPassword:         "Şifre",
      authRepeat:           "Şifreyi tekrarla",
      authLoginBtn:         "Giriş yap",
      authRegisterBtn:      "Hesap oluştur",
      errNick:              "Nick: 3–16 karakter, yalnızca latin, rakam ve _.",
      errPass:              "Şifre: en az 4 karakter.",
      errRepeat:            "Şifreler eşleşmiyor.",
      errTaken:             "Bu nick zaten alınmış.",
      errWrong:             "Hatalı nick veya şifre.",
      welcome:              "Hoş geldin",
      bye:                  "Çıkış yapıldı",
      needLogin:            "Başlatıcıyı indirmek için giriş yap",
      downloading:          "İndirme başladı",
      noDownloadUrl:        "İndirme bağlantısı yakında"
    }
  },

  // ─── ЯЗЫКИ ───────────────────────────────────────────────
  languages: [
    { code: "ru", label: "RU", full: "Русский",    flag: "🇷🇺" },
    { code: "en", label: "EN", full: "English",    flag: "🇬🇧" },
    { code: "uk", label: "UA", full: "Українська", flag: "🇺🇦" },
    { code: "pl", label: "PL", full: "Polski",     flag: "🇵🇱" },
    { code: "tr", label: "TR", full: "Türkçe",     flag: "🇹🇷" }
  ],
  defaultLanguage: "ru",   // ← Язык по умолчанию при открытии сайта

  // ─── ЮРИДИЧЕСКИЕ ДОКУМЕНТЫ ───────────────────────────────
  // Пустая строка между абзацами = новый абзац на сайте.
  legal: {
    privacy:
`1. Общие положения
Настоящая политика описывает, какие данные собирает Neverdie Client и как они используются. Используя клиент и сайт, вы соглашаетесь с этой политикой.

2. Какие данные мы собираем
— Никнейм и пароль, указанные при регистрации (пароль хранится только в виде необратимого хэша).
— Техническую информацию, необходимую для работы клиента (версия игры, системные параметры).

3. Как мы используем данные
Данные используются только для входа в аккаунт, работы клиента и связи с поддержкой. Мы не продаём и не передаём ваши данные третьим лицам.

4. Хранение и защита
Аккаунты сайта хранятся локально в вашем браузере. Не передавайте пароль третьим лицам — администрация никогда не просит пароль.

5. Контакты
По вопросам обработки данных пишите в наш Telegram: https://t.me/neverdieCheat`,

    terms:
`1. Общие положения
Настоящее соглашение регулирует использование бесплатного программного обеспечения Neverdie Client (далее — «Клиент») и данного сайта.

2. Предоставление сервиса
Клиент предоставляется бесплатно, «как есть», без каких-либо гарантий бесперебойной работы. Мы вправе изменять, обновлять или прекращать работу сервиса в любое время.

3. Аккаунт пользователя
Вы отвечаете за сохранность своего ника и пароля. Запрещено передавать аккаунт третьим лицам, а также выдавать себя за администрацию проекта.

4. Ответственность
Вы используете Клиент на свой риск. Проект не несёт ответственности за блокировки игровых аккаунтов, потерю данных или любой иной ущерб, связанный с использованием Клиента.

5. Обратная связь
По всем вопросам обращайтесь в наш Telegram: https://t.me/neverdieCheat`,

    rules:
`1. Общие правила
Используя Neverdie Client и сайт, вы обязуетесь соблюдать настоящие правила и законодательство вашей страны.

2. Запрещено
— Распространять вредоносное ПО под видом нашего Клиента.
— Продавать, сдавать в аренду или передавать аккаунты третьим лицам.
— Выдавать себя за администрацию или модерацию проекта.
— Спамить и флудить в каналах связи проекта.

3. Ответственность за нарушения
За нарушение правил аккаунт может быть ограничен или заблокирован без предварительного уведомления.

4. Изменения правил
Правила могут обновляться. Актуальная версия всегда публикуется на этой странице.

5. Контакты
По вопросам правил пишите в наш Telegram: https://t.me/neverdieCheat`
  }

};
