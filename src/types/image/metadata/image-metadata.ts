import * as t from "io-ts";
import { DateFromISOString } from "io-ts-types";

const ImageMetadata = t.partial({
  keywords: t.readonlyArray(t.string),
  subjects: t.readonlyArray(t.string),
  peopleInImage: t.readonlyArray(t.string),
  dateTaken: DateFromISOString,
  description: t.string,
  credit: t.string,
  creditUri: t.string, // TODO should this be a URL type?
  byline: t.string,
  title: t.string,
  copyrightNotice: t.string,
  copyright: t.string,
  suppliersReference: t.string,
  source: t.string,
  specialInstructions: t.string,
  subLocation: t.string,
  city: t.string,
  state: t.string,
  country: t.string,
});

type ImageMetadata = t.TypeOf<typeof ImageMetadata>;

export { ImageMetadata };
