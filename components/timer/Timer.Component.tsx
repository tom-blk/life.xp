import React, { useState } from 'react'
import { Timer } from 'react-native-stopwatch-timer'

interface Props {
    level: number;
}

const SkillLevelTimer = (props: Props) => {
  
    const [timerStart, setTimerStart] = useState(false);
    const [timerReset, setTimerReset] = useState(false);
    const [totalDuration, setTotalDuration] = useState(90000);
  
  return (
    <Timer totalDuration={totalDuration} msecs start={timerStart}
          reset={timerReset}
          options={options}
          handleFinish={handleTimerComplete}
          getTime={this.getFormattedTime} />
  )
}

export default SkillLevelTimer