/*
 * ============================================
 *  TRIP DOWN MEMORY LANE - Configuratie
 * ============================================
 *
 *  HOE VUL JE DIT IN?
 *  ==================
 *
 *  1. STOPS: Pas de stops hieronder aan. Je kunt er zoveel toevoegen
 *     als je wilt. Kopieer een volledig stop-blok en pas de gegevens aan.
 *     Zorg dat de 'id' nummers oplopen (1, 2, 3, ...).
 *
 *  2. VIDEO'S: Zet MP4 bestanden in de map assets/videos/
 *     en verwijs ernaar met het pad, bijv. "assets/videos/stop1.mp4"
 *     Laat leeg ("") als de video nog niet klaar is.
 *
 *  3. VRAGEN: Elke stop kan meerdere vragen hebben.
 *     Per vraag geef je op:
 *       - text:   de vraagtekst
 *       - answer: het juiste antwoord (voor normale vragen)
 *       - hint:   (optioneel) een hint die getoond wordt bij het antwoord
 *
 *     Het antwoord wordt NIET hoofdlettergevoelig vergeleken,
 *     en kleine typfouten worden door de vingers gezien.
 *
 *     MULTI-ANTWOORD VRAGEN (type: "multi"):
 *     Voor vragen zoals "noem zoveel mogelijk..." gebruik je:
 *       - type:    "multi"
 *       - answers: ["antwoord1", "antwoord2", ...] (array van goede antwoorden)
 *     De spelers typen antwoorden gescheiden door komma's of enters.
 *     Elk goed antwoord telt als punt.
 *
 *  VOORBEELD STOP:
 *  {
 *    id: 1,
 *    title: "De naam van de stop",
 *    address: "Straatnaam 12, Plaatsnaam",
 *    description: "Een korte beschrijving voor als ze aankomen.",
 *    video: "assets/videos/stop1.mp4",
 *    questions: [
 *      {
 *        text: "In welk jaar was dit?",
 *        answer: "1985",
 *        hint: "Het was het jaar dat Live Aid plaatsvond!"
 *      }
 *    ]
 *  }
 */

