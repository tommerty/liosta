import { Tabs } from 'expo-router/tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { Text } from '@gluestack-ui/themed';

export default function AppLayout() {
    return (
        <Tabs screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: 'red',
            tabBarStyle: {
                shadowColor: 'transparent',
                borderBlockColor: 'transparent',
                backgroundColor: '#352a5c',
            },
        }}>
            <Tabs.Screen
                // Name of the route to hide.
                name="index"
                options={{
                    tabBarLabel: ({ focused, color }) => (
                        <Text style={{ color: focused ? 'white' : 'gray' }}>
                            Home
                        </Text>
                    ),

                    // This tab will no longer show up in the tab bar.
                    headerTitle: 'Liosta',
                    tabBarLabelStyle: {
                        color: 'white',
                    },
                    headerStyle: {
                        backgroundColor: '#2a204b',
                        shadowColor: 'transparent',
                    },
                    headerTitleStyle: {
                        color: 'white',
                        fontSize: 24,
                    },
                    tabBarIcon: ({ focused, size }) => (
                        <FontAwesome5 name="home" color={focused ? 'white' : 'gray'} size={20} />
                    ),
                }}
            />
            <Tabs.Screen
                // Name of the route to hide.
                name="settings"

                options={{
                    href: null,
                    tabBarLabel: ({ focused, color }) => (
                        <Text style={{ color: focused ? 'white' : 'gray' }}>
                            Settings
                        </Text>
                    ),

                    // This tab will no longer show up in the tab bar.
                    headerTitle: 'Settings',
                    tabBarLabelStyle: {
                        color: 'white',
                    },
                    headerStyle: {
                        backgroundColor: '#2a204b',
                        shadowColor: 'transparent',
                    },
                    headerTitleStyle: {
                        color: 'white',
                        fontSize: 24,
                    },
                    tabBarIcon: ({ focused, size }) => (
                        <FontAwesome5 name="cog" color={focused ? 'white' : 'gray'} size={20} />
                    ),
                }}
            />
            <Tabs.Screen
                // Name of the route to hide.
                name="about"
                options={{
                    // This tab will no longer show up in the tab bar.
                    href: null
                }}
            />
        </Tabs>
    );
}
