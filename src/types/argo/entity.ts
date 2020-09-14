import * as t from "io-ts";
import { IntersectionC, KeyofC, Mixed, PartialC, ReadonlyArrayC, StringC, Type, TypeC } from "io-ts";
import URLFromString from "../io-ts/URLFromString";
import { ArgoAction } from "./action";
import { ArgoLink } from "./link";

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

export { ArgoEntity };
