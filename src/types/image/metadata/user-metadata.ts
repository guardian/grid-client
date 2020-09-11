import * as t from "io-ts";
import { ImageMetadata } from "./image-metadata";
import { Photoshoot } from "./photoshoot";
import { ArgoEntity } from "~types";

const UserMetadata = t.partial({
  archived: t.boolean,
  labels: t.readonlyArray(t.string),
  metadata: ImageMetadata,
  usageRights: t.unknown, // TODO be better!
  photoshoot: Photoshoot,
});

type UserMetadata = t.TypeOf<typeof UserMetadata>;

const ArgoUserMetadata = ArgoEntity(
  t.intersection([
    t.type({
      archived: ArgoEntity(t.boolean),
      labels: ArgoEntity(ArgoEntity(t.readonlyArray(t.string))),
      metadata: ArgoEntity(ImageMetadata),
    }),
    t.partial({
      usageRights: ArgoEntity(t.unknown), // TODO be better!
      photoshoot: ArgoEntity(Photoshoot),
    }),
  ])
);

type ArgoUserMetadata = t.TypeOf<typeof ArgoUserMetadata>;

export { UserMetadata, ArgoUserMetadata };
