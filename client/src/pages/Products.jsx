import { Navbar, Announcement, NewsLetter, Products, Footer } from '../components'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ProductsList = () => {

    //////////////////////////////////////// Variables ////////////////////////////////////////
    const { category } = useParams()

    //////////////////////////////////////// States ////////////////////////////////////////
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState('newest')

    //////////////////////////////////////// Use Effects ////////////////////////////////////////


    //////////////////////////////////////// Functions ////////////////////////////////////////
    // 1
    const handleFilters = (e) => {
        if (e.target.value.toLowerCase() == 'all') {
            delete filters[e.target.name]
            setFilters({ ...filters })
        }
        else {
            setFilters({ ...filters, [e.target.name]: e.target.value.toLowerCase() })
        }
    }
    // 2
    const handleSort = (e) => {
        setSort(e.target.value)
    }



    return (
        <div className="" >
            <Navbar />
            <Announcement />
            <div className='px-[2rem] py-[1rem] flex flex-col gap-[1rem]  ' >
                <h2 className='text-[36px] font-semibold category ' >{category}</h2>

                {/* filters */}
                <div className='filterContainer flex justify-between ' >
                    <div className='filter flex md:flex-row flex-col gap-[8px] ' >
                        <h3 className='filteredText text-[20px] font-semibold ' >Fitler Products:</h3>
                        <div className='flex md:flex-row md:items-center gap-[1rem] flex-col ' >
                            {/* color filter */}
                            <select name='color' onChange={handleFilters} className='select outline-teal cursor-pointer md:w-[10rem] p-[10px] mr-[12px] w-full border-[1px] border-light-gray500 rounded-[4px] ' >
                                <option className='option' >All</option>
                                <option className='option' >White</option>
                                <option className='option' >Black</option>
                                <option className='option' >Blue</option>
                                <option className='option' >Gray</option>
                                <option className='option' >Green</option>
                            </select>
                            {/* size filter */}
                            <select name='size' onChange={handleFilters} className='select outline-teal cursor-pointer md:w-[10rem] p-[10px] mr-[12px] w-full border-[1px] border-light-gray500 rounded-[4px] ' >
                                <option className='option' >All</option>
                                <option className='option' >XS</option>
                                <option className='option' >S</option>
                                <option className='option' >M</option>
                                <option className='option' >L</option>
                                <option className='option' >XL</option>
                            </select>
                        </div>
                    </div>


                    <div className='flex md:flex-row md:items-center gap-[1rem] flex-col ' >
                        <h3 className='filteredText text-[20px] font-semibold ' >Sort Products:</h3>
                        <select onChange={handleSort} className='select outline-teal md:w-[10rem] p-[10px] mr-[12px] w-full border-[1px] border-light-gray500 rounded-[4px] ' >
                            <option className='option ' value='newest'  >Newest</option>
                            <option className='option ' value='asc' >price (asc) </option>
                            <option className='option ' value='desc' >price (desc) </option>
                        </select>
                    </div>


                </div>

                <Products category={category} filters={filters} sort={sort} />
            </div>
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default ProductsList