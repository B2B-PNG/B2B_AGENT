import {
    MapPin,
    Clock3,
    MessageSquare,
    Facebook,
    Twitter,
    Mail,
    CheckCircle2,
    XCircle,
    AlertCircle,
    Info,
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { TourCard } from "./tour-list";
import BookingForm from "./booking-form";

const TourDetail = () => {
    const [openDay, setOpenDay] = useState<number | null>(1);

    const toggleDay = (day: number) => {
        setOpenDay(openDay === day ? null : day);
    };

    const tourData = {
        title: "HÀ NỘI - HẠ LONG - VỊNH NGỌC XANH",
        company: "CÔNG TY KẾT NỐI DU LỊCH",
        contact: "pngsoftsup@gmail.com - 0435563688",
        location: "Hà Nội",
        duration: "2 Ngày / 1 Đêm",
        mainImage:
            "https://images.unsplash.com/photo-1528127269322-539801943592?w=1000&q=80",
    };

    const inclusions = [
        "Accommodation in twin/double room with daily breakfast",
        "2Days/1Night cruise on board a cruise in Ha Long Bay",
        "Services of a driver and private air-conditioned vehicle",
        "Experienced English-speaking guide",
    ];

    const exclusions = [
        "Early check-in or late check-out",
        "International & Domestic flight tickets",
        "Visa fees",
    ];

    const hotels = [
        {
            city: "BA BE",
            name: "KHÁCH SẠN MƯỜNG THANH HÀ NỘI",
            type: "Deluxe",
        },
        {
            city: "HA LONG",
            name: "KHÁCH SẠN BÃI CHÁY HẠ LONG",
            type: "Presidential Suite",
        },
    ];

    const tours = [
        {
            id: 1,
            title: "HÀ NỘI - HẠ LONG",
            provider: "CÔNG TY KẾT NỐI DU LỊCH",
            duration: "2 Ngày / 1 Đêm",
            destinations: "Hà Nội",
            price: "446.9",
            image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=500",
        },
    ];

    return (
        <section className="bg-slate-50 min-h-screen px-6 py-10 text-slate-700">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

                {/* LEFT */}
                <div className="flex-1 space-y-10 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">

                    {/* TITLE */}
                    <div className="space-y-3">
                        <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">
                            {tourData.title}
                        </h1>

                        <div className="text-sm text-slate-600 space-y-1">
                            <p className="font-semibold">{tourData.company}</p>
                            <p>{tourData.contact}</p>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
                            <div className="flex items-center gap-5 text-sm text-slate-600">
                                <div className="flex items-center gap-1">
                                    <MapPin size={16} className="text-[#2566b0]" />
                                    {tourData.location}
                                </div>

                                <div className="flex items-center gap-1">
                                    <Clock3 size={16} />
                                    {tourData.duration}
                                </div>

                                <button className="bg-[#2566b0] text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-blue-700 transition">
                                    <MessageSquare size={14} className="inline mr-1" />
                                    Nhắn tin
                                </button>
                            </div>

                            <div className="flex items-center gap-2 text-slate-500">
                                <span className="text-sm font-semibold">Share:</span>
                                {[Facebook, Mail, Twitter].map((Icon, i) => (
                                    <button
                                        key={i}
                                        className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-[#2566b0] hover:text-white transition"
                                    >
                                        <Icon size={14} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200">
                        <img
                            src={tourData.mainImage}
                            className="w-full h-full object-cover hover:scale-105 transition"
                        />
                    </div>

                    {/* DESCRIPTION */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">Điểm chính</h3>
                            <p className="text-slate-500">Không có dữ liệu</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">
                                Thành phố
                            </h3>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" checked readOnly />
                                <span>Hà Nội</span>
                            </div>
                        </div>
                    </div>

                    {/* ITINERARY */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">Lịch trình</h2>

                        {[1, 2].map((day) => (
                            <div
                                key={day}
                                className="border border-slate-200 rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleDay(day)}
                                    className="w-full flex justify-between p-4 bg-slate-50 hover:bg-slate-100"
                                >
                                    <span className="font-semibold">
                                        Ngày {day}
                                    </span>
                                    {openDay === day ? <ChevronUp /> : <ChevronDown />}
                                </button>

                                {openDay === day && (
                                    <div className="p-4 text-sm text-slate-600">
                                        Nội dung lịch trình...
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* IN/OUT */}
                    <div className="grid md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <div>
                            <h3 className="font-bold mb-3">Bao gồm</h3>
                            {inclusions.map((i, idx) => (
                                <p key={idx} className="flex gap-2 text-sm mb-2">
                                    <CheckCircle2 className="text-emerald-500" />
                                    {i}
                                </p>
                            ))}
                        </div>

                        <div>
                            <h3 className="font-bold mb-3">Không bao gồm</h3>
                            {exclusions.map((i, idx) => (
                                <p key={idx} className="flex gap-2 text-sm mb-2">
                                    <XCircle className="text-red-500" />
                                    {i}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* HOTEL TABLE */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold">Khách sạn</h2>

                        <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                            <thead className="bg-[#2566b0] text-white">
                                <tr>
                                    <th className="p-3">City</th>
                                    <th className="p-3">Hotel</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hotels.map((h, i) => (
                                    <tr key={i} className="border-t">
                                        <td className="p-3 text-[#2566b0] font-semibold">
                                            {h.city}
                                        </td>
                                        <td className="p-3">
                                            {h.name} - {h.type}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* RELATED */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">
                            Bạn có thể quan tâm
                        </h2>

                        <div className="grid md:grid-cols-3 gap-4">
                            {tours.map((t) => (
                                <TourCard key={t.id} tour={t} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <div>
                    <BookingForm />
                </div>
            </div>
        </section>
    );
};

export default TourDetail;