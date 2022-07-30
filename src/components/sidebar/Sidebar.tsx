import { useRouter } from "next/router";
import Header from "../header/Header";

const Sidebar = () => {
    const router = useRouter();
    return (
        <aside  className="sidebar" aria-label="Sidebar">
            <Header />
            <div className="sidebar-body">
                <ul>
                    <li className="nav-item" onClick={()=> router.push("/spaces")}>
                        <a className={"w-full"} href="#">Spaces</a>
                    </li>
                    <li className="nav-item" onClick={()=> router.push("/apps")}>
                        <a className={"w-full"} href="#">Apps</a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;