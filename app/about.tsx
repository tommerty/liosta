import { View, Text } from 'react-native';
import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
export default function Modal() {
    // If the page was reloaded or navigated to directly, then the modal should be presented as
    // a full screen page. You may need to change the UI to account for this.
    const isPresented = router.canGoBack();
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#2a204b' }}>
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold", paddingBottom: 20 }}>Thanks for checking out my app!</Text>
            <Text style={{ color: "white" }}>
                Liosta is a free to use an offline todo list and planner app without any additional and uneeded features. It's completely offline (for now, anyway), and it's designed to be a "global" todo list. When I say "global", I mean that you don't have different lists for different things, items don't renew/expire/or anything else. You jot down what you need to do, and once you've done it you can delete it. Simple as that.
            </Text>
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold", paddingBottom: 20 }}>Why I created this</Text>
            <Text style={{ color: "white" }}>
                It's quite simple... I hate most Todo list apps. They either push ads to you, want you to sync your data to their servers, or they're just too complicated. I wanted something simple, something that I could use to jot down what I need to do, and then delete it once I've done it. I also wanted something that I could use offline, and that's what this is.
            </Text>
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold", paddingBottom: 20 }}>Future plans</Text>
            <Text style={{ color: "white" }}>
                I eventually want to incorporate some sort of cloud system to sync lists and even share lists with others. I primarily created this because I want a todo list that me and my partner can add groceries too, and items completely dissapear once they're checked. Even further down the road, I want to add scheduled items that can be synced with a calendar app.
            </Text>
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold", paddingBottom: 20 }}>Open Source</Text>
            <Text style={{ color: "white" }}>
                Liosta is open source, so if you have any suggestions, improvements or anything else please feel free to contribute to the project! You can find the source code on GitHub below.
            </Text>
            {!isPresented && <Link href="../">Dismiss</Link>}
            {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
            <StatusBar style="light" />
        </View>
    );
}
