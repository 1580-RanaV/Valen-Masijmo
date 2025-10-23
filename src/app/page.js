import HeroSection from '../app/components/HeroSection';
import Hero2 from './components/Hero2';
import ShopRow2 from './components/ShopRow2';
import People from './components/BlackChapterIntro';
import ShopRow1 from './components/ShopRow1';
import SectionThree from './components/ValenClubIntro';
import Grid from './components/Grid1';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-white">
      {/* HeroSection stays flush at the top */}
      
      {/* Consistent spacing between all sections */}
      <div className="space-y-16">
        <HeroSection />
        <Hero2 />
        <ShopRow2 />
        <Grid />
        <ShopRow1 />
        <People />
        <SectionThree />
        <Footer />
      </div>
    </main>
  );
}
