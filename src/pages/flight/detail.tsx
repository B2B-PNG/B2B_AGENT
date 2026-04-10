import FlightDetail from "@/sections/flight/components/flight-detail"

import { CONFIG } from "../../config-global";

const metadata = { title: `FlightDetail - ${CONFIG.appName}` };

export default function Page() {
    return (
        <>
            <div>
                <title>{metadata.title}</title>
            </div>
            
            <FlightDetail />
        </>
    );
}