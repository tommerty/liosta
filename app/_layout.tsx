import { Tabs } from 'expo-router/tabs';
import { FontAwesome5 } from '@expo/vector-icons';

export default function AppLayout() {
    return (
        <Tabs screenOptions={{

        }}>
            <Tabs.Screen
                // Name of the route to hide.
                name="index"
                options={{
                    // This tab will no longer show up in the tab bar.
                    title: 'Home',
                    headerTitle: 'Liosta',
                    tabBarLabel: 'Home',
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
                    tabBarActiveBackgroundColor: '#413370',
                    tabBarInactiveBackgroundColor: '#2b224a',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={"white"} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                // Name of the route to hide.
                name="settings"
                options={{
                    // This tab will no longer show up in the tab bar.
                    title: 'Settings',
                    headerTitle: 'Settings',
                    tabBarLabel: 'Settings',
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
                    tabBarActiveBackgroundColor: '#413370',
                    tabBarInactiveBackgroundColor: '#2b224a',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="cog" color={"white"} size={size} />
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
