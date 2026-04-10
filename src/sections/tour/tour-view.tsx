import { slidesTour } from "@/components/banner/banner-data";
import BannerSlider from "@/components/banner/banner-slider";
import TourList from "./components/tour-list";
import DestinationAccordion from "./components/destination-accordion";
import Partner from "./components/partner";

const TourView = () => {

    return (
        <div className="">
            <BannerSlider slides={slidesTour} />
            <TourList />
            <DestinationAccordion />
            <Partner />
        </div>
    );
};

export default TourView;