export type PatientHeaderContext = {
  patientId: number | null;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  uhid: number;
  orderNumber: string;
  orderStatus: string;
  billStatus: string;
  phoneNumber: string;
  pharmacyContext: PharmaContext;
};

export type PharmaContext = {
  orderNumber: string;
  uhid: number | null;
  sequenceNumber: string;
  billNumber: string;
  transactionId: string;
  orderDate: Date | null;
  lastModifiedDate: Date| null;
  createdBy: string;
  lastModifiedBy: string;
  amountPaid: number;
  dueAmount: number;
  status: string;
};

export type PatientAction = {
  type: string;
  payload: PatientHeaderContext;
  hasPatientHeader: boolean;
};
