import { useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function Home() {
    axios.defaults.withCredentials=true;
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:3001/home")
            .then(result=>{console.log(result)
                if(result.data!=="Success"){
                    navigate('/login')
                }  
    })
    .catch(err=>console.log(err))
    },[])
  return (
    <div className="d-flex justify-content-center align-items-center m-5 bg-dark text-white p-5 rounded">
    <h1>Welcome to the Dashboard</h1>  
    </div>
  )
}

export default Home
