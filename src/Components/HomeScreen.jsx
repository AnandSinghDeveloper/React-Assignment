import React from 'react'
import { useState } from 'react'
import { FaCamera } from "react-icons/fa";
import { UserDataContext } from '../Context/UserContext'
import { useContext } from 'react'



const HomeScreen = () => {
  const [image, setImage] = useState(localStorage.getItem("profilePic") || null);
  const { user, setUser } = useContext(UserDataContext);

   if (user.name === ""
    || user.email === ""
   ){
    const userData =  JSON.parse(localStorage.getItem("user"));
 
    
    setUser(userData);


   }else{}

      
       
  

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(event.target.files[0]); 
        
        if (file) {
          const reader = new FileReader();
            
            
            reader.onloadend = () => {
                setImage(reader.result);
                localStorage.setItem("profilePic", reader.result); 
            };
            reader.readAsDataURL(file);
        }

    };

    return (
        <div>
            
            <div className='w-full h-screen  '>
              <div className='h-[10%] w-full flex flex-col items-start justify-center p-5'>
              <h1 className='text-2xl font-medium text-left opacity-80'>Account Settings</h1>
              </div>
              <div className='h-[20%] w-full bg-[#F7F8F9] flex gap-5  p-5'>
              <input 
               type="file" 
               accept="image/*"
               id="fileInput" 
                onChange={handleFileChange} className=' hidden'  />
                  {image && <img src={image} alt="Profile" style={{ position:'fixed', width: 120, borderRadius: "50%", height: 120, objectFit: "cover" }} />} 
                  <button onClick={() => document.getElementById("fileInput").click()} className=' absolute top-42 left-25 h-10 w-10 rounded-full flex justify-center items-center bg-[#6C25FF] text-white '>
                    <FaCamera style={{ color: "#fff", }} />
                  </button>
                 <div className='mt-5 ml-35 text-start'>
                 <h1 className='  text-center text-2xl font-medium'>{user.name}</h1>
                 <h2 className=' text-center text-base  font-medium'>{user.email}</h2>
                 </div>
                
                 </div>
              </div>
              
           

            
        </div>
    );
};


export default HomeScreen
