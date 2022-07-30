import Provider from "@/components/Provider";
import Tuples from "@/components/Tuples";
import { formatDate } from "@/utils/functions";
import { trpc } from "@/utils/trpc";


const Space: React.FC<{ id: string }> = ({ id }) => {
    const { data: space } = trpc.useQuery(["example.get-space-by-id", { id }]);
    if (!space) return <div>Loading...</div>;
    const { name, created, provider, modified, created_by, modified_by } = space;

    return (
        <div>
            <div className="flex gap-1">
                <h1>{name}</h1>
                <div className="grid-item">
                    <Provider provider={provider.vendor} />
                </div>
            </div>
            <div className="p-2"></div>
            <div className="border-b border-gray-800 my-2"></div>
            <div className="grid grid-cols-1 gap-4">
                <Tuples label="Created At:" value={formatDate(created)}/>
                <Tuples label="Created By:" value={created_by.name}/>
                {modified && <Tuples label="Modified At:" value={modified}/>}
                {modified_by && <Tuples label="Modified By:" value={modified_by?.name}/>}
            </div>
        </div>
    );
}

export async function getServerSideProps({ params }: { params: { id: string } }) {
    const { id } = params;
    if (!id) return { props: {} };
    return {
        props: {
            id
        }
    }
}

export default Space;