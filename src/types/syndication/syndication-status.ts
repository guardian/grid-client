import * as t from "io-ts";

enum SyndicationStates {
  Sent = "sent",
  Queued = "queued",
  Blocked = "blocked",
  Review = "review",
  Unsuitable = "unsuitable",
}

const states: { [name: string]: null } = Object.values(SyndicationStates).reduce((acc, item) => {
  return { ...acc, [item]: null };
}, {});

const SyndicationStatus = t.keyof(states);

type SyndicationStatus = t.TypeOf<typeof SyndicationStatus>;

export { SyndicationStatus };
