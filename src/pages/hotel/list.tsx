import { CONFIG } from "../../config-global";
import HotelView from "@/sections/hotel/hotel-view";

const metadata = { title: `Boat - ${CONFIG.appName}` };

export default function Page() {
    return (
        <>
            <div>
                <title>{metadata.title}</title>
            </div>
            <HotelView />
        </>
    );
}
