import React from 'react'
import { Box, Input, InputField, Text } from '@gluestack-ui/themed'
import { FontAwesome5 } from '@expo/vector-icons';
import CheckboxCheck from './checkbox';

interface ItemBoxProps {
    item: { text: string };
    onCheck: () => void;
    onTextChange: (text: string) => void;
}

const ItemBox: React.FC<ItemBoxProps> = ({ item, onCheck, onTextChange }) => {
    return (
        <Box bg={'$primary400'} paddingHorizontal={'$4'} paddingVertical={'$1.5'} margin={5} rounded={'$3xl'}>
            <Box flexDirection="row" alignItems="center" justifyContent="space-between" gap={'$3'}>
                <FontAwesome5 name="grip-vertical" size={24} color="white" />
                <Input variant="rounded" size="lg" isDisabled={false} isInvalid={false} isReadOnly={false} flex={1} marginHorizontal={'auto'}>
                    <InputField
                        size="lg"
                        color='$white'
                        placeholderTextColor={'$primary700'}
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