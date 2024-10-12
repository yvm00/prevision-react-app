import { BrowserRouter as Router, Route, Routes, HashRouter } from "react-router-dom";
import { Header } from "./components/Header"; 

import { Home } from "./pages/Home";
import { Forecast } from "./pages/Forecast";
import { Login } from "./pages/Login";
import { Results } from "./pages/Results";
import { SignUp } from "./pages/SignUp";
import { Profile } from "./pages/Profile";
import { Edit } from "./pages/Edit";

function App() {
    return (
         <>       
           <HashRouter>           
                < >                
                    <Routes>
                        <Route exact path="/" element={ <Home /> } />
                        <Route exact path="/home" element={ <Home /> } />
                        <Route path="/forecast" element={ <Forecast /> } />
                        <Route path="/profile" element={ <Profile /> } />
                        <Route path="/edit" element={ <Edit /> } />
                        <Route path="/login" element={ <Login /> } />
                        <Route path="/signup" element={ <SignUp /> } />
                        <Route path="/results" element={ <Results /> } />
                    </Routes>
                </>
            </HashRouter> 
         </>
    )
}

export default App;
