import React, { useState, useEffect, useRef } from 'react';
import { Box, Input, InputField, Textarea, TextareaInput } from '@gluestack-ui/themed';
import { FontAwesome5 } from '@expo/vector-icons';
import CheckboxCheck from './checkbox';
import { Animated, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';


interface ItemBoxProps {
    item: { text: string };
    isChecked: boolean; // Pass the isChecked prop here
    onCheck: () => void;
    onTextChange: (text: string) => void;
    drag: () => void;
}

const ItemBox: React.FC<ItemBoxProps> = ({ item, isChecked, onCheck, onTextChange, drag }) => {
    const [isDragging, setIsDragging] = useState(false);
    const wiggleAnimation = useRef(new Animated.Value(0)).current;


    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(wiggleAnimation, {
                    toValue: 3,
                    duration: 100,
                    useNativeDriver: true
                }),
                Animated.timing(wiggleAnimation, {
                    toValue: -3,
                    duration: 100,
                    useNativeDriver: true
                })
            ])
        ).start();
    }, [isDragging]);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Animated.View
                style={{
                    transform: [{
                        rotateZ: isDragging ? wiggleAnimation.interpolate({
                            inputRange: [-0.1, 0.1],
                            outputRange: ['-0.1deg', '0.1deg'],
                        }) : '0deg',
                    }],
                }}
            >
                <Box
                    bg={'#544097'}
                    paddingHorizontal={'$4'}
                    paddingVertical={'$3'}
                    marginHorizontal={'$4'}
                    marginVertical={'$1.5'}
                    rounded={'$xl'}>
                    <Box
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="space-between"
                        gap={'$3'}>
                        <TouchableOpacity
                            onPressIn={() => setIsDragging(true)}
                            onPressOut={() => setIsDragging(false)}
                            onLongPress={drag}
                            hitSlop={{ top: 3, bottom: 3, left: 3, right: 3 }}
                        >
                            <FontAwesome5
                                name="grip-vertical"
                                size={32}
                                margin={'$9'}
                                color="white"
                            />
                        </TouchableOpacity>
                        <Input
                            variant="rounded"
                            borderWidth={0}
                            isDisabled={false}
                            isInvalid={false}
                            isReadOnly={false}

                            flex={1}
                            marginHorizontal={'auto'}>
                            <InputField
                                color='$white'
                                placeholderTextColor={'#bbaaf3'}
                                placeholder='New Task...'
                                value={item.text}
                                onChangeText={onTextChange}
                            />
                        </Input>
                        <CheckboxCheck onCheck={onCheck} isChecked={isChecked} />
                    </Box>
                </Box>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}

export default ItemBox;
