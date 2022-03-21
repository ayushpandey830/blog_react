
import './App.css';
import Header from './components/Header/Header';
import Sidebar from "./components/Sidebar/Sidebar";
import Card from './components/Card/Card';
import Orders from './components/Orders/Orders';

function App() {
  return (
    <div className="display">
      <div className="App">
        <Sidebar />
      </div>
      <div className="mainSection">
        <div className="header1">
          <Header />
        </div>
        <Card  
      
          title="Bookings"
          number="281"
          number1="+55%"
          status="than last week"
        />
        <Orders />
      </div>
     
    </div>
  );
}

export default App;
