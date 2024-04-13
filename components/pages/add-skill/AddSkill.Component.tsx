import React, { useState } from 'react'
import RNFS from 'react-native-fs';
import { Button, TextInput, View, Text} from 'react-native'

const AddSkill = () => {

    const filePath = RNFS.DocumentDirectoryPath + '/skill-list.txt';

    const skillDataTemplate = {
        skillName: "",
        timeToLevelUp: 0,
        importance: 0
    }

    const [buttonClicked, setButtonClicked] = useState(false);
    const [skillData, setSkillData] = useState(skillDataTemplate);

    return (
        <View>
            {
                buttonClicked
                ? 
                <div>
                    <Text>Add Skill</Text>
                    <TextInput placeholder={"Enter Skill Name"} onChangeText={(text) => setSkillData({...skillData, skillName: text})}/>
                    <TextInput placeholder={"Enter Time Spent to level up"} onChangeText={(text) => setSkillData({...skillData, timeToLevelUp: parseInt(text)})}/>
                    <Text>Select Skill Importance</Text>
                    <div>
                        <Button title={"1"} onPress={() => setSkillData({...skillData, importance: 1})} />
                        <Button title={"2"} onPress={() => setSkillData({...skillData, importance: 2})} />
                        <Button title={"3"} onPress={() => setSkillData({...skillData, importance: 3})} />
                    </div>
                    <Button title='Add' onPress={() => {return}}/>
                </div>            
                : 
                <Button title={"Add Skill"} onPress={() => setButtonClicked(true)}/> 
            }
        </View> 
    )
}

export default AddSkill