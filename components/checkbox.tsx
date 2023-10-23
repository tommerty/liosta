import Checkbox from 'expo-checkbox';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

interface CheckboxCheckProps {
    isChecked: boolean;
    onCheck: () => void;
}

const CheckboxCheck: React.FC<CheckboxCheckProps> = ({ isChecked, onCheck }) => {
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isChecked) {
            const id = setTimeout(() => {
                onCheck();
            }, 2000);

            setTimeoutId(id);
        } else {
            // Clear the timeout if isChecked becomes false
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        }

        return () => {
            // Make sure to clear the timeout on unmount
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [isChecked, onCheck, timeoutId]);

    return (
        <View>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={() => {
                    onCheck();
                }}
                color={isChecked ? '#8A69F3' : 'white'}
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