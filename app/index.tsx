import { GluestackUIProvider, Text, Box, Heading, ScrollView } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import ItemBox from './components/ItemBox';
import React, { useState, useEffect } from 'react';
import NewListItemButton from './components/addNew'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Item {
    text: string;
}

export default function Page() {
    const [items, setItems] = useState<Item[]>([]); // Initialize state with an empty array

    // Load items from AsyncStorage when the component mounts
    useEffect(() => {
        AsyncStorage.getItem('items').then(storedItems => {
            if (storedItems) {
                setItems(JSON.parse(storedItems));
            }
        });
    }, []);

    const handleAddItem = () => {
        setItems(prevItems => {
            const newItems = [...prevItems, { text: '' }];
            AsyncStorage.setItem('items', JSON.stringify(newItems)); // Store items in AsyncStorage
            return newItems;
        });
    };

    const handleRemoveItem = (index: number) => {
        setItems(prevItems => {
            const newItems = prevItems.filter((item, i) => i !== index);
            AsyncStorage.setItem('items', JSON.stringify(newItems)); // Store items in AsyncStorage
            return newItems;
        });
    };

    const handleTextChange = (index: number, text: string) => {
        setItems(prevItems => {
            const newItems = prevItems.map((item, i) => i === index ? { text } : item);
            AsyncStorage.setItem('items', JSON.stringify(newItems)); // Store items in AsyncStorage
            return newItems;
        });
    };

    return (
        <GluestackUIProvider config={config}>
            <Heading textAlign='center' padding={'$2'}>myList</Heading>
            <NewListItemButton onSubmit={handleAddItem} />
            <ScrollView>
                {/* Render an ItemBox for each item in the list */}
                {items.map((item, index) => (
                    <ItemBox key={index} item={item} onCheck={() => handleRemoveItem(index)} onTextChange={(text) => handleTextChange(index, text)} />
                ))}
            </ScrollView>
        </GluestackUIProvider>
    );
}