import { MapPin, Clock3, MessageSquare, Facebook, Twitter, Mail, CheckCircle2, XCircle, AlertCircle, Info } from 'lucide-react';
import { useState } from 'react';
import { ChevronDown, ChevronUp, } from 'lucide-react';
import { TourCard } from './tour-list';

const TourDetail = () => {
    // Quản lý trạng thái đóng mở của lịch trình
    const [openDay, setOpenDay] = useState(1);

    const toggleDay = (day: any) => {
        setOpenDay(openDay === day ? null : day);
    };
    const tourData = {
        title: "HÀ NỘI - HẠ LONG - VỊNH NGỌC XANH",
        company: "CÔNG TY KẾT NỐI DU LỊCH",
        contact: "pngsoftsup@gmail.com - 0435563688",
        location: "Hà Nội",
        duration: "2 Ngày / 1 Đêm",
        mainImage: "https://images.unsplash.com/photo-1528127269322-539801943592?w=1000&q=80",
    };

    // Dữ liệu mẫu dựa trên hình ảnh
    const inclusions = [
        "Accommodation in twin/double room with daily breakfast",
        "2Days/1Night cruise on board a cruise in Ha Long Bay",
        "Services of a driver and private air-conditioned vehicle",
        "Experienced English-speaking guide",
        "Entrance fees for all visits as mentioned",
        "Meals (B/L/D) as indicated in the program",
        "02 bottles of mineral water per person per day"
    ];

    const exclusions = [
        "Early check-in or late check-out",
        "International & Domestic flight tickets",
        "Meals (other than mentioned in the program)",
        "Visa - as per country requirements",
        "Tips and personal expenses",
        "Travel insurance"
    ];

    const hotels = [
        { city: "BA BE", name: "KHÁCH SẠN MƯỜNG THANH HÀ NỘI", type: "Deluxe" },
        { city: "HA LONG", name: "KHÁCH SẠN BÃI CHÁY HẠ LONG", type: "Presidential Suite" }
    ];

    const tours = [
        {
            id: 1,
            title: "HÀ NỘI - HẠ LONG - VỊNH NGỌC XANH",
            provider: "CÔNG TY KẾT NỐI DU LỊCH",
            duration: "2 Ngày / 1 Đêm",
            destinations: "Hà Nội",
            type: "Tour trọn gói",
            price: "446.9",
            image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=500"
        },
        {
            id: 2,
            title: "TOUR NINH BÌNH 1 NGÀY: CHÙA BÁI ĐÍNH - TRÀNG AN",
            provider: "CÔNG TY KẾT NỐI DU LỊCH",
            duration: "1 Ngày / 0 Đêm",
            destinations: "Ninh Bình",
            type: "Tour hằng ngày",
            price: "41.04",
            image: "https://images.unsplash.com/photo-1599708153386-62bf3f035c78?w=500"
        },
        {
            id: 3,
            title: "NHA TRANG - THÁM HIỂM ĐẠI DƯƠNG TẠI ĐẢO KHỈ",
            provider: "CÔNG TY KẾT NỐI DU LỊCH",
            duration: "1 Ngày / 0 Đêm",
            destinations: "Nha Trang",
            type: "Tour hằng ngày",
            price: "N/A",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500"
        },
        {
            id: 4,
            title: "HÀ NỘI - NINH BÌNH - HẠ LONG - YÊN TỬ - SAPA 6N5Đ",
            provider: "CÔNG TY KẾT NỐI DU LỊCH",
            duration: "6 Ngày / 5 Đêm",
            destinations: "Sa Pa, Ninh Bình, Hạ Long, Hà Nội",
            type: "Tour hằng ngày",
            price: "313.2",
            image: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=500"
        }
    ];

    return (
        <section className="mx-auto p-8 bg-gray-50/50 min-h-screen">
            <div className="flex flex-col md:flex-row items-start gap-10">

                <div className="w-full space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">

                    <div className="space-y-4">
                        <h1 className="text-gray-950 font-black text-3xl tracking-tighter uppercase leading-tight">
                            {tourData.title} </h1>

                        <div className="space-y-1 text-sm text-gray-700">
                            <p className="font-semibold text-gray-800">Tên công ty: {tourData.company}</p>
                            <p>{tourData.contact}</p>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-6 text-[13px] text-gray-600 font-medium">
                                <div className="flex items-center gap-1.5">
                                    <MapPin size={16} className="text-blue-500 shrink-0" />
                                    <span>{tourData.location}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock3 size={16} className="text-gray-400 shrink-0" />
                                    <span>{tourData.duration}</span>
                                </div>
                                <button className="flex items-center gap-2 bg-[#2563eb] text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-[#1d4ed8] transition-colors active:scale-95 shadow-sm">
                                    <MessageSquare size={14} className="shrink-0" />
                                    <span>Nhắn Tin Ngay</span>
                                </button>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-500">
                                <span className="font-semibold text-gray-700">Chia sẻ:</span>
                                <div className="flex items-center gap-2">
                                    {[Facebook, Mail, Twitter].map((Icon, index) => (
                                        <button key={index} className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-[#2563eb] hover:text-white transition-all duration-300">
                                            <Icon size={16} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Ảnh chính của tour (Bo góc lớn, 16:9) */}
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border-2 border-white group">
                        <img
                            src={tourData.mainImage}
                            alt={tourData.title}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay màu tối nhẹ để tạo chiều sâu */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Phần nội dung mô tả dưới ảnh */}
                    <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-8 text-[15px] text-gray-800 leading-relaxed">
                        <div className="space-y-4">
                            <h3 className="font-bold text-gray-900 text-lg tracking-tight">Các điểm chính</h3>
                            <p className="text-gray-600">Không có dữ liệu</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-bold text-gray-900 text-lg tracking-tight">Các thành phố sẽ đi qua</h3>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" checked readOnly className="form-checkbox w-4 h-4 text-blue-600 rounded" />
                                <span className="text-gray-700">Hà Nội</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 space-y-12">
                        {/* PHẦN MÔ TẢ */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-3">
                                Mô tả
                            </h2>
                            <div className="h-0.5 w-full bg-gray-100 relative">
                                <div className="absolute top-0 left-0 h-full w-20 bg-blue-600"></div>
                            </div>
                            <p className="text-gray-500 italic text-[15px]">Không có dữ liệu</p>
                        </div>

                        {/* PHẦN LỊCH TRÌNH */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-black text-gray-900 tracking-tight">Lịch trình</h2>
                                <button className="text-blue-600 text-sm font-bold hover:underline">Mở rộng tất cả</button>
                            </div>

                            <div className="space-y-4">
                                {/* Ngày 1 */}
                                <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openDay === 1 ? 'border-blue-200 shadow-md' : 'border-gray-100'}`}>
                                    <button
                                        onClick={() => toggleDay(1)}
                                        className={`w-full flex items-center justify-between p-5 text-left transition-colors ${openDay === 1 ? 'bg-blue-50/50' : 'bg-white hover:bg-gray-50'}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider ${openDay === 1 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                                                Ngày 1
                                            </span>
                                            <span className="font-bold text-gray-800 text-[15px]">THIÊN CẦM - HÀ NỘI (ĂN: SÁNG/ TRƯA)</span>
                                        </div>
                                        {openDay === 1 ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-gray-400" />}
                                    </button>

                                    {openDay === 1 && (
                                        <div className="p-6 bg-white border-t border-gray-50 space-y-4 text-[15px] text-gray-700 leading-relaxed">
                                            <div className="flex gap-4">
                                                <div className="font-black text-blue-600 shrink-0 min-w-[60px]">Sáng:</div>
                                                <p>Quý khách ăn sáng tại khách sạn. Sau bữa sáng, Quý khách tự do tắm biển, thư giãn hoặc đi chợ địa phương mua quà lưu niệm và đồ hải sản.</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="font-black text-blue-600 shrink-0 min-w-[60px]">11h00:</div>
                                                <p>Quý khách trả phòng khách sạn.</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="font-black text-blue-600 shrink-0 min-w-[60px]">Trưa:</div>
                                                <p>Quý khách ăn trưa tại nhà hàng. Sau bữa trưa, xe đón Quý khách trở về <strong>Hà Nội</strong>.</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="font-black text-blue-600 shrink-0 min-w-[60px]">17h00:</div>
                                                <p>Về đến <strong>Hà Nội</strong>.</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Ngày 2 (Dạng đóng) */}
                                <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                                    <button
                                        onClick={() => toggleDay(2)}
                                        className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 text-left"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-500 text-xs font-black uppercase tracking-wider">
                                                Ngày 2
                                            </span>
                                            <span className="font-bold text-gray-400 text-[15px]">Lịch trình đang cập nhật...</span>
                                        </div>
                                        <ChevronDown className="text-gray-400" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 space-y-12 pb-20">
                        {/* PHẦN BAO GỒM / KHÔNG BAO GỒM */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                                Bao gồm/Không bao gồm
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                                {/* Bao gồm */}
                                <ul className="space-y-3">
                                    {inclusions.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-[14px] text-gray-700">
                                            <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                {/* Không bao gồm */}
                                <ul className="space-y-3">
                                    {exclusions.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-[14px] text-gray-700">
                                            <XCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* PHẦN DANH SÁCH KHÁCH SẠN */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                                Danh sách khách sạn
                            </h2>
                            <div className="overflow-hidden border border-gray-200 rounded-xl">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50 text-[13px] font-bold text-gray-600 uppercase tracking-wider">
                                            <th className="px-6 py-4 border-b border-gray-200 w-1/4">Thành phố</th>
                                            <th className="px-6 py-4 border-b border-gray-200">Khách sạn / Tàu / Xe</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {hotels.map((item, index) => (
                                            <tr key={index} className="hover:bg-blue-50/30 transition-colors">
                                                <td className="px-6 py-4 font-bold text-blue-600 text-[14px]">
                                                    {item.city}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex flex-col">
                                                        <span className="font-bold text-gray-800 text-[14px]">{item.name}</span>
                                                        <span className="text-xs text-gray-500 font-medium uppercase mt-1">{item.type}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 space-y-10 pb-24">
                        {/* TIÊU ĐỀ CHÍNH */}
                        <h2 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-3">
                            Các điều khoản
                        </h2>

                        <div className="grid grid-cols-1 gap-10">
                            {/* 1. ĐIỀU KHOẢN HỦY TOUR */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-blue-600 font-bold">
                                    <AlertCircle size={20} />
                                    <h3 className="text-lg tracking-tight text-gray-800">1. Điều khoản hủy tour</h3>
                                </div>

                                <ul className="ml-7 space-y-3">
                                    <li className="flex items-center gap-2 text-[15px] text-gray-700">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <p>Hủy trước <span className="font-bold text-gray-900">07 ngày</span>: miễn phí.</p>
                                    </li>
                                    <li className="flex items-center gap-2 text-[15px] text-gray-700">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <p>Hủy trước <span className="font-bold text-gray-900">03–06 ngày</span>: phạt <span className="font-bold text-red-600">50% giá tour</span>.</p>
                                    </li>
                                    <li className="flex items-center gap-2 text-[15px] text-gray-700">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <p>Hủy trong vòng <span className="font-bold text-gray-900">&lt;72h</span> hoặc không tham gia: phạt <span className="font-bold text-red-600">100% giá tour</span>.</p>
                                    </li>
                                </ul>
                            </div>

                            {/* 2. LƯU Ý KHI THAM GIA TOUR */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-orange-500 font-bold">
                                    <Info size={20} />
                                    <h3 className="text-lg tracking-tight text-gray-800">2. Lưu ý khi tham gia tour</h3>
                                </div>

                                <ul className="ml-7 space-y-4 text-[15px] text-gray-700 leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0 mt-2"></span>
                                        <p>Mang theo <span className="font-bold text-gray-900">CMND/CCCD hoặc hộ chiếu</span> để làm thủ tục vào khu vực biên giới.</p>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0 mt-2"></span>
                                        <p>Nên chuẩn bị áo khoác, giày thể thao, thuốc cá nhân.</p>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0 mt-2"></span>
                                        <p>Do điều kiện vùng núi, khách sạn/homestay chỉ ở mức cơ bản, không đầy đủ tiện nghi như thành phố lớn.</p>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0 mt-2"></span>
                                        <p>Lịch trình có thể thay đổi để phù hợp điều kiện thời tiết & giao thông, nhưng vẫn đảm bảo các điểm tham quan chính.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* PHẦN CHÂN TRANG NHỎ (FOOTER GHI CHÚ) */}
                        <div className="pt-10 border-t border-gray-100 mt-10">
                            <p className="text-[13px] text-gray-400 italic">
                                * Mọi thông tin thay đổi sẽ được thông báo trước cho Quý khách qua email hoặc điện thoại.
                            </p>
                        </div>
                    </div>

                    <div className="">
                        <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-2">Bạn có thể quan tâm</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {tours.map(tour => (
                                <TourCard key={tour.id} tour={tour} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="min-w-[300px] sticky top-8 border">
                    {/* Form */}
                </div>

            </div>



        </section>
    );
};

export default TourDetail;