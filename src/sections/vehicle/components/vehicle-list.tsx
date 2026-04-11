import { useRouter } from '@/routes/hooks/use-router';
import { paths } from '@/routes/paths';
import { Star, MapPin, LayoutGrid, List } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface VehicleItem {
  id: number;
  name: string;
  image: string;
  rating: number;
  address: string;
  price: number;
  tag?: string;
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const vehicleData: VehicleItem[] = [
  {
    id: 1,
    name: 'NHÀ XE ĐỨC THẢO',
    image: '',
    rating: 5,
    address: 'Hưng Hà, Thái Bình',
    price: 42.04,
    tag: 'Xe khách liên tỉnh',
  },
  {
    id: 2,
    name: 'OMEGA TRANSPORT',
    image: '',
    rating: 4,
    address: 'Số 1 Lê Duẩn, Quận Hải Châu, Đà Nẵng',
    price: 0,
    tag: 'Vận chuyển du lịch',
  },
  {
    id: 3,
    name: 'SOUTHERN - TRANSPORT',
    image: '',
    rating: 1,
    address: 'Đang cập nhật địa chỉ...',
    price: 0,
    tag: 'Xe miền Nam',
  },
  {
    id: 4,
    name: 'XE ITOURLINK',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600',
    rating: 2,
    address: 'Tòa C, Vinaconex 2, Kim Văn Kim Lũ, Hà Nội',
    price: 0,
    tag: 'Đối tác iTourLink',
  },
];

// ─── VehicleCard ──────────────────────────────────────────────────────────────

const VehicleCard = ({ item }: { item: VehicleItem }) => {
  const router = useRouter();

  const handleNavigate = () => router.push(paths.vehicle.detail);

  return (
    <div className="flex bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full min-h-[195px] group">
      {/* Image — left */}
      <div
        className="relative w-1/2 overflow-hidden bg-gray-100 cursor-pointer shrink-0"
        onClick={handleNavigate}
      >
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 min-h-[160px]">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Content — right */}
      <div className="w-1/2 p-4 flex flex-col">
        {/* Vehicle name */}
        <h3
          onClick={handleNavigate}
          className="text-[#1a4a8d] font-bold text-[15px] leading-tight uppercase mb-3 line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors"
        >
          {item.name}
        </h3>

        {/* Star rating */}
        <div className="flex items-center gap-0.5 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={13}
              className={i < item.rating ? 'fill-orange-400 text-orange-400' : 'text-gray-300'}
            />
          ))}
        </div>

        {/* Address */}
        <div className="flex items-start gap-1.5 mb-3">
          <MapPin size={13} className="text-gray-400 mt-0.5 shrink-0" />
          <p className="text-[12px] text-gray-600 leading-relaxed line-clamp-2">
            {item.address || 'Đang cập nhật...'}
          </p>
        </div>

        {/* Badge */}
        <div className="mb-3">
          <span className="inline-block bg-[#e6f0ff] text-[#3b82f6] text-[11px] font-medium px-3 py-1 rounded-full">
            {item.tag || 'Phương tiện'}
          </span>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-end justify-between gap-2">
          <div>
            <p className="text-[11px] text-gray-500 mb-0.5">Giá từ</p>
            <p className="text-[#2563eb] font-bold text-lg leading-none">
              {item.price > 0 ? (
                `$${item.price}`
              ) : (
                <span className="text-gray-400 text-base">Liên hệ</span>
              )}
            </p>
          </div>

          <button
            onClick={handleNavigate}
            className="cursor-pointer text-blue-600 border border-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── VehicleList ──────────────────────────────────────────────────────────────

const VehicleList = () => (
  <section className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold text-gray-800">Khám phá nhà xe</h2>

      <div className="flex items-center gap-3 bg-white p-1.5 rounded-lg border border-gray-200 shadow-sm">
        <span className="text-sm text-gray-500 ml-2">Hiển thị dạng:</span>
        <button className="p-1.5 bg-blue-600 text-white rounded-md shadow-sm">
          <LayoutGrid size={18} />
        </button>
        <button className="p-1.5 text-gray-400 hover:bg-gray-100 rounded-md transition-colors">
          <List size={18} />
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {vehicleData.map((item) => (
        <VehicleCard key={item.id} item={item} />
      ))}
    </div>
  </section>
);

export default VehicleList;