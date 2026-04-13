import { useMemo, useState } from 'react';
import { ChevronDown, ChevronUp, Star, MapPin, Search } from 'lucide-react';

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

const inputClassName =
  'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:ring-1 focus:ring-[#2566b0]';

const SectionHeading = ({ title }: { title: string }) => (
  <div className="mb-4">
    <h2 className="text-xl font-bold text-slate-900">{title}</h2>
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
          className={active ? 'fill-orange-400 text-orange-400' : 'text-slate-300'}
        />
      );
    })}
  </div>
);

const EmptyStateRow = ({ colSpan, message }: { colSpan: number; message: string }) => (
  <tr className="border-t border-slate-200">
    <td colSpan={colSpan} className="p-4 text-slate-400 italic text-sm text-center">
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
  <div className="flex items-start gap-2 text-sm text-slate-600">
    {icon ? <div className="mt-0.5 shrink-0">{icon}</div> : null}
    <p>
      <span className="font-semibold text-slate-900">{label}:</span> {value}
    </p>
  </div>
);

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
    <section className="min-h-screen bg-slate-50 px-6 py-10 text-slate-700">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row">
        <div className="flex-1 space-y-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="space-y-6">
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="w-full shrink-0 space-y-3 md:w-[360px]">
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <img
                    src={activeImage}
                    alt={RESTAURANT_DATA.name}
                    className="h-[240px] w-full object-cover transition hover:scale-105"
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
                        className={`h-14 w-20 overflow-hidden rounded-lg border transition ${
                          isActive
                            ? 'border-[#2566b0]'
                            : 'border-slate-200 hover:border-slate-300'
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

              <div className="flex-1 space-y-4">
                <h1 className="text-3xl font-bold uppercase tracking-tight text-slate-900">
                  {RESTAURANT_DATA.name}
                </h1>

                <StarRating rating={RESTAURANT_DATA.rating} />

                <div className="space-y-3 border-t border-slate-200 pt-4">
                  <InfoRow
                    icon={<MapPin size={16} className="text-[#2566b0]" />}
                    label="Địa chỉ"
                    value={RESTAURANT_DATA.address}
                  />

                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-slate-900">Mô tả</p>
                    <p className="text-sm italic text-slate-400">
                      {RESTAURANT_DATA.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-6">
              <SectionHeading title="Chọn Menu" />

              <div className="mb-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Lựa chọn nhà cung cấp
                    </label>
                    <select className={inputClassName}>
                      <option>CÔNG TY KẾT NỐI DU LỊCH</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowSearch((prev) => !prev)}
                    className="flex items-center gap-1 text-sm font-semibold text-[#2566b0]"
                  >
                    {showSearch ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    {showSearch ? 'Ẩn tìm kiếm' : 'Hiển thị tìm kiếm'}
                  </button>

                  {showSearch && (
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <div className="relative">
                        <Search
                          size={16}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
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

              <div className="overflow-hidden rounded-lg border border-slate-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#2566b0] text-white">
                    <tr>
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
                        <tr key={item.id} className="border-t border-slate-200">
                          <td className="p-3 text-center">
                            <input type="checkbox" className="rounded accent-[#2566b0]" />
                          </td>
                          <td className="p-3">{index + 1}</td>
                          <td className="p-3 font-semibold text-slate-900">{item.name}</td>
                          <td className="p-3">{item.quantity}</td>
                          <td className="p-3">{item.mealType}</td>
                          <td className="p-3">{item.unitPrice}</td>
                          <td className="p-3 font-semibold text-[#2566b0]">{item.totalPrice}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[320px]">
          <div className="sticky top-[130px] space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-[#2566b0]">Đặt thực đơn</h2>
              <p className="text-sm text-slate-600">Điền thông tin để tạo yêu cầu đặt chỗ.</p>
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-600">
                Ngày <span className="text-red-500">*</span>
              </label>
              <input type="text" defaultValue="11/04/2026" className={inputClassName} />
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-600">
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
              className="w-full rounded-lg bg-[#2566b0] px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Xác nhận đặt thực đơn
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantDetail;