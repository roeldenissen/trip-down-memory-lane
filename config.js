/*
 * ============================================
 *  TRIP DOWN MEMORY LANE - Configuratie
 * ============================================
 *
 *  Pas dit bestand aan om stops, video's en vragen toe te voegen.
 *
 *  VIDEO:
 *    Zet MP4 bestanden in de assets/ map en verwijs ernaar met het pad,
 *    bijv. "assets/stop1.mp4"
 *    Laat leeg ("") als de video nog niet klaar is.
 *
 *  VRAGEN:
 *    Elke stop kan meerdere vragen hebben.
 *    Alle vragen moeten beantwoord zijn om door te gaan naar de volgende stop.
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
      video: "",     // bijv. "assets/stop1.mp4"
      questions: [
        { text: "In welk jaar ontmoetten jullie elkaar voor het eerst?" }
      ]
    },
    {
      id: 2,
      title: "Het eerste afspraakje",
      address: "Adres stop 2, Tilburg",
      description: "Hier hadden Wilma en Kees hun allereerste date.",
      video: "",
      questions: [
        { text: "Wat deden jullie op jullie eerste afspraakje?" }
      ]
    },
    {
      id: 3,
      title: "De verlovingsplek",
      address: "Adres stop 3, Berkel-Enschot",
      description: "Op deze bijzondere plek werd de grote vraag gesteld.",
      video: "",
      questions: [
        { text: "Hoe ging het aanzoek precies?" },
        { text: "Was het een verrassing of hadden jullie het al besproken?" }
      ]
    },
    {
      id: 4,
      title: "De trouwlocatie",
      address: "Adres stop 4, Oisterwijk",
      description: "Hier gaven Wilma en Kees elkaar het ja-woord.",
      video: "",
      questions: [
        { text: "Wat was het mooiste moment van de trouwdag?" }
      ]
    },
    {
      id: 5,
      title: "Het eerste huis",
      address: "Adres stop 5, Tilburg",
      description: "Het eerste eigen stekje van het kersverse echtpaar.",
      video: "",
      questions: [
        { text: "Wat was het eerste dat jullie kochten voor het nieuwe huis?" }
      ]
    },
    {
      id: 6,
      title: "Een bijzondere herinnering",
      address: "Adres stop 6, Oisterwijk",
      description: "Een plek die verbonden is aan een onvergetelijk moment.",
      video: "",
      questions: [
        { text: "Welke herinnering komt als eerste boven bij deze plek?" }
      ]
    },
    {
      id: 7,
      title: "Favoriete uitje",
      address: "Adres stop 7, Oisterwijk",
      description: "Hier kwamen Wilma en Kees graag samen.",
      video: "",
      questions: [
        { text: "Hoe vaak kwamen jullie hier vroeger?" }
      ]
    },
    {
      id: 8,
      title: "De kinderen",
      address: "Adres stop 8, Berkel-Enschot",
      description: "Een plek die alles te maken heeft met het gezin.",
      video: "",
      questions: [
        { text: "Wat is jullie mooiste gezinsherinnering op deze plek?" }
      ]
    },
    {
      id: 9,
      title: "Samen oud worden",
      address: "Adres stop 9, Oisterwijk",
      description: "Een plek die staat voor de latere jaren samen.",
      video: "",
      questions: [
        { text: "Wat maakt jullie het meest trots als jullie terugkijken?" }
      ]
    },
    {
      id: 10,
      title: "De finish - 40 jaar!",
      address: "Landgoed Nemerlaer, Haaren",
      description: "Het eindpunt van de tocht. 40 jaar samen, en het avontuur gaat door!",
      video: "",
      questions: [
        { text: "Wat wensen jullie elkaar toe voor de komende 40 jaar?" }
      ]
    }
  ]
};
