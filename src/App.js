import logo from './logo.svg';
import './App.css';
import CreateItem from './components/CreateItem';
import ItemList from './components/ItemList';


function App() {
  return (
   <>
      <h1>Firestore Sample App</h1>
      <ItemList/> 
      <hr/>
      <CreateItem />
   </>
  );
}

export default App;
