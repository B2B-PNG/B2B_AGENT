import { useState } from 'react';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const RESTAURANT_DATA = {
  name: 'HẠ LONG CỔ NGƯ',
  rating: 4,
  address: 'Block C2, Luxury Villa Zone, Ha Long Street, Bai Chay Ward, Ha Long',
  description: 'Không có dữ liệu',
  mainImage:
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
  thumbnails: [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=150',
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=150',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=150',
  ],
};

// ─── Sub-component: SectionHeading ───────────────────────────────────────────

const SectionHeading = ({ title }: { title: string }) => (
  <div className="space-y-2 mb-6">
    <h2 className="text-2xl font-black text-gray-900 tracking-tight">{title}</h2>
    <div className="h-0.5 w-full bg-gray-100 relative">
      <div className="absolute top-0 left-0 h-full w-20 bg-blue-600" />
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const RestaurantDetail = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [activeThumb, setActiveThumb] = useState(RESTAURANT_DATA.mainImage);

  return (
    <section className="mx-auto p-8 bg-gray-50/50 min-h-screen">
      <div className="flex flex-col lg:flex-row items-start gap-10">

        {/* ── Main Content ── */}
        <div className="w-full space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">

          {/* Header: Gallery + Info */}
          <div className="flex flex-col md:flex-row gap-6">

            {/* Gallery */}
            <div className="w-full md:w-[340px] shrink-0 space-y-2">
              <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                <img
                  src={activeThumb}
                  alt={RESTAURANT_DATA.name}
                  className="w-full h-[220px] object-cover"
                />
              </div>
              <div className="flex gap-2">
                {RESTAURANT_DATA.thumbnails.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveThumb(img)}
                    className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      activeThumb === img
                        ? 'border-blue-500 shadow-md'
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img src={img} alt={`thumb-${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 space-y-4">
              <h1 className="text-gray-950 font-black text-3xl tracking-tighter uppercase leading-tight">
                {RESTAURANT_DATA.name}
              </h1>

              {/* Star rating */}
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < RESTAURANT_DATA.rating
                        ? 'fill-orange-400 text-orange-400'
                        : 'text-gray-300'
                    }
                  />
                ))}
              </div>

              <p className="text-[14px] text-gray-700">
                <span className="font-bold text-gray-900">Địa chỉ:</span>{' '}
                {RESTAURANT_DATA.address}
              </p>

              <div className="space-y-1">
                <p className="font-bold text-[14px] text-gray-900">Mô tả:</p>
                <p className="italic text-gray-400 text-[14px]">{RESTAURANT_DATA.description}</p>
              </div>
            </div>
          </div>

          {/* Section: Chọn Menu */}
          <div className="pt-6 border-t border-gray-100">
            <SectionHeading title="Chọn Menu" />

            {/* Supplier Select */}
            <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 space-y-3 mb-4">
              <label className="block text-sm font-bold text-gray-700">
                Lựa chọn nhà cung cấp
              </label>
              <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all">
                <option>CÔNG TY KẾT NỐI DU LỊCH</option>
              </select>
            </div>

            {/* Search Toggle */}
            <button
              onClick={() => setShowSearch((v) => !v)}
              className="flex items-center gap-1.5 text-blue-600 text-sm font-semibold mb-4 hover:opacity-80 transition-opacity pl-1"
            >
              {showSearch ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              Hiển thị tìm kiếm
            </button>

            {showSearch && (
              <div className="mb-4 p-4 bg-blue-50/40 rounded-xl border border-blue-100">
                <input
                  type="text"
                  placeholder="Tìm kiếm menu..."
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
                />
              </div>
            )}

            {/* Menu Table */}
            <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-[#2563eb] text-white text-[13px] font-bold uppercase tracking-wider">
                    <th className="p-3 w-10 text-center">
                      <input type="checkbox" className="rounded accent-white" />
                    </th>
                    <th className="p-3">STT</th>
                    <th className="p-3">Menu</th>
                    <th className="p-3">Số lượng</th>
                    <th className="p-3">Bữa ăn</th>
                    <th className="p-3">Đơn giá</th>
                    <th className="p-3">Tổng giá</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-100">
                    <td colSpan={7} className="p-5 text-center text-gray-400 italic text-[14px]">
                      Không có dữ liệu
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* ── Sidebar: Booking Card ── */}
        <div className="w-full lg:w-[300px] shrink-0 sticky top-8">
          <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 space-y-4">
            <h2 className="text-xl font-black text-blue-600 tracking-tight">Đặt thực đơn</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Ngày <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="11/04/2026"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
                />
              </div>

              <div>
                <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all">
                  <option>1 N.Lớn - 0 T.Em</option>
                  <option>2 N.Lớn - 0 T.Em</option>
                  <option>1 N.Lớn - 1 T.Em</option>
                </select>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RestaurantDetail;