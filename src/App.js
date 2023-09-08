import './App.css';
import Sidebar from './sidebar.component';
import Feed from './feed.component';
import Widgets from './widgets.component';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
