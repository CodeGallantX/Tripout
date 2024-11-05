
import Header from '../components/Header';
import Banner from '../components/Banner';

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
      
      <Footer />

    </div>
  )
}

export default App;