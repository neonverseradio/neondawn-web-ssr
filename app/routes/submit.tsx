import React from "react";

export default function Submit() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-20 text-center text-neutral-200">
      <h1 className="text-4xl font-bold tracking-wide mb-6">
        Neon Dawn — Audio Engineer, NeonVerse Radio
      </h1>

      <p className="text-lg opacity-80 max-w-xl mb-10">
        “Radio low, the sky feels wide.”
      </p>

      <section className="space-y-4 text-lg">
        <div>
          <span className="font-semibold">Contact 1:</span>{" "}
          <a
            href="mailto:neonverseradio@gmail.com"
            className="text-cyan-300 hover:text-cyan-200"
          >
            neonverseradio@gmail.com
          </a>
        </div>

        <div>
          <span className="font-semibold">Contact 2:</span>{" "}
          <a
            href="mailto:neondawn.project@gmail.com"
            className="text-cyan-300 hover:text-cyan-200"
          >
            neondawn.project@gmail.com
          </a>
        </div>

        <div>
          <span className="font-semibold">Instagram:</span>{" "}
          <a
            href="https://www.instagram.com/neondawn.project/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-cyan-200"
          >
            @neondawn.project
          </a>
        </div>
      </section>

      <footer className="mt-20 text-sm opacity-60 leading-relaxed">
        <p>© 2026 Neon Dawn</p>
        <p>
          © 2026 NeonVerse Radio – Toronto, Canada  
          <br />
          Independent Online Radio Station  
          <br />
          The Sound of Future City
        </p>
      </footer>
    </main>
  );
}
