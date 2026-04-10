
const FlightDetail: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-10 font-sans text-slate-700">
      <div className="max-w-7xl mx-auto">
        
        {/* --- PHẦN 1: THÔNG TIN CHUNG & FORM ĐẶT XE --- */}
        <div className="flex flex-col lg:flex-row gap-8 mb-10">
          
          {/* Bên trái: Thông tin đơn vị (Bamboo Airway) */}
          <div className="flex-1 flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            {/* Placeholder Ảnh */}
            <div className="w-full md:w-64 h-48 bg-gray-200 flex items-center justify-center rounded-md">
              <svg className="w-16 h-16 text-gray-400 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Chi tiết text */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-slate-800 mb-2">BAMBOO AIRWAY</h1>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm mb-2"><span className="font-bold">Địa chỉ:</span></p>
              <div className="mt-4">
                <p className="font-bold text-sm mb-1">Mô tả:</p>
                <p className="italic text-gray-400 text-sm">Không có dữ liệu</p>
              </div>
            </div>
          </div>

          {/* Bên phải: Floating Booking Card */}
          <div className="w-full lg:w-[320px]">
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-50">
              <h2 className="text-xl font-bold text-blue-500 mb-4">Đặt Xe</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold mb-1 text-slate-600">Ngày khởi hành <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    defaultValue="10/04/2026" 
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-400" 
                  />
                </div>
                <div>
                  <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none bg-white cursor-pointer">
                    <option>1 N.Lớn - 0 T.Em</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- PHẦN 2: CHỌN HÀNH TRÌNH --- */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800">Chọn hành trình</h2>
          
          {/* Filter Container */}
          <div className="bg-white rounded-md border border-gray-200 overflow-hidden shadow-sm">
            {/* Lựa chọn nhà cung cấp */}
            <div className="p-4 border-b border-gray-100">
              <label className="block text-xs font-bold mb-2 uppercase text-slate-600 tracking-wide">Lựa chọn nhà cung cấp</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white outline-none">
                <option>CÔNG TY KẾT NỐI DU LỊCH (Giá từ: $0/Xe)</option>
              </select>
            </div>

            {/* Các thanh Slider Filter (Giả lập giao diện) */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Filter Tên */}
              <div>
                <label className="block text-sm font-semibold mb-2">Tên thuyền</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm" />
              </div>

              {/* Filter Thời lượng */}
              <div>
                <div className="flex justify-between text-sm font-semibold mb-2">
                  <span>Thời lượng</span>
                </div>
                <div className="relative h-1 bg-gray-200 rounded-full mt-4">
                   <div className="absolute -top-2 left-0 w-5 h-5 bg-white border-2 border-gray-300 rounded-full shadow-sm cursor-pointer"></div>
                   <div className="flex justify-between text-[10px] text-gray-400 mt-4">
                      <span>0 ngày</span>
                      <span>0 ngày</span>
                   </div>
                </div>
              </div>

              {/* Filter Giá */}
              <div>
                <div className="flex justify-between text-sm font-semibold mb-2">
                  <span>Giá</span>
                </div>
                <div className="relative h-1 bg-gray-200 rounded-full mt-4">
                   <div className="absolute -top-2 left-0 w-5 h-5 bg-white border-2 border-gray-300 rounded-full shadow-sm cursor-pointer"></div>
                   <div className="flex justify-between text-[10px] text-gray-400 mt-4">
                      <span>$0</span>
                      <span>$0</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Nút thao tác Lọc */}
            <div className="px-6 pb-6 flex gap-2">
              <button className="flex items-center gap-2 bg-[#004a99] text-white px-4 py-1.5 rounded text-sm hover:bg-blue-800 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" /></svg>
                Lọc
              </button>
              <button className="p-1.5 border border-gray-300 rounded hover:bg-gray-50 text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </button>
              <button className="p-1.5 border border-gray-300 rounded hover:bg-gray-50 text-blue-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>

            {/* Bảng kết quả Hành trình */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#2b6cb0] text-white">
                  <tr>
                    <th className="px-4 py-2.5 font-bold uppercase text-[11px] w-16">STT</th>
                    <th className="px-4 py-2.5 font-bold uppercase text-[11px]">Tên nhà cung cấp</th>
                    <th className="px-4 py-2.5 font-bold uppercase text-[11px] text-center w-32">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td colSpan={3} className="px-4 py-4 text-gray-400 italic">Không có dữ liệu</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlightDetail;