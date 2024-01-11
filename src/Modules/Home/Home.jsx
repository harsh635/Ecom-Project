import React, { useEffect, useState } from 'react'
import Hero from '../../assets/Components/Hero/Hero'
import Products from '../../assets/Components/Products/Products'
import Feature from '../../assets/Feature/Feature'
import Footer from '../../assets/Components/Footer/Footer'
import Categories from '../../assets/Components/Categories/Categories'

const Home = () => {
    const [categories, setCategories] = useState([])

useEffect(()=>{
const fetchCategories = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/categories`)
    const data = await response.json()
    console.log(data)
    setCategories(data)
}
fetchCategories()

},[])


return (
    <>
    <Hero />
    <Feature cards={categories} />
    </>
)
}

export default Home