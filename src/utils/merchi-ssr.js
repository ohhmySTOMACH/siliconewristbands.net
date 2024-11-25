import { cleanUndefinedToNull } from "./entity-resolver";
import { MERCHI_SDK as MERCHI } from "@/public_components/merchi-sdk";

export async function ssrHandler(fun) {
  return {
    props: {
      data: await new Promise((resolve, reject) => {
        fun((data) => {
          console.log("Log-ssrHandler data: ", data);
          console.log("Log-ssrHandler data type: ", typeof data);
          if (Array.isArray(data)) {
            const resolution = cleanUndefinedToNull(MERCHI.toJsonList(data));
            // console.log("Log-ssrHandler List resolution: ", resolution);
            resolve(resolution);
          } else {
            const resolution = cleanUndefinedToNull(MERCHI.toJson(data));
            // console.log("Log-ssrHandler single resolution: ", resolution);
            resolve(resolution);
          }
        }, reject);
      }),
    },
  };
}

export async function fetchSSR(entity, params) {
  console.log("Log-fetchSSR params: ", params);
  return ssrHandler((onSuccess, onFailed) => {
    entity.get(onSuccess, onFailed, params);
  });
}
