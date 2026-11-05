# projektas

## Apie projektą

Ši aplikacija kuriama naudojant [Claude](https://claude.ai), Anthropic sukurtą dirbtinio intelekto asistentą. Claude padeda rašyti ir tobulinti kodą, planuoti architektūrą bei rengti dokumentaciją, o galutinius sprendimus priima ir kodą peržiūri žmogus.

## Būsena

Projektas yra ankstyvoje stadijoje. Aprašymas bus papildytas, kai atsiras pirmosios funkcijos.

## Struktūra

- `index.html` viešas puslapis su vąšeliu nertų vaikiškų kojinių instrukcija ir rekomenduojamomis prekėmis
- `content.js` visas puslapio turinys: tekstai, dydžiai, instrukcijos žingsniai, prekės
- `admin.html` turinio valdymo puslapis

## Turinio valdymas

Atidarykite `admin.html`, pakeiskite tekstus, dydžius, žingsnius ar prekes ir spauskite „Peržiūra“, kad pamatytumėte rezultatą prieš skelbiant.

Norint išsaugoti, reikia GitHub fine-grained prieigos rakto, kuris turi tik šios repozitorijos „Contents: Read and write“ teisę. Raktą susikurkite GitHub nustatymuose (Settings → Developer settings → Personal access tokens → Fine-grained tokens) ir įveskite admin puslapio skiltyje GitHub. Raktas laikomas tik atidarytame naršyklės skirtuke. Paspaudus „Išsaugoti į GitHub“, `content.js` atnaujinamas atskiru commit'u.

Instrukcijos tekste galima naudoti kintamuosius, pavyzdžiui `{n}`. Jų reikšmės kiekvienam dydžiui nustatomos skiltyje „Kintamieji“.
