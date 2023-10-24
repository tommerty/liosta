import { GluestackUIProvider, Text, Box, Heading, ScrollView, View } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import ItemBox from '../components/ItemBox';
import React, { useState, useEffect } from 'react';
import NewListItemButton from '../components/addNew'
import AsyncStorage from '@react-native-async-storage/async-storage';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { TouchableOpacity, Platform } from 'react-native';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';


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
            const newItems = [...prevItems];
            newItems.splice(index, 1);
            AsyncStorage.setItem('items', JSON.stringify(newItems)); // Store items in AsyncStorage

            // Uncheck the next item in the list if it exists
            if (newItems.length > index) {
                AsyncStorage.getItem('checked').then(storedChecked => {
                    if (storedChecked) {
                        const prevChecked = JSON.parse(storedChecked);
                        const newChecked = [...prevChecked];
                        newChecked.splice(index, 1);
                        AsyncStorage.setItem('checked', JSON.stringify(newChecked)); // Store checked state in AsyncStorage
                    }
                });
            }

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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1, backgroundColor: '#2a204b' }}>
                <GluestackUIProvider config={config}>
                    {/* ...your existing code... */}
                    {items.length === 0 && (
                        <>
                            <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>
                                Woohoo, you've nothing left to do 🎉
                            </Text>
                            <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>
                                Click the button below to add a new item
                            </Text>
                        </>
                    )}
                    <DraggableFlatList
                        data={items}
                        renderItem={({ item, drag, isActive }) => (
                            <ItemBox
                                item={item}
                                onCheck={() => handleRemoveItem(items.indexOf(item))}
                                onTextChange={(text) => handleTextChange(items.indexOf(item), text)}
                                drag={drag} isChecked={false} />
                        )}
                        keyExtractor={(item, index) => `draggable-item-${index}`}
                        onDragEnd={({ data }) => {
                            setItems(data);
                            AsyncStorage.setItem('items', JSON.stringify(data)); // Save the new order of items in AsyncStorage
                        }}
                    />
                    <View
                        style={{ position: 'absolute', right: 30, bottom: 30 }}
                    >
                        <NewListItemButton onSubmit={handleAddItem} />
                    </View>
                </GluestackUIProvider>
            </View>
        </TouchableWithoutFeedback>
    );
}