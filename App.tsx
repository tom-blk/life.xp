import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SkillList from './components/pages/skill-list/SkillList.Component';
import AddSkill from './components/pages/add-skill/AddSkill.Component';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Skill List">
        <Drawer.Screen name="Skill List" component={SkillList} />
        <Drawer.Screen name="Add Skill" component={AddSkill} />
      </Drawer.Navigator>
      <Stack.Navigator>
        <Stack.Screen name="Skill Timer" component={SkillList} />
        <Stack.Screen name="Skill Page" component={AddSkill} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;