# Iltatoimet

Android-sovellus lasten iltatoimien seurantaan. Jokainen lapsi näkee oman eläinhahmonsa, joka täyttyy sitä mukaa kun iltatoimet tulevat tehdyiksi.

## Ominaisuudet

- Usean lapsen tuki — jokaisella oma hahmo, väri ja eläin
- Räätälöitävät iltatoimitehtävät järjestyksessä
- Eläinhahmo täyttyy edistymisen myötä ja laukaisee konfetit kun kaikki on tehty
- Edistyminen tallentuu automaattisesti puhelimeen
- Toimii myös selaimessa (PWA)

## Käyttö

**Ensimmäinen käynnistys**
1. Valitse lasten lukumäärä
2. Anna jokaiselle lapselle nimi, eläin ja väri
3. Muokkaa iltatoimilista haluamaksesi (tai jätä oletukset)

**Iltatoimet**
- Napauta lapsen korttia etusivulla
- Ruksi tehtävät sitä mukaa kuin ne tehdään — eläinhahmo täyttyy
- Kun kaikki on tehty, tulee konfettisuihku

**Asetukset (etusivun hampurilaisvalikko)**
- Muokkaa lapsia — lisää, poista tai muuta nimen/eläimen/värin
- Muokkaa tehtäviä — lisää, poista tai järjestä tehtäviä uudelleen
- Tyhjennä edistyminen — nollaa kaikki tänä iltana tehdyt

## Kehitys

```bash
npm install
npm run dev          # Dev-palvelin osoitteessa localhost:5173
npm run build        # Tuotantobuild → dist/
npm run lint         # ESLint
npm run cap:sync     # Build + synkkaa web-tiedostot Androidille
npm run cap:android  # Avaa Android Studio
```

Debug-APK:n buildaaminen `cap:sync`-ajon jälkeen:

```bash
cd android && ./gradlew assembleDebug
# APK → android/app/build/outputs/apk/debug/app-debug.apk
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

## Teknologia

- React 19 + Vite 8
- Capacitor 8 (Android-paketointi)
- Capacitor Preferences (tallennus)
- Web Audio API (äänet)
- Ei TypeScriptiä, ei ulkoisia UI-kirjastoja
