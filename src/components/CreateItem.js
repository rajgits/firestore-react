import React, { useState } from 'react';
import { firestore } from '../firebase';

export default function CreateItem() {
    const [itemName, setItemName] = useState('');

    const addItem = async ()=>{
        await firestore.collection('items').add({
            name: itemName,
          });
      
          setItemName('');
    }
  return (
    <div>CreateItem
    <div>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
    </div>
    </div>
  )
}
