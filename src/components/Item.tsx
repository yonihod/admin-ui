import { Space } from "@/types/space";
import { formatDate } from "@/utils/functions";
import { useRouter } from "next/router";
import Provider from "./Provider";

const Item: React.FC<Space> = ({ id, name, created, provider, modified, created_by, modified_by  }) => {
    const router = useRouter();
    return (
        <div className="grid grid-cols-7 justify-center items-center gap-1 text-center cursor-pointer" onClick={()=> router.push(`/spaces/${id}`)}>
            <div className="grid-item capitalize">{name}</div>
            <div className="grid-item">{formatDate(created)}</div>
            <div className="grid-item">
                <Provider provider={provider.vendor }/>
            </div>
            <div className="grid-item capitalize">{created_by.name}</div>
            <div className="grid-item">{modified}</div>
            <div className="grid-item">{modified_by}</div>
        </div>
    );

}
export default Item;