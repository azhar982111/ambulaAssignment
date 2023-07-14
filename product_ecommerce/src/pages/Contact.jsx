import { useState } from "react"
import styles from "../css.files/contact.module.css"

export default function Contact(){

    const details = {
        firstName : "",
        lastName : "",
        email : "",
        number : ""
    }

    let [formdata, setFormdata] = useState(details)

    function handleSubmit(){
        if(number.length !== 10){
            alert("Enter a valid 10 digit number")
        }

        if(firstName === "" ||lastName === "" ||email === "" ||number === "" ){
            alert("Please asnwer all the fields")
        }

        console.log(formdata)
    }

    function handleChange(e){
        let { name, value, type, checked } = e.target;

        value = type === "checkbox" ? checked : value;
    
        setFormdata((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
    }

    const { firstName, lastName, email, number } = formdata;

    return(
        <div className={styles.container}>
        
                <label>First Name</label>
                <input type="text" name="firstName" value={firstName} onChange={handleChange}/>

                <label>Last Name</label>
                <input type="text" name="lastName" value={lastName} onChange={handleChange}/>

                <label>Email address</label>
                <input type="email" name="email" value={email} onChange={handleChange}/>

                <label>Phone Number</label>
                <input type="number" name="number" value={number} onChange={handleChange}/>

                <button onClick={handleSubmit}>S U B M I T</button>
            
        </div>
    )
}