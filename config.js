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
 *       - answer: het juiste antwoord
 *       - hint:   (optioneel) een hint die getoond wordt bij het antwoord,
 *                 bijv. "Het was in de zomer van dat jaar!"
 *
 *     Het antwoord wordt NIET hoofdlettergevoelig vergeleken,
 *     en kleine typfouten worden door de vingers gezien.
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
      id: 2,
      title: "Het eerste afspraakje",
      address: "Adres stop 2, Tilburg",
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
      id: 3,
      title: "De verlovingsplek",
      address: "Adres stop 3, Berkel-Enschot",
      description: "Op deze bijzondere plek werd de grote vraag gesteld.",
      video: "",
      questions: [
        {
          text: "In welk jaar zijn jullie verloofd?",
          answer: "1984",
          hint: ""
        },
        {
          text: "Was het een verrassing?",
          answer: "Ja",
          hint: ""
        }
      ]
    },
    {
      id: 4,
      title: "De trouwlocatie",
      address: "Adres stop 4, Oisterwijk",
      description: "Hier gaven Wilma en Kees elkaar het ja-woord.",
      video: "",
      questions: [
        {
          text: "Wat was het mooiste moment van de trouwdag?",
          answer: "Het ja-woord",
          hint: ""
        }
      ]
    },
    {
      id: 5,
      title: "Het eerste huis",
      address: "Adres stop 5, Tilburg",
      description: "Het eerste eigen stekje van het kersverse echtpaar.",
      video: "",
      questions: [
        {
          text: "Wat was het eerste dat jullie kochten voor het nieuwe huis?",
          answer: "Een bank",
          hint: ""
        }
      ]
    },
    {
      id: 6,
      title: "Een bijzondere herinnering",
      address: "Adres stop 6, Oisterwijk",
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
      id: 7,
      title: "Favoriete uitje",
      address: "Adres stop 7, Oisterwijk",
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
    {
      id: 8,
      title: "De kinderen",
      address: "Adres stop 8, Berkel-Enschot",
      description: "Een plek die alles te maken heeft met het gezin.",
      video: "",
      questions: [
        {
          text: "Wat is jullie mooiste gezinsherinnering op deze plek?",
          answer: "De eerste schooldag",
          hint: ""
        }
      ]
    },
    {
      id: 9,
      title: "Samen oud worden",
      address: "Adres stop 9, Oisterwijk",
      description: "Een plek die staat voor de latere jaren samen.",
      video: "",
      questions: [
        {
          text: "Wat maakt jullie het meest trots als jullie terugkijken?",
          answer: "De kinderen",
          hint: ""
        }
      ]
    }
  ]
};
