import { merchi } from "merchi_sdk_js";
import { backendUri, websocketServer } from "./url-utility";

export const MERCHI_SDK: any = merchi(backendUri, websocketServer);
