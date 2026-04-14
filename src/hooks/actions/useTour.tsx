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
            QUERY_KEYS.TOUR.LIST_TOUR,
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



const fetchDetailTour = async (body: any) => {
    const res = await apiClient.post("tour/GetListTourDetailByPtn", body);
    return res.data;
};

export const useDetailTour = (filters: { page: number; pageSize: number; strServiceNameUrl: string }) => {
    const { user } = useUser();

    const query = useQuery({
        queryKey: [
            QUERY_KEYS.TOUR.DETAIL_TOUR,
            filters],
        queryFn: () =>
            fetchDetailTour({
                strTourGUID: null,
                strServiceNameUrl: filters?.strServiceNameUrl,
                intLangID: user?.intLangID,
                intCurPage: filters?.page,
                intPageSize: filters?.pageSize,
                strOrder: null,
                tblsReturn: "[0][2]"
            }),
        enabled: !!user,
        placeholderData: keepPreviousData,
    });

    const listData = query.data ?? [];
    const totalRecords = listData?.[0]?.intTotalRecords || 0;
    const totalPages = Math.ceil(totalRecords / filters.pageSize);

    return {
        tdData: listData,
        totalRecords,
        totalPages,
        tdLoading: query.isLoading,
        tdError: query.isError,
    };
};


const fetchListTourPublish = async (body: any) => {
    const res = await apiClient.post("tour/GetListTourPublish", body);
    return res.data;
};

export const useListTourPublish = (filters: { page: number; pageSize: number; intCateID: number, intProductID: number }) => {
    const { user } = useUser();
    const { coData } = useListCompanyOwner();

    const query = useQuery({
        queryKey: [
            QUERY_KEYS.TOUR.LIST_TOUR_PUBLISH,
            filters,
            coData?.strCompanyGUID,
        ],
        queryFn: () =>
            fetchListTourPublish({
                strTourGUID: null,
                strCompanyOwnerGUID: coData?.strCompanyGUID,
                strCompanyPartnerGUID: user?.strCompanyGUID,
                strMemberPartnerGUID: user?.strUserGUID,
                intLangID: null,
                strPriceLevelGUID: null,
                intCateID: filters?.intCateID,
                intProductID: filters?.intProductID,
                strNoOfDayRange: null,
                strFilterServiceName: null,
                strListEasiaCateID: null,
                strListTransportOptionID: null,
                dtmFilterDateStart: null,
                dtmFilterDateValidFrom: null,
                dtmFilterDateValidTo: null,
                strOrder: null,
                strPriceFromRange: null,
                intCurrencyView: 1,
                strLocationCode: null,
                intCurPage: filters.page,
                intPageSize: filters.pageSize,
                tblsReturn: "[0]",
                intTotalPax: null
            }),
        enabled: !!user && !!coData,
        placeholderData: keepPreviousData,
    });

    const listData = query.data?.[0] ?? [];
    const totalRecords = listData?.[0]?.intTotalRecords || 0;
    const totalPages = Math.ceil(totalRecords / filters.pageSize);

    return {
        tdpData: listData,
        totalRecords,
        totalPages,
        tdpLoading: query.isLoading,
        tdpError: query.isError,
    };
};

const fetchListTourDay = async (body: any) => {
    const res = await apiClient.post("tour/GetListTourDayByPtn", body);
    return res.data;
};

export const useListTourDay = (filters: { strTourGUID: string }) => {
    const { user } = useUser();

    const query = useQuery({
        queryKey: [
            QUERY_KEYS.TOUR.LIST_TOUR_DAY,
            filters
        ],
        queryFn: () =>
            fetchListTourDay({
                strTourDayGUID: null,
                strTourGUID: filters?.strTourGUID,
                intLangID: user?.intLangID,
                intCurPage: null,
                intPageSize: null,
                strOrder: null,
                tblsReturn: "[0][2]"
            }),
        enabled: !!user,
        placeholderData: keepPreviousData,
    });

    const listData = query.data?.[0] ?? [];

    return {
        tddData: listData,
        tddLoading: query.isLoading,
        tddError: query.isError,
    };
};