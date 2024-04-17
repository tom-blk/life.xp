import React from 'react'
import { Button, Pressable, StyleSheet, Text} from 'react-native';
import { ParamListBase, RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteParamsList } from '../../../types/RouteParamsList';

type SkillCardRouteProps = RouteProp<RouteParamsList, 'Skill Page'>

const SkillPage = ({ route }: { route : SkillCardRouteProps }) => {
    const {skillName, skillLevel, secondsToNextLevel, secondsToLevelUp} = route.params;
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const navigateToSkill = () => {
        navigation.navigate('Skill List');
    }

    const navigateToTrainSkill = () => {
        navigation.navigate("Skill Timer");
    }

    return (
        <Pressable style={styles.card} onPress={e =>navigateToSkill()}>
            <Text>{skillName}</Text>
            <Text>{skillLevel}</Text>
            <Text>{secondsToLevelUp}</Text>
            <Text>{secondsToNextLevel}</Text>
            <Button title="Train" onPress={e => navigateToTrainSkill()}/>
        </Pressable>
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