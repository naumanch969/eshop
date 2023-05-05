import { Add, Remove } from '@mui/icons-material'
import { Navbar, Announcement, Products, NewsLetter, Categories, Footer } from '../components'
import { product2 } from '../assets'
import { useLocation, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../redux/actions/product'
import { addProduct } from '../redux/reducers/cart'
import { products } from '../data/data'

const Product = () => {

    ////////////////////////////////////////////////////  Variables  /////////////////////////////////////////////
    const { id } = useParams()
    const { currentProduct: product, isFetching, error } = useSelector(state => state.product)
    const dispatch = useDispatch()

    ////////////////////////////////////////////////////   States   /////////////////////////////////////////////
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState(product?.color[0])
    const [size, setSize] = useState(product?.size[0])

    ////////////////////////////////////////////////////   useEffect   /////////////////////////////////////////////
    useEffect(() => {
        id && dispatch(getProduct(id))
    }, [])

    ////////////////////////////////////////////////////   Functions  /////////////////////////////////////////////
    // 1)
    const handleQuantity = (type) => { type == 'increase' ? setQuantity(pre => pre + 1) : quantity > 0 && setQuantity(pre => pre - 1) }
    // 2)
    const selectColor = (color) => { setColor(color) }
    // 3)
    const selectSize = (size) => { setSize(size) }
    // 4)
    const addToCart = () => { dispatch(addProduct({ ...product, quantity, color, size })) }

    return (
        <div className=" " >
            <Navbar />
            <Announcement />

            <div className="wrapper md:p-[3rem] sm:p-[1rem] p-[12px] pb-[3rem] flex md:flex-row flex-col " >

                {/* product image */}
                <div className="imageContainer md:flex-1 max-h-[30rem] " >
                    <img src={product2} alt="" className="image w-full h-full " />
                </div>



                {/* product info */}
                <div className="infoContainer md:flex-1 md:px-[3rem] px-0 flex flex-col gap-[1rem] " >
                    <h3 className='title font-light text-[36px] ' >{product?.title}</h3>
                    <p className='description' >{product?.description}</p>
                    <span className='price font-light text-[40px] ' >$ {product?.price}</span>


                    {/* filters */}
                    <div className='filterContainer flex md:flex-row flex-col justify-between gap-[8px] w-[50%] ' >

                        {/* color filter */}
                        <div className='filter flex items-center justify-between gap-[8px] ' >
                            <h4 className='filterTitle text-[24px] font-light ' >Color</h4>
                            <div className='filterColorContainer flex gap-[6px] ' >
                                {product?.color?.map((c, index) => (
                                    <span onClick={() => selectColor(c)} key={index} style={{ background: c }} className={`filterColor cursor-pointer w-[20px] h-[20px] rounded-full ${color == c && 'border-[2px] border-black '}`} />
                                ))}
                            </div>
                        </div>

                        {/* size filter */}
                        <div className='filter flex items-center justify-between gap-[8px] ' >
                            <h4 className='filterTitle text-[24px] font-light ' >size</h4>
                            <select className='filterSize cursor-pointer border-[1px] border-light-gray500 ml-[10px] p-[4px] ' >
                                {product?.size?.map((size, index) => (
                                    <option onClick={() => selectSize(size)} key={index} className='filterSizeOption ' >{size}</option>
                                ))}
                            </select>
                        </div>

                    </div>

                    {/* add container */}
                    <div className='addContainer flex items-center justify-between md:w-[50%] w-full ' >
                        <div className='amountContainer flex items-center font-bold gap-[6px] '>
                            <button onClick={() => handleQuantity('decrease')} className='' ><Remove /></button>
                            <span className='amount w-[30px] h-[30px] rounded-[10px] border-[1px] border-teal-700 flex items-center justify-center ' >{quantity}</span>
                            <button onClick={() => handleQuantity('increase')} className='' ><Add /></button>
                        </div>
                        <button onClick={() => addToCart()} className='capitalize p-[12px] border-[2px] rounded-[2px] font-medium border-teal-700 bg-white cursor-pointer hover:bg-[#f8f4f4] ' >Add to cart</button>
                    </div>
                </div>

            </div>

            <NewsLetter />
            <Footer />
        </div>
    )
}


export default Product