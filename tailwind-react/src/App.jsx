import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Daisyui from './components/daisyui'
import { Suspense } from 'react';
import Navbar from './components/navbar'
import Pricing from './components/pricing'
import ResultCharts from './resultsChart/resultCharts'

const pricingPromise = fetch ('pricingData.json').then(res => res.json());
function App() {
  

  return (
    <>
    <header>
 
     </header>
     <main>
      <Suspense fallback = {<span className="loading loading-spinner loading-md"></span>}>
       <Pricing  pricingPromise={ pricingPromise}></Pricing>
      </Suspense>
       <ResultCharts></ResultCharts>
     </main>
    </>
  )
}

export default App
