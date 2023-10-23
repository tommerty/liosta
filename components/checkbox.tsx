import Checkbox from 'expo-checkbox';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CheckboxCheckProps {
    onCheck: () => void;
}

const CheckboxCheck: React.FC<CheckboxCheckProps> = ({ onCheck }) => {
    const [isChecked, setChecked] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (isChecked) {
            timeoutId = setTimeout(() => {
                onCheck();
            }, 200);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isChecked, onCheck]);

    return (
        <View>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={(newValue) => {
                    setChecked(newValue);
                }}
                color={isChecked ? '#8A69F3' : 'white'} // Change color based on isChecked state
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

export default CheckboxCheck;