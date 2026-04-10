import { slidesHotel } from "@/components/banner/banner-data"
import BannerSlider from "@/components/banner/banner-slider"
import HotelList from "./components/hotel-list"
import DestinationCarousel from "./components/destination-carousel"

const HotelView = () => {
    return (
        <div>
            <BannerSlider slides={slidesHotel} />
            <HotelList />
            <DestinationCarousel />
        </div>
    )
}

export default HotelView