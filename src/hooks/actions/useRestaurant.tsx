import apiClient from "@/axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useUser } from "./useAuth";
import { useListCompanyOwner } from "./useCompanyOwner";
import { QUERY_KEYS } from "./query-keys";

const fetchListRestaurant = async (body: any) => {
    const res = await apiClient.post("supplier/GetListSupplierByAgent", body);
    return res.data;
};

export const useListRestaurant = (filters: { page: number; pageSize: number }) => {
    const { user } = useUser();
    const { coData } = useListCompanyOwner();

    const query = useQuery({
        queryKey: [
            QUERY_KEYS.RESTAURANT.LIST_RESTAURANT,
            filters,
            user?.strCompanyGUID,
            coData?.strCompanyGUID,
            user?.intCurrencyID,
        ],
        queryFn: () =>
            fetchListRestaurant({
                strCompanyPartnerGUID: user?.strCompanyGUID,
                strCompanyOwnerGUID: coData?.strCompanyGUID,
                intCurrencyID: user?.intCurrencyID,
                strSupplierGUID: null,
                strFilterSupplierName: null,
                strFilterLocationCode: null,
                strPriceFromRange: null,
                dtmDateStart: null,
                intCateID: 2,
                strListEasiaCateID: null,
                intCurPage: filters.page,
                intPageSize: filters.pageSize,
                strOrder: null,
                tblsReturn: "[0]",
            }),
        enabled: !!user && !!coData,
        placeholderData: keepPreviousData,
    });

    const listData = query.data?.[0] ?? [];
    const totalRecords = listData?.[0]?.intTotalRecords || 0;
    const totalPages = Math.ceil(totalRecords / filters.pageSize);

    return {
        restaurantData: listData,
        totalRecords,
        totalPages,
        restaurantLoading: query.isLoading,
        restaurantError: query.isError,
    };
};
