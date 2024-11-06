
import Header from '../components/Header';
import Banner from '../components/Banner';
import DestinationGrid from '../components/DestinationGrid';
import DestinationIntro from '../components/DestinationIntro';
import Footer from '../components/Footer';



const App = () => {

  const page = {
    title: 'Destination Detail',
    breadcrumb: [
      { name: 'DESTINATIONS', path: '/destinations' },
      { name: 'DESTINATION DETAIL', path: '/destination-detail' },
    ],
  };

  return (
    <div>
      <Header />
      <Banner page={page} />
      <DestinationGrid />
      <DestinationIntro />
      <Footer />

    </div>
  )
}

export default App;