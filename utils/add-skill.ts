import { Skill } from "../types/Skill";
import * as FS from 'expo-file-system';

export const addSkill = async (skillData: Skill, filePath: string) => {
        if(!skillData.skillName || skillData.skillName === "" || skillData.skillName === " ") return
        // hanlde error case here

        if(!skillData.importance) return
        // handle error case here
         
        const fileInfo = await FS.getInfoAsync(filePath)
    
        if(fileInfo.exists){
            
            const rawData = await FS.readAsStringAsync(filePath, { encoding: FS.EncodingType.UTF8 })
            
            let skillList = JSON.parse(rawData);
            
            skillList.push(skillData);
            
            await FS.writeAsStringAsync(filePath, JSON.stringify(skillList), { encoding: FS.EncodingType.UTF8 })
                .then(() => console.log("File Written"))
        } else {
            await FS.writeAsStringAsync(filePath, JSON.stringify([skillData]), { encoding: FS.EncodingType.UTF8 })
                .then(() => console.log("File Written"))
        }
    }
