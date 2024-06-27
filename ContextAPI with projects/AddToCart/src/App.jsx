import './App.css'
import Cart from './Components/Cart'
import Item from './Components/Item'


function App() {


  return (
      <div className="App">
        <Item name = 'Macbook Pro' price = {100}/>
        <Item name = 'Speaker' price = {45}/>
        <Item name = 'Samsung Phone' price = {60}/>
        <Cart/>
      </div>
  )
}

export default App
