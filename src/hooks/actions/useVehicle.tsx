import apiClient from "@/axios";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useUser } from "./useAuth";
import { useListCompanyOwner } from "./useCompanyOwner";
import { QUERY_KEYS } from "./query-keys";

const fetchListVehicle = async (body: any) => {
    const res = await apiClient.post("supplier/GetListSupplierByAgent", body);
    return res.data;
};

export const useListVehicle = (filters: { page: number; pageSize: number}) => {
    const { user } = useUser();
    const { coData } = useListCompanyOwner();

    const query = useQuery({
        queryKey: [
            QUERY_KEYS.VEHICLE.LIST_VEHICLE,
            filters,
            coData?.strCompanyGUID,
        ],
        queryFn: () =>  
            fetchListVehicle({
            strCompanyPartnerGUID: coData?.strCompanyGUID,
            strCompanyOwnerGUID: user?.strCompanyGUID,
            intCurrencyID: user?.intCurrencyID,
            strSupplierGUID: null,
            strFilterSupplierName: null,
            strFilterLocationCode: null,
            strPriceFromRange: null,
            dtmDateStart: null,
            intCateID: 31,
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
        vehicleData: listData,
        totalRecords,
        totalPages,
        vehicleLoading: query.isLoading,
        vehicleError: query.isError,
    };
}