import React, { useState } from 'react'
import { Timer } from 'react-native-stopwatch-timer'

const SkillLevelTimer = () => {
  
    const [timerStart, setTimerStart] = useState(false);
    const
  
  return (
    <Timer totalDuration={this.state.totalDuration} msecs start={this.state.timerStart}
          reset={this.state.timerReset}
          options={options}
          handleFinish={handleTimerComplete}
          getTime={this.getFormattedTime} />
  )
}

export default SkillLevelTimer