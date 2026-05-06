export default function Portfolio() {
  return (
    <section className="p-8 md:p-16 border-b-4 border-black dark:border-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Hasil Nyata, Bukan Janji
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border-4 border-black dark:border-white p-6 shadow-[6px_6px_0px_#000]">
          <h3 className="font-bold text-xl mb-2">UMKM Kuliner</h3>
          <p>Traffic: 500 → 8.000/bulan</p>
          <p>Waktu: 4 bulan</p>
        </div>

        <div className="border-4 border-black dark:border-white p-6 shadow-[6px_6px_0px_#000]">
          <h3 className="font-bold text-xl mb-2">Website Edukasi</h3>
          <p>CTR: 2% → 11%</p>
          <p>Keyword Page 1: 0 → 25</p>
        </div>
      </div>
    </section>
  );
}