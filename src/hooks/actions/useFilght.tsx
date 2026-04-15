import apiClient from "@/axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useUser } from "./useAuth";
import { useListCompanyOwner } from "./useCompanyOwner";
import { QUERY_KEYS } from "./query-keys";

const fetchListFlight = async (body: any) => {
    const res = await apiClient.post("supplier/GetListSupplierByAgent", body);
    return res.data;
};

export const useListFlight = (filters: { page: number; pageSize: number }) => {
    const { user } = useUser();
    const { coData } = useListCompanyOwner();

    const query = useQuery({
        queryKey: [
            QUERY_KEYS.FLIGHT.LIST_FLIGHT,
            filters,
            user?.strCompanyGUID,
            coData?.strCompanyGUID,
            user?.intCurrencyID,
        ],
        queryFn: () =>
            fetchListFlight({
                strCompanyPartnerGUID: user?.strCompanyGUID,
                strCompanyOwnerGUID: coData?.strCompanyGUID,
                intCurrencyID: user?.intCurrencyID,
                strSupplierGUID: null,
                strFilterSupplierName: null,
                strFilterLocationCode: null,
                strPriceFromRange: null,
                dtmDateStart: null,
                intCateID: 6,
                strListEasiaCateID: null,
                intCurPage: filters.page,
                intPageSize: filters.pageSize,
                strOrder: null,
                tblsReturn: "[0]",
            }),
        enabled: !!user?.strCompanyGUID && !!coData?.strCompanyGUID && !!user?.intCurrencyID,
        placeholderData: keepPreviousData,
    });

    const listData = query.data?.[0] ?? [];
    const totalRecords = listData?.[0]?.intTotalRecords || 0;
    const totalPages = Math.ceil(totalRecords / filters.pageSize);

    return {
        flightData: listData,
        totalRecords,
        totalPages,
        flightLoading: query.isLoading,
        flightError: query.isError,
    };
};

// const fetchDetailFlight = async (body: any) => {
//     const res = await apiClient.post("supplier/GetListSupplierByAgent", body);
//     return res.data;
// };

// export const useDetailFlight = (filters: {
//   page: number;
//   pageSize: number;
//   strSupplierGUID?: string | null;
//   strFilterSupplierName?: string | null;
// }) => {
//   const { user } = useUser();
//   const { coData } = useListCompanyOwner();

//   const query = useQuery({
//     queryKey: [
//       QUERY_KEYS.FLIGHT.DETAIL_FLIGHT,
//       filters,
//       user?.strCompanyGUID,
//       coData?.strCompanyGUID,
//       user?.intCurrencyID,
//     ],
//     queryFn: () =>
//       fetchDetailFlight({
//         strCompanyPartnerGUID: user?.strCompanyGUID ?? null,
//                 strCompanyOwnerGUID: coData?.strCompanyGUID ?? null,
//                 strSupplierGUID: filters?.strSupplierGUID ?? null,
//                 intCurrencyID: user?.intCurrencyID ?? 1,
//                 strFilterSupplierName: filters?.strFilterSupplierName ?? null,
//                 strFilterLocationCode: null,
//                 strPriceFromRange: null,
//                 dtmDateStart: null,
//                 intCateID: 6,
//                 strListEasiaCateID: null,
//                 intCurPage: filters?.page,
//                 intPageSize: filters?.pageSize,
//                 strOrder: null,
//                 tblsReturn: "[0][1]",
//       }),
//     enabled:
//       !!user?.strCompanyGUID &&
//       !!coData?.strCompanyGUID,
//     placeholderData: keepPreviousData,
//   });
//   const listData = query.data?.[0] ?? [];
//   // Nếu API trả về [0] là list chính, [1] là metadata thì bạn có thể lấy thêm ở đây
//     const extraInfo = query.data?.[1] ?? null;
//   const totalRecords = listData?.[0]?.intTotalRecords || 0;
//   const totalPages = Math.ceil(totalRecords / filters.pageSize);

//   return {
//     fdData: listData,
//     extraInfo,
//     totalRecords,
//     totalPages,
//     fdLoading: query.isLoading,
//     fdError: query.isError,
  
//   };
// };


const fetchDetailFlight = async (body: any) => {
    // Lưu ý: Kết quả trả về là { data: [[...], [...]], isSuccess: true }
    const res = await apiClient.post("supplier/GetListSupplierByAgent", body);
    return res.data; 
};

export const useDetailFlight = (filters: {
    page: number;
    pageSize: number;
    strSupplierGUID?: string | null;
    strFilterSupplierName?: string | null;
}) => {
    const { user } = useUser();
    const { coData } = useListCompanyOwner();

    const query = useQuery({
        queryKey: [
            QUERY_KEYS.FLIGHT.DETAIL_FLIGHT,
            filters,
            user?.strCompanyGUID,
            coData?.strCompanyGUID,
            user?.intCurrencyID,
        ],
        queryFn: () =>
            fetchDetailFlight({
                strCompanyPartnerGUID: user?.strCompanyGUID ?? null,
                strCompanyOwnerGUID: coData?.strCompanyGUID ?? null,
                strSupplierGUID: filters?.strSupplierGUID ?? null,
                intCurrencyID: user?.intCurrencyID ?? 1,
                strFilterSupplierName: filters?.strFilterSupplierName ?? null,
                strFilterLocationCode: null,
                strPriceFromRange: null,
                dtmDateStart: null,
                intCateID: 6,
                strListEasiaCateID: null,
                intCurPage: filters?.page,
                intPageSize: filters?.pageSize,
                strOrder: null,
                tblsReturn: "[0][1]",
            }),
        enabled: !!user?.strCompanyGUID && !!coData?.strCompanyGUID,
        placeholderData: keepPreviousData,
    });

    // CHỈNH SỬA Ở ĐÂY: Truy cập vào query.data.data
    // data[0] là mảng chứa thông tin chuyến bay (Bamboo Airway...)
    const listData = query.data?.data?.[0] ?? [];
    
    // data[1] là mảng chứa thông tin Metadata (Công ty kết nối...)
    const extraInfo = query.data?.data?.[1]?.[0] ?? null;

    // Lấy intTotalRecords từ phần tử đầu tiên của mảng kết quả
    const totalRecords = listData.length > 0 ? (listData[0].intTotalRecords || 0) : 0;
    const totalPages = Math.ceil(totalRecords / filters.pageSize);

    return {
        fdData: listData,      // Danh sách chi tiết
        extraInfo: extraInfo,  // Thông tin công ty đi kèm
        totalRecords,
        totalPages,
        fdLoading: query.isLoading,
        fdError: query.isError,
        refetch: query.refetch
    };
};