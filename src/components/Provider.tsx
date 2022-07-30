import AWS from "@/assets/aws.svg"
import GCP from "@/assets/google-cloud.svg"
import Azure from "@/assets/azure.svg"

const providersToImg = {
    'AWS': <AWS className="w-6 h-6"/>,
    'GCP': <GCP/>,
    'AZURE': <Azure className="w-6 h-6"/>,
}

const Provider: React.FC<{provider: "AWS" | "GCP" | "AZURE"}> = ({ provider }) => {
    return (
        <div className="flex justify-center items-center">
            {providersToImg[provider]}
        </div>
    );
}
export default Provider;
