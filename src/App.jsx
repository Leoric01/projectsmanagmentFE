import { useState } from 'react'
import './App.css'
import {Button} from "@/components/ui/button.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button>shadcn default button</Button>
    </>
  )
}

export default App
