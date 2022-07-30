import Header from "../header/Header";

const Sidebar = () => {
    
    return (
        <aside  className="sidebar" aria-label="Sidebar">
            <Header />
            <div className="sidebar-body">
                <ul>
                    <li className="nav-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">About</a>
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