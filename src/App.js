import logo from "./logo.svg"
import "./App.css"
import Navbar from "./Components/Navbar"
import Table from "./Components/Table"

function App() {
  return (
    <div className="p-6 grid grid-cols-1 gap-y-12">
      <Navbar></Navbar>
      <Table></Table>
    </div>
  )
}

export default App
