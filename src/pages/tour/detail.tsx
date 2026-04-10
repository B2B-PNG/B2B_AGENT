import TourDetail from "@/sections/tour/components/tour-detail";
import { CONFIG } from "../../config-global";

const metadata = { title: `Tour - ${CONFIG.appName}` };

export default function Page() {
    return (
        <>
            <div>
                <title>{metadata.title}</title>
            </div>
            <TourDetail />
        </>
    );
}
