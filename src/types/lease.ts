enum MediaLeaseType {
  AllowUse = "allow-use",
  DenyUse = "deny-use",
  AllowSyndication = "allow-syndication",
  DenySyndication = "deny-syndication",
}

type MediaLease = {
  id?: string;
  leasedBy?: string;
  startDate?: Date;
  endDate?: Date;
  access: MediaLeaseType;
  notes?: string;
  mediaId: string;
  createdAt: Date;
};

type Leases = {
  leases: MediaLease[];
  lastModified?: Date;
};

export { MediaLeaseType, MediaLease, Leases };
