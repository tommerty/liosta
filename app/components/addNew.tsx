import React from 'react'
import { Button, ButtonText, ButtonIcon, AddIcon } from '@gluestack-ui/themed'

interface NewListItemButtonProps {
    onClick: () => void;
}

const NewListItemButton: React.FC<NewListItemButtonProps> = ({ onClick }) => {
    return (
        <Button
            size="lg"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            marginHorizontal={'$2'}
            rounded={'$3xl'}
            onPress={onClick} // Pass the onClick prop to the Button component
        >
            <ButtonText>Add </ButtonText>
            <ButtonIcon as={AddIcon} />
        </Button>
    )
}

export default NewListItemButton