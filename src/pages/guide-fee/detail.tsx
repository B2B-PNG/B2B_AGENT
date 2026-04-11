import GuideFeeDetail from "@/sections/guide-fee/components/guide-fee-detail";


import { CONFIG } from "../../config-global";

const metadata = { title: `Guide Fee Detail - ${CONFIG.appName}` };

export default function Page() {
    return (
        <>
            <div>
                <title>{metadata.title}</title>
            </div>
            
            <GuideFeeDetail />
        </>
    );
}