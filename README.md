# Szakmai portfólió

Minimalista, reszponzív portfólió technikai alapja grafikai tervezéshez,
kiadványszerkesztéshez és honlapszerkesztéshez.

## Technológia

Next.js App Router, TypeScript (strict), Tailwind CSS 4, ESLint.
Node.js 20.9 vagy újabb szükséges; a felhőkörnyezetben Node.js 24 használatos.

## Fejlesztés

```sh
npm ci
npm run dev
```

Az alkalmazás a 3000-es porton indul. A kezdőoldal: `src/app/page.tsx`;
a globális stílusok: `src/app/globals.css`; a metaadatok: `src/app/layout.tsx`.
Az alaphoz nem szükséges API-kulcs, adatbázis vagy környezeti változó.
A betűkészletek helyiek, a build nem tölt le külső fontokat.

## Ellenőrzés és éles mód

```sh
npm run lint
npm run build
npm run typecheck
npm start
```

A build generálja a Next.js típusfájljait. Az `npm start` sikeres build után futtatható.
Külön automatizált tesztcsomag még nincs; az alap ellenőrzése a lint,
a build, a típusellenőrzés és a kezdőoldal HTTP-válaszának vizsgálata.
