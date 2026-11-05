// Zentrale Inhalte & Kontaktdaten – hier ändern, wirkt auf der ganzen Seite.

export const practice = {
  name: 'Mirko Birnstein, MSc',
  shortName: 'Mirko Birnstein',
  tagline: 'Praxis für Psychotherapie',
  method: 'Integrative Therapie',
  street: 'Puchheimergasse 15',
  zip: '2851',
  city: 'Krumbach',
  country: 'AT',
  phoneDisplay: '0680 140 97 97',
  phoneHref: 'tel:+436801409797',
  email: 'office@mirko-birnstein.at',
  url: 'https://www.mirko-birnstein.at',
  geo: { lat: 47.52157, lon: 16.1938 },
  appointmentNote: 'Termine nach telefonischer Voranmeldung',
} as const;

export interface NavItem {
  href: string;
  label: string;
}

export const nav: NavItem[] = [
  { href: '/', label: 'Psychotherapie' },
  { href: '/ueber-mich/', label: 'Über mich' },
  { href: '/rahmenbedingungen/', label: 'Ablauf & Kosten' },
  { href: '/kontakt/', label: 'Kontakt' },
];

export interface Focus {
  icon: IconName;
  title: string;
  text?: string;
}

export const focusAreas: Focus[] = [
  { icon: 'link', title: 'Sucht & Abhängigkeit', text: 'Abhängigkeitserkrankungen – diesbezüglich auch Angehörigenarbeit' },
  { icon: 'shield', title: 'Trauma & Belastung', text: 'Traumafolgen und Belastungsstörungen' },
  { icon: 'wind', title: 'Angst & Panik', text: 'Angststörungen und Panikattacken' },
  { icon: 'sun', title: 'Depression', text: 'Depressionen und depressive Verstimmungen' },
  { icon: 'compass', title: 'Sinn & Sinnfindung', text: 'Orientierung in Lebensfragen und Umbruchphasen' },
  { icon: 'battery', title: 'Stress & Erschöpfung', text: 'Überlastung, Stress und Erschöpfungszustände' },
  { icon: 'star', title: 'Selbstwert', text: 'Selbstwertproblematiken und Selbstzweifel' },
];

export interface CareerItem {
  period: string;
  title: string;
  place?: string;
}

export const career: CareerItem[] = [
  {
    period: 'seit 2024',
    title: 'Psychotherapeutische Regionalleitung',
    place: '„Grüner Kreis“ – Verein zur Rehabilitation und Integration suchtkranker Menschen',
  },
  {
    period: 'seit 2017',
    title: 'Psychotherapeutische Einrichtungsleitung „Meierhof“',
    place: '„Grüner Kreis“ – Verein zur Rehabilitation und Integration suchtkranker Menschen',
  },
  { period: '2017 – 2018', title: 'Weiterbildungscurriculum Traumafolgentherapie' },
  {
    period: '2013 – 2017',
    title: 'Psychotherapeutische Anstellung',
    place: '„Grüner Kreis“ – Verein zur Rehabilitation und Integration suchtkranker Menschen',
  },
  {
    period: '2010 – 2015',
    title: 'Psychotherapeutisches Fachspezifikum „Integrative Therapie“',
    place:
      'Donau-Universität Krems, Fakultät für Gesundheit und Medizin. Eingetragen in die PsychotherapeutInnenliste des Gesundheitsministeriums.',
  },
  { period: '2010 – 2012', title: 'Psychologisch-psychotherapeutische Ambulanz', place: 'Geriatriezentrum am Wienerwald' },
  {
    period: '2009 – 2012',
    title: '„Balance“',
    place: 'Verein für Integration und Chancengleichheit von Menschen mit Behinderung',
  },
  {
    period: '2008 – 2013',
    title: 'Sozialpädagogische Wohneinrichtung für Kinder und Jugendliche',
  },
  {
    period: '2008 – 2010',
    title: 'Psychotherapeutisches Propädeutikum',
    place: 'Österreichischer Arbeitskreis für Gruppentherapie und Gruppendynamik',
  },
  { period: '', title: 'Matura', place: 'Bundeshandelsakademie Mattersburg' },
  { period: '1986', title: 'Geboren' },
];

export const prices = [
  { title: 'Erstgespräch', duration: '50 Minuten', price: '100,00 €' },
  { title: 'Einzeltherapie', duration: '50 Minuten', price: '100,00 €' },
] as const;

export const insurers = [
  {
    name: 'ÖGK',
    long: 'Österreichische Gesundheitskasse (vormals GKK)',
    amount: '33,70 €',
    href: 'https://www.gesundheitskasse.at/cdscontent/?contentid=10007.870224&portal=oegkportal',
  },
  {
    name: 'BVAEB',
    long: 'vormals BVA- und VAEB-Versicherte',
    amount: '48,80 €',
    href: 'https://www.bvaeb.at/cdscontent/?contentid=10007.860182&portal=bvaebbportal&portalTargetGroup=esv_content_sibling_a',
  },
  {
    name: 'SVS',
    long: 'vormals SVA- und SVB-Versicherte',
    amount: '45,00 €',
    href: 'https://www.svs.at/cdscontent/?contentid=10007.856556&portal=svsportal',
  },
] as const;

export type IconName =
  | 'phone'
  | 'mail'
  | 'pin'
  | 'clock'
  | 'arrow'
  | 'check'
  | 'heart'
  | 'shield'
  | 'wind'
  | 'sun'
  | 'compass'
  | 'battery'
  | 'star'
  | 'link'
  | 'menu'
  | 'close'
  | 'external'
  | 'euro'
  | 'chat'
  | 'lock'
  | 'calendar'
  | 'leaf';
