
import './App.css';
import IcecreamView from './features/icecream/IcecreamView';
import UserView from './features/user/UserView';
import CakeView from './features/cake/CakeView';

function App() {
  return (
    <div className="App">
      <CakeView/>
      <IcecreamView/>
      <UserView/>
    </div>
  );
}

export default App;