const CONFIG = {
  // Namen en jubileum
  couple: {
    name1: "Wilma",
    name2: "Kees",
    years: 40
  },

  // De stops op de route
  stops: [
    {
      id: 1,
      title: "Waar het allemaal begon",
      address: "Adres stop 1, Tilburg",
      description: "De plek waar Wilma en Kees elkaar voor het eerst ontmoetten.",
      video: "",  // bijv. "assets/videos/stop1.mp4"
      questions: [
        {
          text: "In welk jaar ontmoetten jullie elkaar voor het eerst?",
          answer: "1983",
          hint: "Jullie kennen elkaar al langer dan je denkt!"
        }
      ]
    },
    {
      // === NIEUWE STOP - VUL HIERONDER AAN ===
      id: 2,
      title: "TODO: Titel nieuwe stop",
      address: "TODO: Adres nieuwe stop",
      description: "TODO: Beschrijving nieuwe stop.",
      video: "",  // bijv. "assets/videos/stop2.mp4"
      questions: [
        {
          text: "TODO: Vraag voor nieuwe stop?",
          answer: "TODO",
          hint: ""
        }
      ]
    },
    {
      id: 3,
      title: "Het eerste afspraakje",
      address: "Adres stop 3, Tilburg",
      description: "Hier hadden Wilma en Kees hun allereerste date.",
      video: "",
      questions: [
        {
          text: "Wat deden jullie op jullie eerste afspraakje?",
          answer: "Bioscoopje",
          hint: ""
        }
      ]
    },
    {
      id: 4,
      title: "Textielmuseum",
      address: "Goirkestraat 96, Tilburg",
      description: "Een stukje historie van jullie stad",
      video: "assets/videos/stop4.mp4",
      questions: [
        {
          text: "Wat gebeurde er met de fiets van elk paaltje?",
          answer: "Kapot",
          hint: "Kaduuk"
        },
        {
          text: "Wat was Wilma met het weekendje weg met de kids vergeten?",
          answer: "Pyjama",
          hint: "Je slaapt erin"
        },
        {
          text: "Bij welke winkel is de E-bike gestolen?",
          answer: "Action",
          hint: "Goedkoop"
        }
      ]
    },
    {
      id: 5,
      title: "De trouwlocatie",
      address: "Adres stop 5, Oisterwijk",
      description: "Hier gaven Wilma en Kees elkaar het ja-woord.",
      video: "",
      questions: [
        {
          text: "Noem zoveel mogelijk winkels op!",
          type: "multi",
          answers: [
            "Bertens van Iersel",
            "slagerij Voogd",
            "Simotex",
            "bakker van Riel",
            "Trommels",
            "Harrie Brocken",
            "slager Wijfels",
            "Flamingo",
            "kapper Tooten",
            "Bas Lemmens",
            "cafetaria Adje",
            "drankhandel Horsten",
            "Très Jolie",
            "Nodacon",
            "drogist Mommers Verkammen",
            "meubelzaak Boeren",
            "tabakszaak",
            "Smash",
            "schoenmaker van Bezouw",
            "Keke Staps",
            "Jan van Loon",
            "slagerij Konings",
            "café Moorees",
            "drukkerij Rijnen",
            "bakker van Kempen",
            "van Knegsel",
            "rijschool van de Ven",
            "frietuur Kootje",
            "rijschool Succes",
            "Klijsen",
            "poelier Versteeg",
            "Boomtax",
            "lampenwinkel van Beek"
          ],
          hint: "Er waren er 34!"
        }
      ]
    },
    {
      id: 6,
      title: "Het eerste huis",
      address: "Adres stop 6, Tilburg",
      description: "Het eerste eigen stekje van het kersverse echtpaar.",
      video: "",
      portrait: true,
      questions: [
        {
          text: "Wat weet jij van ...? Noem zoveel mogelijk dingen!",
          type: "multi",
          answers: [
            "PLACEHOLDER_ANTWOORD_1",
            "PLACEHOLDER_ANTWOORD_2",
            "PLACEHOLDER_ANTWOORD_3"
          ],
          hint: "Er zijn meerdere goede antwoorden!"
        }
      ]
    },
    {
      id: 7,
      title: "Een bijzondere herinnering",
      address: "Adres stop 7, Oisterwijk",
      description: "Een plek die verbonden is aan een onvergetelijk moment.",
      video: "",
      questions: [
        {
          text: "Welke herinnering komt als eerste boven bij deze plek?",
          answer: "De zomer van 1990",
          hint: ""
        }
      ]
    },
    {
      id: 8,
      title: "Favoriete uitje",
      address: "Adres stop 8, Oisterwijk",
      description: "Hier kwamen Wilma en Kees graag samen.",
      video: "",
      questions: [
        {
          text: "Hoe vaak kwamen jullie hier vroeger?",
          answer: "Elke week",
          hint: ""
        }
      ]
    },
  ],

  // Geheime coördinaten van de finish (stop 8)
  // Na elke stop 1-7 wordt een stukje onthuld
  finishCoordinates: "51.58931° N, 5.23185° E",
  // Hoe de coördinaten stap voor stap onthuld worden:
  // Na stop 1: "51.5____° N, _.____° E"
  // Na stop 2: "51.58___° N, _.____° E"
  // Na stop 3: "51.589__° N, _.____° E"
  // Na stop 4: "51.589__° N, 5.____° E"
  // Na stop 5: "51.5893_° N, 5.2___° E"
  // Na stop 6: "51.58931° N, 5.23__° E"
  // Na stop 7: "51.58931° N, 5.23185° E" (volledig!)
  coordinateReveals: [
    "51.5____° N, _.____° E",
    "51.58___° N, _.____° E",
    "51.589__° N, _.____° E",
    "51.589__° N, 5.____° E",
    "51.5893_° N, 5.2___° E",
    "51.58931° N, 5.23__° E",
    "51.58931° N, 5.23185° E"
  ]
};
