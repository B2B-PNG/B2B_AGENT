// Import component FlightList từ file bạn vừa tạo
// Giả sử file flight-list.tsx nằm cùng thư mục hoặc bạn điều chỉnh đường dẫn cho đúng
import { FlightList } from './components/flight-list'; 

const FlightView = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Bạn có thể thêm Container hoặc Padding ở đây 
          nếu muốn FlightList không sát mép màn hình 
      */}
      <div className="py-8">
        <FlightList />
      </div>
    </div>
  );
};

export default FlightView;