import * as t from "io-ts";
import { DateFromISOString } from "io-ts-types";

import { Identifier } from "./identifiers";
import { UploadInfo } from "./upload-info";
import { FileMetadata, ImageMetadata } from "./metadata";
import { InvalidReason } from "./invalid-reason";
import { Cost } from "./cost";
import { Persisted } from "./persisted";
import { UserMetadata } from "./metadata";
import { Lease } from "../lease";

import { ArgoEntity, DataEntity } from "../argo";
import { Asset } from "../asset";
import { Crop } from "../crop";
import { Collection } from "../collection";
import { SyndicationRights, SyndicationStatus } from "../syndication";
import { EmptyUsage, Usage } from "../usage";

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
