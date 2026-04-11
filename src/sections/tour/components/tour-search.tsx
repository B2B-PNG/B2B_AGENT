import { GenericFilter } from "@/components/generic-filter/generic-filter";
import TourLocationDes from "./tour-location-des";
import { useState } from "react";

const TourSearch = () => {
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
        <div>

            <GenericFilter
                filters={[
                    { type: "toggle", key: "series", label: "Tour Series" },
                    {
                        type: "search",
                        key: "keyword",
                        label: "Search",
                        renderDropdown: ({ value: _value, close }) => (
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
    )
}

export default TourSearch