
// --- 1. MOCK DATA (Dữ liệu giả lập) ---
const RESTAURANT_DATA = {
  name: "HẠ LONG CỔ NGƯ",
  rating: 4,
  address: "Block C2, Luxury Villa Zone, Ha Long Street, Bai Chay Ward, Ha Long",
  description: "Không có dữ liệu",
  mainImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
  thumbnails: [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=150"
  ]
};

const RestaurantDetail: React.FC = () => {
  return (
    <div className="bg-white min-h-screen p-4 md:p-10 font-sans text-slate-700">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION 1: HEADER & BOOKING CARD --- */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          
          {/* Left: Gallery & Info */}
          <div className="flex-1 flex flex-col md:flex-row gap-6">
            {/* Gallery */}
            <div className="w-full md:w-[340px]">
              <img 
                src={RESTAURANT_DATA.mainImage} 
                alt="Main" 
                className="w-full h-[220px] object-cover rounded-sm mb-2"
              />
              <div className="flex gap-2">
                {RESTAURANT_DATA.thumbnails.map((img, idx) => (
                  <img key={idx} src={img} alt="thumb" className="w-16 h-12 object-cover rounded-sm border border-gray-200" />
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-slate-800 mb-2 uppercase">{RESTAURANT_DATA.name}</h1>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < RESTAURANT_DATA.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm mb-4">
                <span className="font-bold">Địa chỉ:</span> {RESTAURANT_DATA.address}
              </p>
              <div className="mt-4">
                <p className="font-bold text-sm mb-1">Mô tả:</p>
                <p className="italic text-gray-500 text-sm">{RESTAURANT_DATA.description}</p>
              </div>
            </div>
          </div>

          {/* Right: Booking Card */}
          <div className="w-full lg:w-[320px]">
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-50">
              <h2 className="text-xl font-bold text-blue-500 mb-4">Đặt thực đơn</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold mb-1">Ngày <span className="text-red-500">*</span></label>
                  <input type="text" defaultValue="10/04/2026" className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-blue-400" />
                </div>
                <div>
                  <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none bg-white">
                    <option>1 N.Lớn - 0 T.Em</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 2: CHỌN MENU --- */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800">Chọn Menu</h2>
          
          {/* Supplier Select */}
          <div className="bg-[#f8faff] p-6 rounded border border-gray-100 shadow-sm">
            <label className="block text-sm font-bold mb-2">Lựa chọn nhà cung cấp</label>
            <select className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm bg-white outline-none">
              <option>CÔNG TY KẾT NỐI DU LỊCH</option>
            </select>
          </div>

          {/* Search Filter Toggle */}
          <div className="flex items-center gap-2 text-blue-500 text-sm font-medium cursor-pointer pl-4">
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
             </svg>
             Hiển thị tìm kiếm
          </div>

          {/* Menu Table */}
          <div className="overflow-hidden border border-gray-200 rounded-lg">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#2b6cb0] text-white">
                <tr>
                  <th className="p-3 w-10 text-center">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="p-3 font-semibold uppercase text-xs tracking-wider">STT</th>
                  <th className="p-3 font-semibold uppercase text-xs tracking-wider">Menu</th>
                  <th className="p-3 font-semibold uppercase text-xs tracking-wider">Số lượng</th>
                  <th className="p-3 font-semibold uppercase text-xs tracking-wider">Bữa ăn</th>
                  <th className="p-3 font-semibold uppercase text-xs tracking-wider">Đơn giá</th>
                  <th className="p-3 font-semibold uppercase text-xs tracking-wider">Tổng giá</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 italic text-gray-400">
                  <td colSpan={7} className="p-4 text-center">Không có dữ liệu</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RestaurantDetail;