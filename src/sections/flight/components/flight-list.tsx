import { Star } from 'lucide-react'; // Đảm bảo đã cài: npm install lucide-react
import { useRouter } from '../../../routes/hooks/use-router';
import { paths } from '../../../routes/paths';

// 1. Interface theo đúng cấu trúc template
interface FlightItem {
  id: number;
  name: string;
  image: string;
  rating: number;
  address: string;
  price: string;
}

// 2. Mock Data dựa trên ảnh mẫu của bạn
const flightData: FlightItem[] = [
  {
    id: 1,
    name: 'BAMBOO AIRWAYS',
    image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=600', 
    rating: 5,
    address: 'Sân bay Quốc tế Nội Bài, Hà Nội',
    price: '$45',
  },
  {
    id: 2,
    name: 'VIETJET AIR(VJ)',
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=600', 
    rating: 3,
    address: 'Sân bay Quốc tế Tân Sơn Nhất, TP.HCM',
    price: '$22',
  },
  {
    id: 3,
    name: 'VIETNAM AIRLINES',
    image: 'https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=600',
    rating: 5,
    address: 'Quận Long Biên, Hà Nội',
    price: '$60',
  },
  {
    id: 4,
    name: 'PACIFIC AIRLINES',
    image: '', // Vẫn giữ một cái trống để test giao diện placeholder của bạn
    rating: 0,
    address: 'Quận Tân Bình, TP.HCM',
    price: '$15',
  },
];

// 3. Sub-component Card (Thực hiện đúng theo layout ngang và style của bạn)
const FlightCard = ({ item }: { item: FlightItem }) => {
  const router = useRouter();

  const handleOpenDetail = () => {
    // Giả sử bạn có path flight.detail tương tự restaurant.detail
    router.push(paths.flight.detail); 
  };

  return (
    <div className="flex bg-white p-2 rounded-lg gap-4 hover:shadow-md transition-shadow border border-gray-100 lg:border-none">
      {/* Khối ảnh bên trái (Placeholder/Image) */}
      <div 
        className="w-1/2 h-44 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer" 
        onClick={handleOpenDetail}
      >
        {item.image ? (
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-400">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Khối nội dung bên phải */}
      <div className="w-1/2 flex flex-col justify-between py-1">
        <div>
          <h3 
            className="font-bold text-gray-700 text-sm mb-1 uppercase line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors" 
            onClick={handleOpenDetail}
          >
            {item.name}
          </h3>
          
          {/* Đánh giá sao */}
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={i < item.rating ? "text-orange-400 fill-orange-400" : "text-gray-300"} 
              />
            ))}
          </div>

          {/* Địa chỉ */}
          <p className="text-[11px] text-gray-600 leading-relaxed mb-2">
            <span className="font-bold">Địa chỉ:</span> {item.address || 'Đang cập nhật...'}
          </p>
        </div>

        <div>
          {/* Giá tiền */}
          <p className="text-blue-600 text-xs font-bold mb-3">
            Giá từ: {item.price}
          </p>
          
          {/* Nút Xem chi tiết */}
          <button 
            onClick={handleOpenDetail}
            className="border border-gray-800 text-gray-800 text-[11px] px-6 py-1.5 rounded-full hover:bg-gray-800 hover:text-white transition-colors uppercase font-medium"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};

// 4. Main Component List
export const FlightList = () => {
  return (
    <section className="max-w-7xl mx-auto py-10 px-6">
      {/* Tiêu đề */}
      <h1 className="text-2xl font-bold text-gray-800 mb-8 uppercase">
        Chuyến bay
      </h1>
      
      {/* Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
        {flightData.map((item) => (
          <FlightCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default FlightList;