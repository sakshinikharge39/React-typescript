
import './App.css'
import { ChaiCard } from './components/ChaiCard.tsx'
import { ChaiList } from './components/ChaiList.tsx'
import { Counter } from './components/Counter.tsx'
import { OrderForm } from './components/OrderForm.tsx'

import type { Chai } from './types.ts'


const menu: Chai[] = [
  {id:1 , name:"Masala", price: 25},
  {id:2 , name:"Ginger", price: 50},
  {id:3 , name:"Ilaychi", price: 20},
]

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
      <div>
        <Counter/>
      </div>
      <div>
        <ChaiList items={menu} />
      </div>
      <div>
        <OrderForm onSubmit={(order) => {console.log("placed:",order.name , order.cups)
        }}/>
      </div>
    </>
  )
}

export default App
