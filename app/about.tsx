import { ScrollView } from 'react-native';
import React from 'react';
import { Heading } from '@gluestack-ui/themed';
import InfoText from '../components/accordion';

const About = () => {
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            <Heading textAlign={"center"}>Welcome to Liosta!</Heading>
            <InfoText />
        </ScrollView>
    );
}

export default About;