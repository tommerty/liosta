import { View } from 'react-native'
import { Heading, Text } from '@gluestack-ui/themed'
import React from 'react'

const InfoText = () => {
    return (
        <View style={{
            marginHorizontal: 10,
        }}>
            <Text>Thanks for checking out my app!
                Liosta is a free to use an offline todo list and planner app without any additional and uneeded features. It's completely offline (for now, anyway), and it's designed to be a "global" todo list. When I say "global", I mean that you don't have different lists for different things, items don't renew/expire/or anything else. You jot down what you need to do, and once you've done it you can delete it. Simple as that.
            </Text>
            <Heading>Why I created this</Heading>
            <Text>
                It's quite simple... I hate most Todo list apps. They either push ads to you, want you to sync your data to their servers, or they're just too complicated. I wanted something simple, something that I could use to jot down what I need to do, and then delete it once I've done it. I also wanted something that I could use offline, and that's what this is.
            </Text>
            <Heading>Future plans</Heading>
            <Text>
                I eventually want to incorporate some sort of cloud system to sync lists and even share lists with others. I primarily created this because I want a todo list that me and my partner can add groceries too, and items completely dissapear once they're checked. Even further down the road, I want to add scheduled items that can be synced with a calendar app.
            </Text>
        </View>
    )
}

export default InfoText