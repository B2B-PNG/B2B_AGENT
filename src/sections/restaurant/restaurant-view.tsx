import { RestaurantList } from './components/restaurant-list';

const RestaurantView = () => {
  return (
    // Sử dụng màu nền #d6e6ff cho toàn trang [cite: 5, 18]
    <main className="min-h-screen bg-[#ffffff]">
      <RestaurantList />
    </main>
  );
};

export default RestaurantView;