const disciplines = ["Grafikai tervezés", "Kiadványszerkesztés", "Honlapszerkesztés"];

export default function Home() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-7xl flex-col px-6 sm:px-12 lg:px-20">
      <a href="#tartalom" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:bg-background focus:p-4">
        Ugrás a tartalomra
      </a>
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-black/15 py-7 sm:py-9">
        <span className="text-sm font-semibold tracking-tight">Szakmai portfólió</span>
        <span className="text-xs tracking-widest text-black/60">GRAFIKA / KIADVÁNY / WEB</span>
      </header>

      <main id="tartalom" className="flex flex-1 flex-col justify-center py-20 sm:py-28">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-black/60">
          Tapasztalat. Figyelem. Vizuális rend.
        </p>
        <h1 className="max-w-4xl text-5xl leading-[1.08] font-medium tracking-[-0.045em] sm:text-7xl lg:text-8xl">
          Gondolatból<br />
          <span className="font-serif font-normal italic">látható érték.</span>
        </h1>
        <p className="mt-9 max-w-xl text-base leading-relaxed text-black/65 sm:text-lg">
          Grafikai tervezés, kiadványszerkesztés és honlapszerkesztés —
          szakmai tapasztalattal, a részletekre fordított figyelemmel.
        </p>
        <ul aria-label="Szakterületek" className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-black/15 pt-6">
          {disciplines.map((discipline, index) => (
            <li key={discipline} className="flex items-baseline gap-3 text-sm">
              <span className="text-xs text-black/45">0{index + 1}</span>
              {discipline}
            </li>
          ))}
        </ul>
      </main>

      <footer className="flex flex-wrap justify-between gap-3 border-t border-black/15 py-6 text-xs text-black/55">
        <span>Grafika, kiadvány, web.</span>
        <span>A portfólió hamarosan bővül.</span>
      </footer>
    </div>
  );
}
