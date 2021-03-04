import Header from './components/Header'
import SideBar from './components/SideBar'
import Feed from './components/Feed'
import Widget from './components/Widget'

import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app_body">
        <SideBar/>
        <Feed/>
        <Widget/>
      </div>
      
    </div>
  );
}

export default App;
