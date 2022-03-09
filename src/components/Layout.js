import {Link, Outlet} from "react-router-dom";

const Layout = () => {

    return (
        <div className="container-fluid d-flex flex-column vh-100">
            <div className="menu row h-25 h1">
                <nav className="navbar justify-content-evenly">
                    <div className="nav-item">
                        <Link to="/" className="link-dark">Search</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/boards" className="link-dark">Board</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/boots" className="link-dark">Boots</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/bindings" className="link-dark">Bindings</Link>
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