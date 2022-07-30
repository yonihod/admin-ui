import HeaderItem from "@/components/Header";
import Item from "@/components/Item";
import { trpc } from "../../utils/trpc";

const Spaces = () => {
    const {data: spaces} = trpc.useQuery(["spaces.spaces"]);
    if(!spaces) return <div>Loading...</div>;
    return (
        <div>
            <h1>Spaces</h1>
            <div className="p-2"></div>
            <div className="border-b border-gray-800 my-6"></div>
            <div className="grid grid-col-1 gap-3 items-center">
                <HeaderItem headers={["Name", "Created At", "Provider", "Created By", "Modified", "Modified_by"]}/>
                {spaces.map( (space, i) => (
                    <>
                        <Item key={`space-item-${i}`} {...space}/>
                        <div className="border-b border-gray-600 bg-gray-600"/>
                    </>
                ))}
            </div>

        </div>
    );
}

export default Spaces;