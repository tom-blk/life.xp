import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SkillList from './components/pages/skill-list/SkillList.Component';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Skill List">
        <Drawer.Screen name="Skill List" component={SkillList} />
        <Drawer.Screen name="Add Skill" component={AddSkill} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;