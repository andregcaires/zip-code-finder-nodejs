import { ZipCodeFinderServiceTemplate } from "./zip-code-finder-service-template";
import { ZipCode } from "zip-code-finder-domain";
import { ResultDto } from "../dtos/result-dto";
export declare class ZipCodeFinderServiceByApis extends ZipCodeFinderServiceTemplate {
    findAddressBySource(zipCode: ZipCode): Promise<ResultDto>;
}
//# sourceMappingURL=zip-code-finder-service-by-apis.d.ts.map