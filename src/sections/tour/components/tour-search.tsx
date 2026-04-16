import { GenericFilter } from "@/components/generic-filter/generic-filter";
import { useSearchTour } from "@/hooks/actions/useTour";
import { useState } from "react";

const TourSearch = () => {
    const [filters, setFilters] = useState<any>({
        page: 1,
        pageSize: 10,
        series: false,
        keyword: "",
        // guestRoom: {
        //     rooms: 1,
        //     adults: 1,
        //     children: 0,
        //     childAges: [],
        // },
        // start: null,
        // end: null,
    });
    const { searchData, searchError, searchLoading } = useSearchTour(filters)
    const handleSearch = () => {
        // const guest = filters.guestRoom || {};

        const payload = {
            page: 1,
            pageSize: filters.pageSize,

            isTourSeries: filters.series,

            strFilterDestinationName: filters.keyword || "",

            // rooms: guest.rooms || 1,
            // adults: guest.adults || 1,
            // children: guest.children || 0,
            // childAges: guest.childAges || [],

            // startDate: filters.start,
            // endDate: filters.end,
        };

        setFilters((prev: any) => ({
            ...prev,
            ...payload,
        }));
    };
    return (
        <div>

            <GenericFilter
                filters={[
                    { type: "toggle", key: "series", label: "Tour Series" },
                    {
                        type: "search",
                        key: "keyword",
                        label: "Search",
                        placeholder: "Search...",
                        renderDropdown: ({ value: _value, close }) => (
                            <TourLocationDes
                                data={searchData}
                                isLoading={searchLoading}
                                onSelectDestination={(val) => {
                                    setFilters((p: any) => ({ ...p, keyword: val }));
                                    close();
                                }}
                            />
                        ),
                    },

                    { type: "guestRoom", key: "guestRoom", isRoomDetail: true, },
                    { type: "dateRange", keyStart: "start", keyEnd: "end" },
                ]}
                values={filters}
                onChange={(k, v) => setFilters((p: any) => ({ ...p, [k]: v }))}
                onSearch={handleSearch}
            />
        </div>
    )
}

export default TourSearch
