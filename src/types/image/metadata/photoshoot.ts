import * as t from "io-ts";

const Photoshoot = t.type({
  title: t.string,
});

type Photoshoot = t.TypeOf<typeof Photoshoot>;

export { Photoshoot };
