import apiClient from "@/axios";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useUser } from "./useAuth";
import { useListCompanyOwner } from "./useCompanyOwner";
import { QUERY_KEYS } from "./query-keys";

const fetchListHotel = async (body: any) => {
    const res = await apiClient.post("supplier/GetListSupplierForHotelByAgent", body);
    return res.data;
};

export const useListHotel = (filters?: { page?: number; pageSize?: number; strSupplierGUID?: string | null, tblsReturn?: string }) => {
    const { user } = useUser();

    const {
        page = 1,
        pageSize = 10,
        strSupplierGUID = null,
        tblsReturn = "[0]"
    } = filters || {};

    const query = useQuery({
        queryKey: [QUERY_KEYS.HOTEL.LIST_HOTEL, filters],
        queryFn: () =>
            fetchListHotel({
                strCompanyPartnerGUID: user?.strCompanyGUID,
                strCompanyOwnerGUID: null,
                intCurrencyID: user?.intCurrencyID,
                strSupplierGUID: strSupplierGUID,
                strFilterSupplierName: null,
                strFilterLocationCode: null,
                strPriceFromRange: null,
                intNoOfRooms: null,
                dtmFilterCheckIn: null,
                dtmFilterCheckOut: null,
                IsShowAll: true,
                strListEasiaCateID: null,
                intCurPage: page,
                intPageSize: pageSize,
                strOrder: null,
                tblsReturn: tblsReturn
            }),
        enabled: !!user,
        placeholderData: keepPreviousData,
    });

    const listData = query.data?.[0] ?? [];
    const totalRecords = listData?.[0]?.intTotalRecords || 0;
    const totalPages = Math.ceil(totalRecords / pageSize);

    return {
        hotelData: listData,
        totalRecords,
        totalPages,
        hotelLoading: query.isLoading,
        hotelError: query.isError,
    };
};


const fetchItemTypeByAgent = async (body: any) => {
    const res = await apiClient.post("supplier/GetListItemTypeByAgent", body);
    return res.data;
};

export const useListItemByAgent = (filters?: { strSupplierGUID?: string | null }) => {
    const { user } = useUser();
    const { coData } = useListCompanyOwner();

    const {
        strSupplierGUID = null,
    } = filters || {};

    const query = useQuery({
        queryKey: [QUERY_KEYS.HOTEL.LIST_ITEM_BY_AGENT, filters, coData?.strCompanyGUID],
        queryFn: () =>
            fetchItemTypeByAgent({
                strItemTypeGUID: null,
                strSupplierGUID: strSupplierGUID,
                strCompanyOwnerGUID: coData?.strCompanyGUID,
                intCurPage: null,
                intPageSize: null,
                strOrder: null,
                tblsReturn: null
            }),
        enabled: !!user && !!coData,
        placeholderData: keepPreviousData,
    });

    const listData = query.data?.[1] ?? [];

    return {
        ibgData: listData,
        ibgLoading: query.isLoading,
        ibgError: query.isError,
    };
};