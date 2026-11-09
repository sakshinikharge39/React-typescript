
import './App.css'
import { ChaiCard } from './components/ChaiCard.tsx'

function App() {

  return (
    <>
  

        <div>
          <h1>Get started Vit+react</h1>
          <ChaiCard name="Headphones" 
          price ={ 1000 }/>
          <ChaiCard name="Iphone" 
          price ={ 80000 }/>
        </div>
      
    </>
  )
}

export default App
