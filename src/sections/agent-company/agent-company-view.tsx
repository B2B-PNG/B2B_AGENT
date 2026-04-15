import { useListAgentHost } from "@/hooks/actions/useCompanyOwner";
import { getUrlImage } from "@/utils/format-image";
import { FileCheck, Search } from "lucide-react";
import { useState } from "react";

const MOCK_COMPANIES = [
    {
        id: 1,
        name: "CÔNG TY CP ROOTY TRIP PHÚ QUỐC",
        type: "Tour",
        destinations: "Phú Quốc",
        status: "Đang chờ duyệt",
        logo: "https://via.placeholder.com/100",
        badge: "Agent Host",
        isGold: true,
    },
    {
        id: 2,
        name: "Công Ty TNHH Dịch vụ và Du Lịch Ban Mê Xanh",
        type: "Tour",
        destinations: "Buôn Ma Thuột, Gia Lai, Kon Tum",
        status: "Đang chờ duyệt",
        logo: "https://via.placeholder.com/100",
        badge: "Agent Host",
        isGold: true,
    },
];

const BADGE_MAP: Record<number, { icon: string; label: string }> = {
    1: { icon: "💎", label: "Diamond" },
    2: { icon: "🥇", label: "Gold" },
    3: { icon: "🥈", label: "Silver" },
    4: { icon: "🥉", label: "Bronze" },
};

const getLogoSrc = (logo: any) => {
    if (!logo || typeof logo !== "string") return "";

    // nếu là link full
    if (logo.startsWith("http")) return logo;

    // nếu là path upload
    return getUrlImage(logo);
};
const AgentCompanyView = () => {
    const [filters] = useState({
        page: null,
        pageSize: null,
    });
    const { ahData, ahLoading, ahError } = useListAgentHost(filters)

    console.log("ahData", ahData)
    return (
        <div className="bg-slate-50 min-h-screen py-10">
            <div className="max-w-7xl mx-auto space-y-6">

                {/* TITLE */}
                <h1 className="text-2xl font-semibold text-slate-800">
                    Danh sách nhà cung cấp
                </h1>

                {/* FILTER */}
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 space-y-4">

                    {/* ===== CỤM 1: SEARCH ===== */}
                    <div className="grid grid-cols-12 gap-4 items-end">

                        {/* Input */}
                        <div className="col-span-12 md:col-span-5">
                            <input
                                type="text"
                                placeholder="Tên công ty"
                                className="w-full h-10 px-3 border border-slate-200 rounded-md text-sm outline-none"
                            />
                        </div>

                        {/* Địa danh */}
                        <div className="col-span-6 md:col-span-3">
                            <select className="w-full h-10 px-3 border border-slate-200 rounded-md text-sm outline-none">
                                <option>Địa danh</option>
                            </select>
                        </div>

                        {/* Loại công ty */}
                        <div className="col-span-6 md:col-span-2">
                            <select className="w-full h-10 px-3 border border-slate-200 rounded-md text-sm outline-none">
                                <option>Loại công ty</option>
                            </select>
                        </div>

                        {/* Button */}
                        <div className="col-span-12 md:col-span-2">
                            <button className="w-full h-10 flex items-center justify-center bg-[#004b91] text-white rounded-md hover:bg-blue-800">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-slate-200" />

                    {/* ===== CỤM 2: FILTER ===== */}
                    <div className="grid grid-cols-12 gap-4">

                        {/* Loại công ty */}
                        <div className="col-span-12 md:col-span-4">
                            <label className="text-xs text-slate-500 mb-1 block">
                                Loại công ty
                            </label>
                            <select className="w-full h-10 px-3 border border-slate-200 rounded-md text-sm outline-none">
                                <option>Tất cả</option>
                            </select>
                        </div>

                        {/* Huy hiệu */}
                        <div className="col-span-12 md:col-span-4">
                            <label className="text-xs text-slate-500 mb-1 block">
                                Huy hiệu
                            </label>
                            <select className="w-full h-10 px-3 border border-slate-200 rounded-md text-sm outline-none">
                                <option>Tất cả</option>
                            </select>
                        </div>

                        {/* Chứng nhận */}
                        <div className="col-span-12 md:col-span-4">
                            <label className="text-xs text-slate-500 mb-1 block">
                                Chứng nhận
                            </label>
                            <select className="w-full h-10 px-3 border border-slate-200 rounded-md text-sm outline-none">
                                <option>Tất cả</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* LIST */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {ahData.map((company: any) => {
                        const badge = BADGE_MAP[company?.intCompanyBadgeTypeID];
                        return (
                            <div
                                key={company?.strCompanyGUID}
                                className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition flex gap-4"
                            >
                                {/* Logo */}
                                <div className="w-20 h-20 rounded-lg overflow-hidden border flex-shrink-0">
                                    <img
                                        src={getLogoSrc(company?.strCompanyLogo)}
                                        alt="logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col justify-between">
                                    {/* Top */}
                                    <div className="flex justify-between gap-3">
                                        <h2 className="font-semibold text-sm text-slate-800 leading-snug line-clamp-2">
                                            {company?.strCompanyName}
                                        </h2>

                                        <div className="flex flex-col items-end gap-1">
                                            <div className="text-[10px] font-semibold bg-slate-100 px-2 py-0.5 rounded min-w-[50px]">
                                                {company?.intCompanyTypeID === 2 ? "Agent Host" : "Agent"}
                                            </div>

                                            <div className="flex items-center gap-1 text-sm">
                                                {badge && (
                                                    <div>{badge.icon}</div>
                                                )}
                                                {company?.IsContractSigned && (
                                                    <div className="flex items-center gap-1 text-green-600 text-xs">
                                                        <FileCheck size={16} />
                                                        <span>Đã ký HĐ</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="text-xs text-slate-600 mt-2 space-y-1">
                                        <p>
                                            <span className="text-slate-400">Loại:</span>{" "}
                                            {company.type}
                                        </p>
                                        <p>
                                            <span className="text-slate-400">Điểm đến:</span>{" "}
                                            {company.destinations}
                                        </p>
                                    </div>

                                    {/* Status */}
                                    <div className="mt-3">
                                        <span className="inline-block bg-slate-200 text-slate-700 px-3 py-1 rounded text-xs">
                                            {company.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )}

                </div>
            </div>
        </div >
    );
};

export default AgentCompanyView;