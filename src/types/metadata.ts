import { ArgoEntity } from "./argo";

type FileMetadata = {
  iptc: any;
  exif: any;
  exifSub: any;
  xmp: any;
  icc: any;
  getty: any;
  colourModel?: string;
  colourModelInformation: any;
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
