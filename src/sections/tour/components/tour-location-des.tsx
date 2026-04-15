// import { useRouter } from "@/routes/hooks/use-router";
// import { paths } from "@/routes/paths";
import { MapPin, Globe, Flag, Calendar, Map } from "lucide-react";

type Props = {
    data: any[];
    isLoading: boolean;
    onSelectDestination?: (name: string) => void;
};

const TourLocationDes = ({ data, isLoading, onSelectDestination }: Props) => {
    // const router = useRouter()
    const locations = data.filter(
        (item) => item.strSearchTypeName === "Location"
    );

    const tours = data.filter(
        (item) => item.strSearchTypeName === "Tour"
    );

    if (isLoading) {
        return (
            <div className="w-105 bg-white rounded-xl shadow-lg border border-gray-300 text-sm">
                <div className="p-6 flex flex-col items-center text-gray-400 text-sm">
                    <div className="mb-2 w-6 h-6 border-4 border-gray-300 border-t-[#4a6fa5] rounded-full animate-spin"></div>
                    Đang tìm tour phù hợp...
                </div>
            </div>
        );
    }

    if (data.length === 0) {
        return (
            <div className="w-105 bg-white rounded-xl shadow-lg border border-gray-300 text-sm">
                <div className="p-6 flex flex-col items-center text-gray-400 text-sm">
                    <MapPin size={24} className="mb-2" />
                    Không tìm thấy kết quả phù hợp
                </div>
            </div>
        );
    }

    return (
        <div className="w-105 bg-white rounded-xl shadow-lg border border-gray-300 text-sm max-h-100 custom-scroll overflow-y-auto pb-4">
            {/* DESTINATION */}
            {locations.length > 0 && (
                <div className="border-b border-gray-300 ">
                    <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold p-4">
                        <MapPin size={14} />
                        DESTINATIONS
                    </div>

                    <div className="flex flex-col gap-3">
                        {locations.map((loc, index) => (
                            <button onClick={() => {
                                onSelectDestination?.(loc.strDisplayName)
                                console.log("first", loc.strDisplayName)
                            }

                            } key={index} className="flex gap-3 cursor-pointer hover:bg-[#e9e9e981] px-4 py-2 transition">
                                <MapPin className="text-[#2566b0] mt-1" size={18} />

                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">{loc.strDisplayName}</span>
                                        <span className="text-[10px] bg-blue-100 text-[#2566b0] rounded-full">
                                            DESTINATION
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-1 text-gray-500 mt-1">
                                        <Globe size={14} />
                                        {loc.strCityName}, {loc.strCountryName}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* TOURS */}
            {tours.length > 0 && (
                <div className="">
                    <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold p-4">
                        <Map size={14} />
                        TOURS
                    </div>

                    <div className="flex flex-col gap-4">
                        {tours.map((tour, index) => (
                            <button
                                // onClick={() => router.push(paths.tour.detail(tour?.strUrlLink ?? ""))}
                                key={index} className="flex gap-3 cursor-pointer hover:bg-[#e9e9e981] px-4 py-2 transition">
                                <Flag className="text-[#2566b0] mt-1" size={18} />

                                <div className="flex-1">
                                    <div className="flex items-start justify-between gap-2">
                                        <div className="font-medium text-start">{tour.strDisplayName}</div>
                                        <span className="text-[10px] px-2 py-0.5 bg-blue-100 text-[#2566b0] rounded-full">
                                            TOUR
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-4 text-gray-500 mt-2 text-xs">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {tour.intNoOfDay} days
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <Map size={14} />
                                            {tour.strListDestinations}
                                        </div>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TourLocationDes;