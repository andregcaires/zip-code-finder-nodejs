import { Injectable } from '@nestjs/common';
import { ZipCodeFinderServiceByApis } from 'zip-code-finder-application/lib';
import { ResultDto } from 'zip-code-finder-application/lib/dtos/result-dto';

@Injectable()
export class ZipCodeService {

    private zipCodeFinderService: ZipCodeFinderServiceByApis;

    public async findAddressByZipCode(zipCode?: string): Promise<ResultDto> {

        this.zipCodeFinderService = new ZipCodeFinderServiceByApis();

        return await this.zipCodeFinderService.findAddressByZipCode(zipCode);

    }
}
