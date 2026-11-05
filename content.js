window.SITE_CONTENT = {
  "site": {
    "pageTitle": "Vaikiškos kojinės",
    "brand": "Mažos",
    "brandAccent": "kojinės",
    "heroTitle": "Šiltos kojinės vaikui, nertos vąšeliu",
    "heroText": "Kojinės neriamos ratu nuo pirštų galo iki riešo trumpaisiais stulpeliais, o kulnas įneriamas pabaigoje. Pasirinkite vaiko dydį ir visi akių skaičiai instrukcijoje persiskaičiuos automatiškai.",
    "facts": ["Lygis: pradedančiajam", "Vąšelis 3 mm", "Kojinių siūlai 4 klostių", "Trys dydžiai: 1–10 metų"],
    "footer": "Puslapis sukurtas su Claude."
  },
  "prep": {
    "title": "Pasiruošimas",
    "lead": "Prieš pradėdami išsirinkite dydį pagal vaiko pėdos ilgį. Jį išmatuokite nuo kulno iki ilgiausio piršto galo, vaikui stovint.",
    "gaugeTitle": "Nėrimo tankis",
    "gaugeText": "Apie 25 trumpieji stulpeliai ir 28 eilės = 10 × 10 cm. Nunerkite bandomąjį gabalėlį: jei akių daugiau, imkite storesnį vąšelį, jei mažiau, plonesnį. Kojinė turi tempiantis gerai priglusti prie kojos.",
    "abbrTitle": "Sutrumpinimai",
    "abbreviations": [
      {"term": "oa", "text": "oro akis"},
      {"term": "ja", "text": "jungiamoji akis"},
      {"term": "sb", "text": "stulpelis be apnėrimo (trumpasis stulpelis)"},
      {"term": "ssa", "text": "stulpelis su apnėrimu"},
      {"term": "2sb į vieną", "text": "du stulpeliai į tą pačią akį (pridėjimas)"},
      {"term": "2sb kartu", "text": "du stulpeliai sujungti į vieną (sumažinimas)"},
      {"term": "rsp / rsu", "text": "reljefinis stulpelis iš priekio / iš užpakalio"}
    ]
  },
  "defaultSize": "M",
  "sizes": [
    {"id": "S", "age": "1–3 m.", "foot": "12–14 cm", "yarn": "apie 50 g"},
    {"id": "M", "age": "4–6 m.", "foot": "15–17 cm", "yarn": "60–70 g"},
    {"id": "L", "age": "7–10 m.", "foot": "18–20 cm", "yarn": "80–100 g"}
  ],
  "variables": [
    {"key": "n", "label": "Akių rate", "values": {"S": "30", "M": "36", "L": "42"}},
    {"key": "toeRounds", "label": "Pirštų dalies ratų", "values": {"S": "5", "M": "6", "L": "7"}},
    {"key": "heelSpace", "label": "Vieta kulnui", "values": {"S": "4 cm", "M": "4,5 cm", "L": "5 cm"}},
    {"key": "half", "label": "Pusė akių", "values": {"S": "15", "M": "18", "L": "21"}},
    {"key": "leg", "label": "Blauzdos ilgis", "values": {"S": "4 cm", "M": "5 cm", "L": "6 cm"}},
    {"key": "cuff", "label": "Riešo ratų", "values": {"S": "4", "M": "5", "L": "6"}},
    {"key": "decStart", "label": "Kulno mažinimo pradžia", "values": {"S": "3", "M": "4", "L": "5"}}
  ],
  "instructions": {
    "title": "Nėrimo instrukcija",
    "lead": "Pėda ir blauzda neriamos spirale, nejungiant ratų. Rato pradžią pažymėkite žymekliu ir kiekviename rate jį perkelkite aukštyn.",
    "steps": [
      {"title": "Pirštų dalis", "blocks": [
        {"type": "row", "text": "1 ratas: į magišką žiedą nunerkite 6 sb, žiedą sutraukite (6)"},
        {"type": "row", "text": "2 ratas: 2sb į vieną kiekvieną akį (12)"},
        {"type": "row", "text": "3 ratas: *1 sb, 2sb į vieną* kartokite (18)"},
        {"type": "row", "text": "4 ratas: *2 sb, 2sb į vieną* kartokite (24)"},
        {"type": "p", "text": "Toliau kiekviename rate tarp pridėjimų nerkite vienu sb daugiau, kol rate bus {n} akių. Tam reikės {toeRounds} ratų."}
      ]},
      {"title": "Pėda", "blocks": [
        {"type": "p", "text": "Nerkite po 1 sb į kiekvieną akį, kol kojinės ilgis nuo pirštų galo bus {heelSpace} trumpesnis už vaiko pėdos ilgį. Likutis skirtas kulnui."}
      ]},
      {"title": "Anga kulnui", "blocks": [
        {"type": "p", "text": "Nunerkite {half} sb (tai pėdos viršus). Tada nunerkite {half} oa, praleiskite {half} akis ir tęskite ratą."},
        {"type": "p", "text": "Kitame rate į kiekvieną oro akį nunerkite po 1 sb. Rate vėl bus {n} akių."}
      ]},
      {"title": "Blauzda", "blocks": [
        {"type": "p", "text": "Nerkite sb spirale {leg}. Ilgį galite keisti pagal norą."}
      ]},
      {"title": "Riešas", "blocks": [
        {"type": "p", "text": "Toliau ratus jungsite ja. Pirmas rato stulpelis keičiamas 2 oa."},
        {"type": "row", "text": "1 ratas: 2 oa, ssa į kiekvieną akį, ja į rato pradžią"},
        {"type": "row", "text": "Kiti ratai: 2 oa, *1 rsp, 1 rsu* kartokite, ja"},
        {"type": "p", "text": "Nunerkite {cuff} reljefinių ratų. Taip gausite elastingą gumą, kuri laikys kojinę ant kojos. Siūlą nukirpkite ir įsiūkite."}
      ]},
      {"title": "Kulnas", "blocks": [
        {"type": "p", "text": "Prisekite siūlą angos kampe ir nerkite sb ratu aplink visą angą: po 1 sb į kiekvieną akį ir po 1 sb į kiekvieną kampą. Antrame rate kampuose nunerkite 2sb kartu, kad rate vėl būtų {n} akių."},
        {"type": "row", "text": "Mažinimo ratai: *{decStart} sb, 2sb kartu* kartokite, kitame rate tarp sumažinimų nerkite vienu sb mažiau"},
        {"type": "p", "text": "Mažinkite, kol liks 12 akių."}
      ]},
      {"title": "Užbaigimas", "blocks": [
        {"type": "p", "text": "Nukirpkite siūlą palikę 20 cm galą. Įverkite jį į buką adatą, perverkite per visas 12 likusių akių priekines kilpas ir sutraukite. Kulno kampuose likusias skylutes užsiūkite tuo pačiu siūlu. Įsiūkite galus ir nunerkite antrą kojinę."}
      ]}
    ],
    "tipTitle": "Patarimas.",
    "tipText": "Sb audinys tankus ir tvirtas, todėl vąšeliu nertos kojinės ilgai nesidėvi. Jas patogiausia nešioti namuose ar batuose su laisvesne nosimi. Pasirinkite siūlus su poliamido priedu, jie atlaikys skalbimą ir lakstymą."
  },
  "productsSection": {
    "title": "Rekomenduojamos prekės",
    "lead": "Viskas, ko reikia pirmai porai. Pažymėtos būtinos prekės, kitos palengvina darbą."
  },
  "products": [
    {"tag": "must", "name": "Kojinių siūlai", "description": "75 % merino vilna ir 25 % poliamidas. Minkšti, šilti ir atsparūs dilimui. Vaikams tinka plaunami skalbimo mašinoje.", "spec": "4 klostės · 50 g ≈ 210 m", "price": "", "url": ""},
    {"tag": "must", "name": "Nėrimo vąšelis", "description": "Su minkšta ergonomine rankena: ilgiau neriant nepavargsta ranka. Metalinė galvutė lengvai slysta per vilną.", "spec": "3 mm", "price": "", "url": ""},
    {"tag": "must", "name": "Akių žymekliai", "description": "Neriant spirale be jų sunku rasti rato pradžią. Atsegami žymekliai lengvai perkeliami aukštyn.", "spec": "Atsegami, 10 vnt.", "price": "", "url": ""},
    {"tag": "must", "name": "Buka adata siūlams", "description": "Kojinės galui sutraukti ir siūlų galams įsiūti. Bukas galas neperskelia siūlo.", "spec": "Didelė akutė", "price": "", "url": ""},
    {"tag": "nice", "name": "Vąšelių rinkinys", "description": "Praverčia, kai reikia pakoreguoti tankį ar nerti storesniais siūlais.", "spec": "2,5–4 mm", "price": "", "url": ""},
    {"tag": "nice", "name": "Eilių skaitiklis", "description": "Padeda suskaičiuoti pirštų ir kulno ratus, kad abi kojinės būtų vienodos.", "spec": "Su spaudžiamu mygtuku", "price": "", "url": ""},
    {"tag": "nice", "name": "Matavimo juostelė", "description": "Pėdos ilgiui ir nėrimo tankiui pamatuoti.", "spec": "150 cm, minkšta", "price": "", "url": ""},
    {"tag": "nice", "name": "Kojinių formos", "description": "Išskalbtos kojinės ant jų išdžiūsta lygios ir gražios formos.", "spec": "Vaikiški dydžiai", "price": "", "url": ""},
    {"tag": "nice", "name": "Projektų krepšelis", "description": "Kad kamuolys neriedėtų po stalu ir vąšelis nepasimestų.", "spec": "Su kišenėle įrankiams", "price": "", "url": ""}
  ],
  "kit": {
    "title": "Pradedančiojo rinkinys",
    "text": "Viskas vienai porai M dydžio kojinių vienoje dėžutėje.",
    "items": ["2 sruogos kojinių siūlų (po 50 g)", "Vąšelis 3 mm su ergonomine rankena", "Buka adata ir 4 žymekliai", "Atspausdinta šio puslapio instrukcija"]
  }
};
