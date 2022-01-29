import logo from './logo.png';
import './App.css';
import SearchForm from "./components/search/SearchForm";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                <hr className="rounded"/>
                <SearchForm/>
            </header>
        </div>
    );
}

export default App;
