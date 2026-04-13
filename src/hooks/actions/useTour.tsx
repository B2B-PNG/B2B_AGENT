import apiClient from "@/axios";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useUser } from "./useAuth";
import { useListCompanyOwner } from "./useCompanyOwner";
import { QUERY_KEYS } from "./query-keys";

const fetchListTour = async (body: any) => {
    const res = await apiClient.post("tour/GetListTourPublishInTopForHmPgTour", body);
    return res.data;
};

export const useListTour = (filters: { page: number; pageSize: number }) => {
    const { user } = useUser();
    const { coData } = useListCompanyOwner();

    const query = useQuery({
        queryKey: [
            QUERY_KEYS.USER.LIST_TOUR,
            filters,
            coData?.strCompanyGUID,
        ],
        queryFn: () =>
            fetchListTour({
                strCompanyOwnerGUID: coData?.strCompanyGUID,
                strCompanyPartnerGUID: user?.strCompanyGUID,
                strPriceLevelGUID: coData?.strPriceLevelGUID,
                intLangID: user?.intLangID,
                intCurrencyID: user?.intCurrencyID,
                strOrder: null,
                intCurPage: filters.page,
                intPageSize: filters.pageSize,
                tblsReturn: "[0]",
            }),
        enabled: !!user && !!coData,
        placeholderData: keepPreviousData,
    });

    const listData = query.data?.[0] ?? [];
    const totalRecords = listData?.[0]?.intTotalRecords || 0;
    const totalPages = Math.ceil(totalRecords / filters.pageSize);

    return {
        tourData: listData,
        totalRecords,
        totalPages,
        tourLoading: query.isLoading,
        tourError: query.isError,
    };
};