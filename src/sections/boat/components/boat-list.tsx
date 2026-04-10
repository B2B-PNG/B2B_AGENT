import { Star, MapPin, Anchor, LayoutGrid, List } from 'lucide-react';

const BoatCard = ({ boat }: any) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
            {/* Hình ảnh với hiệu ứng zoom nhẹ giống HotelCard */}
            <div className="relative h-44 overflow-hidden">
                <img
                    src={boat.image}
                    alt={boat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            <div className="p-4 flex flex-col flex-grow">
                {/* Tên Du Thuyền - Giữ font và kiểu line-clamp của bạn */}
                <h3 className="text-gray-800 font-bold text-[15px] leading-tight uppercase mb-4 h-12 line-clamp-2">
                    {boat.name}
                </h3>

                {/* Thông tin chi tiết */}
                <div className="space-y-2.5 mb-4 text-[13px] text-gray-600">
                    <div className="flex items-center gap-2">
                        <Anchor size={14} className="text-gray-400 shrink-0" />
                        <span>Du thuyền</span>
                        {/* Rating Stars chuẩn iTourGo */}
                        <div className="flex items-center ml-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={14}
                                    className={i < boat.stars ? "fill-orange-400 text-orange-400" : "text-gray-300"}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex items-start gap-2">
                        <MapPin size={14} className="text-gray-400 mt-0.5 shrink-0" />
                        <span className="line-clamp-2 leading-relaxed">{boat.location}</span>
                    </div>
                </div>

                {/* Badge Tăng/Giảm giá đặc trưng bạn yêu cầu */}
                <div className="mb-4 relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-100"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-white px-3 text-[11px] font-bold text-gray-900 italic tracking-wider">
                            Tăng giá/Giảm giá
                        </span>
                    </div>
                </div>

                {/* Footer: Giá và Action đúng khuôn HotelCard */}
                <div className="mt-auto flex items-end justify-between">
                    <div>
                        <p className="text-[11px] text-gray-500 mb-0.5">Giá từ</p>
                        <p className="text-[#2563eb] font-bold text-xl leading-none">
                            {boat.price === 'N/A' ? <span className="text-gray-400">N/A</span> : `$${boat.price}`}
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

const BoatList = () => {
    const boats = [
        {
            id: 1,
            name: "ALISA PREMIER CRUISES",
            stars: 4,
            location: "Tuan Chau Pier, Ha Long City",
            price: "36",
            image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "AMANDA CRUISE",
            stars: 5,
            location: "Số 366 Bạch Đằng, Quận Hoàn Kiếm, Hà Nội",
            price: "213.35",
            image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "ATHENA LUXURY CRUISE",
            stars: 5,
            location: "Đình Lễ, Hoàn Kiếm, Hà Nội, Việt Nam",
            price: "180",
            image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 4,
            name: "ATHENA ROYAL CRUISE",
            stars: 5,
            location: "Ha Long, Quang Ninh",
            price: "N/A",
            image: "https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <section className="max-w-7xl mx-auto p-8 bg-white">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Du Thuyền Nổi Bật</h2>
                <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-lg border border-gray-100">
                    <button className="p-1.5 bg-blue-600 text-white rounded-md shadow-sm">
                        <LayoutGrid size={16} />
                    </button>
                    <button className="p-1.5 text-gray-400">
                        <List size={16} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {boats.map(boat => (
                    <BoatCard key={boat.id} boat={boat} />
                ))}
            </div>
        </section>
    );
};

export default BoatList;