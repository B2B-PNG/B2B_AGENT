import apiClient from "@/axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useUser } from "./useAuth";
import { useListCompanyOwner } from "./useCompanyOwner";
import { QUERY_KEYS } from "./query-keys";

const fetchListGuideFee = async (body: any) => {
    const res = await apiClient.post("supplier/GetListSupplierByAgent", body);
    return res.data;
};

export const useListGuideFee = (filters: { page: number; pageSize: number }) => {
    const { user } = useUser();
    const { coData } = useListCompanyOwner();

    const query = useQuery({
        queryKey: [
            QUERY_KEYS.GUIDE_FEE.LIST_GUIDE_FEE,
            filters,
            user?.strCompanyGUID,
            coData?.strCompanyGUID,
            user?.intCurrencyID,
        ],
        queryFn: () =>
            fetchListGuideFee({
                strCompanyPartnerGUID: user?.strCompanyGUID,
                strCompanyOwnerGUID: coData?.strCompanyGUID,
                intCurrencyID: user?.intCurrencyID,
                strSupplierGUID: null,
                strFilterSupplierName: null,
                strFilterLocationCode: null,
                strPriceFromRange: null,
                dtmDateStart: null,
                intCateID: 8,
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
        guideFeeData: listData,
        totalRecords,
        totalPages,
        guideFeeLoading: query.isLoading,
        guideFeeError: query.isError,
    };
};
