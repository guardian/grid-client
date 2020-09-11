import * as t from "io-ts";
import URLFromString from "~types/io-ts/URLFromString";
import { ArgoAction } from "./action";
import { ArgoLink } from "./link";
import { IntersectionC, KeyofC, Mixed, PartialC, ReadonlyArrayC, StringC, Type, TypeC } from "io-ts";

const ArgoEntity: <C extends Mixed>(
  codec: C
) => IntersectionC<
  [
    TypeC<{ data: C; url: Type<URL, string, unknown> }>,
    PartialC<{
      links: ReadonlyArrayC<TypeC<{ rel: StringC; href: Type<URL, string, unknown> }>>;
      actions: ReadonlyArrayC<
        TypeC<{ method: KeyofC<{ [p: string]: null }>; name: StringC; href: Type<URL, string, unknown> }>
      >;
    }>
  ]
> = <C extends t.Mixed>(codec: C) =>
  t.intersection([
    t.type({
      url: URLFromString,
      data: codec,
    }),
    t.partial({
      actions: t.readonlyArray(ArgoAction),
      links: t.readonlyArray(ArgoLink),
    }),
  ]);

// type ArgoEntity = t.TypeOf<typeof ArgoEntity>;

export { ArgoEntity };
