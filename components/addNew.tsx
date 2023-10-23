import React from 'react'
import { Button, ButtonText, ButtonIcon, AddIcon } from '@gluestack-ui/themed'

interface NewListItemButtonProps {
    onSubmit: () => void;
}

const NewListItemButton: React.FC<NewListItemButtonProps> = ({ onSubmit }) => {
    return (
        <Button
            bgColor='#7054C7'
            size="lg"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            marginHorizontal={'$2'}
            marginTop={'$2'}
            rounded={'$3xl'}
            onPress={onSubmit} // Call onSubmit when the button is clicked
        >
            <ButtonText>Add </ButtonText>
            <ButtonIcon as={AddIcon} />
        </Button>
    )
}

export default NewListItemButton