
import './App.css';
import Changetheme from './CHangetheme';
import Searchsuggesstion from './Searchsuggesstion';
import Colorchange from './Task2';

function App() {
  return (
    <div className="App">
       <div>
        <h2>Task 01</h2>
        <p>Q1 Make a search suggestion application as given in attachment.</p>
        <Searchsuggesstion/>
        <hr />
        <h2>Task 02</h2>
        <p>Q2 Pass a prop that contains a number from a parent component to child component and set the background color of enclosing div to red or blue depending on the number passed is even or odd</p>
        <Colorchange number={3}/>
        <hr />
        <h2>Task 3</h2>
        <p>Q3 Set the theme as dark, light and party on button click</p>
        <Changetheme/>
       </div>
    </div>
  );
}

export default App;
