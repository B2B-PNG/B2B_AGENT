import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const TopDestinationCard = ({ dest }: any) => {
    if (!dest.image) {
        return (
            <div className="flex-none flex flex-col items-center gap-4 group cursor-pointer">
                <div className="w-28 h-40 md:w-32 md:h-48 rounded-[24px] bg-gray-50 border border-gray-100 flex items-center justify-center 
                                shadow-[0_8px_16px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_12px_24px_-8px_rgba(37,99,235,0.1)] hover:-translate-y-1">
                    <div className="p-4 bg-white/60 rounded-full border border-gray-100 backdrop-blur-sm">
                        <ImageIcon size={28} className="text-gray-400" strokeWidth={1.5} />
                    </div>
                </div>
                <p className="text-gray-900 font-semibold text-sm drop-shadow-sm group-hover:text-blue-600 truncate w-32 text-center px-2">
                    {dest.name}
                </p>
            </div>
        );
    }

    return (
        <div className="flex-none flex flex-col items-center gap-4 group cursor-pointer">
            {/* Khung chữ nhật đứng có ảnh và hiệu ứng */}
            <div className="relative w-28 h-40 md:w-32 md:h-48 rounded-[24px] overflow-hidden 
                            shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 
                            hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:scale-102">

                {/* Hình ảnh với hiệu ứng zoom khi hover */}
                <img
                    src={dest.image}
                    alt={dest.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                {/* Lớp phủ Gradient sang trọng (giúp text dễ đọc hơn khi hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Lớp overlay màu đen mờ (luôn hiển thị, mờ hơn khi hover) */}
                <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity duration-300"></div>

            </div>

            {/* Tên địa điểm */}
            <p className="text-gray-900 font-semibold text-sm drop-shadow-sm group-hover:text-blue-600 truncate w-32 text-center px-2">
                {dest.name}
            </p>
        </div>
    );
};

// Component chính
const DestinationCarousel = () => {
    const destinations = [
        {
            id: 1,
            name: "Ha Long",
            image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800"
        },
        {
            id: 2,
            name: "Ha Noi",
            image: "https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=800"
        },
        {
            id: 3,
            name: "Ho Chi Minh",
            image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=800"
        },
        {
            id: 4,
            name: "Nha Trang",
            image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800"
        },
        {
            id: 5,
            name: "Ninh Binh",
            image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=800"
        },
        {
            id: 6,
            name: "Bac Giang",
            image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=800"
        },
    ];

    return (
        <section className="bg-white p-10 max-w-7xl mx-auto rounded-[32px] shadow-[0_16px_32px_-8px_rgba(0,0,0,0.03)] my-16">
            <div className="text-center mb-16 relative">
                <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
                    Các Đối Tác Của Bạn
                </h2>
            </div>

            <div className="relative flex items-center justify-center gap-10">

                <button className="absolute -left-6 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900
                                   shadow-[0_12px_24px_-8px_rgba(0,0,0,0.15)] border border-gray-100
                                   transition-all duration-300 hover:bg-[#2563eb] hover:text-white hover:scale-105 hover:-translate-x-1
                                   active:scale-95">
                    <ChevronLeft size={24} strokeWidth={1.5} />
                </button>

                <div className="flex gap-10 overflow-x-auto py-8 px-10 scrollbar-hide">
                    {destinations.map(dest => (
                        <TopDestinationCard key={dest.id} dest={dest} />
                    ))}
                </div>

                <button className="absolute -right-6 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900
                                   shadow-[0_12px_24px_-8px_rgba(0,0,0,0.15)] border border-gray-100
                                   transition-all duration-300 hover:bg-[#2563eb] hover:text-white hover:scale-105 hover:translate-x-1
                                   active:scale-95">
                    <ChevronRight size={24} strokeWidth={1.5} />
                </button>

            </div>



        </section>
    );
};

export default DestinationCarousel;