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
            size="lg"
            p="$3.5"
            bg="#8A69F3"
            borderColor="#2a204b"
            borderWidth={2}
            onPress={onSubmit} // Call onSubmit when the button is clicked
        >
            <ButtonIcon as={AddIcon} color='white' />
        </Button>
    )
}

export default NewListItemButton