import React from 'react';
import { Star, MapPin } from 'lucide-react';

// 1. Định nghĩa Interface rõ ràng [Gỡ bỏ any]
interface VehicleItem {
  id: number;
  name: string;
  rating: number;
  address: string;
  price: number;
  image: string;
}

const vehicleData: VehicleItem[] = [
  { id: 1, name: "NHÀ XE ĐỨC THẢO", rating: 5, address: "Hưng Hà, Thái Bình", price: 42.04, image: "" },
  { id: 2, name: "OMEGA TRANSPORT", rating: 4, address: "Số 1 Lê Duẩn, Quận Hải Châu, Đà Nẵng", price: 0, image: "" },
  { id: 3, name: "SOUTHERN - TRANSPORT", rating: 1, address: "Đang cập nhật địa chỉ...", price: 0, image: "" },
  { id: 4, name: "XE ITOURLINK", rating: 2, address: "Tòa C, Vinaconex 2, Kim Văn Kim Lũ, Hà Nội", price: 0, image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400" }
];

// 2. Tối ưu UI Card
const VehicleCard = ({ item }: { item: VehicleItem }) => (
  <div className="flex bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 min-h-[176px]">
    {/* Phần Ảnh - 50% diện tích thiết kế */}
    <div className="w-1/2 bg-[#E8F1FD] flex items-center justify-center overflow-hidden shrink-0">
      {item.image ? (
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      ) : (
        /* Placeholder SVG đồng bộ với hệ thống iTourGo */
        <div className="flex flex-col items-center text-blue-300">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.587-1.587a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-[10px] uppercase font-bold mt-1 tracking-wider">Không có ảnh</span>
        </div>
      )}
    </div>

    {/* Phần Nội dung */}
    <div className="w-1/2 p-4 flex flex-col justify-between bg-white">
      <div>
        <h3 className="font-bold text-[#1A3760] text-sm uppercase mb-1 line-clamp-2 leading-tight">
          {item.name}
        </h3>

        {/* Rating Ngôi sao màu cam */}
        <div className="flex mb-2 gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < item.rating ? "fill-orange-400 text-orange-400" : "text-gray-300"}
            />
          ))}
        </div>

        {/* Địa chỉ kèm Icon */}
        <div className="flex items-start gap-1 text-gray-500">
          <MapPin size={12} className="shrink-0 mt-0.5" />
          <p className="text-[11px] leading-relaxed line-clamp-2">
            <span className="font-bold">Địa chỉ:</span> {item.address || "Đang cập nhật..."}
          </p>
        </div>
      </div>

      <div className="mt-3">
        {/* Logic hiển thị giá */}
        <p className="text-blue-600 font-bold text-sm mb-2">
          Giá từ: {item.price > 0 ? `$${item.price}` : "Liên hệ"}
        </p>

        {/* Nút Xem chi tiết chuẩn giao diện Pill */}
        <button className="w-full sm:w-auto px-6 py-1.5 border border-[#1A3760] rounded-full text-[11px] font-semibold text-[#1A3760] hover:bg-[#1A3760] hover:text-white transition-all">
          Xem chi tiết
        </button>
      </div>
    </div>
  </div>
);

// 3. Main Component
const VehicleList = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-8 uppercase text-[#1A3760]">Khám phá nhà xe</h2>

      {/* Grid điều chỉnh khoảng cách GAP theo mẫu [cite: 66] */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
        {vehicleData.map((vehicle) => (
          <VehicleCard key={vehicle.id} item={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default VehicleList;