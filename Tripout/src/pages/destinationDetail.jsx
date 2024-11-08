
import Header from '../components/Header';
import Banner from '../components/Banner';
import DestinationGrid from '../components/DestinationGrid';
import DestinationIntro from '../components/DestinationIntro';
import InfoCard from '../components/InfoCard';
import Itinerary from '../components/Itinerary';
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 px-6 md:px-10 xl:px-36">
        <div>
          <DestinationIntro />
          <Itinerary />
        </div>
        {/* <div> */}
          <InfoCard />
        {/* </div> */}
      </div>
      <Footer />

    </div>
  )
}

export default App;