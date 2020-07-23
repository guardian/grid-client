type PrintImageSize = {
  x: number;
  y: number;
};

type PrintUsageMetadata = {
  sectionName: string;
  issueDate: Date;
  pageNumber: number;
  storyName: string;
  publicationCode: string;
  publicationName: string;
  layoutId?: number;
  edition?: number;
  size?: PrintImageSize;
  orderedBy?: string;
  sectionCode: string;
  notes?: string;
  source?: string;
};

type DigitalUsageMetadata = {
  webUrl: URL;
  webTitle: string;
  sectionId: string;
  composerUrl?: URL;
};

type SyndicationUsageMetadata = {
  partnerName: string;
};

type FrontUsageMetadata = {
  addedBy: string;
  front: string;
};

type DownloadUsageMetadata = {
  downloadedBy: string;
};

export {
  PrintImageSize,
  PrintUsageMetadata,
  DigitalUsageMetadata,
  SyndicationUsageMetadata,
  FrontUsageMetadata,
  DownloadUsageMetadata,
};
