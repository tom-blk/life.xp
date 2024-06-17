import React, { useState } from 'react'
import { Button, TextInput, View, Text, Pressable} from 'react-native'

interface Props {
    confirmGoals: (goals: string[]) => void;
}

const GoalInput = ({confirmGoals}: Props) => {

    const [goals, setGoals] = useState<string[]>([]); 
    const [currentGoalText, setCurrentGoalText] = useState<string>("");

    const addGoal = () => {
        if(goals.length > 2) return
        setGoals([...goals, currentGoalText]);
        setCurrentGoalText("");
    }

    const removeGoal = (goal: string) => {
        setGoals(goals.filter((item) => item !== goal))
    }

    return(
         <View>
            <Text>Enter 1 - 3 goals that need to be reached to level up</Text>
            {
                goals.map((goal, index) => (
                    <View key={index}>
                        <Text>{goal}</Text>
                        <Pressable onPress={() => removeGoal(goal)}><Text>X</Text></Pressable>
                    </View>
                ))
            }
            {
                goals.length < 3
                ?
                <View>
                    <TextInput placeholder={"Enter Goal"} value={currentGoalText} onChangeText={(text) => setCurrentGoalText(text)}/>
                    <Button title={"Add Goal"} onPress={() => addGoal()}/>
                </View>
                :
                <></>
            }
            <Button title={"Confirm Goals"} onPress={() => confirmGoals(goals)}/>
        </View>
    )
}

export default GoalInput
