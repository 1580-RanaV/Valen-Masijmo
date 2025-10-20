import HeroSection from '../app/components/HeroSection';
import ShopRow1 from './components/ShopRow1';
import People from './components/BlackChapterIntro';
import CrDir from './components/SectionSix';
import SectionThree from './components/ValenClubIntro';
import Footer from './components/Footer';
import ShopRow2 from './components/ShopRow2';
import Grid from './components/Grid1';
import GridTwo from './components/Grid2';

export default function Home() {
  return (
    <main className='bg-white'>
      <HeroSection  />
      <ShopRow2 />
      <People />
      <ShopRow1 />
      <SectionThree />
      <Grid />
      <CrDir />
      <GridTwo />
      <Footer />
    </main>
  );
}
