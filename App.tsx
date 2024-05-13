import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SkillList from './components/pages/skill-list/SkillList.Component';
import AddSkill from './components/pages/add-skill/AddSkill.Component';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SkillLevelTimer from './components/timer/Timer.Component';
import SkillPage from './components/pages/skill-page/SkillPage.Component';
import { RouteParamsList } from './types/RouteParamsList';
import SkillCheckList from './components/pages/skill-checklist/SkillCheckList.Component';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator<RouteParamsList>();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator initialRouteName="Skill List">
      <Drawer.Screen name="Skill List" component={SkillList} />
      <Drawer.Screen name="Add Skill" component={AddSkill} />
    </Drawer.Navigator>
  );

}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Drawer Routes">
        <Stack.Screen name="Drawer Routes" component={DrawerRoutes} options={{headerShown: false}} />
        <Stack.Screen name="Skill Timer" component={SkillLevelTimer} />
        <Stack.Screen name="Skill Page" component={SkillPage} />
        <Stack.Screen name="Skill Checklist" component={SkillCheckList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
