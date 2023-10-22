import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                title: 'Unnamed List App',
                headerStyle: {
                    backgroundColor: '#005db4',
                },
                headerTintColor: 'white',
            }} />
        </Stack>
    )
}

export default Layout