import { useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Createuser=()=>{
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")

    let navigator=useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }

    let formHandle=(e)=>{
        e.preventDefault()
        // console.log(name,salary,company)
        let payLoad={name,salary,company}
        axios.post("http://localhost:3000/user",payLoad)
    
       .then(()=>{
        console.log("yoo")
       })
       .catch(()=>{
        console.log("Oops")
       })
       navigator("/user")
    }
    return(
        <div id={style.myform}>
            <form action="">
                <tr>
                    <th colSpan="2"><h4>User Details</h4></th>
                </tr>
                <tr>
                    <td><label htmlFor="">Name :</label></td>
                    <td><input type="text" value={name} onChange={nameData} /></td>    
                </tr>

                <tr>
                    <td><label htmlFor="">Salary :</label></td>
                    <td><input type="number" value={salary} onChange={salaryData}/></td>    
                </tr>

                <tr>
                    <td><label htmlFor="">Company :</label></td>
                    <td><input type="text" value={company} onChange={companyData}/></td>    
                </tr> 
                <th colSpan="2">
                <button onClick={formHandle}>Submit</button>
                </th>
            </form>
        </div>
    )
}
export default Createuser