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

const fetchDetailFlight = async (body: any) => {
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
        strCompanyPartnerGUID:  user?.strCompanyGUID,
        strCompanyOwnerGUID: coData?.strCompanyGUID,
        strSupplierGUID: filters?.strSupplierGUID ?? null,
        intCurrencyID: user?.intCurrencyID,
        strFilterSupplierName: filters?.strFilterSupplierName ?? null,
        strFilterLocationCode: null,
        strPriceFromRange: null,
        dtmDateStart: null,
        intCateID: 6,
        strListEasiaCateID: null,
        intCurPage: filters?.page,
        intPageSize: filters?.pageSize,
        strOrder: null,
        tblsReturn: "[0]",
      }),
    enabled:
      !!user?.strCompanyGUID &&
      !!coData?.strCompanyGUID &&
      !!user?.intCurrencyID &&
      (!!filters?.strSupplierGUID || !!filters?.strFilterSupplierName),
    placeholderData: keepPreviousData,
  });
  const listData = query.data?.[0] ?? [];
  const totalRecords = listData?.[0]?.intTotalRecords || 0;
  const totalPages = Math.ceil(totalRecords / filters.pageSize);

  return {
    fdData: listData,
    totalRecords,
    totalPages,
    fdLoading: query.isLoading,
    fdError: query.isError,
  };
};


