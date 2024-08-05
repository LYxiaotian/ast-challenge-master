import * as t from "@babel/types";
import { genInterface } from "../src/gen-interface";
import { genFunction } from "../src/gen-function";

export default (
  obj: Record<string, { requestType: string; responseType: string }>
) => {
  return t.file(
    t.program([
      ...Object.entries(obj).flatMap(([key]) => {
        const { requestType, responseType } = obj[key];
        return [
          genInterface(requestType, responseType, `Use${key}Query`),
          genFunction(responseType, `Use${key}Query`, `use${key}Query`),
        ];
      }),
    ])
  );
};
