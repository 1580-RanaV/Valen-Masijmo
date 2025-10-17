import HeroSection from '../app/components/HeroSection';
import TopThree from './components/ShopRow1';
import People from './components/BlackChapterIntro';
import CrDir from './components/SectionSix';
import SectionThree from './components/ValenClubIntro';
import Footer from './components/Footer';
import ShopRow2 from './components/ShopRow2';
import Grid from './components/Grid1';
import GridTwo from './components/Grid2';
import Eight from './components/FruityIntro';

export default function Home() {
  return (
    <main className='bg-gray-50'>
      <HeroSection />
      <TopThree />
      <People />
      <ShopRow2 />
      <SectionThree />
      <Grid />
      <CrDir />
      <GridTwo />
      <Eight />
      <Footer />
    </main>
  );
}
