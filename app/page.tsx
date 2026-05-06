import hero from "@/components/hero";
import problem from "@/components/problem";
import solution from "@/components/solution";
import portfolio from "@/components/portfolio";
import services from "@/components/services";
import cta from "@/components/cta";

export const metadata = {
  title: "SEO Architect untuk UMKM | Jasa SEO Indonesia",
  description:
    "Saya membantu UMKM meningkatkan traffic organik dan penjualan dengan strategi SEO berbasis data.",
};

export default function Home() {
  return (
    <main className="bg-white text-black dark:bg-black dark:text-white">
      <hero />
      <problem />
      <solution />
      <portfolio />
      <services />
      <cta />
    </main>
  );
}