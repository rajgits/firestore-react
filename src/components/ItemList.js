import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';

export default function ItemList() {
    const [items, setItems] = useState([]);
    const [editingItemId, setEditingItemId] = useState(null);
    const [updatedItemName, setUpdatedItemName] = useState('');

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

    const handleDelete = async (id) => {
        await firestore.collection('items').doc(id).delete();
    };

    const handleEdit = (id, name) => {
        setEditingItemId(id);
        setUpdatedItemName(name);
    };

    const handleUpdate = async (id) => {
        await firestore.collection('items').doc(id).update({ name: updatedItemName });
        setEditingItemId(null);
    };

    return (
        <div>
            <p>ItemList</p>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {editingItemId === item.id ? (
                            <>
                                <input
                                    type="text"
                                    value={updatedItemName}
                                    onChange={(e) => setUpdatedItemName(e.target.value)}
                                />
                                <button onClick={() => handleUpdate(item.id)}>Update</button>
                            </>
                        ) : (
                            <>
                                {item.name}{' '}
                                <button onClick={() => handleEdit(item.id, item.name)}>Edit</button>{' '}
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
