import { ResultDto } from "../dtos/result-dto";
import { ZipCode } from 'zip-code-finder-domain';
export declare abstract class ZipCodeFinderServiceTemplate {
    resultDto: ResultDto;
    abstract findAddressBySource(zipcode: ZipCode): Promise<ResultDto>;
    findAddressByZipCode(zipCodeString?: string): Promise<ResultDto>;
}
//# sourceMappingURL=zip-code-finder-service-template.d.ts.map