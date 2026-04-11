import { slidesTour } from "@/components/banner/banner-data";
import BannerSlider from "@/components/banner/banner-slider";
import TourList from "./components/tour-list";
import DestinationAccordion from "./components/destination-accordion";
import Partner from "./components/partner";
import { GenericFilter } from "./components/generic-filter/generic-filter";
import { useState } from "react";
import TourLocationDes from "./components/tour-location-des";

const TourView = () => {
    const [filters, setFilters] = useState<any>({
        keyword: "",
    });

    const [searchResult, setSearchResult] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = () => {
        console.log("search filters:", filters);
    };

    const handleKeywordChange = async (val: string) => {
        setFilters((p: any) => ({ ...p, keyword: val }));

        if (!val) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        try {
            const res = await fetch(`/api/search?keyword=${val}`);
            const data = await res.json();

            setSearchResult(data);
        } finally {
            setLoading(false);
        }
    };

    console.log("handleKeywordChange", handleKeywordChange)
    return (
        <div className="">
            <BannerSlider slides={slidesTour} />
            <TourList />
            <DestinationAccordion />
            <Partner />
            <GenericFilter
                filters={[
                    { type: "toggle", key: "series", label: "Tour Series" },
                    {
                        type: "search",
                        key: "keyword",
                        label: "Search",
                        renderDropdown: ({ value, close }) => (
                            <TourLocationDes
                                data={searchResult}
                                isLoading={loading}
                                onSelectDestination={(val) => {
                                    setFilters((p: any) => ({ ...p, keyword: val }));
                                    close();
                                }}
                            />
                        ),
                    },

                    { type: "guest", key: "guest" },
                    { type: "dateRange", keyStart: "start", keyEnd: "end" },
                    { type: "date", key: "date" },
                ]}
                values={filters}
                onChange={(k, v) => setFilters((p: any) => ({ ...p, [k]: v }))}
                onSearch={handleSearch}
            />


        </div>
    );
};

export default TourView;