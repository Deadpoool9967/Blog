'use client'
import {collection ,addDoc,getDoc,QuerySnapshot, query, onSnapshot, deleteDoc, doc} from "firebase/firestore";
import React, { useState, useEffect } from 'react';
import { db } from "../firebase/page";

const Home_page = () => {
  const [items ,setItems] = useState([
    
  ]);

  const [total, setTotal] = useState(0)

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


  return (
    <>
  <div className='flex min-h-screen flex-col items-center justify-between sm:p-24 p-4'>
    <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm'>
      <h1 className='text-4xl p-4 text-center text-black'>Latest Bloges of the day </h1>

    
      <ul>
            {items.map((item, id) => (
              <li key={id} className='my-4 w-full  justify-between bg-slate-100'>
                <div className='p-4 w-full flex justify-between '>
                  <b><span className='capitalize'>{item.Title}</span></b>
                  
                </div>
                <div className='p-4 w-full flex justify-between '>
                <span>{item.Disp}</span></div>
                <button className='p-4 w-full flex justify-center bg-blue-200 hover:bg-blue-300'>Read more</button>
              </li>
            ))}
          </ul>
  </div>
  </div>
    </>
  )
}

export default Home_page    