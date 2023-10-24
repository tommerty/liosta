import React from 'react';
import { Box, Input, InputField, Text } from '@gluestack-ui/themed';
import { FontAwesome5 } from '@expo/vector-icons';
import CheckboxCheck from './checkbox';
import { TouchableOpacity, Platform } from 'react-native';

interface ItemBoxProps {
    item: { text: string };
    isChecked: boolean; // Pass the isChecked prop here
    onCheck: () => void;
    onTextChange: (text: string) => void;
    drag: () => void;
}

const ItemBox: React.FC<ItemBoxProps> = ({ item, isChecked, onCheck, onTextChange, drag }) => {
    return (
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
                    onPressIn={drag}>
                    <FontAwesome5
                        name="grip-vertical"
                        size={32}
                        padding={'$2'}
                        color="white"
                    />
                </TouchableOpacity>
                <Input
                    variant="rounded"
                    size="lg"
                    borderWidth={0}
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    flex={1}
                    marginHorizontal={'auto'}>
                    <InputField
                        size="lg"
                        color='$white'
                        placeholderTextColor={'white'}
                        placeholder='New Task...'
                        value={item.text}
                        onChangeText={onTextChange}
                    />
                </Input>
                <CheckboxCheck
                    isChecked={isChecked}
                    onCheck={onCheck} />
            </Box>
        </Box>
    );
}

export default ItemBox;
