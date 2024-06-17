import React from 'react'
import {StyleSheet, Text, View} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RouteParamsList } from '../../../types/RouteParamsList';

type SkillPageRouteProps = RouteProp<RouteParamsList, 'Skill Page'>

const SkillPage = ({ route }: { route: SkillPageRouteProps })=> {
    const {skillName, skillLevel} = route.params;

    const isSkillA = route.params.levelUpMethod === 'time';

    return (
        <View style={styles.card}>
            <Text>{skillName}</Text>
            <Text>{skillLevel}</Text>
            {isSkillA ? <Text>Time</Text> : <Text>Goals</Text>}
            {
                isSkillA 
                ? <Text>To Next Level: {route.params.secondsToLevelUp} Needed Per Level: {route.params.secondsToLevelUp}</Text>
                : <Text>{route.params.goals}</Text>
            }
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