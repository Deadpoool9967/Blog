'use client';
import {collection ,addDoc,getDoc,QuerySnapshot, query, onSnapshot, deleteDoc, doc} from "firebase/firestore";
import React, { useState, useEffect } from 'react';
import { db } from "../firebase/page";
import {UserAuth} from "../contex/AuthContex";
import Spinner from "../spinner/page"

const user= () => {
 const {user} = UserAuth()
 const {loading ,setLoading} = useState(true)

 useEffect(()=>{
  const checkAuthentication = async () =>{
    await new Promise((resolve) => setTimeout(resolve,50))
    setLoading(false)
  }
  checkAuthentication()
},user);
 

    const [items ,setItems] = useState([
        
      ]);

      const [newItem, setNewItem] = useState({Title:'',Disp:''})
    


      const addBlog = async (e) =>{
e.preventDefault()
if (newItem.Title !== '' && newItem.Disp !== '') {
    // setItems([...items, newItem]);
    await addDoc(collection(db, 'items'), {
      Title: newItem.Title.trim(),
      Disp: newItem.Disp.trim(),
    });
    setNewItem({ Title: '', Disp: '' });
  }

      };

      useEffect(() => {
        const q = query(collection(db, 'items'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let itemsArr:any = [];
    
          querySnapshot.forEach((doc) => {
            itemsArr.push({ ...doc.data(), id: doc.id });
          });
          setItems(itemsArr);
    
          // Read total from itemsArr
          
          return () => unsubscribe();
        });
      }, []);

      const deleteItem = async (id) => {
        await deleteDoc(doc(db, 'items', id));
      };

  return (
    <div className='width'>
      {loading ? (<Spinner/>):user ?(

        <div className='flex min-h-screen flex-col items-center justify-between '>

<div className="bg-grey-100">

<form className="max-w-sm mx-auto items-center justify-between">
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Title</label>
    <input type="text" id="title" value={newItem.Title}onChange={(e) => setNewItem({ ...newItem, Title: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Blog Title" required />
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Discription</label>
    <input type="text" id="disp" value={newItem.Disp} onChange={(e) => setNewItem({ ...newItem, Disp: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Blog Discription" required />
  </div>
 
  <button type="submit" onClick={addBlog} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

</div>

<ul>
            {items.map((item, id) => (
              <li key={id} className='my-4 w-full  justify-between bg-slate-100'>
                <div className='p-4 w-full flex justify-between '>
                  <b><span className='capitalize'>{item.Title}</span></b>
                  
                </div>
                <div className='p-4 w-full flex justify-between '>
                <span>{item.Disp}</span></div>
                <div className='p-4 w-full flex justify-between '>
                <button className='p-4 w-full flex justify-center bg-blue-200 hover:bg-blue-300'>Read more</button>
                <button  onClick={() => deleteItem(item.id)} className='p-4 w-full flex justify-center bg-red-200 hover:bg-red-300'>Delet</button></div>
              </li>
            ))}
          </ul>
          </div>

      ):(
        <p>You must be logged in to view this page</p>
      )}

          </div>
   
  )
}

export default user
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}

