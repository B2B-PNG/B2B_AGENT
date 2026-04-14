import { useListTour } from '@/hooks/actions/useTour';
import { useRouter } from '@/routes/hooks/use-router';
import { paths } from '@/routes/paths';
import { getUrlImage } from '@/utils/format-image';
import { Flag, Clock, MapPin, LayoutGrid, List } from 'lucide-react';
import { useState } from 'react';

export const TourCard = ({ tour }: any) => {

    const router = useRouter()
    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={getUrlImage(tour?.strTourImageUrl)}
                    alt={tour?.strTourName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-[#1a4a8d] font-bold text-lg leading-tight uppercase mb-4 h-14 line-clamp-2">
                    {tour.title}
                </h3>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <Flag size={14} className="text-gray-400" />
                        <span className="truncate">Bởi: {tour?.strOwnerCompanyName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={14} className="text-gray-400" />
                        <span>Thời lượng: {tour.duration}</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <MapPin size={14} className="text-gray-400 mt-1 shrink-0" />
                        <span className="line-clamp-2 leading-snug">Các điểm đến: {tour.destinations}</span>
                    </div>
                </div>

                <div className="mb-4">
                    <span className="bg-[#e6f0ff] text-[#3b82f6] text-xs font-medium px-3 py-1 rounded-full">
                        {tour.type}
                    </span>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-xs text-gray-500">Giá từ</p>
                        <p className="text-[#2563eb] font-bold text-xl">
                            {tour.price === 'N/A' ? 'N/A' : `$${tour.price}`}
                        </p>
                    </div>
                    <button onClick={() => router.push(paths.tour.detail)} className="cursor-pointer text-blue-600 border border-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                        Xem chi tiết
                    </button>
                </div>
            </div>
        </div>
    );
};

const TourList = () => {
    const [filters, setFilters] = useState({
        page: 1,
        pageSize: 15,
    });
    
    const { tourData, tourLoading, tourError } = useListTour(filters);

    console.log("tourData", tourData)


    return (
        <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Tour nổi bật</h2>

                <div className="flex items-center gap-3 bg-white p-1.5 rounded-lg border border-gray-200 shadow-sm">
                    <span className="text-sm text-gray-500 ml-2">Hiển thị dạng:</span>
                    <button className="p-1.5 bg-blue-600 text-white rounded-md shadow-sm">
                        <LayoutGrid size={18} />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:bg-gray-100 rounded-md transition-colors">
                        <List size={18} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {tourData.map((tour: any) => (
                    <TourCard key={tourData.strTourGUID} tour={tour} />
                ))}
            </div>
        </div>
    );
};

export default TourList;