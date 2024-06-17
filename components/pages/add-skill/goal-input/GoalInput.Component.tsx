import React, { useState } from 'react'
import { Button, TextInput, View, Text, Pressable} from 'react-native'

interface Props {
    goals: string[]
    addGoal: (goal: string) => void;
    removeGoal: (goal: string) => void;
}

const GoalInput = ({goals, addGoal, removeGoal}: Props) => {

    const [currentGoalText, setCurrentGoalText] = useState<string>("");

    const handleAddGoal = () => {
        addGoal(currentGoalText);
        setCurrentGoalText("");
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
                    <Button title={"Add Goal"} onPress={() => handleAddGoal()}/>
                </View>
                :
                <></>
            }
        </View>
    )
}

export default GoalInput
