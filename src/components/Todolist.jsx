import { useEffect, useState } from "react";
import '../css/Users.css'
import User2 from "./User2";


const Todolist = () => {

    const[users, setUsers]= useState([])

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data =>setUsers (data))
    },[])


    return (
        <div className="card-container">
            { 
            users.map((user)=>(


           <User2>{ user.id} user1={user}</User2>


            ))
            
        }
        </div>
    );
};

export default Todolist;