import React from 'react'
import { Box, Input, InputField, Text } from '@gluestack-ui/themed'
import { FontAwesome5 } from '@expo/vector-icons';
import CheckboxCheck from './checkbox';
import { TouchableOpacity, Platform } from 'react-native';


interface ItemBoxProps {
    item: { text: string };
    onCheck: () => void;
    onTextChange: (text: string) => void;
    drag: () => void;
}

const ItemBox: React.FC<ItemBoxProps> = ({ item, onCheck, onTextChange, drag }) => {
    return (
        <Box bg={'#8A69F3'} paddingHorizontal={'$4'} paddingVertical={'$1.5'} margin={5} rounded={'$3xl'}>
            <Box flexDirection="row" alignItems="center" justifyContent="space-between" gap={'$3'}>
                <TouchableOpacity onPressIn={drag}>
                    <FontAwesome5 name="grip-vertical" size={24} color="white" />
                </TouchableOpacity>
                <Input variant="rounded" size="lg" isDisabled={false} isInvalid={false} isReadOnly={false} flex={1} marginHorizontal={'auto'}>
                    <InputField
                        size="lg"
                        color='$white'
                        placeholderTextColor={'white'}
                        placeholder='New Task...'
                        value={item.text}
                        onChangeText={onTextChange}
                    />
                </Input>
                <CheckboxCheck onCheck={onCheck} />
            </Box>
        </Box>
    )
}

export default ItemBox