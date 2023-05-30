import "./App.css"
import Navbar from "./Components/Navbar"
import Table from "./Components/Table"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <div className="p-6 grid grid-cols-1 gap-y-12">
      <Navbar></Navbar>
      <Table></Table>
      <Toaster></Toaster>
    </div>
  )
}

export default App
