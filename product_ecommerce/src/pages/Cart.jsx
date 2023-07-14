import { useContext, useState } from "react"
import styles from "../css.files/Cart.module.css"
import CartItems from "./CartItems"
import { CartContext } from "../context/CartContext"


export default function Cart() {
  const { cartData, handleCartUpdate } = useContext(CartContext)

  const value = cartData.reduce((acc, ele) => acc + ele.price, 0);
  const count = cartData.reduce((acc, ele) => acc + ele.count, 0);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.leftDiv}>
          {
            cartData.map((ele) => (
              <CartItems title={ele.title} price={ele.price} image={ele.image} count={ele.count} id={ele.id} />
            ))
          }
        </div>

        <div className={styles.rightDiv}>
          <p>{`Total cart items : ${count}`}</p>
          <p>{`Total cart value : ${Math.round((value + Number.EPSILON) * 100) / 100}`}</p>
          <hr />
          <h2>{`Amount payable : ${Math.round((value + Number.EPSILON) * 100) / 100}`}</h2>
        </div>

      </div>
    </div>
  )
}