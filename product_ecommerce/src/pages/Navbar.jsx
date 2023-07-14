import { Link } from "react-router-dom"
import styles from "../css.files/Navbar.module.css"


export default function Navbar() {

    return (
        <div className={styles.container}>
            <div><Link style={{"textDecoration":"none"}} Link to="/">HOME</Link></div>
            <div><Link style={{"textDecoration":"none"}} to="/about">ABOUT</Link></div>
            <div><Link style={{"textDecoration":"none"}} to="/contact">CONTACT</Link></div>
            <div><Link style={{"textDecoration":"none"}} to="/products">PRODUCTS</Link></div>
            <div><Link style={{"textDecoration":"none"}} to="/cart">CART</Link></div>
        </div>
    )
}