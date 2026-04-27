import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z as zod } from "zod";

import { Field, Form } from "@/components/hook-form";
import PrimaryButton from "@/components/button/primary-button";
import { useToastStore } from "@/zustand/useToastStore";
import { GripVertical, MapPin, Moon, RotateCcw, Trash2 } from "lucide-react";
import { AGENT_HOST, COUNTRIES_OPTIONS, CURRENCYS_OPTIONS, STARS2_OPTIONS } from "@/utils/oprion-data";

import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { addNewTourCustomized } from "@/hooks/actions/useTour";
import { useUser } from "@/hooks/actions/useAuth";
import { useListCompanyOwner } from "@/hooks/actions/useCompanyOwner";
import { use, useEffect, useState } from "react";
// import { useListCity } from "@/hooks/actions/useCity";


export const Schema = z
    .object({
        agentHost: z.string().min(1, "Vui lòng chọn Agent Host"),
        currency: z.string().min(1, "Vui lòng chọn ĐVTT"),
        tourName: z.string().min(1, "Tên Tour là bắt buộc"),
        dateStart: z.string().min(1, "Ngày bắt đầu là bắt buộc"),

        nationality: z.string().optional(),

        adults: z.coerce.number().min(1, "Tối thiểu 1 người lớn"),
        children: z.coerce.number().default(0),

        category: z.string().min(1, "Vui lòng chọn Loại"),

        remark: z.string().optional(),

        // room types
        sgl: z.coerce.number().min(0).default(0),
        dbl: z.coerce.number().min(0).default(0),
        twn: z.coerce.number().min(0).default(0),
        tpl: z.coerce.number().min(0).default(0),

        // list điểm đến (required)
        listLocation: z.string().min(1, "Danh sách điểm đến là bắt buộc"),

        bannerImg: z.any().optional(),
    })
    .refine(
        (data) =>
            data.sgl > 0 || data.dbl > 0 || data.twn > 0 || data.tpl > 0,
        {
            message: "Phải nhập ít nhất 1 phòng trong SGL / DBL / TWN / TPL",
            path: ["sgl"],
        }
    );

type SchemaType = zod.infer<typeof Schema>;

