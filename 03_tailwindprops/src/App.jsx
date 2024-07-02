import { useState } from 'react'
import './App.css'
import Card from './Component/Card'

function App() {
  const [count, setCount] = useState(0)
  let obj={
    userName:"vivek",
    age:34

  }

  let arr=[1,2,3,4]


  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
       <Card  chanel={"vivek"}/>
      {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/25677305/pexels-photo-25677305/free-photo-of-back-of-a-female-model-wearing-a-red-dress-standing-on-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width="384" height="512"/>
          <div class="pt-6 text-center space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400">
                Sarah Dayan
              </div>
              <div class="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
      </figure> */}
      
      
    </>
  )
}

export default App
