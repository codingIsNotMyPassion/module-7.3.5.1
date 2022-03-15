import { useState } from "react";

export function Demosite() {
  const [longUrl, setlongUrl] = useState(""); 
  const [message, setMessage] = useState(""); 
  const handleSubmit = async(event) =>{
    event.preventDefault()
    try {
      const res = await fetch("https://m-i.herokuapp.com/",{
        method:"POST",
        body:JSON.stringify({
          longUrl,
        }),
        headers :{
          "Content-Type":"application/json"
        }
      });
      const data = await res.json()
      setMessage(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleinput = (event)=>{
    event.preventDefault();
     setMessage("");
     setlongUrl("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <div>
          <input
            className='input-box'
            type="url"
            placeholder='Shorten a link here..'
            value = {longUrl}
            onChange={(event)=> setlongUrl(event.target.value)}
            onClick={handleinput}
            required/>
            </div>
            
           <div>
          <button type = "submit" 
          className='demo-btn'>
            SHORT IT!
          </button>
          </div>

           <div>
           {message && 
           <h5> <a href={message}
           target="_blank">{message}</a></h5> 
           }
           </div>
        
        </div>


      </form>

    </div>
  );
}
