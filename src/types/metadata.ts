import { ArgoEntity } from "./argo";

type FileMetadata = {
  iptc: object;
  exif: object;
  exifSub: object;
  xmp: object;
  icc: object;
  getty: object;
  colourModel?: string;
  colourModelInformation: object;
};

type ImageMetadata = {
  dateTaken?: Date;
  description?: string;
  credit?: string;
  creditUri?: string;
  byline?: string;
  title?: string;
  copyrightNotice?: string;
  copyright?: string;
  suppliersReference?: string;
  source?: string;
  specialInstructions?: string;
  keywords: string[];
  subLocation?: string;
  city?: string;
  state?: string;
  country?: string;
  subjects: string[];
  peopleInImage: string[];
};

type Photoshoot = {
  title: string;
};

// TODO be better!
type UsageRights = any;

type UserMetadata = {
  archived: boolean;
  labels: string[];
  metadata: ImageMetadata;
  usageRights?: UsageRights;
  photoshoot?: Photoshoot;
};

type ArgoUserMetadata = ArgoEntity<{
  archived: ArgoEntity<boolean>;
  labels: ArgoEntity<ArgoEntity<string>[]>;
  metadata: ArgoEntity<ImageMetadata>;
  usageRights?: ArgoEntity<UsageRights>;
  photoshoot?: ArgoEntity<Photoshoot>;
}>;

export { FileMetadata, ImageMetadata, UsageRights, UserMetadata, ArgoUserMetadata };
