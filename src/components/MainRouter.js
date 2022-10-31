import { BrowserRouter, Route, Link } from "react-router-dom"; 
import Login from "../Login" 
import Nav from './components/Nav';

function MainRouter(){
    return(
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route path="/Login" component={Login} />
                    <Route path="/Nav" component={Nav} />
                </Switch>
            </div>
       </BrowserRouter>

    )
}
export default MainRouter