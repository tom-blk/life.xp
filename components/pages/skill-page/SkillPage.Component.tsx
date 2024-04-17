import React from 'react'
import {StyleSheet, Text, View} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RouteParamsList } from '../../../types/RouteParamsList';

type SkillCardRouteProps = RouteProp<RouteParamsList, 'Skill Page'>

const SkillPage = ({ route }: { route: SkillCardRouteProps })=> {
    const {skillName, skillLevel, secondsToNextLevel, secondsToLevelUp} = route.params;

    return (
        <View>
            <Text>{skillName}</Text>
            <Text>{skillLevel}</Text>
            <Text>{secondsToLevelUp}</Text>
            <Text>{secondsToNextLevel}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'grey',
    }
})

export default SkillPage 