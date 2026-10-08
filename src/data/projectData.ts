import type { ProjectType } from '../types/ProjectType';

export const projectDataWithoutId: Omit<ProjectType, 'id'>[] = [
  {
    title: 'Bookworm',
    projectType: 'group',
    date: 'September 2026',
    description:
      'Book application built with API integration and frontend development.',
    details:
      'Focus on API integration, user interaction and modern frontend development.',
    image: '/images/bookworm.jpg',
    technologies: ['JavaScript', 'API', 'HTML', 'CSS'],
    projectUrl: 'https://api-assignment-2-eta.vercel.app/index.html',
  },

  {
    title: 'API Projekt - Express & SQL',
    projectType: 'individual',
    date: 'Juni 2026',
    description:
      'Ett robust backend REST API byggt med TypeScript, Express och MySQL för en musikshop, med full CRUD-funktionalitet och en 3NF-normaliserad databasstruktur.',
    details:
      "Detta backend-projekt utvecklades som en individuell examinationsuppgift för att bygga ett komplett och säkert REST API med TypeScript och Node.js. API:et hanterar produkter och kategorier för en e-commerce-musikshop och är kopplat till en molnbaserad MySQL-databas hostad via Aiven. Databasarkitekturen är strikt strukturerad enligt tredje normalformen (3NF) och implementerar en avancerad Many-to-Many-relation mellan produkter och kategorier via en dedikerad länktabell. Applikationen erbjuder fullständig CRUD-funktionalitet för både produkter och kategorier, inbyggd textbaserad sökfunktion på produkttitlar samt stöd för dynamisk sortering och ordning (sort + order) efter pris, namn eller ID. Kodbasen följer mönstret 'separation of concerns' med en ren uppdelning mellan routrar, controllers och databaskonfiguration, skyddad med miljövariabler (.env). Samtliga API-endpoints testades och verifierades löpande i Insomnia, medan tabellstrukturer och datamigrationsfiler (SQL) administrerades i Beekeeper Studio.",
    image: '/images/api-project.jpg',
    technologies: [
      'TypeScript',
      'Node.js',
      'Express',
      'MySQL',
      'REST API',
      'CRUD',
      'Beekeeper Studio',
      'Insomnia',
      'Aiven',
      'dotenv',
    ],
    projectUrl: '/pdfs/api-project-readme.pdf',
  },
  {
    title: 'Negative Space',
    projectType: 'group',
    date: 'Maj 2026',
    description:
      'En responsiv och tematiskt genomarbetad lanseringssida för rymdspelet Negative Space, byggd utifrån en tilldelad designskiss.',
    details:
      'Detta projekt fokuserade på tvärfunktionellt samarbete och pixel-perfekt designimplementering. Som en del av utvecklingsteamet tog jag och min grupp emot en färdig designskiss från en designklass och omsatte den till en funktionell, responsiv onepager. Gränssnittet speglar spelets rymdtema genom kontraster, välbalanserade tomrum (negative space) och en mörkblå färgpalett med livfulla accentfärger. Teknologiskt strukturerades sidan med semantisk HTML5 och avancerad SCSS, där vi kombinerade CSS Grid och Flexbox för att skapa en helt sömlös responsivitet över mobil, surfplatta och desktop. Jag integrerade även JavaScript-logik för att hantera sidans interaktivitet, däribland en dynamisk förbeställnings-popup (Pre-order modal) med validerade inputfält och togglingsfunktioner. Kodbasen optimerades löpande med Vite, ESLint och Prettier för att bibehålla hög kodkvalitet och struktur, vilket verifierades med utmärkta resultat i Lighthouse-analyser för både desktop och mobil.',
    image: '/images/negative-space.jpg',
    technologies: [
      'HTML5',
      'SCSS',
      'JavaScript',
      'Vite',
      'CSS Grid',
      'Flexbox',
      'Responsive Design',
      'ESLint',
      'Prettier',
      'GitHub',
    ],
    projectUrl:
      'https://medieinstitutet.github.io/fed25d-grafiska-verktyg-negative-space',
  },
  {
    title: 'UX Analys',
    projectType: 'individual',
    date: 'April 2026',
    description:
      'En omfattande användarupplevelse- och tillgänglighetsanalys av pensionsmyndigheten.se baserad på WCAG 2.1-riktlinjer och lagkrav.',
    details:
      'Detta projekt genomfördes som en individuell granskningsuppgift inom kursen UX/Usability med fokus på att utvärdera pensionsmyndigheten.se. Genom att etablera tre tydliga målgruppspersonas (den blivande pensionären, den redan pensionerade samt mitt-i-livet-planeraren) analyserades webbplatsens användbarhet, kognitiva belastning och navigationsdjup. Granskningen utgick från gällande lagkrav såsom DOS-lagen, Språklagen och WCAG 2.1-riktlinjerna. I analysen identifierades kritiska brister i målgruppsanpassningen, däribland för låga kontrastförhållanden (bland annat i brödsmulenavigeringen), otillräckliga textstorlekar (10–15px) i löptext och grafik, samt dolda eller otydliga sök- och kontaktvägar. Dessutom utvärderades brister i myndighetens egen tillgänglighetsredogörelse gällande felaktig HTML-struktur, felaktig tabbordning vid tangentbordsnavigering och saknade skärmläsarfunktioner. Rapporten sammanställdes till en presentation med konkreta design- och strukturella förbättringsförslag för att skapa en tryggare digital miljö för användare med nedsatt syn eller begränsad digital vana.',
    image: '/images/ux-review.jpg',
    technologies: [
      'UX/UI',
      'WCAG 2.1',
      'DOS-lagen',
      'Usability Testing',
      'Personas',
      'Target Group Analysis',
      'Web Accessibility',
    ],
    projectUrl: '/pdfs/ux-review.pdf',
  },
  {
    title: 'Rädda Solen',
    projectType: 'group',
    date: 'Feb/Mars 2026',
    description:
      "Ett rymdbaserat 'escape room'-webbspel utvecklat i team, där spelaren löser unika minispel på varje planet för att rädda solsystemet.",
    details:
      "Detta projekt utvecklades som ett agilt grupparbete i kurserna JavaScript och Agila metoder. Spelet är ett rymdbaserat escape room där spelaren navigerar genom solsystemets planeter för att stoppa ett hot mot solen, med global timer, poängräkning och en highscore-lista via LocalStorage. Som utvecklare i teamet bar jag huvudansvaret för design och programmering av spelets första spelmoment: Memory-spelet på planeten Uranus. Den tekniska logiken för memoryt byggdes helt i TypeScript för att säkerställa att maximalt två kort kan vändas samtidigt. Jag implementerade strikt asynkron hantering (timers) för kortvändningen samt ett låsningssystem (state lock) som förhindrar användaren från att klicka på ytterligare kort under tiden de två valda korten valideras och vänds tillbaka. För att garantera god tillgänglighet (Accessibility) skapade jag helt egna unika SVG-vektorbilder för planetkorten och integrerade fullt tangentbordsstöd med tydliga visuella fokusindikatorer (highlights) runt korten vid tab-navigering. Projektet innehåller även ett dolt påskägg ('hemligt hack') där fem klick på titeln rensar webbläsarens LocalStorage.",
    image: '/images/radda-solen.jpg',
    technologies: [
      'TypeScript',
      'JavaScript',
      'Vite',
      'HTML5',
      'CSS3',
      'SVG',
      'LocalStorage',
      'Agile Methods',
      'GitHub',
    ],
    projectUrl:
      'https://helena-gustafsson.github.io/FED2025D_grupparbete_spel_radda_solen/',
  },
  {
    title: 'Budget App',
    projectType: 'individual',
    date: 'Februari 2026',
    description:
      'En funktionell budgetapplikation i TypeScript med LocalStorage, realtidsbalansering och 100% i betyg på Lighthouse över samtliga kategorier.',
    details:
      "Denna applikation utvecklades med fokus på strikt typning i TypeScript och tillgänglighet. Genom ett kundanpassat gränssnitt kan användaren registrera inkomster och utgifter via dropdown-kategorier och fritextfält, där utgifter automatiskt normaliseras till negativa värden. All data sparas och raderas synkront mot webbläsarens LocalStorage med ett fullständigt typat interface (IBudgetItem). Sidan formaterar alla valutor dynamiskt enligt svensk standard (två decimaler och tusentalsavgränsare) samt ger omedelbar visuell och textuell feedback baserat på användarens balans: ramen runt totalen skiftar färg (röd för negativ, grön för positiv) och villkorliga varnings- eller bekräftelsemeddelanden renderas dynamiskt. En global 'Radera allt'-funktion har implementerats med inbyggd säkerhetsbekräftelse (confirm box). Projektet uppfyller extremt höga krav på tillgänglighet genom användning av 'aria-live=\"polite\"' för dynamiska uppdateringar och klassen 'sr-only' för skärmläsarspecifik information, vilket resulterade i ett perfekt 100-resultat på Lighthouse i samtliga fyra testkategorier.",
    image: '/images/budget-app.jpg',
    technologies: [
      'TypeScript',
      'JavaScript',
      'LocalStorage',
      'Sass',
      'Vite',
      'Web Accessibility',
      'Lighthouse',
      'ESLint',
      'Prettier',
    ],
    projectUrl:
      'https://medieinstitutet.github.io/fed25d-js-inl-2-budget-app-Helena-Gustafsson',
  },
  {
    title: 'Munkshoppen',
    projectType: 'individual',
    date: 'Januari 2026',
    description:
      'En interaktiv och responsiv webbshop för munkar med avancerad varukorgslogik, realtidsvalidering och dynamiska specialregler.',
    details:
      'Detta projekt utvecklades som en examinationsuppgift inom JavaScript-introduktionen och fokuserar på avancerad DOM-manipulation, UI-flöden och händelsehantering. Applikationen hanterar 12 unika produkter fördelade på tre kategorier med stöd för mångsidig filtrering och sortering (namn, pris, betyg). Varukorgen beräknar dynamiskt fraktkostnader samt tillämpar specialregler: fraktfritt vid köp över 15 munkar, automatisk blockering av fakturabetalning vid ordersummor över 800 kr, samt en 15-minuters sessionstimer som rensar beställningen om användaren är för långsam. Kundformuläret är fullt validerat med hjälp av reguljära uttryck (Regex) som triggas när användaren lämnar ett fält (blur), och skicka-knappen aktiveras först när alla obligatoriska fält samt GDPR-godkännandet är uppfyllda. Visuell feedback har implementerats genom en tillfällig bakgrundsfärgändring i 1 sekund vid varje varukorgsuppdatering. Gränssnittet är helt responsivt och strukturerat med Sass, samt optimerat för tillgänglighet (Accessibility) enligt Lighthouse och HTML/CSS-validering.',
    image: '/images/munkshoppen.jpg',
    technologies: [
      'JavaScript',
      'Sass',
      'HTML5',
      'CSS3',
      'Vite',
      'Regex',
      'Lighthouse',
      'GitHub Pages',
    ],
    projectUrl:
      'https://helena-gustafsson.github.io/FED25D-inl-1-JS-Munkshoppen/',
  },
  {
    title: 'Portfolio - HTML/CSS',
    projectType: 'individual',
    date: 'December 2025',
    description:
      'Min allra första personliga portfoliosida byggd från grunden med fokus på semantisk HTML, CSS-layout och fullständig tillgänglighet.',
    details:
      'Detta projekt var den första examinationsuppgiften under utbildningen och fokuserade på att lägga grunden inom webbutveckling med ren HTML5 och CSS3. Sidan är uppbyggd med en strikt semantisk struktur bestående av header med navigation, en huvudsektion (main) för projektpresentationer, ett sidofält (aside) för kontaktuppgifter samt en tillhörande sidfot. Projektet inkluderar ett omfattande kontaktformulär med avancerade fälttyper som dropdown-menyer, kryssrutor och textareor, konfigurerat för att förhindra standard-skickning enligt specifikation. Gränssnittet utvecklades med ett sömlöst, responsivt flyt anpassat för mobil, surfplatta och desktop. Stort fokus lades på kodkvalitet och tillgänglighet, vilket resulterade i felfria valideringar hos W3C (både HTML och CSS) samt 100% i betyg på Chrome Lighthouse Accessibility-analys.',
    image: '/images/portfolio-html-css.jpg',
    technologies: [
      'HTML5',
      'CSS3',
      'Responsive Design',
      'Semantic HTML',
      'Web Accessibility',
      'Lighthouse',
      'W3C Validator',
      'GitHub Pages',
    ],
    projectUrl:
      'https://helena-gustafsson.github.io/FED25D-HTML-CSS-inl-1-portfolio-Helena-Gustafsson',
  },
  {
    title: "Helena's Katthem",
    projectType: 'individual',
    date: 'Augusti 2025',
    description:
      'Mitt allra första webbprojekt byggt som ett antagningsprov inför utbildningen, med fokus på grundläggande HTML, CSS och responsivitet.',
    details:
      'Detta projekt skapades som examinationsprov under preparandkursen i webbutveckling, helt innan den ordinarie Frontend-utbildningen startade. Sidan är ett fiktivt katthem utvecklat med ren HTML5 och CSS3 för att visa förståelse för grundläggande layouttekniker och responsiv design. Gränssnittet anpassar sig för olika skärmstorlekar och innehåller ett sök- och filtreringsgränssnitt för att sortera katter baserat på kön och hårlängd. Att ha med detta projekt i min portfolio fungerar som en visuell tidslinje som tydligt demonstrerar min branta utvecklingskurva och mitt starka, inneboende driv för webbdesign och frontendutveckling redan innan mina akademiska studier påbörjades.',
    image: '/images/helenas-katthem.jpg',
    technologies: ['HTML5', 'CSS3', 'Responsive Design', 'Layout Structuring'],
    projectUrl:
      'https://helena-gustafsson.github.io/FED205D-Preparand-Kurs-Prov-Webutveckling-1---Helenas-Katthem-/',
  },
];

export const projectData: ProjectType[] = projectDataWithoutId.map(
  (project, indexId) => ({
    ...project,
    id: indexId + 1, // indexId 0 blir ID 1, indexId 1 blir ID 2, osv.
  }),
);
