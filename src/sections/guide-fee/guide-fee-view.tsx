// Import component GuideFeeList từ đường dẫn file bạn đã tạo
// Giả sử 2 file nằm cùng một thư mục, nếu khác bạn hãy điều chỉnh đường dẫn ../
import GuideFeeList from './components/guide-fee-list'; 

const GuideFeeView = () => {
    return (
        <div className="guide-fee-view-container">
            {/* Gọi component đã xây dựng ở đây */}
            <GuideFeeList />
        </div>
    );
};

export default GuideFeeView;