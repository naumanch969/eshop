import { Navbar, Announcement, Products, NewsLetter, Categories, Footer, Slider } from '../components'


const Home = () => {
    return (
        <div className='' >
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Home;