// types.ts
export interface Branch {
  id?: string;
  name: string;
  location: string;
  openingTime: string;
  closingTime: string;
}

export interface Service {
  id?: string;
  branchId: string;
  name: string;
  duration: number;
}
