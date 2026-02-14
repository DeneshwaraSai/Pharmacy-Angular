export const PHARMACY_HOST_NAME = "http://localhost:8080";

export const PATIENT_SEARCH_PATH = "/patient-search/SearchPatient"
export class EndPoints {
  static PATIENT_SAVE = "/patient/save";
  static PATIENT_UPDATE = "/patient/update";
  static FIND_PATIENT_BY_ID = "/patient/{patientId}";
  static FIND_PATIENT_HEADER_BY_UHID = "/patient/uhid/{uhid}";
  static SEARCH_PATIENT_BY_NAME = "/patient/search/{value}";
  static PATIENT_LIST = "/patient/list";
  static PATIENT_ADVANCED_SEARCH = "/patient/advancedSearch"

  static GET_TAX_CATEGORY = "/api/taxCategory/v1/list";

  static GET_CODE_VALUE = "/api/codeValue/v1/list";

  static SAVE_DRUG = "/apidrug/v1/save";
  static UPDATE_DRUG = "/api/drug/v1/update";
  static FIND_DRUG_BY_ID = "/api/drug/v1/{id}";
  static DRUG_LIST = "/api/drug/v1/all";
  static DRUG_LIST_BY_NAME = "/api/drug/v1/name";

  static SUPPLIER_CODE_VALUE = "/api/supplier/v1/codeValue";
  static SUPPLIER_LIST = "/api/supplier/v1/supplier-list";
  static SUPPLIER_CREATE = "/api/supplier/v1/create";
  static SUPPLIER_UPDATE = "/api/supplier/v1/update";
  static SUPPLIER_FIND_BY_ID = "/api/supplier/v1/{id}";

  static INVENTORY_CREATE = "/api/inventory/create";
  static INVENTORY_UPDATE = "/api/inventory/update";
  static INVENTORY_FIND_BY_ID = "/api/inventory/{id}";
  static INVENTORY_DASHBOARD = "/api/inventory/dashboard";
  static INVENTORY_UPDATE_STATUS = "/api/inventory/{id}/status/{status}";

  static ORDER_CREATE = "/api/order/create";
  static ORDER_UPDATE = "/api/order/update";
  static ORDER_FIND_BY_ORDERNUMBER = "/api/order/{orderNumber}";
  static INVENTORY_ORDER_SEARCH = "/api/inventory/order/search/{name}";

  static PHARMACY_PATIENT_CONTEXT = '/api/order/pharmaContext';
}
