import './App.css';
import Room from './trigger';
import { connect } from "react-redux";


let ConnectedLighttoggle = connect((state) => {
  return { ...state };
})(Room);
function App() {
  return (
    <div className="App">     
      <ConnectedLighttoggle />
    </div>
  );
}

export default App;
 