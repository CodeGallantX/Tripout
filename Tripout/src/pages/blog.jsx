import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const App = () => {

    const page = {
        title: 'Blog',
        breadcrumb: [
          { name: 'Blog', path: '/blog' },
        ],
      };

    return (
        <div>
            <Header />
            <Banner page={page}/>
            <Footer />

        </div>
    )
}

export default App;