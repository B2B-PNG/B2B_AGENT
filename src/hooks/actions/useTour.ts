import apiClient from "@/axios";

export const useListTour = async (body:any) => {
  const res = await apiClient.post(
    "public/tour/GetListTourPublic",
    body
  );
  return res.data;
};
export const useTourDetail = async (body:any) => {
  const res = await apiClient.post(
    "public/tour/GetTourDetailPublic_V",
    body
  );
  return res.data;
};

export const useTourDay = async (body:any) => {
  const res = await apiClient.post(
    "public/tour/GetListTourDayPublic",
    body
  );
  return res.data;
};


export const useTourSearch = async (body:any) => {
  const res = await apiClient.post(
    "public/tour/SearchLocationAndTour",
    body
  );
  return res.data;
};


export const useTourPartner = async (body:any) => {
  const res = await apiClient.post(
    "public/tour/GetTopCompanyAndToursPublic",
    body
  );
  return res.data;
};
export const getTourGetPriceAPI = async (body:any) => {
  const res = await apiClient.post(
    "public/tour/GetListPriceLevelTour",
    body
  );
  return res.data;
};