import { CameraOff, Star, Filter, RefreshCcw, Search, ChevronDown } from 'lucide-react';

const GuideFeeDetail = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 pb-6 pt-[50px] bg-[#f8f9fa] min-h-screen flex flex-col lg:flex-row items-start gap-8 font-sans">
      
      {/* =========================================
          CỘT TRÁI: THÔNG TIN & CHỌN HÀNH TRÌNH 
          ========================================= */}
      <div className="flex-1 w-full space-y-10 min-w-0">
        
        {/* 1. Phần Thông tin */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-64 h-48 bg-[#e5e7eb] flex items-center justify-center flex-shrink-0">
            <CameraOff className="w-12 h-12 text-white" />
          </div>
          
          <div className="flex flex-col pt-2">
            <h1 className="text-3xl font-medium text-gray-800 uppercase tracking-wide">1. GUIDE FEE (APPLY FOR KENSINGTON TOUR)</h1>
            <div className="flex text-yellow-400 mt-2 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4" />
              ))}
            </div>
            <p className="text-sm text-gray-700 mb-1"><span className="font-medium">Địa chỉ:</span></p>
            <p className="text-sm text-gray-700 italic">Mô tả:</p>
            <p className="text-sm text-gray-500 italic mt-1">Không có dữ liệu</p>
          </div>
        </div>

        {/* 2. Phần Chọn hành trình */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium text-gray-800">Chọn hành trình</h2>
          
          <div className="bg-white p-5 rounded-md shadow-sm border border-gray-200 space-y-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-800 mb-2">Lựa chọn nhà cung cấp</label>
              <select className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#2566b0] w-full bg-white text-gray-700">
                <option>CÔNG TY KẾT NỐI DU LỊCH (Giá từ: $0/Xe)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-2">
              <div className="flex flex-col">
                <label className="text-sm text-gray-800 mb-2">Tên thuyền</label>
                <input type="text" className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-[#2566b0]" />
              </div>
              
              <div className="flex flex-col">
                <div className="flex justify-between text-sm text-gray-800 mb-3">
                  <label>Thời lượng</label>
                </div>
                <div className="px-2">
                  <div className="relative h-1.5 bg-gray-200 rounded-full">
                    {/* Cập nhật thanh trượt về 0 */}
                    <div className="absolute top-1/2 left-0 -mt-2 -ml-2 w-4 h-4 bg-white border border-gray-300 rounded-full shadow-sm cursor-pointer"></div>
                    <div className="absolute top-1/2 right-0 -mt-2 -mr-2 w-4 h-4 bg-white border border-gray-300 rounded-full shadow-sm cursor-pointer"></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-800 font-medium mt-2">
                  <span>0 ngày</span>
                  <span>0 ngày</span>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between text-sm text-gray-800 mb-3">
                  <label>Giá</label>
                </div>
                <div className="px-2">
                  <div className="relative h-1.5 bg-gray-200 rounded-full">
                    {/* Cập nhật thanh trượt về 0 */}
                    <div className="absolute top-1/2 left-0 -mt-2 -ml-2 w-4 h-4 bg-white border border-gray-300 rounded-full shadow-sm cursor-pointer"></div>
                    <div className="absolute top-1/2 right-0 -mt-2 -mr-2 w-4 h-4 bg-white border border-gray-300 rounded-full shadow-sm cursor-pointer"></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-800 font-medium mt-2">
                  <span>$0</span>
                  <span>$0</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button className="bg-[#1b4998] text-white px-4 py-1.5 rounded flex items-center gap-1.5 text-sm hover:bg-blue-800 transition-colors">
                <Filter className="w-4 h-4 fill-current" /> Lọc
              </button>
              <button className="border border-gray-300 p-1.5 rounded bg-white hover:bg-gray-50 text-gray-600 transition-colors">
                <RefreshCcw className="w-4 h-4" />
              </button>
              <button className="text-[#2566b0] hover:bg-blue-50 p-1.5 rounded flex items-center gap-0.5 transition-colors">
                <Search className="w-4 h-4" />
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-max">
                <thead>
                  <tr className="bg-[#1b4998] text-white text-sm">
                    <th className="px-4 py-3 font-medium">STT</th>
                    <th className="px-4 py-3 font-medium">Tên nhà cung cấp</th>
                    <th className="px-4 py-3 font-medium">Tên hướng dẫn</th>
                    <th className="px-4 py-3 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-700">
                  {/* Trạng thái không có dữ liệu */}
                  <tr className="border-b border-gray-200">
                    <td colSpan={4} className="px-4 py-4 text-gray-600 bg-gray-50/50">
                      Không có dữ liệu
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          CỘT PHẢI: WIDGET ĐẶT XE (STICKY)
          Đã giữ nguyên top-[150px] để tránh header
          ========================================= */}
      <div className="w-full lg:w-[320px] flex-shrink-0 sticky top-[150px] self-start h-fit">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-medium text-[#2566b0] mb-5">Đặt Xe</h2>
          
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-800 mb-1.5">
                Ngày khởi hành <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                defaultValue="11/04/2026" 
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#2566b0] w-full"
              />
            </div>
            
            <div className="flex flex-col">
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#2566b0] bg-white text-gray-700 w-full mt-2">
                <option>1 N.Lớn - 0 T.Em</option>
              </select>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default GuideFeeDetail;