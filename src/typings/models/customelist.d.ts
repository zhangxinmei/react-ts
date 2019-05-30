declare interface ICustomeListItem {
  agentId: string;
  agentName: string;
  amount: string;
  contractNum: string;
  leadName: string;
  leadPhone: string;
  leadSn: string;
  number: string;
  orderNo: string;
  payDate: string;
  payStatus: string;
  product: string;
  productSn: string;
  staffName: string;
  validDate: string;
}
declare interface ICustomeList {
  data: {
    current: number;
    pages: number;
    records: ICustomeListItem[];
    size: number;
    total: number;
  };
}
