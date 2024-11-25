import { cleanUndefinedToNull } from "./entity-resolver";
import { MERCHI_SDK as MERCHI } from "@/public_components/merchi-sdk";

export async function ssrHandler(fun) {
  return {
    props: {
      data: await new Promise((resolve, reject) => {
        try {
          // Add timeout to prevent hanging
          const timeoutId = setTimeout(() => {
            reject(new Error("SSR Handler timeout after 30 seconds"));
          }, 30000);

          // Add error logging
          console.log("Log-ssrHandler: Starting execution");

          fun(
            (data) => {
              clearTimeout(timeoutId);
              console.log("Log-ssrHandler: Received data");
              console.log("Log-ssrHandler data type:", typeof data);

              try {
                let resolution;
                if (Array.isArray(data)) {
                  resolution = cleanUndefinedToNull(MERCHI.toJsonList(data));
                  console.log("Log-ssrHandler: Processed array data");
                } else {
                  resolution = cleanUndefinedToNull(MERCHI.toJson(data));
                  console.log("Log-ssrHandler: Processed single data");
                }
                resolve(resolution);
              } catch (error) {
                console.error("Log-ssrHandler: Error processing data:", error);
                reject(error);
              }
            },
            (error) => {
              clearTimeout(timeoutId);
              console.error("Log-ssrHandler: Explicit error callback:", error);
              reject(error);
            }
          );
        } catch (error) {
          console.error("Log-ssrHandler: Outer try-catch error:", error);
          reject(error);
        }
      }),
    },
  };
}

export async function fetchSSR(entity, params) {
  // console.log("Log-fetchSSR params: ", params);
  console.log("Log-fetchSSR entity: ", entity);
  return ssrHandler((onSuccess, onFailed) => {
    entity.get(
      (data) => {
        // console.log("Entity.get success:", data);
        onSuccess(data);
      },
      (error) => {
        console.error("Entity.get error:", error);
        onFailed(error);
      },
      params
    );
  });
}

export async function fetchProductList(params) {
  return ssrHandler((onSuccess, onFailed) => {
    MERCHI.products.get(
      (data) => {
        onSuccess(data);
      },
      (error) => {
        console.error("products.get error:", error);
        onFailed(error);
      },
      params
    );
  });
}
