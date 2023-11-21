import { Routes,Route} from "react-router-dom";
import Log from "./file/Log";
import Navbar from "./file/Navbar";
import "./Style.css";
import SignUp from "./file/Signup";
import Main from "./file/Main";
import Page from "./file/Page";
import Seeker from "./file/Seeker";
// import Mid from "./file/Mid";
// import Products from "./file/Products";
// import Grids from "./file/Grids"
// import { RouterProvider } from 'react-router-dom'
// import Router from "./file/Router";
function App() {
  return (
    <div className="page"> 
      <Routes>
        <Route path="/" element={<Page/>}></Route>
        <Route path="Log" element={<Log />} />
        <Route path="Signup" element={<SignUp />} />
        <Route path="Seeker" element={<Seeker/>}/>
      </Routes>
      {/* <Main/>
      <Footer/> */}
    </div>
  );
}
export default App;
