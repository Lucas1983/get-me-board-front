// import logo from './logo.png';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import SearchForm from "./components/search/SearchForm";
import Error from "./components/error/Error";
import BootsList from "./components/boots/BootsList";
import BoardList from "./components/board/BoardList";
import BindingsList from "./components/bindings/BindingsList";
import Layout from "./components/Layout";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                        <Route index element={<SearchForm className="App-content"/>}/>
                        <Route path={"/boards"} element={<BoardList/>}/>
                        <Route path={"/boots"} element={<BootsList/>}/>
                        <Route path={"/bindings"} element={<BindingsList/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
