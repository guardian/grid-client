type Property = {
  propertyCode: string;
  expiresOn?: Date;
  value?: string;
};

type Right = {
  rightCode: string;
  acquired?: boolean;
  properties: Property[];
};

type Supplier = {
  supplierName?: string;
  supplierId: string;
  prAgreement?: boolean;
};

type SyndicationRights = {
  published?: Date;
  suppliers: Supplier[];
  rights: Right[];
  isInferred: boolean;
};

export { Property, Right, Supplier, SyndicationRights };
