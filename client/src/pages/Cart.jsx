import { Add, Remove } from '@mui/icons-material';
import { Navbar, Announcement, Footer } from '../components'
import { product6, product5 } from '../assets'
import { useSelector, useDispatch } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const KEY = "pk_test_51N2ehTKyJJyI8xUVOD0iDOb8akox3lDByNCVUlC6CV8BDYtXgbGVjpEqbYQs0o8kZyizx706IjF5YSHZ8JF7M1Vr00SMqgTM10"

const Cart = () => {

    const { products, total } = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate()

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const response = await axios.post('http://localhost:5000/stripe/payment', { tokenId: stripeToken.id, amount: 5000 })
                navigate('/success')
                // create order
            }
            catch (error) {
                console.log('error in payment', error)
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken, total])

    return (
        <div className=' ' >
            <Navbar />
            <Announcement />

            <section className='wrapper p-[2rem] ' >
                <h2 className='uppercase font-light text-center w-full text-[32px] ' >Your Bag</h2>

                {/* top */}
                <div className='top flex items-center justify-between p-[20px] ' >
                    <button className='topButton p-[10px] font-semibold uppercsae bg-transparent border-[1px] border-black rounded-[4px] capitalize ' >continue shopping</button>
                    <div className='topTexts md:flex hidden  ' >
                        <p className='topText underline cursor-pointer mx-[10px] ' >Shopping Bag(2)</p>
                        <p className='topText underline cursor-pointer mx-[10px] ' >Your Wishlist(0)</p>
                    </div>
                    <button className='topButton p-[10px] font-semibold uppercsae border-none bg-black text-white rounded-[4px] capitalize ' >check out now</button>
                </div>



                {/* bottom */}
                <div className='bottom flex md:flex-row flex-col justify-between gap-[2rem] ' >

                    {/* products */}
                    <div className="info flex-[2] flex flex-col gap-[1rem] ">
                        {/* product */}
                        {
                            products.map((product, index) => (
                                <div key={index} className="h-[14rem] bg-[#f8f8f8] ">
                                    <div className="product w-full flex md:flex-row flex-col justify-between p-[8px] ">
                                        {/* product image */}
                                        <img src={product6} alt="" className="productImage flex-1 md:max-w-[50%] max-w-full w-[20rem] h-full  " />
                                        <div className="flex-1 ">
                                            {/* product detail */}
                                            <div className="details p-[20px] flex flex-col justify-around ">
                                                <p className="productName uppercase flex justify-between "> <b>Product:</b><span className=" " >{product?.title}</span></p>
                                                <p className="productId uppercase flex justify-between "> <b>ID:</b><span className=" " >{product?._id}</span></p>
                                                <p className="productId uppercase flex justify-between "> <b>Color:</b><span className={`productColor w-[20px] h-[20px] rounded-full bg-[#${product?.color}] `} /></p>
                                                <p className="productSize uppercase flex justify-between "> <b>Size:</b><span className=" " >{product?.size}</span></p>
                                            </div>
                                            {/* price detail */}
                                            <div className='addContainer flex items-center justify-between md:w-[50%] w-full ' >
                                                <div className='amountContainer flex items-center font-bold gap-[6px] '>
                                                    <button className='' ><Remove /></button>
                                                    <span className='amount w-[30px] h-[30px] rounded-[10px] border-[1px] border-teal-700 flex items-center justify-center ' >{product?.quantity}</span>
                                                    <button className='' ><Add /></button>
                                                </div>
                                                <div className="productPrice font-light text-[32px] ">$ {product?.price * product?.quantity}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className='hr bg-[#eee] border-none h-[1px] ' />
                                </div>
                            ))
                        }
                    </div>

                    {/* summary */}
                    <div className="summary border-[.5px] border-light-gray500 rounded-[10px] p-[20px] h-fit flex-1 ">
                        <h3 className="summaryTitle font-light text-[24px] capitalize ">order summary</h3>
                        <div className="summaryItem my-[30px] flex justify-between ">
                            <span className="summaryItemText">Subtotal</span>
                            <span className="summaryItemPrice">$ {total}</span>
                        </div>
                        <div className="summaryItem my-[30px] flex justify-between ">
                            <span className="summaryItemText">Estimated Shipping</span>
                            <span className="summaryItemPrice">$ 5</span>
                        </div>
                        <div className="summaryItem my-[30px] flex justify-between ">
                            <span className="summaryItemText">Shipping Discount</span>
                            <span className="summaryItemPrice">$ -1</span>
                        </div>
                        <div className="summaryItem my-[30px] flex justify-between font-bold text-[24px] ">
                            <span className="summaryItemText">Total</span>
                            <span className="summaryItemPrice">$ {total}</span>
                        </div>
                        <StripeCheckout
                            name='NANO.'
                            image='img'
                            billingAddress
                            shippingAddress
                            description={`Your total is ${total}`}
                            amount={total * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <button className="check w-full p-[10px] bg-black text-white font-semibold ">check out now</button>
                        </StripeCheckout>
                    </div>

                </div>



            </section>

            <Footer />
        </div>
    )
}

export default Cart;


const cartProducts = [
    {
        img: product5,
        title: 'jessie thunder shoes',
        _id: '9284024823',
        color: 'black',
        size: '36.5',
        amount: '5',
        totalPrice: '50',
    },
    {
        img: product6,
        title: 'hakura T-shirt shoes',
        _id: '242325141',
        color: 'blue',
        size: 'L',
        amount: '2',
        totalPrice: '20',
    },

]