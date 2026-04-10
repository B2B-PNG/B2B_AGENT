import { Mail, Phone, MapPin, Link2 } from 'lucide-react'; // Sử dụng Icon mượt mà hơn


const PartnerCard = ({ partner }: any) => {
    return (
        <div className="relative group overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] 
                        transition-all duration-300 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]
                        hover:-translate-y-1">

            {/* Thanh màu Neo-Brutalism ở trên đầu */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#2563eb]"></div>

            <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">

                    {/* Phần 1: Logo (Nổi bật hơn, Glassmorphism nền nhẹ) */}
                    <div className="w-full md:w-[35%] flex justify-center items-center py-6 px-4 
                                    bg-gray-50/50 backdrop-blur-sm rounded-xl border border-gray-100">
                        <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Phần 2: Thông tin (Gãy gọn, sử dụng Icon) */}
                    <div className="w-full md:w-[65%] space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="block p-1 bg-blue-50 text-[#2563eb] rounded-md">
                                <Link2 size={16} />
                            </span>
                            <h3 className="text-gray-900 font-bold text-xl uppercase tracking-tight group-hover:text-[#1d4ed8]">
                                {partner.name}
                            </h3>
                        </div>

                        <div className="space-y-3 pt-2 border-t border-gray-100">
                            <button className="flex items-center gap-2.5 text-blue-600 text-sm font-medium hover:underline group-hover:underline">
                                <Link2 size={14} className="text-blue-500" />
                                <span>[Liên kết tarrif]</span>
                            </button>

                            {/* Địa chỉ với Icon và Line-clamp */}
                            <div className="flex items-start gap-3">
                                <MapPin size={16} className="text-gray-400 mt-1 shrink-0" />
                                <p className="text-gray-700 text-[15px] leading-relaxed line-clamp-2">
                                    <span className="font-semibold text-gray-800">Địa chỉ:</span> {partner.address}
                                </p>
                            </div>

                            {/* Di động với Icon */}
                            <div className="flex items-center gap-3">
                                <Phone size={16} className="text-gray-400 shrink-0" />
                                <p className="text-gray-700 text-[15px]">
                                    <span className="font-semibold text-gray-800">Di động:</span> {partner.phone}
                                </p>
                            </div>

                            {/* Bổ sung Email (Tùy chọn) */}
                            {partner.email && (
                                <div className="flex items-center gap-3">
                                    <Mail size={16} className="text-gray-400 shrink-0" />
                                    <p className="text-gray-700 text-[15px]">
                                        <span className="font-semibold text-gray-800">Email:</span> {partner.email}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hiệu ứng bóng đổ mờ ở góc dưới (Chỉ khi hover) */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
    );
};

const Partner = () => {
    const partners = [
        {
            id: 1,
            name: "CÔNG TY KẾT NỐI DU LỊCH",
            logo: "https://cellphones.com.vn/sforum/wp-content/uploads/2022/06/19-2.jpg",
            address: "Hoàng Mai, Hà Nội",
            phone: "0435563688",
            email: "contact@connect.vn"
        },
        {
            id: 2,
            name: "CÔNG TY KẾT NỐI DU LỊCH",
            logo: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=400", // teamwork office
            address: "Hoàng Mai, Hà Nội",
            phone: "0435563688",
        }
    ];

    return (
        <section className="max-w-7xl mx-auto p-10 bg-gray-50 min-h-screen">
            <div className="text-center mb-16 relative">
                <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
                    Các Đối Tác Của Bạn
                </h2>
                {/* Thanh gạch dưới trang trí */}
                <div className="mt-2 w-24 h-1.5 bg-[#2563eb] mx-auto rounded-full"></div>
            </div>

            {/* Grid 1 cột, nhưng giới hạn chiều rộng để trông cân đối */}
            <div className="grid grid-cols-1 gap-10 max-w-5xl mx-auto">
                {partners.map(partner => (
                    <PartnerCard
                        key={partner.id}
                        partner={partner}
                    />
                ))}
            </div>
        </section>
    );
};

export default Partner;