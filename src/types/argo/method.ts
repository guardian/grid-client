import * as t from "io-ts";

enum ArgoMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

const methods: { [name: string]: null } = Object.values(ArgoMethods).reduce((acc, item) => {
  return { ...acc, [item]: null };
}, {});

const ArgoMethod = t.keyof(methods);

type ArgoMethod = t.TypeOf<typeof ArgoMethod>;

export { ArgoMethod };
