
import './App.css'
import Homepage from './pages/homepages/Homepage'
import "../src/css/HomepageCss.css"
import HookOne from './components/HookOne'
import Todolist from './components/Todolist'


function App() {
  const obj= {
    name:"Sheren Akter mim",
    age:22,
    Address:"Barishal"
    
  
}

const value =20
const value2 =30

const handleclick=()=>{
alert( "please submit your document")
}
  

  return (
    <>
  <Homepage obj2={obj} value1={value} value2={value2} ishomepage={true} > </Homepage>
  <button className='btn' onClick={handleclick}>Click Me</button>

  <HookOne/>

  <Todolist/>

  
    </>
  )

  }
export default App
