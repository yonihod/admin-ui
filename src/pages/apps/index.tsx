import AppIcon from "@/components/app/AppIcon";
import { trpc } from "@/utils/trpc";
import { useEffect, useState } from "react";
import { DiApple, DiAndroid, DiJava, DiRuby, DiRaphael, DiYii, DiWebplatform, DiSwift, DiNetbeans, DiNancy, DiJqueryUiLogo, DiJoomla } from "react-icons/di"
import { ImCompass, ImBug, ImBasecamp, ImIcoMoon, ImSvg, ImCodepen, ImFileOpenoffice, ImStumbleupon } from "react-icons/im";

const iconMap = {
    "apple": DiApple,
    "android": DiAndroid,
    "java": DiJava,
    "ruby": DiRuby,
    "raphael": DiRaphael,
    "yii": DiYii,
    "webplatform": DiWebplatform,
    "swift": DiSwift,
    "netbeans": DiNetbeans,
    "nancy": DiNancy,
    "jquery-ui": DiJqueryUiLogo,
    "joomla": DiJoomla,
    "compass": ImCompass,
    "bug": ImBug,
    "basecamp": ImBasecamp,
    "icomoon": ImIcoMoon,
    "svg": ImSvg,
    "codepen": ImCodepen,
    "file-openoffice": ImFileOpenoffice,
    "stumbleupon": ImStumbleupon
}


const Apps = () => {
    const { data: apps } = trpc.useQuery(["apps.apps"]);
    const [iconArr, setIconArr] = useState(Object.values(iconMap))
    

    if (!apps) return <div>Loading...</div>;
    return (
        <div>
            <h1>Apps</h1>
            <div className="p-2"></div>
            <div className="border-b border-gray-800 my-6" />

            <div className="grid grid-cols-6 place-items-center gap-6">
                {apps.map((app, i) => {
                    return <AppIcon key={app.id} AppSymbol={iconArr[i]} {...app} />
                })}
            </div>
        </div>
    );
}

export default Apps;