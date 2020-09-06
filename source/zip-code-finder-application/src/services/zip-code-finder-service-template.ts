import { ResultDto } from "../dtos/result-dto";

import { ZipCode } from 'zip-code-finder-domain';

export abstract class ZipCodeFinderServiceTemplate {

    resultDto: ResultDto;

    index: number;

    abstract findAddressBySource(zipcode: ZipCode): void;
}
