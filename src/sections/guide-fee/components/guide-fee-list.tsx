import { useRouter } from '@/routes/hooks/use-router';
import { paths } from '@/routes/paths';
import { Star, MapPin, LayoutGrid, List } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface GuideItem {
  id: number;
  name: string;
  image: string;
  rating: number;
  address: string;
  price: string;
  tag?: string;
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const guideData: GuideItem[] = [
  {
    id: 1,
    name: '1. GUIDE FEE (APPLY FOR KENSINGTON TOUR)',
    image: '',
    rating: 0,
    address: '',
    price: 'N/A',
    tag: 'Tour Kensington',
  },
  {
    id: 2,
    name: 'ĐÀ NẴNG GUIDE',
    image: '',
    rating: 5,
    address: 'Đà Nẵng, Việt Nam',
    price: '$8.64',
    tag: 'Hướng dẫn địa phương',
  },
  {
    id: 3,
    name: 'GUIDE HA NOI CITY',
    image: 'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=600',
    rating: 2,
    address: 'Hà Nội, Việt Nam',
    price: 'N/A',
    tag: 'Hướng dẫn thành phố',
  },
  {
    id: 4,
    name: 'GUIDE MIỀN BẮC',
    image: '',
    rating: 1,
    address: 'Miền Bắc, Việt Nam',
    price: '$3.60',
    tag: 'Tour miền Bắc',
  },
];

// ─── GuideCard ────────────────────────────────────────────────────────────────

const GuideCard = ({ item }: { item: GuideItem }) => {
  const router = useRouter();

  const handleNavigate = () => router.push(paths.guide.detail);

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
        {/* Guide name */}
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
            {item.tag || 'Phí hướng dẫn'}
          </span>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-end justify-between gap-2">
          <div>
            <p className="text-[11px] text-gray-500 mb-0.5">Giá từ</p>
            <p className="text-[#2563eb] font-bold text-lg leading-none">
              {item.price === 'N/A' ? (
                <span className="text-gray-400 text-base">N/A</span>
              ) : (
                item.price
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

// ─── GuideFeeList ─────────────────────────────────────────────────────────────

const GuideFeeList = () => (
  <section className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold text-gray-800">Phí hướng dẫn</h2>

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
      {guideData.map((item) => (
        <GuideCard key={item.id} item={item} />
      ))}
    </div>
  </section>
);

export default GuideFeeList;