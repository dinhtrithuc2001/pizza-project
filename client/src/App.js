import "./App.css";
import TopBar from './components/TopBar';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import About from './screens/About';
import Contact from './screens/Contact';
import Policy from './screens/Policy';
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import OrderScreen from "./screens/OrderScreen";

function App() {
    return (
        <BrowserRouter>
            <TopBar />
            <NavBar />
            <Switch>
                    <Route path="/orders" component={OrderScreen} exact />
                    <Route path="/login" component={Login} exact />
                    <Route path="/register" component={Register} exact />
                    <Route path="/about" component={About} exact />
                    <Route path="/contact" component={Contact} exact />
                    <Route path="/policy" component={Policy} exact />
                    <Route path="/cart" component={CartScreen} exact />
                    <Route path="/" component={HomeScreen} exact />
               
            </Switch>
        </BrowserRouter>
    );
}

export default App;
