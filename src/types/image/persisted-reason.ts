import * as t from "io-ts";

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

const persistedReasons: { [name: string]: null } = Object.values(PersistedReasons).reduce((acc, item) => {
  return { ...acc, [item]: null };
}, {});

const PersistedReason = t.keyof(persistedReasons);

type PersistedReason = t.TypeOf<typeof PersistedReason>;

export { PersistedReason };