const TourCustomizedPopup = () => {

    const { user } = useUser();
    const { coData, coLoading } = useListCompanyOwner();
    const [preview, setPreview] = useState<string | null>(null);

    const AGENT_HOST_OPTIONS = coData
        ? [
            {
                label: coData.strCompanyName,
                value: coData.strCompanyGUID,
            },
        ]
        : [];


    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const url = URL.createObjectURL(file);
        setPreview(url);

        // vẫn set vào form cho đúng schema (nhưng KHÔNG dùng khi submit)
        methods.setValue("bannerImg", file);
    };
    // const { ctData, ctLoading, ctError } = useListCity({
    //     strTableName: "MC04",
    //     strFeildSelect: "WHERE IsActive=1 AND MC04_CityCode LIKE'%AO%' AND MC04.IsActive=1 ORDER BY MC04_CityName",
    //     strWhere: "MC04_CityCode AS strCityCode,MC04_CityName AS strCityName",
    // })

    // console.log("ctdata", ctData)
    const { showToast } = useToastStore();
    const methods = useForm<SchemaType>({
        resolver: zodResolver(Schema) as any,
        defaultValues: {
            agentHost: coData?.strCompanyGUID || "",
            currency: "Vietnamese Dong",
            tourName: "Test Tour 1044",
            dateStart: "2026-04-25",

            nationality: "01D5623E-752F-4A3D-A2B2-C62EB984FB13", // 🇻🇳 fix cứng

            sgl: 0,
            dbl: 2,
            twn: 0,
            tpl: 0,

            adults: 30,
            children: 3,

            category: "1",

            remark: "<p>Ghi chú</p>",

            listLocation: "VN00070001!1#VN00070000!1#",
        }
    });

    const { handleSubmit, formState: { isSubmitting } } = methods;

    const { mutate: addNewTourCustomizedApi, isPending: isLoading } = useMutation({
        mutationFn: addNewTourCustomized,
    });

    const onSubmit = handleSubmit(async (data) => {
        const payload = {
            strCompanyGUID: user?.strCompanyGUID || "",
            strCompanyAgentHostGUID: data.agentHost, // nếu đang là GUID thì OK, không thì cần map lại

            intLangID: null,
            strCountryGUID: "01D5623E-752F-4A3D-A2B2-C62EB984FB13",

            intAdult: data.adults,
            intNoOfChild: data.children,

            intSGL: data.sgl,
            intDBL: data.dbl,
            intTWN: data.twn,
            intTPL: data.tpl,

            dtmDateFrom: data.dateStart,

            strServiceName: data.tourName,

            intNoOfDay: null,
            intPerPaxID: null,

            intCurrencyID: data.currency, // nếu là ID thì giữ number/string ID

            strListEasiaCateID: data.category,

            strRemark: data.remark,

            strListLocation: data.listLocation,
        };

        addNewTourCustomizedApi(payload, {
            onSuccess: () => {
                showToast("success", "Thêm tour tùy chỉnh thành công");
            },
            onError: () => {
                showToast("error", "Thêm tour tùy chỉnh thất bại");
            },
        });
    });

    useEffect(() => {
        if (coData) {
            methods.reset({
                ...methods.getValues(),
                agentHost: coData.strCompanyGUID,
            });
        }
    }, [coData]);

    const renderForm = (
        <div className="bg-white rounded-4xl p-8 border border-gray-100 shadow-sm space-y-8 font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-end gap-2">
                    <div className="flex-1">
                        <Field.Select
                            name="agentHost"
                            label={{ text: "Agent Host", icon: <span className="text-red-500">*</span> }}
                            options={AGENT_HOST_OPTIONS}
                            disabled={coLoading || AGENT_HOST_OPTIONS.length === 0}
                        />
                    </div>
                    <button
                        type="button"
                        className="p-2.5 text-gray-400 hover:text-[#004b91] bg-gray-50 rounded-lg mb-1"
                    >
                        <RotateCcw size={18} />
                    </button>
                </div>

                <Field.Select
                    name="currency"
                    label={{ text: "ĐVTT", icon: <span className="text-red-500">*</span> }}
                    options={CURRENCYS_OPTIONS}
                />

                <Field.Select
                    name="nationality"
                    label={{ text: "Nationality" }}
                    options={[
                        {
                            label: "Vietnam",
                            value: "01D5623E-752F-4A3D-A2B2-C62EB984FB13",
                        },
                    ]}
                    disabled
                />



                <Field.Text
                    name="tourName"
                    label={{ text: "Tour name", icon: <span className="text-red-500">*</span> }}
                    placeholder="Nhập tên tour..."
                />

                <Field.Text
                    name="dateStart"
                    type="date"
                    label={{ text: "Date Start", icon: <span className="text-red-500">*</span> }}
                />

                <Field.Text name="sgl" type="number" label={{ text: "SGL" }} />
                <Field.Text name="dbl" type="number" label={{ text: "DBL" }} />
                <Field.Text name="twn" type="number" label={{ text: "TWN" }} />
                <Field.Text name="tpl" type="number" label={{ text: "TPL" }} />

                <Field.Text
                    name="adults"
                    type="number"
                    label={{ text: "No of Adults", icon: <span className="text-red-500">*</span> }}
                />

                <Field.Text
                    name="children"
                    type="number"
                    label={{ text: "No of Child" }}
                />

                <Field.Select
                    name="category"
                    label={{ text: "Category", icon: <span className="text-red-500">*</span> }}
                    options={STARS2_OPTIONS}
                    placeholder="Chọn hạng sao"
                />
            </div>

            <div className="space-y-2 border border-slate-200 rounded-2xl p-4">
                <label className="">Danh sách điểm đến</label>


                <div className="flex gap-2">
                    <div className="flex-1">
                        <Field.Select
                            name="country_fake"
                            options={[{ label: "Vietnam", value: "VN" }]}
                            disabled
                        />
                    </div>

                    <div className="flex-1">
                        <Field.Select
                            name="city_fake"
                            options={[{ label: "--- Chọn Địa danh ---", value: "" }]}
                            disabled
                        />
                    </div>

                    <button
                        type="button"
                        className="px-4 py-2 bg-gray-200 text-gray-500 rounded-lg cursor-not-allowed text-sm"
                    >
                        Thêm điểm đến
                    </button>
                </div>

                <div className="space-y-2">
                    {[
                        { city: "Ba Be", code: "VN00070001" },
                        { city: "Bac Kan", code: "VN00070000" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between border border-slate-200 rounded-xl px-4 py-3 bg-gray-50 hover:bg-gray-100 transition"
                        >
                            {/* LEFT */}
                            <div className="flex items-center gap-3">
                                <GripVertical size={16} className="text-gray-400" />

                                <span className="text-lg">🇻🇳</span>

                                <div className="flex items-center gap-2 text-sm">
                                    <span className="font-medium">Vietnam</span>
                                    <MapPin size={14} className="text-gray-400" />
                                    <span>{item.city}</span>
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="flex items-center gap-2">
                                <select
                                    className="cursor-pointer border border-slate-200 rounded-md px-2 py-1 text-sm bg-white"
                                    disabled
                                >
                                    <option>1</option>
                                </select>

                                <button
                                    type="button"
                                    className="p-2 rounded-md bg-gray-100 text-gray-400 cursor-not-allowed"
                                >
                                    <Moon size={16} />
                                </button>

                                <button
                                    type="button"
                                    className="p-2 rounded-md bg-gray-100 text-gray-400 cursor-not-allowed"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-2">
                <label className="">Remark</label>
                <div className="rounded-2xl overflow-hidden border border-gray-200">
                    <Field.Editor name="remark" />
                </div>
            </div>



            <div className="space-y-2">
                <label className="">Banner Img</label>

                <label className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                    <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={handleUpload}
                    />

                    {preview ? (
                        <img
                            src={preview}
                            alt="preview"
                            className="w-full h-[200px] object-cover rounded-xl"
                        />
                    ) : (
                        <>
                            <div className="p-4 bg-white rounded-full shadow-sm mb-4">
                                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-sm text-gray-400 font-medium">
                                Nhấp để tải ảnh lên
                            </span>
                        </>
                    )}
                </label>
            </div>

            <div className="flex justify-end pt-4">
                <button
                    type="submit"
                    disabled={isSubmitting || isLoading}
                    className="cursor-pointer w-full px-16 py-2.5 bg-[#004b91] hover:bg-[#003d75] rounded-lg text-white transition-colors disabled:opacity-50"
                >
                    {isSubmitting || isLoading ? "Đang lưu..." : "Lưu"}
                </button>
            </div>
        </div>
    );

    return (
        <div className="">
            <Form methods={methods} onSubmit={onSubmit}>
                {renderForm}
            </Form>
        </div>
    );
};

export default TourCustomizedPopup;