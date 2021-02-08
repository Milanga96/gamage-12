import React, {createContext, useState, useEffect} from 'react'

export const DataContext = createContext();

export const ProductsDetails = (props) => {
    const [products, setProducts] = useState([
        {
            "_id":"1",
             "title": "I phone 11",
             "images": [
                 "data:image/jpeg;base64,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",
                 ],
             "rating": "4.5/5",
             "price": 101,
             "count": 1
         },
         {
             "_id": "2",
             "title": "Wacth Product 02",
             "images": [
                 "https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0007_m124300-0001-perpetual-41.jpg?imwidth=550",
                 "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
                 "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
                 "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
                 ],
             "description": " ",
             "price": 102,
             "count": 1

         },
         {
             "_id": "3",
             "title": "MERINO WOOL KNIT WOMEN",
             "images": [
                 "https://cdn.shopify.com/s/files/1/2696/5846/products/72-10-49309-029_3_a2f37709-d312-46e8-aa87-b468ab1693a0_2000x.jpg?v=1609160178",
                 "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
                 "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
                 "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
                 ],
                 "description": " ",
             
             "price": 2500,
             "count": 5

         },
         {
             "_id": "4",
             "title": "WOOL CROSS X MEN",
             "images": [
                 "https://cdn.shopify.com/s/files/1/2696/5846/products/70-10-49305-017_2_e1cfd33b-c5a9-419e-b0b3-c26dd6f4f153_2000x.jpg?v=1609160174",
                 "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
                 "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
                 "https://www.upsieutoc.com/images/2020/07/18/img1.jpg"
                 ],
             "description": "",
             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 104,
             "count": 6

         },
         {
             "_id": "5",
             "title": "Men's Aluminium Polarized Color Sunglasses Photochromic Driving Outdoor Eyewear",
             "images": [
                 "https://i.ebayimg.com/images/g/-Z4AAOSwBtNffTXw/s-l1600.jpg",
                 "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
                 "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
                 "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
                 ],
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 105,
             "count": 1

         },
         {
             "_id": "6",
             "title": "Wacth Product 06",
             "images": [
                 "https://www.upsieutoc.com/images/2020/07/18/img6.jpg",
                 "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
                 "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
                 "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
                 ],
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 106,
             "count": 1

         },
         {
            "_id": "7",
            "title": "Wacth Product 06",
            "images": [
                "https://www.upsieutoc.com/images/2020/07/18/img6.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 106,
            "count": 1

        },
        {
            "_id": "8",
            "title": "Wacth Product 06",
            "images": [
                "https://www.upsieutoc.com/images/2020/07/18/img6.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 106,
            "count": 1

        },
    ])

    const [cart, setCart] = useState([])

    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("The product has been added to cart.")
        }
    }

    useEffect(() =>{
       const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart) setCart(dataCart)
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])


    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }

    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}


export default ProductsDetails;