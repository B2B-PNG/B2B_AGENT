import { slidesBoat } from "@/components/banner/banner-data"
import BannerSlider from "@/components/banner/banner-slider"
import BoatList from "./components/boat-list"

const BoatView = () => {
    return (
        <div>
            <BannerSlider slides={slidesBoat} />
            <BoatList />
        </div>
    )
}

export default BoatView