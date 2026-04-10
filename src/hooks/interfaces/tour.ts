export interface ITourList {
    No: number;
    strServiceName: string;
    strTourGUID: string;
    strTourCode: string;
    strTourName: string;
    strServiceNameUrl: string;
    intCateID: number;
    intCurrencyID: number;
    intNoOfDay: number;
    strRemark: string;
    strOverview: string;
    strTourImageUrl: string;
    strCode: string;
    IsPaxMaster: number;
    IsTourMaster: number;
    IsHasSellPrice: number;
    strOriginalSupplierName: string;
    intPaxMax: number;
    intDurationDiff: number;
    strDateStart: string;
    strDateEnd: string;
    strModuleTourGUID: string;
    strFromTourGUID: string;
    intTypeTour: number;
    IsHasPriceKid: number;
    IsCustomizable: number;
    strPublishDate: string;
    strCreatedBy: string;
    strListTourDestinationName: string;
    strListTourMainAttractionName: string;
    LastUpdatedDate: string;
    strOwnerCompanyName: string;
    strLangCode: string;
    strCateName: string;
    dblPriceFrom: number;
    strPriceLevelGUID: string;
    intSearchScore: number;
    intTotalRecords: number;
}


export interface ItourDetail {
    strTourGUID: string,
    strServiceName: string,
    strCompanyName: string,
    strTourImageUrl: string,
    intPaxMax: number,
    strRemark: string,
    strOverview: string,
    strListTourDestinationName: string,
    strIncluded: string,
    strExcluded: string,
    strPriceLevelGUID:string,
    IsHasPriceKid:boolean,
    intEasiaCateID:number,
    strListEasiaCateID:string,
    intCateID:number,
}

export interface ITourDay {
    intDayOrder: number,
    strDayContent: string
}

export interface ITourSearch {
    intCurPage: number,
    intPageSize: number,
    strSearchText: string,
    intPaxAdult: number,
    intPaxChild: number,
    dteStartDate: string,
    dteEndDate: string,
}

export interface ITourPartner {
    strCompanyGUID: string,
    strCompanyName: string,
    intTotalTours: number,
    strCompanyLogoUrl: string,
    strCompanyAddr: string,
    strCompanyPhone: string,
    strCompanyHotline: string,
    strCompanyWebUrl: string,
    strCompanyEmail: string,
    intRank: number
}


export interface ITourGetPrice {
    strTourGUID: string,
    strPriceLevelGUID: string,
    intNoOfAdult: number,
    xmlNoOfChild: string,
    dtmFilterDateFrom: string,
    dtmFilterDateTo: string,
    strCompanyOwnerGUID: string,
    IsHasPriceKid: false,
    intEasiaCateID: number,
    intCateID: number,
    tblsReturn: string,
    dblTotalPrice: number
}