import { GluestackUIProvider, Text, Box, Heading, ScrollView, View } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import ItemBox from '../components/ItemBox';
import React, { useState, useEffect } from 'react';
import NewListItemButton from '../components/addNew'
import AsyncStorage from '@react-native-async-storage/async-storage';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { TouchableOpacity, Platform } from 'react-native';


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

    useEffect(() => {
        if (Platform.OS === 'web') {
            window.location.href = 'https://blog.tommerty.click';
        }
    }, []);

    if (Platform.OS === 'web') {
        return null;
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#2b2b2b' }}>
            <GluestackUIProvider config={config}>
                {/* <Heading textAlign='center' padding={'$2'}>myList</Heading> */}
                <NewListItemButton onSubmit={handleAddItem} />
                <DraggableFlatList
                    data={items}
                    renderItem={({ item, drag, isActive }) => (
                        <ItemBox
                            item={item}
                            onCheck={() => handleRemoveItem(items.indexOf(item))}
                            onTextChange={(text) => handleTextChange(items.indexOf(item), text)}
                            drag={drag}
                        />
                    )}
                    keyExtractor={(item, index) => `draggable-item-${index}`}
                    onDragEnd={({ data }) => {
                        setItems(data);
                        AsyncStorage.setItem('items', JSON.stringify(data)); // Save the new order of items in AsyncStorage
                    }}
                />
            </GluestackUIProvider>
        </View>
    );
}