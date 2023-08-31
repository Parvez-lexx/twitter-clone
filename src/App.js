import './App.css';
import Sidebar from './sidebar.component';
import Feed from './feed.component';

function App() {
  return (
    <div className="app">
      {/* {Sidebar} */}
      <Sidebar />
      <Feed />
      {/* {widgets} */}
    </div>
  );
}

export default App;
