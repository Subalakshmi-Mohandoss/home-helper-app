import { Routes,Route} from "react-router-dom";
import Log from "./file/Log";
import "./Style.css";
import SignUp from "./file/Signup";
import Page from "./file/Page";
import Seeker from "./file/Seeker";
import AuthReducer from "./file/AuthReducer";
import { useReducer} from "react";
import { AuthContext} from "./file/AuthContext";
//import Project from "./file/Project";
import  AboutUs  from "./file/AboutUs";
import Painting from "./file/Painting";
import Garden from "./file/Garden";
import Carpent from "./file/Carpent";
import Plumb from "./file/Plumb";
import Caring from "./file/Caring";
import Details from "./file/Details";
const {Provider}=AuthContext;
const App=()=> {
  const [user, dispatch] = useReducer(AuthReducer, null);
  return (
    // <Painting/>
     <div className="page"> 
      <Provider value={{ user, dispatch }}>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="Log" element={<Log />} />
          <Route path="Signup" element={<SignUp />} />
          <Route path="AboutUs" element={<AboutUs/>}/>
          <Route path="Seeker" element={<Seeker />} />
          <Route path="Painting" element={<Painting/>}/>
          <Route path="Garden" element={<Garden/>}/>
          <Route path="Carpent" element={<Carpent/>}/>
          <Route path="Plumb" element={<Plumb/>}/>
          <Route path="Caring" element={<Caring/>}/>
          <Route path="Details/:title" element={<Details/>}/>
          <Route path="Details" element={<Details/>}></Route>
        </Routes>
      </Provider>
    </div>
  );
}
export default App;

