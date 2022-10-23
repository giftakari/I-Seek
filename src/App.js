import MaterialCSS from "materialize-css"
import { useEffect } from "react"
import Header from "./components/Header"
import Search from "./components/Search"

function App() {
  useEffect(() => {
    MaterialCSS.Sidenav.init()
  }, [])
  return (
    <div>
      <Header />
      <Search />
      <h1>I seek</h1>
    </div>
  )
}

export default App
