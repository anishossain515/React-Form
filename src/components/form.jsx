import { useState} from "react"
   function Login(){  
    
    const [formData , setFormData] = useState({
        name : "",
        email : "",
        password : ""
       });
    
       const [userData , setUserData] = useState({
           name : "",
           email : "",
           password: ""
       });
    
       const handelChange = (e) =>{
          const { name,value,password } = e.target;
          setFormData((preData)=>({
             ...preData,
             [name] : value
          }))
       };
    
       const submitData = (event)=>{
          event.preventDefault();
          setUserData(formData)
          setFormData({name : "", email : "" , password : ""})
       }
    
    
    
        return(
            <>
              <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
                  
                  <div className="w-full max-w-md bg-white rounded-sm p-10">
                     <h1 className="text-center text-2xl font-semibold">Login Form</h1>
                     
                  <form>
    
                  <div>
                        <label className="block text-gray-600">Name :</label>
                        <input onChange={handelChange}  type="text" placeholder="Enter Your Name" className="w-full px-3 py-2 rounded-md  border border-gray-300 mt-1" name="name" value={formData.name} />
                     </div>
    
                     <div className="mt-2">
                       <label className="block text-gray-600">Email :</label>
                       <input onChange={handelChange} type="email" placeholder="Enter Your Email" className="w-full px-3 py-2 rounded-md  border border-gray-300 mt-1" name="email" value={formData.email}/>
                     </div>
    
                     <div className="mt-2">
                        <label className="block text-gray-600">Password :</label>
                        <input onChange={handelChange} type="password" placeholder="Enter Your Password" className="w-full px-3 py-2 rounded-md border border-gray-300 mt-1" name="password" value={formData.password} />
                     </div>
    
                     <button onClick={submitData} type="submit" className="w-full p-2 bg-indigo-500 text-white text-xl mt-3">Login</button>
                     
    
                  </form>
    
                  <div className="mt-5">
                    <h1 className="text-center text-xl text-gray-600 font-semibold">User Information</h1>
    
                    <h2 className="text-gray-700">Name : {userData.name}</h2>
                    <h2 className="text-gray-700">Email : {userData.email}</h2>
                    <h2 className="text-gray-700">Password : {userData.password}</h2>
                  </div>
    
    
                  </div>
    
              </div>
            </>
        )
    }
    
    export default Login;