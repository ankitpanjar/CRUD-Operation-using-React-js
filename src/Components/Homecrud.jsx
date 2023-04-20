import React from "react"
import { Link } from "react-router-dom"
import style from "./home.module.css"
const Homecrud=()=>{
    return(
        <section id={style.nav}>
            <Link to="/">Create User </Link>
            <Link to="/user" >Users </Link>
        </section>
    )
}
export default Homecrud