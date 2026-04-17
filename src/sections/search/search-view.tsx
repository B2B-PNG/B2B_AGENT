import { useLocation } from "react-router-dom";
import { useListTourPublish, useListTourSeries } from "@/hooks/actions/useTour";
import { TourListCard } from "./tour-list-card";
import TourSeriesCard from "./tour-series-card";

const SearchView = () => {
    const location = useLocation();

    const state = location.state as {
        isTourSeries: boolean;
        filters: any;
    };

    const isSeries = state?.isTourSeries;
    const filters = state?.filters;

    const { tsData, tsLoading, tsError } = useListTourSeries(
        isSeries ? filters : null
    );

    const { tdpData, tdpLoading, tdpError } = useListTourPublish(
        !isSeries ? filters : null
    );



    return (
        <div className="mt-20 max-w-7xl m-auto">


            {/* DATA */}
            <>
                {isSeries ? (
                    <>
                        {/* TITLE */}
                        <div className="text-2xl font-semibold mb-10">
                            {tsLoading
                                ? "Đang tìm kiếm..."
                                : `Tìm thấy ${tsData?.[0]?.intTotalRecords || 0} dữ liệu`}
                        </div>

                        {/* ERROR */}
                        {tsError || tsError && (
                            <div className="text-red-500 text-center py-10">
                                Có lỗi xảy ra. Vui lòng thử lại!
                            </div>
                        )}

                        {/* LOADING SKELETON */}
                        {tsLoading && (
                            <div className="grid grid-cols-1 gap-6">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <TourSeriesCardSkeleton key={i} />
                                ))}
                            </div>
                        )}

                        <div className="grid grid-cols-1 gap-6">
                            {!tsLoading && !tsError && tsData?.map((tour: any) => (
                                <TourSeriesCard key={tour.strTourGUID}
                                    tour={tour} />
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        {/* TITLE */}
                        <div className="text-2xl font-semibold mb-10">
                            {tdpLoading
                                ? "Đang tìm kiếm..."
                                : `Tìm thấy ${tdpData?.[0]?.intTotalRecords || 0} dữ liệu`}
                        </div>

                        {/* ERROR */}
                        {tdpError || tsError && (
                            <div className="text-red-500 text-center py-10">
                                Có lỗi xảy ra. Vui lòng thử lại!
                            </div>
                        )}

                        {/* LOADING SKELETON */}
                        {tdpLoading && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {Array.from({ length: 8 }).map((_, i) => (
                                    <TourCardSkeleton key={i} />
                                ))}
                            </div>
                        )}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {!tdpLoading && !tdpError && tdpData?.map((tour: any) => (
                                <TourListCard
                                    key={tour.strTourGUID}
                                    tour={tour}
                                />
                            ))}
                        </div>
                    </>
                )}
            </>

        </div>
    );
};

export default SearchView;


const TourCardSkeleton = () => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm animate-pulse">
            <div className="h-48 bg-gray-200" />

            <div className="p-4">
                <div className="h-5 bg-gray-200 rounded mb-3" />
                <div className="h-5 bg-gray-200 rounded w-2/3 mb-4" />

                <div className="space-y-2 mb-4">
                    <div className="h-3 bg-gray-200 rounded w-3/4" />
                    <div className="h-3 bg-gray-200 rounded w-1/2" />
                    <div className="h-3 bg-gray-200 rounded w-full" />
                </div>

                <div className="h-6 bg-gray-200 rounded w-1/3 mb-4" />

                <div className="flex justify-between items-center pt-4">
                    <div className="h-6 bg-gray-200 rounded w-1/4" />
                    <div className="h-8 bg-gray-200 rounded w-20" />
                </div>
            </div>
        </div>
    );
};

const TourSeriesCardSkeleton = () => {
    return (
        <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl p-6 flex gap-6 bg-white animate-pulse">
            {/* Left image */}
            <div className="w-1/3">
                <div className="w-full h-48 bg-gray-200 rounded-xl" />
            </div>

            {/* Middle content */}
            <div className="flex-1 space-y-4">
                <div className="h-6 bg-gray-200 rounded w-3/4" />

                <div className="flex gap-4">
                    <div className="h-8 w-40 bg-gray-200 rounded" />
                    <div className="h-8 w-40 bg-gray-200 rounded" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="h-4 bg-gray-200 rounded w-5/6" />
                    <div className="h-4 bg-gray-200 rounded w-4/6" />
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-2/3" />
                    <div className="h-4 bg-gray-200 rounded w-5/6" />
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                </div>

                <div className="h-6 w-32 bg-gray-200 rounded-full" />
            </div>

            {/* Right price */}
            <div className="w-1/4 border-l border-gray-100 pl-6 flex flex-col items-center justify-center space-y-4">
                <div className="h-5 w-20 bg-gray-200 rounded" />
                <div className="h-10 w-24 bg-gray-200 rounded" />
                <div className="h-9 w-full bg-gray-200 rounded-full" />
                <div className="h-6 w-24 bg-gray-200 rounded" />
            </div>
        </div>
    );
};
