import { CameraOff, Star, Filter, RefreshCcw, Search, ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const VehicleDetail = () => {
  // Mock data cho bảng hành trình
  const journeys = [
    { id: 1, name: 'Hà Nội - Hạ Long', date: '11/04/2026', quantity: 1, price: 0 },
    { id: 2, name: 'Hà Nội - Mai Châu - Hà Nội', date: '11/04/2026', quantity: 1, price: 0 },
    { id: 3, name: 'Hà Nội - Mai Châu - Pù Luông - Hà Nội', date: '11/04/2026', quantity: 1, price: 0 },
    { id: 4, name: 'Hà Nội - Ninh Bình - Hà Nội', date: '11/04/2026', quantity: 1, price: 0 },
    { id: 5, name: 'Nội Bài - Hà Nội', date: '11/04/2026', quantity: 1, price: 0 },
    { id: 6, name: 'Sân bay Nội Bài - Trung tâm Hà Nội', date: '11/04/2026', quantity: 1, price: 0 },
    { id: 7, name: 'Hà Nội - Tam Đảo', date: '11/04/2026', quantity: 1, price: 0 },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-6 pb-6 pt-[50px] bg-[#f8f9fa] min-h-screen flex flex-col lg:flex-row items-start gap-8 font-sans">
      
      {/* =========================================
          CỘT TRÁI: THÔNG TIN NHÀ XE & CHỌN HÀNH TRÌNH 
          ========================================= */}
      <div className="flex-1 w-full space-y-10 min-w-0">
        
        {/* 1. Phần Thông tin nhà xe */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-64 h-48 bg-[#e5e7eb] flex items-center justify-center flex-shrink-0">
            <CameraOff className="w-12 h-12 text-white" />
          </div>
          
          <div className="flex flex-col pt-2">
            <h1 className="text-3xl font-medium text-gray-800 uppercase tracking-wide">NHÀ XE ĐỨC THẢO</h1>
            <div className="flex text-orange-400 mt-2 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-gray-700 mb-1"><span className="font-medium">Địa chỉ:</span> Hưng Hà, Thái Bình</p>
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
              <select className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 w-full bg-white text-gray-700">
                <option>CÔNG TY KẾT NỐI DU LỊCH (Giá từ: $42.04/Xe)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-2">
              <div className="flex flex-col">
                <label className="text-sm text-gray-800 mb-2">Tên xe</label>
                <input type="text" className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500" />
              </div>
              
              <div className="flex flex-col">
                <div className="flex justify-between text-sm text-gray-800 mb-3">
                  <label>Thời lượng</label>
                </div>
                <div className="px-2">
                  <div className="relative h-1.5 bg-gray-200 rounded-full">
                    <div className="absolute inset-y-0 left-0 w-full bg-[#1b4998] rounded-full"></div>
                    <div className="absolute top-1/2 left-0 -mt-2 -ml-2 w-4 h-4 bg-white border border-gray-300 rounded-full shadow-sm cursor-pointer"></div>
                    <div className="absolute top-1/2 right-0 -mt-2 -mr-2 w-4 h-4 bg-white border border-gray-300 rounded-full shadow-sm cursor-pointer"></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-800 font-medium mt-2">
                  <span>0 ngày</span>
                  <span>3 ngày</span>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between text-sm text-gray-800 mb-3">
                  <label>Giá</label>
                </div>
                <div className="px-2">
                  <div className="relative h-1.5 bg-gray-200 rounded-full">
                    <div className="absolute inset-y-0 left-0 w-full bg-[#1b4998] rounded-full"></div>
                    <div className="absolute top-1/2 left-0 -mt-2 -ml-2 w-4 h-4 bg-white border border-gray-300 rounded-full shadow-sm cursor-pointer"></div>
                    <div className="absolute top-1/2 right-0 -mt-2 -mr-2 w-4 h-4 bg-white border border-gray-300 rounded-full shadow-sm cursor-pointer"></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-800 font-medium mt-2">
                  <span>$0</span>
                  <span>$295</span>
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
              <button className="text-blue-600 hover:bg-blue-50 p-1.5 rounded flex items-center gap-0.5 transition-colors">
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
                    <th className="px-4 py-3 font-medium">Tên xe</th>
                    <th className="px-4 py-3 font-medium">Ngày bắt đầu</th>
                    <th className="px-4 py-3 font-medium">Số lượng</th>
                    <th className="px-4 py-3 font-medium">Chọn xe</th>
                    <th className="px-4 py-3 font-medium">Đơn giá</th>
                    <th className="px-4 py-3 font-medium">Tổng giá</th>
                    <th className="px-4 py-3 font-medium">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-700">
                  {journeys.map((item, index) => (
                    <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3">{index + 1}</td>
                      <td className="px-4 py-3 text-gray-800">{item.name}</td>
                      <td className="px-4 py-3">
                        <input type="text" defaultValue={item.date} className="border border-gray-300 rounded px-2 py-1.5 w-28 text-sm focus:outline-none" />
                      </td>
                      <td className="px-4 py-3">
                        <input type="number" defaultValue={item.quantity} className="border border-gray-300 rounded px-2 py-1.5 w-16 text-sm focus:outline-none" />
                      </td>
                      <td className="px-4 py-3">
                        <select className="border border-gray-300 rounded px-2 py-1.5 w-24 text-sm focus:outline-none bg-white">
                          <option></option>
                        </select>
                      </td>
                      <td className="px-4 py-3"></td>
                      <td className="px-4 py-3">${item.price}</td>
                      <td className="px-4 py-3">
                        <button className="bg-[#f0f0f0] text-gray-700 px-3 py-1.5 rounded text-sm hover:bg-gray-300 font-medium transition-colors">
                          Chọn
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-white">
              <div className="flex items-center gap-2">
                <select className="border border-gray-300 rounded px-2 py-1.5 text-sm focus:outline-none bg-white text-gray-700">
                  <option>10</option>
                </select>
                <span className="text-sm text-gray-600">[1 - 7]/7</span>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-1 border border-gray-300 rounded text-blue-600 hover:bg-blue-50"><ChevronsLeft className="w-4 h-4" /></button>
                <button className="p-1 border border-gray-300 rounded text-blue-600 hover:bg-blue-50"><ChevronLeft className="w-4 h-4" /></button>
                <select className="border border-gray-300 rounded px-2 py-1.5 text-sm focus:outline-none bg-white text-gray-700 mx-1">
                  <option>1</option>
                </select>
                <span className="text-sm text-gray-600">/ 1</span>
                <button className="p-1 border border-gray-300 rounded text-blue-600 hover:bg-blue-50"><ChevronRight className="w-4 h-4" /></button>
                <button className="p-1 border border-gray-300 rounded text-blue-600 hover:bg-blue-50"><ChevronsRight className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          CỘT PHẢI: WIDGET ĐẶT XE (STICKY)
          Đã thêm self-start, h-fit và tăng top-24 để tránh Header
          ========================================= */}
      <div className="w-full lg:w-[320px] flex-shrink-0 sticky top-[150px] self-start h-fit">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-medium text-blue-600 mb-5">Đặt Xe</h2>
          
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-800 mb-1.5">
                Ngày khởi hành <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                defaultValue="11/04/2026" 
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500 w-full"
              />
            </div>
            
            <div className="flex flex-col">
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500 bg-white text-gray-700 w-full mt-2">
                <option>1 N.Lớn - 0 T.Em</option>
              </select>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default VehicleDetail;