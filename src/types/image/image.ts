import * as t from "io-ts";
import { DateFromISOString } from "io-ts-types";
import { Identifier } from "./identifiers";
import { UploadInfo } from "./upload-info";
import { Asset } from "~types/asset";
import { FileMetadata, ImageMetadata } from "./metadata";
import { Crop } from "~types/crop";
import { SyndicationRights, SyndicationStatus } from "~types/syndication";
import { InvalidReason } from "~types/image/invalid-reason";
import { Cost } from "./cost";
import { Persisted } from "./persisted";
import { Lease } from "~types/lease";
import { Collection } from "~types/collection";
import { Usage } from "~types/usage";
import { UserMetadata } from "./metadata";
import { ArgoEntity, DataEntity } from "~/types/argo";
import { EmptyUsage } from "~types/usage/empty-usage";

// TODO be better!
const UsageRights = t.unknown;
type UsageRights = t.TypeOf<typeof UsageRights>;

const baseImage = t.intersection([
  t.type({
    id: t.string,
    uploadTime: DateFromISOString,
    uploadedBy: t.string,
    identifiers: Identifier,
    uploadInfo: UploadInfo,
    source: Asset,
    fileMetadata: FileMetadata,
    metadata: ImageMetadata,
    originalMetadata: ImageMetadata,
    usageRights: UsageRights,
    originalUsageRights: UsageRights,
    exports: t.readonlyArray(Crop),
    valid: t.boolean,
    invalidReasons: InvalidReason,
    cost: Cost,
    persisted: Persisted,
    syndicationStatus: SyndicationStatus,
  }),
  t.partial({
    lastModified: DateFromISOString,
    thumbnail: Asset,
    optimisedPng: Asset,
    syndicationRights: t.union([t.nullType, SyndicationRights]),
    userMetadataLastModified: DateFromISOString,
  }),
]);

// const GridImage = baseImage;

const GridImage = t.intersection([
  baseImage,
  t.type({
    leases: Lease,
    collections: t.readonlyArray(Collection),
    usages: t.union([EmptyUsage, DataEntity(DataEntity(Usage))]),
  }),
  t.partial({
    userMetadata: UserMetadata,
  }),
]);

type GridImage = t.TypeOf<typeof GridImage>;

const ArgoGridImage = ArgoEntity(
  t.intersection([
    baseImage,
    t.type({
      leases: ArgoEntity(Lease),
      collections: ArgoEntity(t.readonlyArray(Collection)),
      usages: t.union([EmptyUsage, ArgoEntity(DataEntity(t.readonlyArray(Usage)))]),
    }),
    t.partial({
      userMetadata: ArgoEntity(UserMetadata),
    }),
  ])
);

type ArgoGridImage = t.TypeOf<typeof ArgoGridImage>;

export { GridImage, ArgoGridImage };
