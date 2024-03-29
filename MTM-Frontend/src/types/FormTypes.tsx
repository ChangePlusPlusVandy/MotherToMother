export interface DonationDetailType {
  item: string;
  category: string;
  newQuantity: number;
  usedQuantity: number;
}

export interface DemographicDetailType {
  numberServed: number;
  whiteNum: number;
  latinoNum: number;
  blackNum: number;
  nativeNum: number;
  asianNum: number;
  otherNum: number;
}

export type itemType = Record<string, [number, number]>;
export type categoryType = Record<string, itemType>;

export type ItemResponse = {
  id: number;
  category: string;
  name: string;
  quantityUsed: number;
  quantityNew: number;
  valueNew: number;
  valueUsed: number;
};

export type OutgoingDonationRequestType = {
  email: string | null;
  donationDetails: DonationDetailType[];
} & DemographicDetailType;
