import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';

export default function ItemList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const unsubscribe = firestore.collection('items').onSnapshot((snapshot) => {
          const newItems = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setItems(newItems);
        });
    
        return () => unsubscribe();
        }, []);
  return (
    <div>ItemList

    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
    
    </div>
  )
}
