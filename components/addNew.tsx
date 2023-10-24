import React from 'react'
import { Button, ButtonText, ButtonIcon, AddIcon } from '@gluestack-ui/themed'

interface NewListItemButtonProps {
    onSubmit: () => void;
}

const NewListItemButton: React.FC<NewListItemButtonProps> = ({ onSubmit }) => {
    return (
        <Button
            borderRadius="$full"
            width={'$16'}
            height={'$16'}
            size={'xl'}
            p="$3.5"
            bg="#2b2b2b"
            borderColor="#8A69F3"
            borderWidth={'$2'}
            onPress={onSubmit} // Call onSubmit when the button is clicked
        >
            <ButtonIcon as={AddIcon}
                size={'xl'} />
        </Button>
    )
}

export default NewListItemButton