import {
  PrintUsageMetadata,
  DigitalUsageMetadata,
  SyndicationUsageMetadata,
  FrontUsageMetadata,
  DownloadUsageMetadata,
} from "./usage-metadata";
import { ArgoEntity } from "./argo";

enum UsageReferenceType {
  InDesign = "indesign",
  Frontend = "frontend",
  Composer = "composer",
  Syndication = "syndication",
  Front = "front",
  Download = "download",
}

type UsageReference = {
  type: UsageReferenceType;
  uri?: URL;
  name?: string;
};

enum UsageType {
  Print = "print",
  Digital = "digital",
  Syndication = "syndication",
  Download = "download",
}

enum UsageStatus {
  Pending = "pending",
  Published = "published",
  Removed = "removed",
  Syndicated = "synducated",
  Downloaded = "downlaoded",
  Unknown = "unknown",
}

type Usage = {
  id: string;
  references: UsageReference[];
  platform: UsageType;
  media: string;
  status: UsageStatus;
  dateAdded?: Date;
  dateRemoved?: Date;
  lastModified: Date;
  printUsageMetadata?: PrintUsageMetadata;
  digitalUsageMetadata?: DigitalUsageMetadata;
  syndicationUsageMetadata?: SyndicationUsageMetadata;
  frontUsageMetadata?: FrontUsageMetadata;
  downloadUsageMetadata?: DownloadUsageMetadata;
};

export { UsageReferenceType, UsageReference, UsageType, UsageStatus, Usage };
