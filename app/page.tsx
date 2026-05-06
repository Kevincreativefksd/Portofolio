import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import CTA from "@/components/CTA";

export const metadata = {
  title: "SEO Architect untuk UMKM | Jasa SEO Indonesia",
  description:
    "Saya membantu UMKM meningkatkan traffic organik dan penjualan dengan strategi SEO berbasis data.",
};

export default function Home() {
  return (
    <main className="bg-white text-black dark:bg-black dark:text-white">
      <Hero />
      <Problem />
      <Solution />
      <Portfolio />
      <Services />
      <CTA />
    </main>
  );
}