import { ZipCodeFinderServiceTemplate } from "./zip-code-finder-service-template";
import { ZipCode } from "zip-code-finder-domain";
import { HttpUtilsImpl } from '../utils/http-utils'
import { ViaCepResponseDto } from "../dtos/viacep-response-dto";
import { ResultDto } from "../dtos/result-dto";
import { AddressDto } from "../dtos/address-dto";

export class ZipCodeFinderServiceByApis extends ZipCodeFinderServiceTemplate {

    async findAddressBySource(zipCode: ZipCode): Promise<ResultDto> {
        
        const httpUtils: HttpUtilsImpl = new HttpUtilsImpl();

        const resultDto: ResultDto = new ResultDto();

        const response: ViaCepResponseDto = await httpUtils.getZipCodeByViaCep(zipCode.toString());

        if (response.erro != true) {

            resultDto.setAddress(AddressDto.fromViaCepResponse(response));
        }

        return resultDto;
    }
}
