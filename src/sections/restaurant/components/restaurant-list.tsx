import { Star } from 'lucide-react'; // Đảm bảo đã cài: npm install lucide-react [cite: 6]


interface RestaurantItem {
  id: number;
  name: string;
  image: string;
  rating: number;
  address: string;
  price: string;
}

const restaurantData: RestaurantItem[] = [
  {
    id: 1,
    name: 'HẠ LONG CỔ NGƯ',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=300',
    rating: 5,
    address: 'Block C2, Luxury Villa Zone, Ha Long Street, Bai Chay Ward, Ha Long',
    price: '$0',
  },
  {
    id: 2,
    name: "MOTHER'S KITCHEN",
    image: '', // Để trống để hiển thị placeholder [cite: 37]
    rating: 4,
    address: '12A, Hang Than street, Ba Dinh district, Ha Noi city, Vietnam',
    price: '$0',
  },
  {
    id: 3,
    name: 'NHÀ HÀNG ẨM THỰC LÀNG CHÀI HẠ LONG',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=300',
    rating: 5,
    address: 'Khu dân cư du lịch Đông Hùng Thắng, Hoàng Quốc Việt, Cái Dăm, Hạ Long',
    price: '$2.16',
  },
  {
    id: 4,
    name: 'NHÀ HÀNG GIANG ĐIỆP',
    image: '', 
    rating: 0,
    address: '',
    price: '$0',
  },
];


import { useRouter } from '../../../routes/hooks/use-router';
import { paths } from '../../../routes/paths';


const RestaurantCard = ({ item }: { item: RestaurantItem }) => {
  const router = useRouter();

  const handleOpenDetail = () => {
    router.push(paths.restaurant.detail);
  };

  return (
    // Layout Horizontal: Sử dụng flex và w-1/2 cho ảnh và nội dung 
    <div className="flex bg-white p-2 rounded-lg gap-4 hover:shadow-md transition-shadow">
      {/* Khối ảnh bên trái [cite: 35] */}
      <div className="w-1/2 h-44 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer" onClick={handleOpenDetail}>
        {item.image ? (
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        ) : (
          /* Placeholder SVG cho trường hợp thiếu ảnh [cite: 37] */
          <div className="text-gray-400">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Khối nội dung bên phải [cite: 35] */}
      <div className="w-1/2 flex flex-col justify-between py-1">
        <div>
          <h3 className="font-bold text-gray-700 text-sm mb-1 uppercase line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors" onClick={handleOpenDetail}>
            {item.name}
          </h3>
          
          {/* Rating Stars màu cam [cite: 39] */}
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={i < item.rating ? "text-orange-400 fill-orange-400" : "text-gray-300"} 
              />
            ))}
          </div>

          {/* Địa chỉ in đậm [cite: 39] */}
          <p className="text-[11px] text-gray-600 leading-relaxed mb-2">
            <span className="font-bold">Địa chỉ:</span> {item.address || 'Đang cập nhật...'}
          </p>
        </div>

        <div>
          {/* Giá tiền màu xanh [cite: 40] */}
          <p className="text-blue-600 text-xs font-bold mb-3">
            Giá từ: {item.price}
          </p>
          
          {/* Nút Xem chi tiết bo tròn hoàn toàn [cite: 38] */}
          <button 
            onClick={handleOpenDetail}
            className="border border-gray-800 text-gray-800 text-[11px] px-6 py-1.5 rounded-full hover:bg-gray-800 hover:text-white transition-colors"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};


export const RestaurantList = () => {
  return (
    <section className="max-w-7xl mx-auto py-10 px-6">
      {/* Tiêu đề được đóng gói trực tiếp trong list [cite: 11, 21] */}
      <h1 className="text-2xl font-bold text-gray-800 mb-8 uppercase">
        Khám phá nhà hàng
      </h1>
      
      {/* Grid 2 cột với khoảng cách rộng (gap-x-12) [cite: 40] */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
        {restaurantData.map((item) => (
          <RestaurantCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};