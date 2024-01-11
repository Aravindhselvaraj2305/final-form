import { useState,useEffect } from "react";
function App() {

      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
    //Before submit
        useEffect(() => {
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
      }, [name, email, password]); 
    //After submit
      const handleSubmit = (e) =>{ 
        e.preventDefault();
        console.log("Form Submitted successfully");
        console.log("The input fields are");
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
      }
      return (
        <div>
        <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
        </div>
      );
    };

export default App;