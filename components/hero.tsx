export default function Hero() {
  return (
    <section className="p-8 md:p-16 border-b-4 border-black dark:border-white">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Saya membantu UMKM mendapatkan traffic organik yang menghasilkan penjualan.
        </h1>

        <p className="text-lg md:text-xl mb-8">
          SEO Architect dengan pendekatan data-driven. Bukan sekadar ranking—tapi strategi yang meningkatkan omzet.
        </p>

        <div className="flex gap-4">
          <button className="border-4 border-black dark:border-white px-6 py-3 font-bold shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#39FF14] hover:translate-x-1 hover:translate-y-1 transition">
            Lihat Portfolio
          </button>

          <button className="border-4 border-black dark:border-white px-6 py-3 font-bold bg-yellow-300 text-black shadow-[6px_6px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition">
            Konsultasi Gratis
          </button>
        </div>
      </div>
    </section>
  );
}