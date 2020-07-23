enum ArgoMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

type ArgoAction = {
  name: string;
  href: URL;
  method: ArgoMethod;
};

type ArgoLink = {
  rel: string;
  href: URL;
};

type ArgoEntity<T> = {
  uri: URL;
  data: T;
  actions?: ArgoAction[];
  links?: ArgoLink[];
};

export { ArgoMethod, ArgoAction, ArgoLink, ArgoEntity };
