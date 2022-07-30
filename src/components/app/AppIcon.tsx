import type { App } from "@/types/app";
import { useRouter } from "next/router";
import { memo } from "react";

const AppIcon: React.FC<App & any> = ({ id, name, version, title, subtitle, description, vendor, icon, color, link, tags, config, deployed, created_by, modified, modified_by, AppSymbol }) => {
    
    const router = useRouter()
    
    const renderIcon = () => {
        return <AppSymbol className={`text-7xl text-center mx-auto ${color === 'white'?  'text-black': 'white'}`} />
    }

    if(!AppSymbol) return null;

    return (
        <div className="flex flex-col gap-2 w-24">
            <button style={{
                backgroundColor: color,
            }} className="app h-24 w-24 rounded-2xl cursor-pointer" onClick={()=> router.push(`/apps/${id}`)}>
                {renderIcon()}
            </button>
            <p className="text-center h-12 overflow-hidden text-ellipsis">
                {title}
            </p>
        </div>
    )
}


export default memo(AppIcon);
