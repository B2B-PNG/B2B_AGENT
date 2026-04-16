import { GenericFilter } from "@/components/generic-filter/generic-filter";
import {
    useDetailTour,
    useListTourPublish,
    useListTourSeries,
    useSearchTour,
} from "@/hooks/actions/useTour";
import { useState } from "react";
import TourLocationDes from "./tour-location-des";
import { paths } from "@/routes/paths";
import { useRouter } from "@/routes/hooks/use-router";

const today = new Date();

const DEFAULT_FILTERS = {
    page: 1,
    pageSize: 10,
    isTourSeries: false,
    strFilterDestinationName: "Ha Noi, Vietnam",
    start: today,
    end: today,
    guestRoom: {
        rooms: 1,
        adults: 1,
        children: 0,
        childAges: [],
        roomTypes: {
            sgl: 0,
            dbl: 1,
            twn: 0,
            tpl: 0,
        },
    },
};

const DEFAULT_FILTERS2 = {
    page: 1,
    pageSize: 10,
    intNoOfAdult: 1,
    strListNoOfChild: "",
    intNoOfSGLSup: 0,
    intNoOfTPLRec: 0,
    strLocationCode: "VN0000",
    dtmFilterDateValidFrom: today,
    dtmFilterDateValidTo: today,
};

const MAIN_TOUR_OPTIONS = [
    { label: "Tất cả", value: "all" },
    { label: "Tour hằng ngày", value: "daily" },
    { label: "Tour trọn gói", value: "package" },
    { label: "Tour cố định", value: "fixed" },
];

const getSubTourOptions = (mainValue: string | number) => {
    switch (mainValue) {
        case "daily":
            return [
                { label: "Tất cả các loại", value: "all" },
                { label: "FIT", value: "fit" },
                { label: "GIT", value: "git" },
                { label: "Excursion", value: "excursion" },
            ];
        case "package":
            return [
                { label: "Tất cả", value: "all" },
                { label: "Cao cấp", value: "premium" },
                { label: "Tiêu chuẩn", value: "standard" },
            ];
        default:
            return [];
    }
};

const TourSearch = () => {
    const router = useRouter()
    const [filters, setFilters] = useState<any>(DEFAULT_FILTERS);

    const [filters2, setFilters2] = useState<any>(DEFAULT_FILTERS2);
    const [draftFilters2, setDraftFilters2] = useState<any>(DEFAULT_FILTERS2);

    const [enableSearch2, setEnableSearch2] = useState(false);

    const searchPayload = {
        page: filters.page,
        pageSize: filters.pageSize,
        isTourSeries: filters.isTourSeries,
        strFilterDestinationName: filters.strFilterDestinationName,
    };

    const { searchData, searchLoading } = useSearchTour(searchPayload);

    const { tsData } = useListTourSeries(
        enableSearch2 ? { ...filters2 } : null
    );

    const [filters3, setFilters3] = useState<any>({
        page: 1,
        pageSize: 10,
        strLocationCode: "VN0000",
        dtmFilterDateValidFrom: today,
        dtmFilterDateValidTo: today,
    });

    const { tdpData } = useListTourPublish(filters3);

    const [filters4, setFilters4] = useState({
        strServiceNameUrl: null as string | null,
    });

    const handleSearch = () => {
        // TOUR → đi detail (KHÔNG search)
        if (filters4.strServiceNameUrl) {
            router.replaceParams(paths.tour.detail, {
                state: {
                    item: {
                        strServiceNameUrl: filters4.strServiceNameUrl,
                    },
                },
            })
            return;
        }

        // 👉 bình thường search
        if (filters.isTourSeries) {
            setFilters2({ ...draftFilters2 });

            setEnableSearch2(false);
            setTimeout(() => setEnableSearch2(true), 0);
        } else {
            setFilters3({
                page: filters.page,
                pageSize: filters.pageSize,
                strLocationCode: draftFilters2.strLocationCode,
                dtmFilterDateValidFrom: draftFilters2.dtmFilterDateValidFrom,
                dtmFilterDateValidTo: draftFilters2.dtmFilterDateValidTo,
                _t: Date.now(),
            });
        }
    };

    return (
        <div>
            <GenericFilter
                filters={[
                    { type: "toggle", key: "isTourSeries", label: "Tour Series" },
                    {
                        type: "search",
                        key: "strFilterDestinationName",
                        label: "Search",
                        placeholder: "Search...",
                        renderDropdown: ({ close }) => (
                            <TourLocationDes
                                data={searchData}
                                isLoading={searchLoading}
                                onSelectDestination={(item: any) => {
                                    const isTour = !!item?.strServiceNameUrl;

                                    setFilters((p: any) => ({
                                        ...p,
                                        strFilterDestinationName: item?.strDestinationName,
                                    }));

                                    if (isTour) {
                                        // 👉 chọn TOUR
                                        setFilters4((prev) => ({
                                            ...prev,
                                            strServiceNameUrl: item?.strServiceNameUrl,
                                        }));

                                        // reset location để tránh search nhầm
                                        setDraftFilters2((prev: any) => ({
                                            ...prev,
                                            strLocationCode: null,
                                        }));
                                    } else {
                                        // 👉 chọn DESTINATION
                                        setDraftFilters2((prev: any) => ({
                                            ...prev,
                                            strLocationCode: item?.strDestinationCode,
                                        }));

                                        // reset detail
                                        setFilters4((prev) => ({
                                            ...prev,
                                            strServiceNameUrl: null,
                                        }));
                                    }

                                    close();
                                }}
                            />
                        ),
                    },
                    { type: "guestRoom", key: "guestRoom", isRoomDetail: true },
                    { type: "dateRange", keyStart: "start", keyEnd: "end" },

                    ...(!filters.isTourSeries
                        ? [
                            {
                                type: "tourType" as const,
                                key: "tourTypeData",
                                label: "Loại tour",
                                mainOptions: MAIN_TOUR_OPTIONS,
                                getSubOptions: getSubTourOptions,
                            },
                        ]
                        : []),
                ]}
                values={filters}
                onChange={(k, v) => {
                    setFilters((p: any) => {
                        const next = { ...p, [k]: v };

                        if (k === "isTourSeries") {
                            const resetFilters = {
                                ...DEFAULT_FILTERS,
                                isTourSeries: v,
                            };

                            setFilters(resetFilters);
                            setFilters2(DEFAULT_FILTERS2);
                            setDraftFilters2(DEFAULT_FILTERS2);
                            setEnableSearch2(false);

                            return resetFilters;
                        }

                        if (k === "guestRoom") {
                            setDraftFilters2((prev: any) => ({
                                ...prev,
                                intNoOfAdult: v?.adults || 1,
                                strListNoOfChild: v?.children
                                    ? String(v.children)
                                    : "",
                                intNoOfSGLSup: v?.roomTypes?.sgl || 0,
                                intNoOfTPLRec: v?.roomTypes?.tpl || 0,
                            }));
                        }

                        if (k === "start" || k === "end") {
                            setDraftFilters2((prev: any) => ({
                                ...prev,
                                dtmFilterDateValidFrom:
                                    k === "start"
                                        ? v
                                        : prev.dtmFilterDateValidFrom,
                                dtmFilterDateValidTo:
                                    k === "end"
                                        ? v
                                        : prev.dtmFilterDateValidTo,
                            }));
                        }

                        return next;
                    });
                }}
                onSearch={handleSearch}
            />
        </div>
    );
};

export default TourSearch;