import { GluestackUIProvider, Text, Box, Heading, ScrollView } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import ItemBox from './components/ItemBox';
import React, { useState } from 'react';
import NewListItemButton from './components/addNew'

export default function Page() {
    const [items, setItems] = useState([{}]); // Initialize state with one item

    const handleAddItem = () => {
        setItems(prevItems => [...prevItems, {}]); // Add a new item to the list
    };

    const handleRemoveItem = (index) => {
        setItems(prevItems => prevItems.filter((item, i) => i !== index)); // Remove the item at the given index
    };

    return (
        <GluestackUIProvider config={config}>
            <Heading textAlign='center' padding={'$2'}>myList</Heading>
            <NewListItemButton onClick={handleAddItem} />
            <ScrollView>
                {/* Render an ItemBox for each item in the list */}
                {items.map((item, index) => (
                    <ItemBox key={index} onCheck={() => handleRemoveItem(index)} />
                ))}
            </ScrollView>
        </GluestackUIProvider>
    );
}