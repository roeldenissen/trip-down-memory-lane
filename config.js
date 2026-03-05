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
      title: "De Schuur",
      address: "Heuvelring 114, Tilburg",
      description: "Hier wacht een videoboodschap van Loes & Cor!",
      video: "assets/videos/stop1.mp4",
      questions: [
        {
          text: "Wat weten jullie nog van de uitgaansgelegenheden van vroeger?",
          type: "multi",
          answers: [
            "De Schuur", 
            "Extase", 
            "Old Fashion", 
            "Cambrinus", 
            "LP's luisteren", 
            "Jim Reeves", 
            "Bahlsen Pinda's", 
            "The Gallery Club"
            ],
          hint: "Er zijn 8 goede antwoorden!"
        }
          ]
    },
    {
      id: 2,
      title: "Koffie",
      address: "Frederikstraat 284, Tilburg",
      description: "Tijd voor koffie en een boodschap van Wilma & Els!",
      video: "assets/videos/stop2.mp4",
      questions: [
        {
          text: "Wat was Wilma vergeten op het weekendje weg met de kids?",
          answer: "Dekbedovertrek",
          hint: "Iets waar je lekker onder slaapt!"
        },
        {
          text: "Bij welke winkel is de e-bike gestolen?",
          answer: "Action",
          hint: "Goedkoop"
        }
      ]
    },
    {
      id: 3,
      title: "De Groeseind",
      address: "Groeseindstraat 65a, Tilburg",
      description: "Een bekende plek met een boodschap van Helen!",
      video: "assets/videos/stop3.mp4",
      questions: [
        {
          text: "Welk merk shag rookte Kees?",
          type: "multi",
          answers: [
            "Drum",
            "Samson"
          ],
          hint: "Er zijn 2 goede antwoorden!"
        }
      ]
    },
    {
      id: 4,
      title: "Textielmuseum",
      address: "Goirkestraat 96, Tilburg",
      description: "Een stukje historie met een videoboodschap van Rick!",
      video: "assets/videos/stop4.mp4",
      questions: []
    },
    {
      id: 5,
      title: "De Hasselt",
      address: "Hasseltstraat 169, Tilburg",
      description: "Terug naar de Hasseltstraat met een boodschap van Bertens!",
      video: "assets/videos/stop5.mp4",
      questions: [
        {
          text: "Welke winkeliers zaten er vroeger in de Hasseltstraat?",
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
            "dameskapsalon",
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
      title: "Hazelaar",
      address: "Doctor Eijgenraamstraat 3, Tilburg",
      description: "Op bezoek bij de Hazelaar met een boodschap van Wilma!",
      video: "assets/videos/stop6.mp4",
      portrait: true,
      questions: [
        {
          text: "Wat weten jullie van het kwekfestijn?",
          type: "multi",
          answers: [
            "Feest",
            "Bonte avond",
            "openingsfeest",
            "bewoners",
            "trefcentrum",
            "personeel",
            "imitaties",
            "muziek",
            "carnaval"
          ],
          hint: "Er zijn 9 mogelijke antwoorden!"
        }
      ]
    },
    {
      id: 7,
      title: "Den Akker",
      address: "Lavendel 3, Oisterwijk",
      description: "De laatste stop met een boodschap van Julie!",
      video: "assets/videos/stop7.mp4",
      questions: [
        {
          text: "Met welke quiz heeft Kees vroeger meegedaan?",
          answer: "Buya",
          hint: ""
        },
        {
          text: "Welke Oisterwijkse basisscholen kennen jullie nog uit de tijd dat Kees startte bij Den Akker?",
          type: "multi",
          answers: [
            "St. Jozefschool",
            "St. Antoniusschool",
            "H. Bernadetteschool",
            "De Kikkenduut",
            "De Bron",
            "De Hasselbraam",
            "Den Akker",
            "Darwin",
            "De Bunders",
            "De Zwaluw",
            "Merlijn",
            "De Kajuit",
            "De Coppele",
            "De Mozaïk"
          ],
          hint: "Er zijn 14 scholen!"
        }
      ]
    }
  ],

  // Geheime coördinaten van de finish
  // Na elke stop 1-6 wordt een stukje onthuld
  // Na stop 7 (de laatste) worden de volledige coördinaten getoond op het eindscherm
  finishCoordinates: "51.58931° N, 5.23185° E",
  // Hoe de coördinaten stap voor stap onthuld worden:
  // Na stop 1: "51.5____° N, _.____° E"
  // Na stop 2: "51.58___° N, _.____° E"
  // Na stop 3: "51.589__° N, _.____° E"
  // Na stop 4: "51.589__° N, 5.____° E"
  // Na stop 5: "51.5893_° N, 5.2___° E"
  // Na stop 6: "51.58931° N, 5.23__° E"
  coordinateReveals: [
    "51.5____° N, _.____° E",
    "51.58___° N, _.____° E",
    "51.589__° N, _.____° E",
    "51.589__° N, 5.____° E",
    "51.5893_° N, 5.2___° E",
    "51.58931° N, 5.23__° E"
  ]
};
