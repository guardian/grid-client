import * as t from "io-ts";

enum ReferenceTypes {
  InDesign = "indesign",
  Frontend = "frontend",
  Composer = "composer",
  Syndication = "syndication",
  Front = "front",
  Download = "download",
}

const referenceTypes: { [name: string]: null } = Object.values(ReferenceTypes).reduce((acc, item) => {
  return { ...acc, [item]: null };
}, {});

const ReferenceType = t.keyof(referenceTypes);

type ReferenceType = t.TypeOf<typeof ReferenceType>;

export { ReferenceType };
