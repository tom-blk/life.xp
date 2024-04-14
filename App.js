import NavButton from './components/buttons/nav-button/NavButton.Component';
import SkillList from './components/pages/skill-list/SkillList.Component';

const App = () => {
  return (
    <View>
      <SkillList />
      <NavButton/>
    </View>
  );
}

export default App;