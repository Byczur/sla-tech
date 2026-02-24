document.addEventListener('DOMContentLoaded', () => {
  // ── MENU TOGGLE ──────────────────────────────────────────
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // ── ROK W STOPCE ─────────────────────────────────────────
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── TŁUMACZENIA ───────────────────────────────────────────
  const translations = {
    'nav.home':     { pl: 'Strona główna', en: 'Home' },
    'nav.about':    { pl: 'O firmie',      en: 'About us' },
    'nav.products': { pl: 'Produkty',      en: 'Products' },
    'nav.contact':  { pl: 'Kontakt',       en: 'Contact' },

    'index.hero.h1':       { pl: 'Dystrybucja armatury przemysłowej', en: 'Industrial Valve & Fitting Distribution' },
    'index.hero.subtitle': { pl: 'Kompleksowe zaopatrzenie firm',     en: 'Comprehensive supply for businesses' },
    'index.hero.btn':      { pl: 'Zobacz produkty',                   en: 'View products' },
    'index.cta.h3':        { pl: 'Potrzebujesz oferty lub doradztwa?', en: 'Need a quote or technical advice?' },
    'index.cta.p':         { pl: 'Skontaktuj się z nami — przygotujemy ofertę i doradzimy najlepsze rozwiązanie dla Twojej instalacji.', en: 'Contact us — we will prepare a quote and advise the best solution for your system.' },
    'index.cta.btn':       { pl: 'Kontakt', en: 'Contact' },
    'index.partners.h3':   { pl: 'Producenci / Marki', en: 'Manufacturers / Brands' },

    'about.h2': { pl: 'O firmie', en: 'About us' },
    'about.p':  { pl: 'Firma powstała w 2009 roku bazując na doświadczeniu w zakresie projektowania instalacji gazów technicznych, sprzedaży i doradztwie technicznym armatury przemysłowej, w szczególności instrumentalnej oraz na wykonawstwie instalacji gazów technicznych (laboratoryjnych, przemysłowych, kriogenicznych). Zajmujemy się kompleksowym zaopatrzeniem firm i dostarczamy produkty dobrej jakości, w rozsądnej cenie.',
                  en: 'The company was founded in 2009, drawing on experience in the design of technical gas installations, sales and technical consulting for industrial valves — in particular instrument-grade valves — as well as the execution of technical gas installations (laboratory, industrial, and cryogenic). We provide comprehensive supply services for businesses, delivering high-quality products at reasonable prices.' },

    'contact.h2':            { pl: 'Kontakt',          en: 'Contact' },
    'contact.address.label': { pl: 'Adres:',           en: 'Address:' },
    'contact.email.label':   { pl: 'E-mail:',          en: 'E-mail:' },
    'contact.phone.label':   { pl: 'Telefon:',         en: 'Phone:' },
    'contact.nip.label':     { pl: 'NIP:',             en: 'VAT ID:' },
    'contact.form.h3':       { pl: 'Wyślij zapytanie', en: 'Send an enquiry' },
    'contact.form.name':     { pl: 'Imię i nazwisko',  en: 'Full name' },
    'contact.form.company':  { pl: 'Firma',            en: 'Company' },
    'contact.form.email':    { pl: 'E-mail',           en: 'E-mail' },
    'contact.form.phone':    { pl: 'Telefon',          en: 'Phone' },
    'contact.form.message':  { pl: 'Treść zapytania',  en: 'Message' },
    'contact.form.send':     { pl: 'Wyślij',           en: 'Send' },
    'contact.form.clear':    { pl: 'Wyczyść',          en: 'Clear' },

    'products.h2':           { pl: 'Produkty',           en: 'Products' },
    'products.partners.h3':  { pl: 'Producenci / Marki', en: 'Manufacturers / Brands' },
    'products.cta.p':        { pl: 'Chcesz ofertę na konkretne elementy? Prześlij zapytanie z listą części — przygotujemy wycenę.', en: 'Want a quote for specific items? Send us an enquiry with your parts list — we will prepare a valuation.' },
    'products.cta.btn':      { pl: 'Wyślij zapytanie',   en: 'Send enquiry' },

    'tile.zawory.h3':    { pl: 'Zawory', en: 'Valves' },
    'tile.zawory.p':     { pl: 'Kulowe, iglicowe, grzybkowe, zasuwy, membranowe, zwrotne, kriogeniczne, manometryczne, z napędem, bezpieczeństwa, nadmiarowe, upustowe, elektromagnetyczne.', en: 'Ball, needle, globe, gate, diaphragm, check, cryogenic, gauge, actuated, safety, relief, blowdown, and solenoid valves.' },
    'tile.rury.h3':      { pl: 'Rury', en: 'Pipes & Tubes' },
    'tile.rury.p':       { pl: 'Ze stali nierdzewnej, czarnej, miedziane. Ze szwem i bez szwu, w różnych gatunkach i normach DIN, ISO, ASTM.', en: 'Stainless steel, carbon steel, copper. Welded and seamless, in various grades and DIN, ISO, ASTM standards.' },
    'tile.instr.h3':     { pl: 'Armatura instrumentalna (precyzyjna)', en: 'Instrumentation Valves & Fittings' },
    'tile.zlaczki.h3':   { pl: 'Złączki', en: 'Fittings' },
    'tile.zlaczki.p':    { pl: 'Z pierścieniami zaciskowymi, wtykowe, zaciskowe, ze stali nierdzewnej, mosiężne, do gazu, do wody.', en: 'Compression, push-in, clamp, stainless steel, brass, gas and water fittings.' },
    'tile.ksztaltki.h3': { pl: 'Kształtki do spawania, kołnierze, kształtki gwintowane, płaskowniki, kątowniki, profile', en: 'Weld fittings, flanges, threaded fittings, flat bars, angle bars, profiles' },
    'tile.reduktory.h3': { pl: 'Reduktory ciśnienia', en: 'Pressure Regulators' },
    'tile.punkty.h3':    { pl: 'Punkty poboru i stacje rozprężania', en: 'Gas Outlet Points & Pressure Reducing Stations' },
    'tile.manometry.h3': { pl: 'Manometry, czujniki i przetworniki ciśnienia, temperatury', en: 'Pressure gauges, pressure & temperature sensors and transducers' },
    'tile.weze.h3':      { pl: 'Węże', en: 'Hoses' },
    'tile.weze.p':       { pl: 'Stalowe w oplocie, teflonowe, poliuretanowe.', en: 'Stainless braided, PTFE, polyurethane.' },
    'tile.szybko.h3':    { pl: 'Szybkozłączki', en: 'Quick Couplings' },
    'tile.sruby.h3':     { pl: 'Śruby, nakrętki, podkładki, nierdzewne i ocynkowane', en: 'Bolts, nuts, washers — stainless and zinc-plated' },
    'tile.uszczelki.h3': { pl: 'Uszczelki różnego rodzaju', en: 'Seals & Gaskets' },
    'tile.zestawy.h3':   { pl: 'Zestawy naprawcze, zestawy uszczelnień do armatury', en: 'Repair kits, valve seal kits' },

    'footer.copy': { pl: 'SLA-TECH - Wszelkie prawa zastrzeżone.', en: 'SLA-TECH - All rights reserved.' },
  };

  let currentLang = localStorage.getItem('slatech_lang') || 'pl';

  // SVG flagi inline – nie zależą od systemu operacyjnego
  const FLAG_PL = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14" width="22" height="15" style="border-radius:2px;display:block;flex-shrink:0;align-self:center">
    <rect width="20" height="7" fill="#fff"/>
    <rect y="7" width="20" height="7" fill="#dc143c"/>
  </svg>`;

  const FLAG_EN = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="22" height="15" style="border-radius:2px;display:block;flex-shrink:0;align-self:center">
    <clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath>
    <clipPath id="b"><path d="M30 15h30v15zv15H0zH0V0zV0h30z"/></clipPath>
    <g clip-path="url(#a)">
      <path d="M0 0v30h60V0z" fill="#012169"/>
      <path d="M0 0l60 30m0-30L0 30" stroke="#fff" stroke-width="6"/>
      <path d="M0 0l60 30m0-30L0 30" clip-path="url(#b)" stroke="#C8102E" stroke-width="4"/>
      <path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/>
      <path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/>
    </g>
  </svg>`;

  function t(key) {
    const entry = translations[key];
    if (!entry) return '';
    return entry[currentLang] || entry['pl'];
  }

  function getBtnHTML(lang) {
    if (lang === 'pl') {
      return FLAG_EN + '<span>EN</span>';
    } else {
      return FLAG_PL + '<span>PL</span>';
    }
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.innerHTML = getBtnHTML(currentLang);
      btn.setAttribute('aria-label', currentLang === 'pl' ? 'Switch to English' : 'Przełącz na polski');
    });
  }

  function switchLang() {
    currentLang = currentLang === 'pl' ? 'en' : 'pl';
    localStorage.setItem('slatech_lang', currentLang);
    applyTranslations();
  }

  document.querySelectorAll('.main-nav ul').forEach(ul => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'lang-btn';
    btn.innerHTML = getBtnHTML(currentLang);
    btn.setAttribute('aria-label', currentLang === 'pl' ? 'Switch to English' : 'Przełącz na polski');
    btn.addEventListener('click', switchLang);
    li.appendChild(btn);
    ul.appendChild(li);
  });

  applyTranslations();
});
