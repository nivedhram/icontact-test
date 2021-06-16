import "./App.css";
import ContactList from "./components/contactlist";
import Sidebar from "./components/sidebar";


function App() {


  return (
    <div className="App">

      <div className="main-container">    
      <Sidebar />
      <ContactList/>
    
      </div>

    </div>
  );
}
export default App;
