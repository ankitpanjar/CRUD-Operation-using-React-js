import axios from "axios"
import { useEffect ,useState} from "react"
import { useNavigate, useParams } from "react-router-dom"
import style from "./home.module.css"

const Editusers=()=>{
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
    let navigator=useNavigate()
    let {index}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3000/user/${index}`)
        .then((resp)=>{
            console.log(resp)
            setName(resp.data.name)
            setSalary(resp.data.salary)
            setCompany(resp.data.company)
        })
    },[index])
    let nameData=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        e.preventDefault()
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        e.preventDefault()
        setCompany(e.target.value)
    }
    let formHandle=(e)=>{
        e.preventDefault()
        let payLoad={name,salary,company}
        axios.put(`http://localhost:3000/user/${index}`,payLoad)
        .then(()=>{
            console.log("Data has been succesfully updated")
        })
        navigator("/user")
    }
    return(
        <div>
            <div id={style.myform}>
            <form action="">
                <tr>
                    <th colSpan="2"><h4>Update User Details</h4></th>
                </tr>
                <tr>
                    <td><label htmlFor="">Name :</label></td>
                    <td><input type="text" value={name} onChange={nameData}/></td>    
                </tr>

                <tr>
                    <td><label htmlFor="">Salary :</label></td>
                    <td><input type="number" value={salary}onChange={salaryData}/></td>    
                </tr>

                <tr>
                    <td><label htmlFor="">Company :</label></td>
                    <td><input type="text" value={company} onChange={companyData}/></td>    
                </tr> 
                <th colSpan="2">
                <button onClick={formHandle}>Update</button>
                </th>
            </form>
        </div>
        </div>
    )
}
export default Editusers