import HeaderItem from "@/components/Header";
import Item from "@/components/Item";
import { trpc } from "../../utils/trpc";

const Spaces = () => {
    const {data: spaces} = trpc.useQuery(["example.spaces"]);
    if(!spaces) return <div>Loading...</div>;
    console.log('spaces', spaces);
    return (
        <div>
            <h1>Spaces</h1>
            <div className="p-2"></div>
            <div className="border-b border-gray-800 my-2"></div>
            <div className="grid grid-col-1">
                <HeaderItem headers={["Name", "Created At", "Provider", "Created By", "Modified", "Modified_by"]}/>
                {spaces.map( (space, i) => (
                    <Item key={`space-item-${i}`} {...space}/>
                ))}
            </div>

        </div>
    );
}

export default Spaces;