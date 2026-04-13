import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./query-keys";
import { useUser } from "./useAuth";
import apiClient from "@/axios";

const fetchListCompanyOwner = async (body: any) => {
    const res = await apiClient.post("user/GetListCompanyOwner", body);
    return res.data;
};

export const useListCompanyOwner = () => {
    const { user } = useUser();

    const query = useQuery({
        queryKey: [
            QUERY_KEYS.COMPANY_OWNER.LIST_COMPANY_OWNER,
            user?.strUserGUID,
            user?.strCompanyGUID
        ],
        queryFn: () =>
            fetchListCompanyOwner({
                strUserPartnerGUID: user?.strUserGUID,
                strCompanyPartnerGUID: user?.strCompanyGUID,
                strCompanyOwnerGUID: null,
                intCurPage: 1,
                intPageSize: 1,
                strOrder: null,
                strFilterCompanyName: null,
                strCompanyNameUrl: "cong-ty-tnhh-ket-noi-du-lich-8F620",
                IsOwnerFriend: true,
                tblsReturn: "[0]"
            }),
        enabled: !!user,
        placeholderData: keepPreviousData,
    });

    return {
        coData: query.data?.[0]?.[0] ?? [],
        coLoading: query.isLoading,
        coError: query.isError,
    };
};