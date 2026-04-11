import { useMemo, useState } from 'react';
import { ChevronDown, ChevronUp, Star, MapPin, Search } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

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

type MenuItem = {
  id: number;
  name: string;
  quantity: number;
  mealType: string;
  unitPrice: string;
  totalPrice: string;
};

const MENU_LIST: MenuItem[] = [];

// ─────────────────────────────────────────────────────────────────────────────
// Shared styles
// ─────────────────────────────────────────────────────────────────────────────

const inputClassName =
  'w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 outline-none transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-50';

const cardClassName = 'rounded-2xl border border-gray-100 bg-white shadow-sm';

// ─────────────────────────────────────────────────────────────────────────────
// Small components
// ─────────────────────────────────────────────────────────────────────────────

const SectionHeading = ({ title }: { title: string }) => (
  <div className="mb-6 space-y-2">
    <h2 className="text-2xl font-black tracking-tight text-gray-900">{title}</h2>
    <div className="relative h-0.5 w-full bg-gray-100">
      <div className="absolute left-0 top-0 h-full w-20 bg-blue-600" />
    </div>
  </div>
);

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, index) => {
      const active = index < rating;

      return (
        <Star
          key={index}
          size={18}
          className={active ? 'fill-orange-400 text-orange-400' : 'text-gray-300'}
        />
      );
    })}
  </div>
);

const EmptyStateRow = ({ colSpan, message }: { colSpan: number; message: string }) => (
  <tr className="border-t border-gray-100">
    <td colSpan={colSpan} className="p-6 text-center text-[14px] italic text-gray-400">
      {message}
    </td>
  </tr>
);

const InfoRow = ({
  icon,
  label,
  value,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-start gap-2 text-[14px] text-gray-700">
    {icon ? <div className="mt-0.5 shrink-0">{icon}</div> : null}
    <p>
      <span className="font-bold text-gray-900">{label}:</span> {value}
    </p>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────

const RestaurantDetail = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [activeImage, setActiveImage] = useState(RESTAURANT_DATA.mainImage);

  const filteredMenus = useMemo(() => {
    const keyword = searchKeyword.trim().toLowerCase();

    if (!keyword) return MENU_LIST;

    return MENU_LIST.filter((item) => item.name.toLowerCase().includes(keyword));
  }, [searchKeyword]);

  return (
    <section className="min-h-screen bg-gray-50/50 p-8">
      <div className="mx-auto flex flex-col items-start gap-10 lg:flex-row">
        {/* Main content */}
        <div className={`w-full space-y-8 p-8 ${cardClassName}`}>
          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row">
            {/* Gallery */}
            <div className="w-full shrink-0 space-y-3 md:w-[360px]">
              <div className="group overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                <img
                  src={activeImage}
                  alt={RESTAURANT_DATA.name}
                  className="h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex gap-2">
                {RESTAURANT_DATA.thumbnails.map((image, index) => {
                  const isActive = activeImage === image;

                  return (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() => setActiveImage(image)}
                      className={`h-14 w-20 overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                        isActive
                          ? 'border-blue-500 shadow-sm'
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`thumbnail-${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Restaurant info */}
            <div className="flex-1 space-y-4">
              <h1 className="leading-tight text-gray-950 font-black tracking-tighter text-3xl uppercase">
                {RESTAURANT_DATA.name}
              </h1>

              <StarRating rating={RESTAURANT_DATA.rating} />

              <div className="space-y-3">
                <InfoRow
                  icon={<MapPin size={16} className="text-blue-500" />}
                  label="Địa chỉ"
                  value={RESTAURANT_DATA.address}
                />

                <div className="space-y-1">
                  <p className="text-[14px] font-bold text-gray-900">Mô tả:</p>
                  <p className="text-[14px] italic text-gray-400">
                    {RESTAURANT_DATA.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Menu section */}
          <div className="border-t border-gray-100 pt-6">
            <SectionHeading title="Chọn Menu" />

            <div className="mb-5 rounded-2xl border border-gray-100 bg-gray-50/60 p-6">
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Lựa chọn nhà cung cấp
                  </label>
                  <select className={inputClassName}>
                    <option>CÔNG TY KẾT NỐI DU LỊCH</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={() => setShowSearch((prev) => !prev)}
                  className="flex items-center gap-1.5 pl-1 text-sm font-semibold text-blue-600 transition-opacity hover:opacity-80"
                >
                  {showSearch ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  {showSearch ? 'Ẩn tìm kiếm' : 'Hiển thị tìm kiếm'}
                </button>

                {showSearch && (
                  <div className="rounded-xl border border-blue-100 bg-blue-50/40 p-4">
                    <div className="relative">
                      <Search
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="text"
                        value={searchKeyword}
                        onChange={(event) => setSearchKeyword(event.target.value)}
                        placeholder="Tìm kiếm menu..."
                        className={`${inputClassName} pl-10`}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-blue-600 text-[13px] font-bold uppercase tracking-wider text-white">
                    <th className="w-12 p-3 text-center">
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

                <tbody className="bg-white">
                  {filteredMenus.length === 0 ? (
                    <EmptyStateRow colSpan={7} message="Không có dữ liệu" />
                  ) : (
                    filteredMenus.map((item, index) => (
                      <tr
                        key={item.id}
                        className="border-t border-gray-100 transition-colors hover:bg-blue-50/30"
                      >
                        <td className="p-3 text-center">
                          <input type="checkbox" className="rounded accent-blue-600" />
                        </td>
                        <td className="p-3 font-medium text-gray-700">{index + 1}</td>
                        <td className="p-3 font-semibold text-gray-900">{item.name}</td>
                        <td className="p-3 text-gray-700">{item.quantity}</td>
                        <td className="p-3 text-gray-700">{item.mealType}</td>
                        <td className="p-3 text-gray-700">{item.unitPrice}</td>
                        <td className="p-3 font-bold text-blue-600">{item.totalPrice}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="sticky top-[120px] w-full shrink-0 lg:w-[320px] ">
          <div className="space-y-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <div className="space-y-1">
              <h2 className="text-xl font-black tracking-tight text-blue-600">Đặt thực đơn</h2>
              <p className="text-sm text-gray-700">Điền thông tin để tạo yêu cầu đặt chỗ.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-700">
                  Ngày <span className="text-red-500">*</span>
                </label>
                <input type="text" defaultValue="11/04/2026" className={inputClassName} />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-700">
                  Số lượng khách
                </label>
                <select className={inputClassName}>
                  <option>1 N.Lớn - 0 T.Em</option>
                  <option>2 N.Lớn - 0 T.Em</option>
                  <option>1 N.Lớn - 1 T.Em</option>
                </select>
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-blue-700 active:scale-[0.99]"
              >
                Xác nhận đặt thực đơn
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantDetail;