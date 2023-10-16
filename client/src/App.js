import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [api, setApi] = useState();
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8000");
        setApi(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

 async function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
try {
 const response =  await axios.post("http://localhost:8000/form",obj)
  console.log(response);
 setApi(response.data)
} catch (error) {
  
}


   
  }

  return (
    <div className="App">
      <p>{api}</p>

      <form onSubmit={handleSubmit}>
        <input placeholder="email" type="email" ref={emailRef} />
        <input placeholder="Password" type="string" ref={passwordRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
