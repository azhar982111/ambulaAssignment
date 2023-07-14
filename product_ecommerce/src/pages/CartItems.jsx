
import { useState,useContext } from "react"
import styles from "../css.files/CartItems.module.css"
import { CartContext } from "../context/CartContext"

export default function CartItems({ title, price, image,count,id }) {

    const {cartData,deleteCartItem} = useContext(CartContext)

    let [itemcount, setItemCount] = useState(count)
    let [itemvalue, setItemValue] = useState(price)

    function increase(){
        // setItemCount((prev)=>prev+1)
        // setItemValue((prev)=>prev+price)
        price = price+price
        count = count+1
        updateCount_Price()
    }

    function decrease(){
        // setItemCount((prev)=>prev-1)
        // setItemValue((prev)=>prev-price)
        price = price-price
        count = count-1
        if(itemcount <2){
            setItemCount(1)
            setItemValue(price)
        }
        updateCount_Price()
    }

    function updateCount_Price() {
        const updatedCart = cartData.map((item) =>
            item.id === id ? { ...item, count: count, price: price } : item
        );
        deleteCartItem(updatedCart)
    }

    function handleDelete(){
        const updatedCart = cartData.filter((item) => item.id !== id);
        deleteCartItem(updatedCart);
    }

    // console.log(title, price, image,count,id)

    return (
        <div className={styles.container}>
            <div>
                <img src={image} />
            </div>
            <div>
                <p>{title}</p>
                <p>$ {Math.round((price + Number.EPSILON) * 100) / 100}</p>
                <p>Quantity : {count}</p>
                <div className={styles.buttons}>
                    <button onClick={decrease}>-</button>
                    <button onClick={increase}>+</button>
                </div>
                <button onClick={handleDelete}>D E L E T E</button>
            </div>
        </div>
    )
}