/*
 * ============================================
 *  TRIP DOWN MEMORY LANE - Configuratie
 * ============================================
 *
 *  Pas dit bestand aan om stops, video's en vragen toe te voegen.
 *
 *  VIDEO OPTIES:
 *    type: "youtube"  → url moet een YouTube video ID zijn (bijv. "dQw4w9WgXcQ")
 *    type: "mp4"      → url moet een pad zijn naar een MP4 bestand (bijv. "assets/video1.mp4")
 *
 *  VRAGEN:
 *    Elke stop kan meerdere vragen hebben.
 *    Het 'answer' veld kun je leeg laten - dat vullen Wilma & Kees in!
 *
 *  ROUTE:
 *    De route-array is optioneel. Als je hem leeg laat, worden de stops
 *    met een rechte lijn verbonden. Je kunt ook extra punten toevoegen
 *    voor een meer gedetailleerde route.
 */

const CONFIG = {
  // Namen en jubileum
  couple: {
    name1: "Wilma",
    name2: "Kees",
    years: 40
  },

  // Kaartinstellingen - pas het centrum en zoomniveau aan voor jullie regio
  mapCenter: [51.65, 5.30],
  mapZoom: 13,

  // De stops op de route
  // Pas de coördinaten, titels, beschrijvingen, video's en vragen aan
  stops: [
    {
      id: 1,
      title: "Waar het allemaal begon",
      description: "De plek waar Wilma en Kees elkaar voor het eerst ontmoetten.",
      lat: 51.6580,
      lng: 5.2800,
      video: {
        type: "youtube",
        url: ""  // Vul hier het YouTube video ID in
      },
      questions: [
        { text: "In welk jaar ontmoetten jullie elkaar voor het eerst?" }
      ]
    },
    {
      id: 2,
      title: "Het eerste afspraakje",
      description: "Hier hadden Wilma en Kees hun allereerste date.",
      lat: 51.6560,
      lng: 5.2850,
      video: {
        type: "youtube",
        url: ""
      },
      questions: [
        { text: "Wat deden jullie op jullie eerste afspraakje?" }
      ]
    },
    {
      id: 3,
      title: "De verlovingsplek",
      description: "Op deze bijzondere plek werd de grote vraag gesteld.",
      lat: 51.6540,
      lng: 5.2900,
      video: {
        type: "youtube",
        url: ""
      },
      questions: [
        { text: "Hoe ging het aanzoek precies?" },
        { text: "Was het een verrassing of hadden jullie het al besproken?" }
      ]
    },
    {
      id: 4,
      title: "De trouwlocatie",
      description: "Hier gaven Wilma en Kees elkaar het ja-woord.",
      lat: 51.6520,
      lng: 5.2950,
      video: {
        type: "youtube",
        url: ""
      },
      questions: [
        { text: "Wat was het mooiste moment van de trouwdag?" }
      ]
    },
    {
      id: 5,
      title: "Het eerste huis",
      description: "Het eerste eigen stekje van het kersverse echtpaar.",
      lat: 51.6500,
      lng: 5.3000,
      video: {
        type: "youtube",
        url: ""
      },
      questions: [
        { text: "Wat was het eerste dat jullie kochten voor het nieuwe huis?" }
      ]
    },
    {
      id: 6,
      title: "Een bijzondere herinnering",
      description: "Een plek die verbonden is aan een onvergetelijk moment.",
      lat: 51.6480,
      lng: 5.3050,
      video: {
        type: "youtube",
        url: ""
      },
      questions: [
        { text: "Welke herinnering komt als eerste boven bij deze plek?" }
      ]
    },
    {
      id: 7,
      title: "Favoriete uitje",
      description: "Hier kwamen Wilma en Kees graag samen.",
      lat: 51.6460,
      lng: 5.3100,
      video: {
        type: "youtube",
        url: ""
      },
      questions: [
        { text: "Hoe vaak kwamen jullie hier vroeger?" }
      ]
    },
    {
      id: 8,
      title: "De kinderen",
      description: "Een plek die alles te maken heeft met het gezin.",
      lat: 51.6440,
      lng: 5.3150,
      video: {
        type: "youtube",
        url: ""
      },
      questions: [
        { text: "Wat is jullie mooiste gezinsherinnering op deze plek?" }
      ]
    },
    {
      id: 9,
      title: "Samen oud worden",
      description: "Een plek die staat voor de latere jaren samen.",
      lat: 51.6420,
      lng: 5.3200,
      video: {
        type: "youtube",
        url: ""
      },
      questions: [
        { text: "Wat maakt jullie het meest trots als jullie terugkijken?" }
      ]
    },
    {
      id: 10,
      title: "De finish - 40 jaar!",
      description: "Het eindpunt van de tocht. 40 jaar samen, en het avontuur gaat door!",
      lat: 51.6400,
      lng: 5.3250,
      video: {
        type: "youtube",
        url: ""
      },
      questions: [
        { text: "Wat wensen jullie elkaar toe voor de komende 40 jaar?" }
      ]
    }
  ],

  // Optioneel: extra routepunten voor een gedetailleerdere lijn op de kaart
  // Als dit leeg is, worden de stops met rechte lijnen verbonden
  // Formaat: [[lat, lng], [lat, lng], ...]
  route: []
};
