import { ResultDto } from "../dtos/result-dto";
import { ZipCode } from 'zip-code-finder-domain';
export declare abstract class ZipCodeFinderServiceTemplate {
    resultDto: ResultDto;
    index: number;
    abstract findAddressBySource(zipcode: ZipCode): void;
    findAddressByZipCode(zipCodeString?: string): ResultDto;
}
//# sourceMappingURL=zip-code-finder-service-template.d.ts.map