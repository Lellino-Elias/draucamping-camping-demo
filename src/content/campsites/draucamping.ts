import type { CampsiteConfig } from "../types";

/**
 * Draucamping Sachsenburg & Mobile Homes — Sachsenburg, Oberes Drautal, Kärnten.
 * Alle Texte/Fakten/Preise belegt aus draucamping.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Draucamping-Fotos in /public/campsites/draucamping/.
 * EHRLICH: der Platz liegt DIREKT AM UFER DER DRAU (Fluss) — KEIN See am Platz, daher
 * KEIN `see`-Feld; nahe Badeseen (Millstätter See ~15 Aut.-Min., Weißensee ~25 Aut.-Min.)
 * nur als Ausflug geframt. Reale Preisliste 2026 vorhanden → keine Platzhalter.
 * ADAC-Auszeichnung der Sanitäranlagen ist auf der Quelle ausdrücklich genannt → awards.
 * Koordinaten aus der eingebetteten Google-Karte der Quelle (im REPORT zur Bestätigung markiert).
 */
const IMG = "/campsites/draucamping";

export const draucamping: CampsiteConfig = {
  name: "Draucamping Sachsenburg & Mobile Homes",
  shortName: "Draucamping",
  slug: "draucamping",
  ort: "Sachsenburg",
  region: "Kärnten",
  brandKind: "Camping & Mobilhomes",
  // KEIN `see`: der Platz liegt am Fluss Drau, nicht an einem See.
  regionLong: "Oberes Drautal · Kärnten · Österreich",

  claim: "Campingurlaub am Ufer der Drau – im Herzen von Bergen und Seen",
  claimEmphasis: "im Herzen von Bergen und Seen",
  intro:
    "Unser familienfreundlicher Campingplatz liegt zentral und doch ruhig direkt am Ufer der Drau in Sachsenburg – mit großzügigen XL-Stellplätzen, 11 Mobilhomes und 4 Wood Cubes, mitten in Kärntens schönster Natur zwischen Drautal, Bergen und Seen.",

  statement: {
    text: "Unser Campingplatz ist die Wohlfühloase unter den Campingplätzen.",
    emphasis: "Wohlfühloase",
  },

  pillars: [
    {
      title: "Direkt am Ufer der Drau",
      text:
        "Zentral und doch ganz ruhig: Der Platz liegt unmittelbar am größten Fluss Kärntens – mit eigener Bootslandebucht und direkter Ein- und Ausstiegsmöglichkeit hinter dem Gelände.",
      image: { src: `${IMG}/drau-fluss.webp`, alt: "Die Drau bei Sachsenburg mit Paddlern am Ufer" },
    },
    {
      title: "Direkt am Drauradweg",
      text:
        "Sachsenburg liegt mitten im Kärntner Radwege-Netz: Von hier starten einige der schönsten Radtouren Österreichs – über den Drauradweg nach Villach oder Lienz.",
      image: { src: `${IMG}/drauradweg-familie.webp`, alt: "Familie beim Radfahren am Drauradweg" },
    },
    {
      title: "Berge & Seen ringsum",
      text:
        "Eingebettet von Kreuzeckgruppe und Gailtaler Alpen, mit Millstätter See und Weißensee in kurzer Fahrt – ideales Tor zum Oberen Drautal für Genießer, Aktive und Familien.",
      image: { src: `${IMG}/drautal-panorama.webp`, alt: "Blick über Sachsenburg und das Drautal mit Bergen" },
    },
  ],

  usps: [
    "Großzügige XL-Stellplätze am Ufer der Drau",
    "Strom, SAT-TV & WLAN inklusive",
    "Direkt am Drauradweg",
    "Erlebnis-Schwimmbad gratis (ca. 10 Gehmin.)",
    "Tennis, Spielplatz & Ballplatz inklusive",
    "ADAC-ausgezeichnete Sanitäranlagen",
  ],

  trust: {
    heading: "Worauf du dich bei uns verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Eine ruhige, zentrale Lage direkt an der Drau, faire Preise mit Strom, Warmwasser, SAT, WLAN, Schwimmbad und Tennis inklusive und vom ADAC besonders ausgezeichnete Sanitäranlagen – von unseren Gästen bei Google mit 4,6 von 5 Sternen bewertet.",
  },

  // Auf der Quelle ausdrücklich genannt: Sanitäranlagen „vom ADAC besonders ausgezeichnet".
  awards: [{ label: "ADAC-Auszeichnung für die Sanitäranlagen" }],

  saison: { von: "April", bis: "September" },

  hero: {
    aerial: {
      src: `${IMG}/hero-luftaufnahme-drau.webp`,
      alt: "Luftaufnahme: Draucamping Sachsenburg am Ufer der Drau mit Bergen ringsum",
    },
    sunset: {
      src: `${IMG}/hero-drauradweg-sonnenuntergang.webp`,
      alt: "Radfahrer am Drauradweg bei Sonnenuntergang nahe Sachsenburg",
    },
  },

  camping: {
    heading: "Camping am Ufer der Drau",
    intro:
      "Großzügige, attraktive XL-Stellplätze auf gepflegtem Gelände direkt an der Drau – alle mit Strom- und TV-Satellitenanschluss sowie freiem WLAN. Campingurlaub im Einklang mit der Natur, wie er sein soll.",
    features: [
      {
        title: "XL-Stellplätze direkt an der Drau",
        text:
          "Großzügige, ebene Stellplätze auf grünem Wiesengelände, umgeben von Bergen – Platz und Ruhe für Wohnmobil, Wohnwagen und Zelt.",
        image: { src: `${IMG}/stellplaetze-wiese.webp`, alt: "Wiesen-Stellplätze mit Wohnwagen am Draucamping vor Bergen" },
      },
      {
        title: "Strom, SAT-TV & WLAN inklusive",
        text:
          "Jeder Stellplatz verfügt über Strom- und TV-Satellitenanschluss sowie freien WLAN-Zugang – alles im Preis enthalten.",
        image: { src: `${IMG}/stellplaetze-familie.webp`, alt: "Familiäres Stellplatz-Gelände am Draucamping" },
      },
      {
        title: "ADAC-ausgezeichnete Sanitäranlagen",
        text:
          "Moderne, vom ADAC besonders ausgezeichnete Sanitäreinrichtungen – zusätzlich mit Kleinkinderbadewanne und Wickeltischen für Familien.",
        image: { src: `${IMG}/sanitaeranlagen.webp`, alt: "Moderne Sanitäranlagen am Draucamping Sachsenburg" },
      },
      {
        title: "Aufenthaltsraum mit Leseecke",
        text:
          "Gemütlicher Aufenthaltsraum mit Leseecke, Indoor-Tischtennis und Tischfußball – der ideale Treffpunkt an Regentagen.",
        image: { src: `${IMG}/aufenthaltsraum.webp`, alt: "Aufenthaltsraum mit Leseecke am Draucamping" },
      },
      {
        title: "Eigene Bootslandebucht",
        text:
          "Direkt hinter dem Platz liegt die eigene Bootslandebucht mit Ein- und Ausstieg zur Drau – dazu ein absperrbarer Rad-Abstellraum.",
        image: { src: `${IMG}/bootslandebucht.webp`, alt: "Paddler am Draucamping mit Booten und der historischen Ringmauer" },
      },
      {
        title: "Zentral & barrierefrei",
        text:
          "Geschäfte, Gasthäuser, Bankomat und Bahnhof sind zu Fuß erreichbar. Stufenlose Eingänge, breite Gänge und spezielle Sanitärräume ermöglichen auch einen barrierefreien Aufenthalt.",
        image: { src: `${IMG}/empfang-gebaeude.webp`, alt: "Empfangsgebäude des Draucamping Sachsenburg" },
      },
    ],
  },

  mobilheime: {
    heading: "Mobilhomes & Wood Cubes",
    intro:
      "Lieber feste Wände statt Zelt? Auf einem eigenen Bereich des Platzes stehen 11 Mobilhomes und – seit 2022 – 4 Wood Cubes bereit, mit allem Komfort und allen Leistungen des Campingplatzes.",
    items: [
      {
        name: "Mobilhome",
        kind: "für bis zu 4 Erw. + 2 Kinder · 24,20 m²",
        text:
          "Zwei getrennte Schlafzimmer (Doppelbett 160×200 und zwei Einzelbetten) plus zusätzliche Schlafbank im Wohnraum, voll ausgestattete Küche, Bad mit Dusche/WC, SAT-TV, Heizung und Klimaanlage – dazu eine halbüberdachte Holzterrasse.",
        image: { src: `${IMG}/mobilhome-aussen.webp`, alt: "Mobilhome mit Holzterrasse am Draucamping Sachsenburg" },
        priceFrom: 105,
        features: ["max. 4 Erw. + 2 Kinder", "24,20 m² + 9 m² Terrasse", "Küche · Bad · Klimaanlage"],
      },
      {
        name: "Wood Cube",
        kind: "Holz-Chalet · seit 2022",
        text:
          "Gemütliche Holzunterkunft, 2022 aus überwiegend regionalem Holz errichtet – mit eigener Holzterrasse, Schlaf- und Wohnbereich und Blick ins Grüne. Es gelten alle Leistungen des Campingplatzes.",
        image: { src: `${IMG}/woodcube-aussen.webp`, alt: "Wood Cubes aus Holz mit Terrassen am Draucamping" },
        priceFrom: 120,
        features: ["aus regionalem Holz", "eigene Holzterrasse", "errichtet 2022"],
      },
    ],
  },

  kinder: {
    heading: "Für Familien & Kinder",
    intro:
      "Langeweile ist hier ein Fremdwort: großzügiger Kinderspielplatz, Ball- und Tennisplatz, das beheizte Erlebnis-Schwimmbad mit Rutsche und Indoor-Spiele für jedes Wetter.",
    features: [
      {
        title: "Kinderspielplatz",
        text:
          "Auf dem großzügigen Kinderspielplatz mit Rutsche, Schaukel und Spielgeräten können sich die kleinen Gäste nach Herzenslust austoben.",
        image: { src: `${IMG}/kinderspielplatz.webp`, alt: "Kinderspielplatz am Draucamping Sachsenburg" },
      },
      {
        title: "Erlebnis-Schwimmbad mit Rutsche",
        text:
          "Der Eintritt in das nur ca. 10 Gehminuten entfernte, beheizte Erlebnis-Schwimmbad ist für unsere Campinggäste kostenlos – inklusive Wasserrutsche.",
        image: { src: `${IMG}/schwimmbad-rutsche.webp`, alt: "Wasserrutsche im Erlebnis-Schwimmbad bei Sachsenburg" },
      },
      {
        title: "Indoor-Spiel & Tischtennis",
        text:
          "Im Aufenthaltsraum warten Indoor-Tischtennis, Tischfußball und eine Leseecke – Spielspaß auch an Regentagen.",
        image: { src: `${IMG}/tischtennis.webp`, alt: "Kinder beim Indoor-Tischtennis am Draucamping" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv im Oberen Drautal",
    intro:
      "Die Drau, die nahen Seen und Berge, Radwege und Ortschaften sorgen für die perfekte Balance zwischen Action und Ausgleich – ideal für Genießer, Aktive und Familien.",
    items: [
      {
        title: "Radfahren am Drauradweg",
        text:
          "Direkt am Drauradweg gelegen – mit Touren nach Villach und Lienz, Anschluss an Glocknerradweg R8 und Maltatalradweg R9, E-Bike-Ladestation, Rad-Service und 1× wöchentlich geführter Radtour.",
        image: { src: `${IMG}/radfahren-drau.webp`, alt: "Radfahrer an der Drau bei Sachsenburg" },
      },
      {
        title: "Paddeln auf der Drau",
        text:
          "Der Drau-Paddelweg bietet auf 11 Etappen über 210 km Paddelgenuss. Direkt hinter dem Platz liegt der Ein- und Ausstieg – Kanu, Kajak und SUP sowie Kurse über das Paddel-Center.",
        image: { src: `${IMG}/paddeln-drau.webp`, alt: "Kajakfahrer auf der Drau bei Sachsenburg" },
      },
      {
        title: "Wandern & Bergerlebnis",
        text:
          "Sportberg Goldeck, Großglockner, Malta Hochalmstraße, Mölltaler Gletscher, Nockalmstraße sowie die Nationalparks Hohe Tauern und Nockberge – dazu 1× wöchentlich eine geführte Wanderung.",
        image: { src: `${IMG}/wandern-bergblick.webp`, alt: "Bergblick über Sachsenburg im Drautal" },
      },
      {
        title: "Erlebnis-Schwimmbad",
        text:
          "Das beheizte Erlebnis-Schwimmbad liegt nur rund 10 Gehminuten entfernt und ist für unsere Campinggäste kostenlos – Badespaß mit Bergpanorama.",
        image: { src: `${IMG}/erlebnisbad.webp`, alt: "Beheiztes Erlebnis-Schwimmbad bei Sachsenburg mit Bergen" },
      },
      {
        title: "Kultur & Kulinarik",
        text:
          "Gasthäuser, Bäckerei, Geschäfte und Bahnhof liegen in unmittelbarer Nähe. Die Shopping- und Komödienstadt Spittal an der Drau ist nur ca. 15 Autominuten entfernt.",
        image: { src: `${IMG}/kulinarik-ort.webp`, alt: "Gemütliches Gasthaus im Ortskern von Sachsenburg am Abend" },
      },
      {
        title: "Ausflüge in die Region",
        text:
          "Heiligenblut mit dem Großglockner, die Bergwelt des Maltatals und die Nationalparks bieten sich für Familienausflüge an – Italien, Slowenien und die Dolomiten sind als Tagesausflug erreichbar.",
        image: { src: `${IMG}/ausfluege-ort.webp`, alt: "Historischer Marktplatz von Sachsenburg im Drautal" },
      },
    ],
  },

  anreise: {
    heading: "So erreichst du uns",
    modes: [
      {
        title: "Mit dem Auto",
        text:
          "Bequem über das Obere Drautal erreichbar – Spittal an der Drau liegt nur rund 15 Autominuten entfernt; von dort weiter nach Sachsenburg, Ringmauergasse 8.",
      },
      {
        title: "Mit Bahn & Bus",
        text:
          "Der Bahnhof liegt in unmittelbarer Nähe und ist zu Fuß erreichbar – die Anreise mit den ÖBB ist bequem möglich.",
      },
      {
        title: "Mit dem Rad",
        text:
          "Direkt am Drauradweg gelegen – ideal für die Anreise per Fahrrad. Ein absperrbarer Rad-Abstellraum und ein Rad-Service stehen bereit.",
      },
    ],
  },

  galerie: {
    heading: "Ein Platz zum Wohlfühlen",
    headingEmphasis: "Wohlfühlen",
    intro:
      "Die Drau vor der Tür, Berge ringsum, moderne Mobilhomes und Wood Cubes und das Erlebnis-Schwimmbad gleich nebenan – ein paar Eindrücke vom Draucamping Sachsenburg.",
    tag: "April bis September",
    moreCount: 24,
    images: [
      { src: `${IMG}/galerie-schwimmbad.webp`, alt: "Erlebnis-Schwimmbad bei Sachsenburg mit Blumen und Bergen" },
      { src: `${IMG}/galerie-mobilhomes-luft.webp`, alt: "Luftaufnahme der Mobilhomes und Wood Cubes am Draucamping" },
      { src: `${IMG}/galerie-woodcube-innen.webp`, alt: "Wohnbereich eines Wood Cube am Draucamping" },
      { src: `${IMG}/galerie-dorffest.webp`, alt: "Dorffest mit Musik im Markt Sachsenburg" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wähle Zeitraum, Unterkunft und Personen – wir melden uns mit deiner persönlichen Verfügbarkeit. Buchung und Anfrage ganz unkompliziert per E-Mail.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise Vor-/Nachsaison 2026 (15.04.–30.06. & 01.09.–30.09.) · Stellplatz für 2 Erw., jede weitere Person € 10/Nacht · Bikertarif (2 Erw., Campingausrüstung am Rad) € 22/Nacht · Hauptsaison (01.07.–31.08.) höher · zzgl. Ortstaxe € 2,20 p. P./Nacht ab 18 J.",
    highlight: {
      title: "Strom, SAT & WLAN inklusive",
      text:
        "Im Stellplatzpreis sind Strom, Warmwasser, SAT, WLAN sowie die Benützung von Schwimmbad und Tennisplatz und die geführten Touren enthalten – nur die Ortstaxe kommt hinzu.",
    },
    categories: [
      // Reale Preisliste 2026 draucamping.at: Stellplatz 2 Erw. Vorsaison € 30 / Hauptsaison € 38, jede weitere Pers. € 10/€ 14.
      { id: "stellplatz", label: "Stellplatz (2 Pers.)", perNight: 30, perExtraGuest: 10 },
      // Mobilhome: Vor-/Nachsaison € 105 / Hauptsaison € 125 (pro Nacht und Mobilhome).
      { id: "mobilhome", label: "Mobilhome", perNight: 105 },
      // Wood Cube: Vor-/Nachsaison € 120 / Hauptsaison € 145 (pro Nacht und Wood Cube).
      { id: "woodcube", label: "Wood Cube", perNight: 120 },
    ],
  },

  kontakt: {
    tel: "+43 680 150 4656",
    telHref: "tel:+436801504656",
    mail: "marketing@draucamping.at",
    adresse: "Ringmauergasse 8 · 9751 Sachsenburg · Kärnten",
    coords: { lat: 46.8286716, lng: 13.3475407 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "XL-Stellplätze", href: "#camping" },
        { label: "Sanitäranlagen", href: "#camping" },
        { label: "Aufenthaltsraum", href: "#camping" },
      ],
    },
    {
      label: "Mobilhomes",
      href: "#mobilheime",
      children: [
        { label: "Mobilhomes", href: "#mobilheime" },
        { label: "Wood Cubes", href: "#mobilheime" },
        { label: "Preise", href: "#booking" },
      ],
    },
    {
      label: "Familie",
      href: "#kinder",
      children: [
        { label: "Kinderspielplatz", href: "#kinder" },
        { label: "Erlebnis-Schwimmbad", href: "#kinder" },
        { label: "Indoor-Spiele", href: "#kinder" },
      ],
    },
    {
      label: "Aktiv",
      href: "#aktivitaeten",
      children: [
        { label: "Drauradweg", href: "#aktivitaeten" },
        { label: "Paddeln auf der Drau", href: "#aktivitaeten" },
        { label: "Wandern & Berge", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default draucamping;
