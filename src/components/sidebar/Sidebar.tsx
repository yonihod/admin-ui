import Header from "../header/Header";

const Sidebar = () => {
    
    return (
        <aside  className="sidebar" aria-label="Sidebar">
            <Header />
            <div className="sidebar-body">
                <ul>
                    <li className="nav-item">
                        <a href="#">Spaces</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Apps</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;