import { cleanUndefinedToNull } from "./entity-resolver";
import { MERCHI_SDK as MERCHI } from "@/public_components/merchi-sdk";

export async function ssrHandler(fun) {
  return {
    props: {
      data: await new Promise((resolve, reject) => {
        fun((data) => {
          console.log("SSR Data", data);

          if (Array.isArray(data)) {
            const resolution = cleanUndefinedToNull(MERCHI.toJsonList(data));
            console.log("SSR Data List", resolution);
            resolve(resolution);
          } else {
            const resolution = cleanUndefinedToNull(MERCHI.toJson(data));
            console.log("SSR Data Object", resolution);
            resolve(resolution);
          }
        }, reject);
      }),
    },
  };
}

export async function fetchSSR(entity, embed) {
  return ssrHandler((onSuccess, onFailed) => {
    entity.get(onSuccess, onFailed, embed);
  });
}
