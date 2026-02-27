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
 *  KAART:
 *    Zet een screenshot van je route als "assets/route-kaart.png" (of .jpg)
 *    in de assets map. De markers worden er automatisch overheen geplaatst.
 *
 *    markerX en markerY zijn de posities van de markers op de kaartafbeelding,
 *    als percentage (0-100) van links/boven. Tip: open de afbeelding,
 *    kijk waar de stop ongeveer zit, en schat het percentage.
 *
 *  VRAGEN:
 *    Elke stop kan meerdere vragen hebben.
 */

const CONFIG = {
  // Namen en jubileum
  couple: {
    name1: "Wilma",
    name2: "Kees",
    years: 40
  },

  // Pad naar de kaartafbeelding (screenshot van je route)
  mapImage: "assets/route-kaart.png",

  // De stops op de route
  stops: [
    {
      id: 1,
      title: "Waar het allemaal begon",
      description: "De plek waar Wilma en Kees elkaar voor het eerst ontmoetten.",
      markerX: 15,   // positie op de kaartafbeelding (% van links)
      markerY: 20,   // positie op de kaartafbeelding (% van boven)
      video: "",     // bijv. "assets/stop1.mp4"
      questions: [
        { text: "In welk jaar ontmoetten jullie elkaar voor het eerst?" }
      ]
    },
    {
      id: 2,
      title: "Het eerste afspraakje",
      description: "Hier hadden Wilma en Kees hun allereerste date.",
      markerX: 22,
      markerY: 28,
      video: "",
      questions: [
        { text: "Wat deden jullie op jullie eerste afspraakje?" }
      ]
    },
    {
      id: 3,
      title: "De verlovingsplek",
      description: "Op deze bijzondere plek werd de grote vraag gesteld.",
      markerX: 30,
      markerY: 33,
      video: "",
      questions: [
        { text: "Hoe ging het aanzoek precies?" },
        { text: "Was het een verrassing of hadden jullie het al besproken?" }
      ]
    },
    {
      id: 4,
      title: "De trouwlocatie",
      description: "Hier gaven Wilma en Kees elkaar het ja-woord.",
      markerX: 38,
      markerY: 40,
      video: "",
      questions: [
        { text: "Wat was het mooiste moment van de trouwdag?" }
      ]
    },
    {
      id: 5,
      title: "Het eerste huis",
      description: "Het eerste eigen stekje van het kersverse echtpaar.",
      markerX: 45,
      markerY: 47,
      video: "",
      questions: [
        { text: "Wat was het eerste dat jullie kochten voor het nieuwe huis?" }
      ]
    },
    {
      id: 6,
      title: "Een bijzondere herinnering",
      description: "Een plek die verbonden is aan een onvergetelijk moment.",
      markerX: 52,
      markerY: 53,
      video: "",
      questions: [
        { text: "Welke herinnering komt als eerste boven bij deze plek?" }
      ]
    },
    {
      id: 7,
      title: "Favoriete uitje",
      description: "Hier kwamen Wilma en Kees graag samen.",
      markerX: 60,
      markerY: 58,
      video: "",
      questions: [
        { text: "Hoe vaak kwamen jullie hier vroeger?" }
      ]
    },
    {
      id: 8,
      title: "De kinderen",
      description: "Een plek die alles te maken heeft met het gezin.",
      markerX: 68,
      markerY: 64,
      video: "",
      questions: [
        { text: "Wat is jullie mooiste gezinsherinnering op deze plek?" }
      ]
    },
    {
      id: 9,
      title: "Samen oud worden",
      description: "Een plek die staat voor de latere jaren samen.",
      markerX: 76,
      markerY: 72,
      video: "",
      questions: [
        { text: "Wat maakt jullie het meest trots als jullie terugkijken?" }
      ]
    },
    {
      id: 10,
      title: "De finish - 40 jaar!",
      description: "Het eindpunt van de tocht. 40 jaar samen, en het avontuur gaat door!",
      markerX: 85,
      markerY: 80,
      video: "",
      questions: [
        { text: "Wat wensen jullie elkaar toe voor de komende 40 jaar?" }
      ]
    }
  ]
};
