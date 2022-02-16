import logo from './logo.png';
import './App.css';
import SearchForm from "./components/search/SearchForm";

function App() {
    return (
        <div className="App">
            {/*<img src={logo} className="App-logo" alt="logo"/>*/}
            <SearchForm className="App-content"/>
        </div>
    );
}

export default App;
