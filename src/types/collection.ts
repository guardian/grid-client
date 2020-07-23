import { ArgoEntity } from "./argo";

type ActionData = {
  author: string;
  date: Date;
};

type Collection = ArgoEntity<{
  path: string[];
  pathId: string;
  actionData: ActionData;
  description: string;
}>;

export { ActionData, Collection };
