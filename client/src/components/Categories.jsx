import { categories } from '../data/data'
import { Link } from 'react-router-dom'


const Categories = () => {
    // gh

    return (
        <section className='flex md:flex-row flex-col md:justify-center justify-between p-[20px] gap-[4px] ' >
            {
                categories.map((category, index) => (
                    <Link key={index} to={`/products/${category.category}`} className='flex-1 ' >
                        <div className='relative flex-1 h-[70vh] ' >
                            {/* image */}
                            <img src={category.img} className='image w-full h-full object-cover ' />
                            {/* info */}
                            <div className='info absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center gap-[20px] ' >
                                <h2 className='title text-white text-[32px] text-center ' >{category.title}</h2>
                                <button className='button border-none p-[12px] bg-white text-gray cursor-pointer font-semibold ' >SHOP NOW</button>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </section>
    )
}

export default Categories;