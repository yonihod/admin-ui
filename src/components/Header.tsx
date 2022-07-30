import { Space } from "@/types/space";

type HeaderItemsProps = {
    headers: string[];
}

const HeaderItem: React.FC<HeaderItemsProps> = ({headers}) => {
    return (
        <div className="grid grid-cols-7 gap-1 border-b">
            {headers.map( (header,i) => (
                <div key={`header-${i}`} className="grid-item p-2 font-bold text-center">{header}</div>
            ))}
        </div>
    );

}
export default HeaderItem;