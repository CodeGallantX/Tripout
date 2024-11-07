import Header from '../components/Header';
import Banner from '../components/Banner';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer';

const App = () => {

  const page = {
    title: 'Blog',
    breadcrumb: [
      { name: 'BLOG', path: '/blog' },
    ],
  };

  return (
    <div>
      <Header />
      <Banner page={page} />
      <section>
        <BlogList />
      </section>
      <Footer />

    </div>
  )
}

export default App;