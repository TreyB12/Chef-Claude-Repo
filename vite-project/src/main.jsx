
import { createRoot } from "react-dom/client" 
import Header from "./Components/Header"
import Main from "./Components/Main"
const root = createRoot(document.getElementById("root"))

root.render (
  <>
<Header />
<Main />
  </>
)



