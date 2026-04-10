import React, { useState } from 'react';

// --- 1. TYPES / INTERFACES ---

// Định nghĩa kiểu dữ liệu cho một Guide Item
interface GuideItem {
  id: number;
  name: string;
  rating: number; // 0 đến 5
  address: string;
  priceText: string;
  imageUrl?: string;
}

// Định nghĩa Props cho Sub-component GuideCard
interface GuideCardProps {
  guide: GuideItem;
}

// --- 2. MOCK DATA ---
// Dữ liệu giả lập dựa trên hình ảnh của bạn
const MOCK_GUIDES: GuideItem[] = [
  {
    id: 1,
    name: "1. GUIDE FEE (APPLY FOR KENSINGTON TOUR)",
    rating: 0,
    address: "",
    priceText: "Giá từ: $0",
    //imageUrl: "" // Sẽ hiển thị icon mặc định
  },
  {
    id: 2,
    name: "ĐÀ NẴNG GUIDE",
    rating: 5,
    address: "",
    priceText: "Giá từ: $8.64",
    //imageUrl: ""
  },
  {
    id: 3,
    name: "GUIDE HA NOI CITY",
    rating: 2,
    address: "",
    priceText: "Giá từ: $0",
    imageUrl: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80&w=500" // Ảnh minh họa một đoàn khách
  },
  {
    id: 4,
    name: "GUIDE MIỀN BẮC",
    rating: 1,
    address: "",
    priceText: "Giá từ: $3.6",
    //imageUrl: ""
  },
];

// --- 3. SUB-COMPONENT: GUIDE CARD ---
// Component hiển thị thông tin chi tiết của một hướng dẫn viên
const GuideCard: React.FC<GuideCardProps> = ({ guide }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Khối ảnh bên trái: Responsive 100% trên mobile, 40% trên desktop */}
      <div className="w-full sm:w-[40%] min-h-[180px] sm:min-h-[200px] bg-gray-200 flex items-center justify-center relative">
        {guide.imageUrl ? (
          <img
            src={guide.imageUrl}
            alt={guide.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center opacity-30 text-gray-500">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Khối nội dung bên phải: Responsive p-4 đến p-6 */}
      <div className="w-full sm:w-[60%] p-5 sm:p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-800 uppercase leading-snug line-clamp-2 mb-1.5">
            {guide.name}
          </h3>

          {/* Rating Stars (Hệ thống 5 sao) */}
          <div className="flex space-x-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < guide.rating ? "text-orange-400 fill-current" : "text-gray-300 fill-none stroke-current"}`}
                viewBox="0 0 20 20"
                strokeWidth="1.5"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-[15px] text-gray-600 mb-2">
            <span className="font-bold text-gray-900">Địa chỉ:</span> {guide.address || ""}
          </p>
        </div>

        <div className="mt-4">
          <p className="text-blue-600 font-semibold text-[17px] mb-3">
            {guide.priceText}
          </p>
          <button className="px-7 py-1.5 border-2 border-slate-800 rounded-full text-[13px] font-bold text-slate-800 hover:bg-slate-800 hover:text-white transition-all duration-200">
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 4. MAIN COMPONENT: GUIDE FEE LIST ---
const GuideFeeList: React.FC = () => {
  // State giả lập cho bộ lọc
  const [activeView, setActiveView] = useState<'grid' | 'list'>('grid');

  return (
    <div className="bg-white min-h-screen py-6 px-4 sm:px-10 lg:px-16">
      <div className="max-w-[1500px] mx-auto">

        {/* --- Phần tiêu đề và Thanh tìm kiếm --- */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            Phí hướng dẫn
          </h1>

          {/* Filter Bar (Giao diện đơn giản hóa) */}
          <div className="flex flex-wrap items-center gap-3 bg-white p-1.5 border border-gray-200 rounded-lg shadow-sm">
            {/* Địa danh */}
            <div className="flex items-center gap-2 px-3 py-1.5 border-r border-gray-200 text-sm text-gray-700 min-w-[150px]">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>Địa danh</span>
            </div>

            {/* Ngày tháng */}
            <div className="flex items-center gap-2 px-3 py-1.5 border-r border-gray-200 text-sm text-gray-700">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span>10/04/2026</span>
            </div>

            {/* Số người */}
            <div className="flex items-center gap-2 px-3 py-1.5 border-r border-gray-200 text-sm text-gray-700">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              <span>1 N.Lớn - 0 T.Em</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>

            {/* Nút tìm kiếm */}
            <button className="p-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>

          {/* View Toggle (Grid/List) */}
          <div className="flex items-center gap-2.5 self-end md:self-center">
            <span className="text-sm text-gray-600">Hiển thị danh sách theo:</span>
            <button onClick={() => setActiveView('grid')} className={`p-1.5 rounded-md ${activeView === 'grid' ? 'bg-gray-200' : 'text-gray-400'}`}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4 11h6V5H4v6zm0 7h6v-6H4v6zm7-7h6V5h-6v6zm0 7h6v-6h-6v6z" /></svg>
            </button>
            <button onClick={() => setActiveView('list')} className={`p-1.5 rounded-md ${activeView === 'list' ? 'bg-gray-200' : 'text-gray-400'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>

        {/* --- Phần Danh sách Grid --- */}
        <div className={`grid ${activeView === 'grid' ? 'grid-cols-1 lg:grid-cols-2 gap-8' : 'grid-cols-1 gap-6'}`}>
          {MOCK_GUIDES.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default GuideFeeList;