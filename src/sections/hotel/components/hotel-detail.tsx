import {
    Star,
    MapPin,
    Coffee,
    Dumbbell,
    Utensils,
    Waves,
    CheckCircle2,
    XCircle,
    Info,
} from "lucide-react";

const HotelDetail = () => {
    const hotelData = {
        name: "AIRA BOUTIQUE HANOI HOTEL & SPA",
        stars: 4,
        address: "38A P. Trần Phú, Điện Biên, Ba Đình, Hà Nội",
        images: ["/path-to-main-image.jpg", "/path-to-sub-image.jpg"],
        description:
            "Nằm tại 38A Trần Phú, quận Ba Đình, Hà Nội, ngay sát khu phố cổ và các điểm nổi bật. Booking đánh giá vị trí 9.5/10.",
        amenities: [
            {
                icon: <Waves size={18} />,
                title: "Hồ bơi vô cực",
                detail: "View thành phố, 8h - 20h",
            },
            {
                icon: <Coffee size={18} />,
                title: "Sky Bar",
                detail: "Tầm nhìn toàn cảnh Hà Nội",
            },
            {
                icon: <Utensils size={18} />,
                title: "Nhà hàng",
                detail: "Ẩm thực Đông - Tây",
            },
            {
                icon: <Dumbbell size={18} />,
                title: "Phòng gym",
                detail: "Thiết bị hiện đại",
            },
        ],
    };

    const rooms = [
        { id: 1, name: "Balcony Deluxe Room", minStay: "2 Đêm", price: "N/A" },
        { id: 2, name: "Junior Suite", minStay: "2 Đêm", price: "N/A" },
        { id: 3, name: "Love Suite", minStay: "2 Đêm", price: "N/A" },
    ];

    return (
        <div className="bg-slate-50 min-h-screen py-10 px-6">
            <div className="max-w-7xl mx-auto space-y-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

                {/* HEADER CARD */}
                <div className="">
                    <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">
                        {hotelData.name}
                    </h1>

                    <div className="flex items-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={16}
                                fill={i < hotelData.stars ? "#fbbf24" : "none"}
                                className={
                                    i < hotelData.stars
                                        ? "text-yellow-400"
                                        : "text-slate-300"
                                }
                            />
                        ))}
                    </div>

                    <div className="flex items-center gap-2 mt-3 text-sm text-slate-600">
                        <MapPin size={14} className="text-[#2566b0]" />
                        {hotelData.address}
                    </div>
                </div>

                {/* MAIN GRID */}
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* LEFT */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* IMAGE */}
                        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                            <img
                                src={hotelData.images[0]}
                                className="w-full h-[500px] object-cover"
                            />
                        </div>

                        {/* DESCRIPTION */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">
                                Giới thiệu
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed border-l-4 border-[#2566b0] pl-4">
                                {hotelData.description}
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm h-fit">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">
                            Tiện nghi nổi bật
                        </h3>

                        <div className="space-y-4">
                            {hotelData.amenities.map((item, idx) => (
                                <div key={idx} className="flex gap-3">
                                    <div className="text-[#2566b0] mt-1">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm text-slate-800">
                                            {item.title}
                                        </p>
                                        <p className="text-xs text-slate-500">
                                            {item.detail}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ROOM TABLE */}
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                    <div className="p-5 border-b border-slate-200 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-slate-900">
                            Chọn phòng
                        </h2>

                        <button className="bg-[#2566b0] text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                            Message
                        </button>
                    </div>

                    <table className="w-full text-sm">
                        <thead className="bg-slate-50 text-slate-600">
                            <tr>
                                <th className="p-4 text-left">#</th>
                                <th className="p-4 text-left">Tên phòng</th>
                                <th className="p-4 text-left">Stay</th>
                                <th className="p-4 text-right">Giá</th>
                            </tr>
                        </thead>

                        <tbody>
                            {rooms.map((room, i) => (
                                <tr
                                    key={room.id}
                                    className="border-t border-slate-100 hover:bg-slate-50"
                                >
                                    <td className="p-4 text-slate-500">
                                        {i + 1}
                                    </td>
                                    <td className="p-4 font-medium text-slate-800">
                                        {room.name}
                                    </td>
                                    <td className="p-4 text-slate-600">
                                        {room.minStay}
                                    </td>
                                    <td className="p-4 text-right text-slate-500">
                                        {room.price}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* PRICE BLOCK */}
                <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-white border border-slate-200 rounded-2xl p-6">
                        <h3 className="flex items-center gap-2 font-bold text-emerald-600 mb-3">
                            <CheckCircle2 size={18} />
                            Bao gồm
                        </h3>
                        <p className="text-sm text-slate-600">
                            Ăn sáng, hồ bơi, gym, wifi
                        </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-6">
                        <h3 className="flex items-center gap-2 font-bold text-red-600 mb-3">
                            <XCircle size={18} />
                            Không bao gồm
                        </h3>
                        <p className="text-sm text-slate-600">
                            Mini bar, VAT, spa
                        </p>
                    </div>
                </div>

                {/* TERMS */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                    <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4">
                        <Info size={18} className="text-[#2566b0]" />
                        Điều khoản
                    </h3>

                    <div className="text-sm text-slate-600 space-y-3">
                        <p>• Hủy trước 7 ngày miễn phí</p>
                        <p>• 3-6 ngày phạt 50%</p>
                        <p>• Trong 72h phạt 100%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetail;