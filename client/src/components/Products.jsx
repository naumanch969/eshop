import { products as productsArr } from "../data/data";
import { Product } from "./";
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actions/product'


const Products = ({ category, filters, sort }) => {

    ////////////////////////////////////////////////////  Variables  /////////////////////////////////////////////
    const { products, isFetching, error } = useSelector(state => state.product)
    const dispatch = useDispatch()

    ///////////////////////////////////////////////////   States   /////////////////////////////////////////////
    // const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    ////////////////////////////////////////////////////   useEffect   /////////////////////////////////////////////
    useEffect(() => {
        dispatch(getProducts())
    }, [category])

    useEffect(() => {
        category && setFilteredProducts(        // page should be Products page
            products.filter(product => Object.entries(filters).every(([key, value]) => product[key].map(string => string.toLowerCase()).includes(value.toLowerCase())))
        )
    }, [category, filters, products])
    useEffect(() => {
        if (sort == 'newest') {
            setFilteredProducts(
                pre => [...pre].sort((a, b) => a.createdAt - b.createdAt)
            )
        }
        else if (sort == 'asc') {
            setFilteredProducts(
                pre => [...pre].sort((a, b) => a.price - b.price)       // a,b are any two elements pair of filteredProducts array. sort method will iterate over each possible pair and match the condition (b.price-a.price (if greater than 1, if equals 0 returns 0, if greater than 1 returns -1) ) 
            )
        }
        else if (sort == 'desc') {
            setFilteredProducts(
                pre => [...pre].sort((a, b) => b.price - a.price)
            )
        }
        // filteredProducts.sort((a, b) => console.log(a, b))

    }, [category, sort, products])


    ////////////////////////////////////////////////////   Functions  /////////////////////////////////////////////


    return (
        <div className="flex flex-wrap justify-between " >
            {
                category
                    ?
                    filteredProducts.map((product, index) => <Product key={index} product={product} />)
                    :
                    products.slice(0, 8).map((product, index) => <Product key={index} product={product} />)
            }
        </div>
    )
}

export default Products