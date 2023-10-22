import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CheckboxCheckProps {
    onCheck: () => void;
}

const CheckboxCheck: React.FC<CheckboxCheckProps> = ({ onCheck }) => {
    const [isChecked, setChecked] = useState(false);

    return (
        <View>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={(newValue) => {
                    setChecked(newValue);
                    if (newValue) {
                        setTimeout(onCheck, 2000); // Call onCheck after 2 seconds if the checkbox is checked
                    }
                }}
                color={isChecked ? 'green' : 'gray'} // Change color based on isChecked state
            />
        </View>
    );
}

const styles = StyleSheet.create({
    checkbox: {
        padding: 16,
        borderRadius: 100,
        borderColor: 'white',
        animationFillMode: 'forwards',
    },
});

export default CheckboxCheck