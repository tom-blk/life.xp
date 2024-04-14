import React, { useState } from 'react'
import RNFS from 'react-native-fs';
import { Button, TextInput, View, Text} from 'react-native'
import { Skill } from "../../../types/Skill";

const AddSkill = () => {

    const filePath = RNFS.DocumentDirectoryPath + '/skill-list.json';

    const skillDataTemplate: Skill = {
        skillName: "",
        timeToLevelUp: 0,
        importance: 1,
        level: 0
    }

    const [buttonClicked, setButtonClicked] = useState(false);
    const [skillData, setSkillData] = useState<Skill>(skillDataTemplate);

    const addSkill = () => {
        RNFS.exists(filePath)
        .then((exists) => {
            if(exists){
                addSkillToFile();
            } else {
                createFile();
            }
        })
                RNFS.readFile(filePath, 'utf8')
        .then((res) => {
            let skillList = JSON.parse(res);
            skillList.push(skillData);
            return RNFS.writeFile(filePath, JSON.stringify(skillList), 'utf8');
        })
    }

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
                    <Button title='Add' onPress={() => addSkill()}/>
                </div>            
                : 
                <Button title={"Add Skill"} onPress={() => setButtonClicked(true)}/> 
            }
        </View> 
    )
}

export default AddSkill