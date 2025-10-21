import HeroSection from '../app/components/HeroSection';
import ShopRow1 from './components/ShopRow1';
import People from './components/BlackChapterIntro';
import CrDir from './components/SectionSix';
import SectionThree from './components/ValenClubIntro';
import Footer from './components/Footer';
import ShopRow2 from './components/ShopRow2';
import Grid from './components/Grid1';
import GridTwo from './components/Grid2';
import Hero2 from './components/Hero2';

export default function Home() {
  return (
    <main className="bg-white">
      {/* HeroSection stays flush at the top */}
      <HeroSection />

      {/* All other sections get equal top margin + padding */}
      <div className="mt-16 pt-16">
        <Hero2 />
      </div>
      <div className="mt-16 pt-16">
        <ShopRow2 />
      </div>
      <div className="mt-16 pt-16">
        <People />
      </div>
      <div className="mt-16 pt-16">
        <ShopRow1 />
      </div>
      <div className="mt-16 pt-16">
        <SectionThree />
      </div>
      <div className="mt-16 pt-16">
        <Grid />
      </div>
      <div className="mt-16 pt-16">
        <CrDir />
      </div>
      <div className="mt-16 pt-16">
        <GridTwo />
      </div>
      <div className="mt-16 pt-16">
        <Footer />
      </div>
    </main>
  );
}
