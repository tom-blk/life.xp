import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { LevelUpMetric } from '../../../../types/Skill';

interface Props {
    changeLevelUpMetric: (levelUpMetric: LevelUpMetric) => void;
}

const LevelUpMetricPicker = ({changeLevelUpMetric}: Props) => {

    const [selectedValue, setSelectedValue] = useState<LevelUpMetric>('time');

    const changeValue = (itemValue: LevelUpMetric) => {
        changeLevelUpMetric(itemValue);
        setSelectedValue(itemValue);
    }

    return (
        <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue: LevelUpMetric) => changeValue(itemValue)}
        >
            <Picker.Item label={"Time"} value={"time"}/>
            <Picker.Item label={"Goal"} value={"goal"}/>
        </Picker>
    )
}

export default LevelUpMetricPicker
