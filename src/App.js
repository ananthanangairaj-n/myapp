import { useEffect } from 'react';
import './App.css';
import { db } from './firebase';
import {collection,getDocs,addDoc,doc,updateDoc,deleteDoc} from 'firebase/firestore';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import Collection from './collection';

function App() {
  const [user,setusers] = useState([]);
  const [name,setname] = useState(auth.currentUser?.displayName);
  const [age,setage] = useState(0);
  const userref = collection(db,"testapp");
  const [state,setstate] = useState(false);
  const [des,setdes] = useState("");
  const [update,setupdate] = useState(false);
  const [id,setid] = useState();
  const [author] = useAuthState(auth);
  useEffect(()=>{
    const getuser = async() => {
      const data = await getDocs(userref)
      console.log(data.docs)
      setusers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    }
    getuser();
  },[]);
 
  const handlename = (event) => {
    setname(event.target.value);
  }
  const handleage = (e) => {
    setage(e.target.value);
  }
  const handledes = (e) => {
    setdes(e.target.value);
  }

  const createuser = async() => {
    await addDoc (userref, {
      name:name,
      age:Number(age),
      description : des
    });
    setstate(!state);
  }

  const updateuser = (id,name,age,description) => {
    setid(id);
    setname(name);
    setdes(description);
    setage(age);
    setupdate(!update);
  }

  const updateuserdoc = () =>{
    const up = doc(db,"testapp",id);  
    const newdata = {name:name,
                    age:Number(age),
                     description : des};   
    updateDoc(up,newdata);
    setupdate(!update);
  }

  const deleteuser = (id) => {
    const userdoc = doc(db,"testapp",id);
    deleteDoc(userdoc);
  }


  return (
    <div className="App">
    <center>
    <button className='btn' type='submit' onClick={()=>{setstate(!state)}}>Add user</button>
    { state &&
    <div className='addcard'>
    <input type='text' onChange={handlename} placeholder='..name'/>
    <input type='text' onChange={handleage} placeholder='..age'/><br></br>
    <input type='text' onChange={handledes} placeholder='..about'/><br></br>
    <button className='btn' type='submit' onClick={createuser}>Add</button><br></br>
    <button className='btn' type='submit' style={{backgroundColor:'red'}} onClick={()=>{setstate(!state)}}>close</button><br></br>
    <h5>please note once add refresh page</h5>
    </div>
    }
    {
     update &&
     <div className='addcard'>
     <input type='text' onChange={handlename} placeholder='..name'/>
     <input type='text' onChange={handleage} placeholder='..age'/><br></br>
     <input type='text' onChange={handledes} placeholder='..about'/><br></br>
     <button className='btn' type='submit' onClick={updateuserdoc}>update</button><br></br>
     <h5>please note :  change field want , other automatically update previous  and once add refresh page</h5>
     </div>

     }
    </center>
    {user.map((person)=>{
      return (<div>
         <Collection person = {person}  onupdateuser = {updateuser}  ondeleteuser = {deleteuser} />  
      </div>)
    })}
    </div>
  );
}

export default App;