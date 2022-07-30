import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();
    return (
        <header className="p-2 cursor-pointer" onClick={() => router.push('/')}>
            <h3 className="capitalize ml-3">Evolve Admin</h3>
        </header>
    );
}

export default Header;