import { GenericFilter } from "@/components/generic-filter/generic-filter";
import { useState } from "react";

const HotelSearch = () => {

    const [filters, setFilters] = useState<any>({
        keyword: "",
    });

    const [, setSearchResult] = useState<any[]>([]);
    const [, setLoading] = useState(false);

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
        <div>
            <GenericFilter
                filters={[
                    { type: "toggle", key: "series", label: "Đặt phòng ngay" },
                    {
                        type: "search",
                        key: "keyword",
                        label: "Điểm đến",
                        placeholder: "Search...",
                        renderDropdown: ({ value: _value, close: _close }) => (
                            // <TourLocationDes
                            //     data={searchResult}
                            //     isLoading={loading}
                            //     onSelectDestination={(val) => {
                            //         setFilters((p: any) => ({ ...p, keyword: val }));
                            //         close();
                            //     }}
                            // />
                            <div className=""></div>
                        ),
                    },

                    { type: "dateRange", keyStart: "start", keyEnd: "end", label: "Ngày nhận phòng - Ngày trả phòng" },
                    { type: "guest", key: "guest" },
                ]}
                values={filters}
                onChange={(k, v) => setFilters((p: any) => ({ ...p, [k]: v }))}
                onSearch={handleSearch}
            /> </div>
    )
}

export default HotelSearch