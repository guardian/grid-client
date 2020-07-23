import { Asset } from "./asset";
import { FileMetadata, ImageMetadata, UserMetadata, UsageRights } from "./metadata";
import { Crop } from "./crop";
import { Usage } from "./usage";
import { Leases } from "./lease";
import { Collection } from "./collection";
import { SyndicationRights } from "./syndication-rights";
import { ArgoEntity, DataEntity } from "./argo";

enum Cost {
  Free = "free",
  Conditional = "conditional",
  Pay = "pay",
  OverQuota = "overquota",
}

enum PersistedReasons {
  PersistenceIdentifier = "persistence-identifier",
  Exports = "exports",
  Usages = "usages",
  Archived = "archived",
  Photographer = "photographer-category",
  Illustrator = "illustrator-category",
  Commissioned = "commissioned-agency",
  Leases = "leases",
  PersistedCollection = "persisted-collection",
  Photoshoot = "photoshoot",
  Labeled = "labeled",
  Edited = "edited",
}

type Persisted = {
  value: boolean;
  reasons: PersistedReasons[];
};

enum SyndicationStatus {
  Sent = "sent",
  Queued = "queued",
  Blocked = "blocked",
  Review = "review",
  Unsuitable = "unsuitable",
}

type Identifiers = {
  [name: string]: string;
};

type UploadInfo = {
  filename?: string;
};

type GridImage = ArgoEntity<{
  id: string;
  uploadTime: Date;
  uploadedBy: string;
  lastModified?: Date;
  identifiers: Identifiers;
  uploadInfo: UploadInfo;
  source: Asset;
  thumbnail?: Asset;
  optimisedPng?: Asset;
  fileMetadata: FileMetadata;
  userMetadata?: UserMetadata;
  metadata: ImageMetadata;
  originalMetadata: ImageMetadata;
  usageRights: UsageRights;
  originalUsageRights: UsageRights;
  exports: Crop[];
  usages: Usage[];
  leases: Leases;
  collections: Collection[];
  syndicationRights?: SyndicationRights;
  userMetadataLastModified?: Date;
  valid: boolean;
  invalidReasons: any;
  cost: Cost;
  persisted: Persisted;
  syndicationStatus: SyndicationStatus;
}>;

type CropSelection = {
  crop: DataEntity<Crop>;
  image: DataEntity<GridImage>;
};

export { Cost, PersistedReasons, Persisted, SyndicationRights, Identifiers, UploadInfo, GridImage, CropSelection };
