// lib/data/properties.ts

export interface Property {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    beds: number;
    bathrooms: number;
    size: number;
    imageUrl: string;
    images: string[];
    features: string[];
    parking: string;
    locationDescription: string;
  }
  
  export const properties: Property[] = [
    {
      id: "1",
      title: "Zentrale 3-Zimmer Wohnung mit Privat Stellplatz und Balkon",
      description:
        "Entdecken Sie den Komfort und die Bequemlichkeit des Stadtlebens in dieser großzügigen 3-Zimmer Wohnung im Herzen der Innenstadt. Mit viel Tageslicht, zahlreichen Annehmlichkeiten und einem privaten Balkon bietet diese Wohnung die perfekte Kombination aus Stil, Komfort und Funktionalität.",
      price: 1870,
      location: "Mönchstr., Stuttgart-Mitte",
      beds: 2,
      bathrooms: 1.5,
      size: 81,
      imageUrl: "/images/properties/mchgr/1.jpg",
      images: [
        "/images/properties/mchgr/1.jpg",
        "/images/properties/mchgr/2.jpg",
        "/images/properties/mchgr/3.jpg",
        "/images/properties/mchgr/4.jpg",
        "/images/properties/mchgr/5.jpg",
        "/images/properties/mchgr/6.jpg",
        "/images/properties/mchgr/7.jpg",
        "/images/properties/mchgr/8.jpg",
        "/images/properties/mchgr/9.jpg",
        "/images/properties/mchgr/10.jpg",
        "/images/properties/mchgr/11.jpg",
        "/images/properties/mchgr/12.jpg"
      ],
      features: [
        "Privater Eingang",
        "Barrierefrei",
        "Waschmaschine und Trockner",
        "WLAN",
        "Bettwäsche & Handtücher",
        "Balkon",
        "Aufzug",
        "Privater Parkplatz",
      ],      
      parking: "2",
      locationDescription:
      "Nur wenige Minuten vom Stuttgarter Hauptbahnhof und wichtigen Unternehmenszentralen entfernt, bietet das Milaneo-Viertel eine nahtlose Anbindung und moderne Infrastruktur. Im Zentrum steht das weitläufige Milaneo Einkaufszentrum mit über 200 Geschäften, Restaurants und Cafés – ein Ort voller Energie und Stil."},    
    {
      id: "2",
      title: "Zentrales Studio am Milaneo",
      description:
  "Dieses Apartment bietet Ihnen einen reibungslosen Start in Ihren Aufenthalt mit moderner Einrichtung, einer voll ausgestatteten Küche, TV, WLAN, Schlafcouch, usw. sodass Sie sich vom ersten Moment an wie zu Hause fühlen.",

      price: 673,
      location: "Mönchstr, Stuttgart-Mitte",
      beds: 1,
      bathrooms: 1,
      size: 36,
      imageUrl: "/images/properties/mchkl/1.jpeg",
      images: [
        "/images/properties/mchkl/1.jpeg",
        "/images/properties/mchkl/2.jpeg",
        "/images/properties/mchkl/3.jpeg",
        "/images/properties/mchkl/4.jpeg",
        "/images/properties/mchkl/5.jpeg",
      ],
      features: ["Barrierefrei", "Spülmaschine", "Waschmaschine",
        "WLAN",
        "Bettwäsche & Handtücher",
        "Aufzug",
        "Privater Parkplatz", "Zusätzliches Schlafsofa"],
      parking: "1",
      locationDescription:
      "Das Milaneo Viertel ist bekannt für seine Bequemlichkeit und das nahtlose städtische Leben. Genießen Sie den einfachen Zugang zu Supermärkten, Fitnessstudios, Apotheken und schnellen Essensmöglichkeiten, alles nur wenige Schritte von Ihrer Haustür entfernt. Mit dem Stuttgarter Hauptbahnhof in kurzer Gehentfernung und hervorragenden öffentlichen Verkehrsverbindungen ist das Fortbewegen in der Stadt oder das Erreichen Ihres nächsten Ziels schnell und mühelos.",
    },    
    {
      id: "3",
      title: "3,5-Zimmer Wohnung in Stuttgart-Nord (am Killesberg)",
      description:
  "Mit viel Liebe zum Detail eingerichtet und ausgestattet mit vielfältigen Möbeln sowie einer voll ausgestatteten Küche werden Sie in diesem großzügigen Apartment sofort das Gefühl haben zu Hause zu sein. Ob Sie mit Blick ins Grüne kochen oder sich in einem der drei Schlafzimmer wohlverdient ausruhen, Sie werden alles lieben was dieses Killesberg Apartment zu bieten hat.",

      price: 1314,
      location: "Hermann-Pleuer-Str, Killesberg",
      beds: 3,
      bathrooms: 1,
      size: 60,
      imageUrl: "/images/properties/hp/1.jpeg",
      images: [
        "/images/properties/hp/1.jpeg",
        "/images/properties/hp/2.jpeg",
        "/images/properties/hp/3.jpeg",
        "/images/properties/hp/4.jpeg",
        "/images/properties/hp/5.jpeg",
        "/images/properties/hp/6.jpeg",
        "/images/properties/hp/7.jpeg",
      ],
      features: ["Spülmaschine", "Waschmaschine",
        "WLAN",
        "Bettwäsche & Handtücher", "Zusätzliches Schlafsofa"],
      parking: "Öffentlich",
      locationDescription:
      "Killesberg ist ein ruhiges grünes Viertel, das für seinen entspannten Charme und die nahegelegenen Parks bekannt ist. Kostenlose Parkplätze gibt es in der Wohnstraße. Öffentliche Verkehrsmittel wie die U-Bahn und der Bus sind nur fünf Minuten zu Fuß entfernt, ebenso wie praktische Geschäfte wie Lidl, Edeka, DM und eine örtliche Bäckerei."
    },       
    {
      id: "4",
      title: "Großzügige Wohnung am Killesberg Park",
      description:
      "Fühlen Sie sich wie zu Hause in dieser großzügigen Wohnung mit einem Schlafzimmer mit Queensize Bett, Badezimmer, Küche und Wohnzimmer mit bequemem Schlafsofa. Genießen Sie viel Platz zum Entspannen, auch auf dem Balkon.",  
      price: 727,
      location: "Leiblweg, Killesberg",
      beds: 1,
      bathrooms: 1,
      size: 63,
      imageUrl: "/images/properties/lbl/1.jpeg",
      images: [
        "/images/properties/lbl/1.jpeg",
        "/images/properties/lbl/2.jpeg",
        "/images/properties/lbl/3.jpeg",
        "/images/properties/lbl/4.jpeg",
        "/images/properties/lbl/5.jpeg",
      ],
      features: ["Spülmaschine",
        "WLAN",
        "Bettwäsche & Handtücher", "Badewanne",
        "Balkon", "Zusätzliches Schlafsofa"],
    parking: "Öffentlich",
      locationDescription:
      "Killesberg ist bekannt für seine gepflegten Parks und die entspannte Atmosphäre und eignet sich perfekt zum Abschalten nach einem anstrengenden Tag. Spazieren Sie durch den malerischen Höhenpark Killesberg mit seinen Gärten, dem Aussichtsturm und den Freiflächen. Tägliche Einkaufsmöglichkeiten wie Lidl, Edeka, eine Bäckerei und Apotheke sind nur wenige Gehminuten entfernt. Öffentliche Verkehrsmittel mit U Bahn und Bus erreichen Sie in 15 Minuten zu Fuß und der Hauptbahnhof Stuttgart ist nur eine kurze Fahrt entfernt. Kostenlose Parkplätze finden Sie direkt vor dem Haus.",
  },
    {
      id: "5",
      title: "2-Zimmer Wohnung mit Balkon am Löwentor",
      description:
    "Stilvolle Einrichtung, eine komplett ausgestattete Küche mit modernen Geräten und ein sonniger Balkon mit Blick ins Grüne schaffen eine warme und einladende Wohnatmosphäre. Der großzügige Grundriss umfasst ein komfortables Schlafzimmer, ein modernes Badezimmer sowie einen offenen Wohn und Essbereich, der auf Wohlbefinden ausgelegt ist.",
    price: 842,
      location: "Nibelungenstr, Stuttgart-Nord",
      beds: 1,
      bathrooms: 1,
      size: 57,
      imageUrl: "/images/properties/nbl/1.jpeg",
      images: [
        "/images/properties/nbl/1.jpeg",
        "/images/properties/nbl/2.jpeg",
        "/images/properties/nbl/3.jpeg",
        "/images/properties/nbl/4.jpeg",
        "/images/properties/nbl/5.jpeg",
      ],
      features: ["Spülmaschine", "Waschmaschine", "Kaffeemaschine",
        "WLAN",
        "Bettwäsche & Handtücher",
        "Balkon", "Gemeinschaftlicher Garten", "Zusätzliches Schlafsofa", "Privater Parkplatz"],
      parking: "1",
      locationDescription:
      "Ideale Lage direkt gegenüber dem Egelsee und nur fünf Minuten zu Fuß vom Bahnhof Löwentor entfernt bietet diese Wohnung Komfort und Bequemlichkeit von innen und außen.",
  },
    {
      id: "6",
      title: "Studio mit Terrasse direkt am Wald",
      description:
      "Perfekt für Natur und Stadtliebhaber verbindet dieses Studio am Kräherwald modernen Komfort mit dem Leben im Freien. Genießen Sie eine komplett ausgestattete Küche und eine private Terrasse, auf der Sie Ihren frisch gebrühten Kaffee, Ihr Mittag oder Abendessen genießen können.",
     price: 290,
      location: "Am Kräherwald, Stuttgart-West",
      beds: 1,
      bathrooms: 1,
      size: 30,
      imageUrl: "/images/properties/krw/1.jpeg",
      images: [
        "/images/properties/krw/1.jpeg",
        "/images/properties/krw/2.jpeg",
        "/images/properties/krw/3.jpeg",
        "/images/properties/krw/4.jpeg",
        "/images/properties/krw/5.jpeg",
        "/images/properties/krw/6.jpeg",
      ],
      features: ["Spülmaschine", "Waschmaschine",
        "WLAN",
        "Bettwäsche & Handtücher",
        "Terrasse", "Zusätzliches Schlafsofa"],
        parking: "Öffentlich",
      locationDescription:
    "Das grüne Viertel Doggenburg in Stuttgart bietet zahlreiche Outdoor Sportmöglichkeiten wie Fußball, Tennis, Laufen oder Reiten und ist gut an das Einkaufszentrum Höhenpark sowie das Stadtzentrum mit der Buslinie 43 angebunden. Bewohner profitieren zudem von vielen Parkmöglichkeiten für stressfreies Kommen und Gehen.",
},
    {
      id: "7",
      title: "2-Zimmer Wohnung in Stuttgart-Degerloch",
      description:
    "Diese großzügige 2-Zimmer Wohnung verfügt über eine komplett ausgestattete Küche, ein helles Schlafzimmer mit Spiegelschrank, ein Badezimmer und ein großzügiges Wohnzimmer mit kleinem Essbereich und einem Schlafsofa. Ein gemeinschaftlicher Garten lädt zu ruhigen Momenten im Freien ein.",
  price: 420,
      location: "Raffstr, Stuttgart-Degerloch",
      beds: 1,
      bathrooms: 1,
      size: 45,
      imageUrl: "/images/properties/raff/1.jpeg",
      images: [
        "/images/properties/raff/1.jpeg",
        "/images/properties/raff/2.jpeg",
        "/images/properties/raff/3.jpeg",
        "/images/properties/raff/4.jpeg",
        "/images/properties/raff/5.jpeg",
        "/images/properties/raff/6.jpeg",
        "/images/properties/raff/7.jpeg",
      ],
      features: ["Spülmaschine", "Waschmaschine", 
        "WLAN",
        "Bettwäsche & Handtücher",
        "Gemeinschaftlicher Garten", "Zusätzliches Schlafsofa"],
        parking: "Öffentlich",
      locationDescription:
      "Das Viertel Degerloch verbindet ruhiges Wohnambiente mit guter Anbindung an lokale Einrichtungen, öffentlichen Nahverkehr und gute Parkmöglichkeiten. Dadurch ist es ein idealer Ausgangspunkt, um Stuttgart mit Auto oder Bahn zu erkunden.",
  },
    {
        id: "8",
        title: "4-Zimmer Wohnung in Stuttgart-Zuffenhausen",
        description:
          "Die voll-möblierte Wohnung befindet sich im Dachgeschoss eines ruhigen Mehrfamilienhauses. Sie ist circa 110 qm groß und verfügt über vier separat abschließbare Zimmer mit Betten. Die Zimmer und die Küche sind mit dem Nötigsten ausgestattet. Der Balkon eignet sich ideal zum gemeinsamen Speisen oder zum Entspannen. Ein großer Privatparkplatz ist vorhanden – ausreichend für zwei normale PKWs oder einen größeren Van.",
        price: 1230,
        location: "Schwieberdingerstr., Stuttgart-Zuffenhausen",
        beds: 4,
        bathrooms: 1.5,
        size: 110,
        imageUrl: "/images/properties/schw/1.jpg",
        images: [
          "/images/properties/schw/1.jpg",
          "/images/properties/schw/2.jpg",
          "/images/properties/schw/3.jpg",
          "/images/properties/schw/4.jpg",
          "/images/properties/schw/5.jpg",
          "/images/properties/schw/6.jpg",
          "/images/properties/schw/7.jpg",
          "/images/properties/schw/8.jpg",
          "/images/properties/schw/9.jpg",
          "/images/properties/schw/10.jpg",
          "/images/properties/schw/11.jpg",
          "/images/properties/schw/12.jpg",
        ],
        features: ["Waschmaschine",
            "WLAN",
            "Bettwäsche & Handtücher",
            "Balkon", "Privater Parkplatz"],
        parking: "1",
        locationDescription:
          "Die Wohnung befindet sich im Stuttgarter Stadtbezirk Zuffenhausen, einem idealen Standort für Geschäftsreisende dank der Nähe zu Unternehmen wie Porsche, Bosch, Behr, Alcatel-Lucent und Wörwag. Einkaufsmöglichkeiten wie Aldi sind in wenigen Gehminuten erreichbar. Für Erholung sorgen der nahegelegene Stadtpark und das Feuerbachtal mit vielfältigen Möglichkeiten zur Entspannung im Grünen. Die Anbindung an den öffentlichen Nahverkehr ist ausgezeichnet: Die nächste Bushaltestelle (Ohmstraße) liegt nur zwei Gehminuten entfernt, und den S-Bahnhof Zuffenhausen mit direkten Verbindungen in die Stuttgarter Innenstadt sowie nach Ludwigsburg, Böblingen und weiteren Städten erreicht man in wenigen Minuten.",
      },
    {
      id: "9",
      title: "Wohnung in Horb am Neckar",
      description:
    "Diese funktionale 4-Zimmer Wohnung in Stuttgart-Zuffenhausen eignet sich ideal für berufliche Aufenthalte, Projektteams oder Monteure. Vier separate Schlafzimmer bieten Privatsphäre und Rückzugsmöglichkeiten nach einem langen Arbeitstag. Eine voll ausgestattete Küche, ein modernes Bad und ein gemütlicher Wohnbereich sorgen für einen angenehmen Aufenthalt. Der private Balkon bietet zusätzlichen Raum zum Entspannen. Die praktische Lage und die solide Ausstattung machen diese Wohnung zur optimalen Unterkunft für kurze oder längere Einsätze oder geschäftliche Aufenthalte.",
   price: 315,
      location: "Freudenstädterstr, Horb am Neckar",
      beds: 3,
      bathrooms: 1,
      size: 80,
      imageUrl: "/images/properties/horb/1.jpeg",
      images: [
        "/images/properties/horb/1.jpeg",
        "/images/properties/horb/2.jpeg",
        "/images/properties/horb/3.jpeg",
        "/images/properties/horb/4.jpeg",
        "/images/properties/horb/5.jpeg",
        "/images/properties/horb/6.jpeg",
        "/images/properties/horb/7.jpeg",
        "/images/properties/horb/8.jpeg",
      ],
      features: ["Waschmaschine",
        "WLAN",
        "Bettwäsche & Handtücher",
        "Privater Parkplatz"],
      parking: "1",
      locationDescription:
      "Die Wohnung befindet sich in Horb am Neckar nur wenige Minuten mit dem Auto von Supermärkten, Bäckereien, Cafés und Geschäften entfernt. Die charmante historische Altstadt ist in der Nähe und die Anbindung an den öffentlichen Nahverkehr erleichtert den Weg zur Arbeit oder zu Freizeitaktivitäten, egal ob Sie kurz oder länger bleiben.",
  }
  ];
  