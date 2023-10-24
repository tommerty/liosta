import { Stack } from 'expo-router';
import { Link } from '@react-navigation/native';
import { AddIcon, Button, ButtonIcon, InfoIcon } from '@gluestack-ui/themed';

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#2a204b',
                },
                title: 'Liosta',
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerRight: () => (
                    <Link to="/about" style={{ color: '#fff', marginRight: 10 }}>
                        <ButtonIcon as={InfoIcon} color='#fff' />
                    </Link>
                ),
            }}
        />
    );
}