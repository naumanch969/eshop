import { ShoppingCartOutlined, FavoriteBorderOutlined, SearchOutlined } from '@mui/icons-material'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {

    const [showIcons, setShowIcons] = useState(false)

    return (
        <div onMouseEnter={() => setShowIcons(true)} onMouseLeave={() => setShowIcons(false)} className='relative flex-1 m-[6px] min-w-[280px] h-[350px] flex justify-center items-center bg-[#f5fbfd] ' >
            <div className='circle w-[200px] h-[200px] rounded-full bg-white absolute ' />
            <img src={product.img} className='image h-[75%] z-20 ' />
            <div style={{ opacity: showIcons ? 1 : 0 }} className='info w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.2)] z-30 flex items-center justify-center gap-[12px] transition-all cursor-pointer ' >
                <p className='' >{product?.title}</p>
                <button className='icon w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center hover:bg-[#e9f5f5] transform hover:scale-[1.1] transition-all cursor-pointer ' ><ShoppingCartOutlined /></button>
                <button className='icon w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center hover:bg-[#e9f5f5] transform hover:scale-[1.1] transition-all cursor-pointer ' ><FavoriteBorderOutlined /></button>
                <Link to={`/product/${product?._id}`} className='icon w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center hover:bg-[#e9f5f5] transform hover:scale-[1.1] transition-all cursor-pointer ' ><SearchOutlined /></Link>
            </div>
        </div>
    )
}

export default Product;