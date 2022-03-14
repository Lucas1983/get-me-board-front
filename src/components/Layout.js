import {Link, Outlet} from "react-router-dom";
import logo from "../logo.svg"

const Layout = () => {

    return (
        <div className="container-fluid d-flex flex-column vh-100">
            <div className="menu row h-25">
                <nav className="navbar navbar-expand fs-2">
                    <div className="container-fluid">
                        <di className="navbar-brand ">
                            <img src={logo} alt="Get Me Board" className="w-50 h-50"/>
                        </di>
                        <div className="navbar-nav w-50 justify-content-evenly">
                            <div className="nav-item">
                                <Link to="/boards" className="nav-link link-dark">Board</Link>
                            </div>
                            <div className="nav-item">
                                <Link to="/boots" className="nav-link  link-dark">Boots</Link>
                            </div>
                            <div className="nav-item">
                                <Link to="/bindings" className="nav-link  link-dark">Bindings</Link>
                            </div>
                            <div className="nav-item">
                                <Link to="/" className="nav-link  link-dark">Search</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="outlet row h-75 text-center">
                <Outlet/>
            </div>
            <div className="card-footer row justify-content-center">
                Get Me Board @ All Rights Reserved - Lukasz Mielczarek
            </div>
        </div>
    )
}
export default Layout;