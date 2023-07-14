import { useContext, useEffect, useState } from "react"
import styles from "../css.files/AllProducts.module.css"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

export default function AllProducts() {
    const [data, setData] = useState([])

    const { cartData, handleCartUpdate } = useContext(CartContext)

    let getAllData = async () => {
        let res = await fetch(`https://fakestoreapi.com/products`)
        let fetchedData = await res.json()
        setData(fetchedData)
    }

    useEffect(() => {
        getAllData()
    }, [])

    console.log(data)

    function handleAdd(item) {
        item["count"]=1
        // console.log(item)
        handleCartUpdate(item) 
    }


    return (
        <div>

            <div className={styles.container}>
                {
                    data.map((ele) => (
                        <div key={ele.id}>
                            <img src={ele.image} />
                            <p>ID : {ele.id}</p>
                            <p>{ele.title}</p>
                            <p><span>Price : $</span>{ele.price}</p>
                            <button disabled={ele.count>0} onClick={() => handleAdd(ele)}>ADD TO Cart</button>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}