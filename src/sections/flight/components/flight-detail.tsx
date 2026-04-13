import { useState } from "react";
import {
  CameraOff,
  Star,
  Filter,
  RefreshCcw,
  Search,
  ChevronDown,
} from "lucide-react";

type FlightItem = {
  id: number;
  provider: string;
};

const flightData = {
  title: "BAMBOO AIRWAY",
  address: "",
  description: "Không có dữ liệu",
};

const flights: FlightItem[] = [];

const FlightDetail = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const filteredFlights = flights.filter((item) =>
    item.provider.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-[#f3f4f6] px-6 py-10 text-slate-700 md:px-6">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-8 lg:flex-row">
        {/* LEFT */}
        <div className="flex-1 space-y-6">
          {/* PROVIDER INFO */}
          <div className="flex flex-col gap-6 md:flex-row">
            {/* IMAGE */}
            <div className="flex h-[178px] w-full shrink-0 items-center justify-center bg-[#d9d9d9] md:w-[260px]">
              <CameraOff className="h-12 w-12 text-white/90" />
            </div>

            {/* CONTENT */}
            <div className="flex-1 pt-1">
              <h1 className="text-[28px] font-medium uppercase leading-none text-[#1f2937] md:text-[44px]">
                {flightData.title}
              </h1>

              <div className="mt-3 flex items-center gap-0.5 text-[#facc15]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current stroke-[1.5]" />
                ))}
              </div>

              <div className="mt-2 space-y-3 text-[15px] text-[#111827]">
                <p>
                  <span className="font-medium">Địa chỉ:</span>
                </p>

                <div>
                  <p className="font-medium">Mô tả:</p>
                  <p className="mt-3 italic text-slate-600">{flightData.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* JOURNEY */}
          <div className="space-y-4">
            <h2 className="text-[24px] font-medium text-[#1f2937]">Chọn hành trình</h2>

            {/* PROVIDER SELECT */}
            <div className="bg-[#f7f7f7] px-4 py-3">
              <label className="mb-2 block text-[15px] font-medium text-[#1f2937]">
                Lựa chọn nhà cung cấp
              </label>
              <select className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-[15px] text-slate-700 outline-none">
                <option>CÔNG TY KẾT NỐI DU LỊCH (Giá từ: $0/Xe)</option>
              </select>
            </div>

            {/* FILTER BOX */}
            <div className="rounded-2xl bg-[#f7f7f7] p-4">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* NAME */}
                <div>
                  <label className="mb-2 block text-[15px] font-medium text-[#1f2937]">
                    Tên thuyền
                  </label>
                  <input
                    type="text"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm outline-none"
                  />
                </div>

                {/* DURATION */}
                <div>
                  <label className="mb-2 block text-[15px] font-medium text-[#1f2937]">
                    Thời lượng
                  </label>
                  <div className="pt-2">
                    <div className="relative h-[3px] rounded-full bg-gray-300">
                      <div className="absolute left-0 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border border-gray-300 bg-white shadow-sm" />
                    </div>
                    <div className="mt-2 flex justify-between text-[14px] text-[#1f2937]">
                      <span>0 ngày</span>
                      <span>0 ngày</span>
                    </div>
                  </div>
                </div>

                {/* PRICE */}
                <div>
                  <label className="mb-2 block text-[15px] font-medium text-[#1f2937]">
                    Giá
                  </label>
                  <div className="pt-2">
                    <div className="relative h-[3px] rounded-full bg-gray-300">
                      <div className="absolute left-0 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border border-gray-300 bg-white shadow-sm" />
                    </div>
                    <div className="mt-2 flex justify-between text-[14px] text-[#1f2937]">
                      <span>$0</span>
                      <span>$0</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="mt-5 flex items-center gap-2">
                <button className="flex items-center gap-1.5 rounded bg-[#0b56a8] px-4 py-2 text-[15px] font-medium text-white hover:bg-blue-800">
                  <Filter className="h-4 w-4 fill-current" />
                  Lọc
                </button>

                <button className="rounded border border-gray-300 bg-white p-2 text-slate-600 hover:bg-gray-50">
                  <RefreshCcw className="h-4 w-4" />
                </button>

                <button className="flex items-center gap-0.5 px-1 py-2 text-[#0b56a8]">
                  <Search className="h-4 w-4" />
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>

              {/* TABLE */}
              <div className="mt-4 overflow-hidden rounded-2xl bg-white">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-[#1f5fad] text-white">
                      <th className="px-4 py-3 font-medium">STT</th>
                      <th className="px-4 py-3 font-medium">Tên nhà cung cấp</th>
                      <th className="px-4 py-3 text-center font-medium">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredFlights.length > 0 ? (
                      filteredFlights.map((item, index) => (
                        <tr key={item.id} className="border-t border-gray-200">
                          <td className="px-4 py-3">{index + 1}</td>
                          <td className="px-4 py-3">{item.provider}</td>
                          <td className="px-4 py-3 text-center">
                            <button className="rounded bg-gray-100 px-3 py-1.5 text-sm text-slate-700 hover:bg-gray-200">
                              Chọn
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr className="border-t border-gray-200">
                        <td colSpan={3} className="px-4 py-3 text-[15px] text-slate-700">
                          Không có dữ liệu
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-full lg:w-[320px]">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4 sticky top-[130px]">
            <h2 className="text-xl font-bold text-[#2566b0]">Đặt vé</h2>

            <div>
              <label className="block text-xs font-semibold mb-1 text-slate-600">
                Ngày khởi hành <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue="10/04/2026"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-[#2566b0]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1 text-slate-600">
                Số lượng khách
              </label>
              <select className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white outline-none">
                <option>1 N.Lớn - 0 T.Em</option>
                <option>2 N.Lớn - 0 T.Em</option>
              </select>
            </div>

            <button className="w-full bg-[#2566b0] text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
              Xác nhận đặt vé
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightDetail;