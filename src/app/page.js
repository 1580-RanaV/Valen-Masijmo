import HeroSection from '../app/components/HeroSection';
import TopThree from './components/SectionTwo';
import People from './components/SectionThree';
import CrDir from './components/SectionSix';
import SectionThree from './components/SectionFour';
import Footer from './components/Footer';
import ShopRow2 from './components/ShopRow2';
import LastSection from './components/LastSection';
import Grid from './components/SectionFive';
import GridTwo from './components/SectionSeven';
import Eight from './components/SectionEight';

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
      {/* <LastSection /> */}
      <Footer />
    </main>
  );
}
