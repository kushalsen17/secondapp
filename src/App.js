import { useEffect, useState } from 'react';
import './App.css';
import Product from './Product';

function App() {
  //let [productVisible,setProductVisible]=useState(false);


  let[users,setUsers]=useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);
      setUsers(data);
    })
    .catch((err)=>{
      console.log(err)
    })
  })


  return (

    <div className="App">
     {/* <h1>Welcome</h1>


     <button onClick={()=>{
      setProductVisible(true);
      }}>Show Product</button>

      <button onClick={()=>{
      setProductVisible(false);
      }}>Hide Product</button>

     {
        productVisible===true?(
          <Product/>
        )
        :null
     } */}

     {
      users.map((user)=>{
        return(
          <div className='user' key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.username}</p>
          </div>
        )
      })
     }

    </div>
  );
}

export default App;
