import {
    MapPin,
    Clock3,
    MessageSquare,
    Facebook,
    Twitter,
    Mail,
    CheckCircle2,
    XCircle,
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { TourCard } from "./tour-list";
import BookingForm from "./booking-form";
import { useDetailTour, useListTourDay, useListTourPublish } from "@/hooks/actions/useTour";
import { useLocation } from "react-router-dom";
import { getUrlImage } from "@/utils/format-image";
import { TableCore, type ColumnDef } from "@/components/table/table-core";

const TourDetail = () => {
    const location = useLocation()
    const item = location.state

    const [filters] = useState({
        page: 1,
        pageSize: 1,
        strServiceNameUrl: item?.item?.strServiceNameUrl
    });
    const [filters2] = useState({
        page: 1,
        pageSize: 4,
        intCateID: item?.item?.intCateID,
        intProductID: item?.item?.intProductID
    });
    const [filters3] = useState({
        strTourGUID: item?.item?.strTourGUID
    });

    const { tdData, tdLoading, tdError } = useDetailTour(filters)
    const { tdpData, tdpLoading, tdpError } = useListTourPublish(filters2)
    const { tddData, tddLoading, tddError } = useListTourDay(filters3)

    const [openDay, setOpenDay] = useState<number | null>(1);
    const toggleDay = (day: number) => {
        setOpenDay(openDay === day ? null : day);
    };

    const ListData = tdData?.[0]?.[0]
    const ListData1 = tdData

    console.log("first1", ListData1)

    const includedList = ListData?.strIncluded
        ?.replace(/<\/p>/g, "")
        ?.split("<p>")
        ?.filter(Boolean)
        ?.map(item => item.replace(/^\s*-\s*/, ""));

    const exclusionsList = ListData?.strExcluded
        ?.replace(/<\/p>/g, "")
        ?.split("<p>")
        ?.filter(Boolean)
        ?.map(item => item.replace(/^\s*-\s*/, ""));

    // const colDefs: ColumnDef<any>[] = [
    //     {
    //         field: "No",
    //         headerName: "STT",
    //         render: (value) => <span className="text-gray-400 font-medium">{value}</span>,
    //     },
    //     {
    //         field: "No",
    //         headerName: "STT",
    //         render: (value) => <span className="text-gray-400 font-medium">{value}</span>,
    //     },


    // ];

    console.log("tddData", tddData)
    return (
        <section className="bg-slate-50 min-h-screen px-6 py-10 text-slate-700">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

                {/* LEFT */}
                <div className="flex-1 space-y-10 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">

                    {/* TITLE */}
                    <div className="space-y-3">
                        <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">
                            {ListData?.strServiceName}
                        </h1>

                        <div className="text-sm text-slate-600 space-y-1">
                            <p className="font-semibold">{ListData?.strCompanyName}</p>
                            <div className="flex items-center gap-3">
                                <p>{ListData?.strCompanyEmail}</p> - <p>{ListData?.strCompanyPhone}</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
                            <div className="flex items-center gap-5 text-sm text-slate-600">
                                <div className="flex items-center gap-1">
                                    <MapPin size={16} className="text-[#2566b0]" />
                                    {ListData?.strListTourDestinationName}
                                </div>

                                <div className="flex items-center gap-1">
                                    <Clock3 size={16} />
                                    {/* {ListData.duration} */}
                                    1 Ngày / 0 Đêm
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
                            src={getUrlImage(ListData?.strTourImageUrl)}
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
                                <span>{ListData?.strListTourDestinationName}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">Mô tả</h2>
                        {ListData?.strRemark ? 
                        (<div
                        className="text-sm text-slate-600"
                        dangerouslySetInnerHTML={{ __html: ListData?.strRemark }}
                        />)
                    : <span className="text-slate-500 text-sm">Không có dữ liệu</span>}
                    </div>

                    {/* ITINERARY */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">Lịch trình</h2>

                        {tddData.map((tdd: any) => {

                            const hasContent =
                                tdd?.strDayContent &&
                                typeof tdd?.strDayContent === "string" &&
                                tdd?.strDayContent.trim() !== "";
                            return (
                                <div
                                    key={tdd?.strTourDayGUID}
                                    className="border border-slate-200 rounded-xl overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleDay(tdd?.No)}
                                        className="w-full flex justify-between p-4 bg-slate-50 hover:bg-slate-100"
                                    >
                                        <span className="font-semibold">
                                            Ngày {tdd?.No}
                                        </span>
                                        {openDay === tdd?.No ? <ChevronUp /> : <ChevronDown />}
                                    </button>

                                    {openDay === tdd?.No && (
                                        <div className="p-4 text-sm text-slate-600">
                                            {hasContent ? (
                                                <div dangerouslySetInnerHTML={{ __html: tdd?.strDayContent }} />
                                            ) : (
                                                <span className="text-slate-400 italic">Chưa có nội dung</span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )
                        })}

                    </div>

                    {/* IN/OUT */}
                    <div className="grid md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <div>
                            <h3 className="font-bold mb-3">Bao gồm</h3>
                            <div className="space-y-2">
                                {includedList?.map((item: any, index: any) => (
                                    <div key={index} className="flex gap-2 text-sm items-center">
                                        <CheckCircle2 className="text-emerald-500 mt-0.5 shrink-0" />
                                        <span dangerouslySetInnerHTML={{ __html: item }} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold mb-3">Không bao gồm</h3>
                            <div className="space-y-2">
                                {exclusionsList?.map((item: any, index: any) => (
                                    <div key={index} className="flex gap-2 text-sm items-center">
                                        <XCircle className="text-red-500" />
                                        <span dangerouslySetInnerHTML={{ __html: item }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* HOTEL TABLE */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold">Khách sạn</h2>

                        {/* <TableCore
                            rowData={tddData ?? []}
                            columnDefs={colDefs}
                            loading={tddLoading}
                        /> */}
                    </div>

                    <div className="">
                        <h2 className="text-xl font-bold">Các điều khoản</h2>
                        {ListData?.strTermAndCondition ? (
                            <span className="px-4 text-sm text-slate-600" dangerouslySetInnerHTML={{ __html: ListData?.strTermAndCondition }} />
                        ) : (
                            <span>Không có dữ liệu</span>
                        )}


                    </div>

                </div>

                {/* RIGHT SIDEBAR */}
                <div>
                    <BookingForm />
                </div>
            </div>

            {/* RELATED */}
            <div className="max-w-7xl m-auto mt-20">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Bạn có thể quan tâm
                </h2>

                <div className="grid grid-cols-4 gap-4 ">
                    {tdpData.map((t: any) => (
                        <TourCard key={t.id} tour={t} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TourDetail;