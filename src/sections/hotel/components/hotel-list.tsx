import { Building2, MapPin, Star, LayoutGrid, List } from 'lucide-react';

const HotelCard = ({ hotel }: any) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
            {/* Hình ảnh với hiệu ứng zoom nhẹ */}
            <div className="relative h-44 overflow-hidden">
                <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            <div className="p-4 flex flex-col flex-grow">
                {/* Tên Khách Sạn */}
                <h3 className="text-gray-800 font-bold text-[15px] leading-tight uppercase mb-4 h-12 line-clamp-2">
                    {hotel.name}
                </h3>

                {/* Thông tin chi tiết */}
                <div className="space-y-2.5 mb-4 text-[13px] text-gray-600">
                    <div className="flex items-center gap-2">
                        <Building2 size={14} className="text-gray-400 shrink-0" />
                        <span>Khách sạn</span>
                        {/* Rating Stars */}
                        <div className="flex items-center ml-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={14}
                                    className={i < hotel.stars ? "fill-orange-400 text-orange-400" : "text-gray-300"}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex items-start gap-2">
                        <MapPin size={14} className="text-gray-400 mt-0.5 shrink-0" />
                        <span className="line-clamp-3 leading-relaxed">{hotel.address}</span>
                    </div>
                </div>

                {/* Badge Tăng/Giảm giá kiểu iTourGo */}
                <div className="mb-4 relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-100"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-gray-50 px-3 text-[11px] font-bold text-gray-900 italic tracking-wider">
                            Tăng giá/Giảm giá
                        </span>
                    </div>
                </div>

                {/* Footer: Giá và Action */}
                <div className="mt-auto flex items-end justify-between">
                    <div>
                        <p className="text-[11px] text-gray-500 mb-0.5">Giá từ</p>
                        <p className="text-[#2563eb] font-bold text-xl leading-none">
                            {hotel.price === 'N/A' ? <span className="text-gray-400">N/A</span> : `$${hotel.price}`}
                        </p>
                    </div>
                    <button className="text-blue-600 border border-blue-200 hover:border-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg text-xs font-medium transition-all">
                        Xem chi tiết
                    </button>
                </div>
            </div>
        </div>
    );
};

const HotelList = () => {
    const hotels = [
        {
            id: 1,
            name: "AIRA BOUTIQUE HANOI HOTEL&SPA",
            stars: 4,
            address: "38A P. Trần Phú, Điện Biên, Ba Đình, Hà Nội",
            price: "82.8",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500"
        },
        {
            id: 2,
            name: "ALAGON CITY HOTEL & SPA",
            stars: 4,
            address: "54-56-58 Pham Hong Thai Street, Ben Thanh Ward, District 1, Ho Chi Minh, Vietnam",
            price: "129.6",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500"
        },
        {
            id: 3,
            name: "ALAGON D'ANTIQUE HOTEL & SPA",
            stars: 4,
            address: "301-303 Ly Tu Trong Str., Ben Thanh Ward, Dist. 1, Ho Chi Minh City, Viet Nam",
            price: "N/A",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500"
        },
        {
            id: 4,
            name: "ALMA CAM RANH RESORT",
            stars: 5,
            address: "Nguyễn Tất Thành, Cam Hải Đông, Cam Lâm, Khánh Hòa 650000",
            price: "N/A",
            image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=500"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Khách Sạn Nổi Bật</h2>

                <div className="flex items-center gap-3 bg-gray-50 p-1 rounded-lg border border-gray-200">
                    <span className="text-[12px] text-gray-500 ml-2">Hiển thị dạng:</span>
                    <div className="flex gap-1">
                        <button className="p-1.5 bg-blue-600 text-white rounded-md">
                            <LayoutGrid size={16} />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:bg-gray-200 rounded-md transition-colors">
                            <List size={16} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {hotels.map(hotel => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                ))}
            </div>
        </div>
    );
};

export default HotelList;