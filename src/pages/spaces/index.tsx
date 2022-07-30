import { trpc } from "../../utils/trpc";

const Spaces = () => {
    const {data: spaces} = trpc.useQuery(["example.spaces"]);
    if(!spaces) return <div>Loading...</div>;
    
    return (
        <div>
            <h1>spaces</h1>
            <div>
                {spaces.map(space => (
                    <div key={space.id}>
                        <h2>{space.name}</h2>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Spaces;