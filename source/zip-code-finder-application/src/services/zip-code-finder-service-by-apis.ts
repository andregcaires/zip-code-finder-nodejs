import { ZipCodeFinderServiceTemplate } from "./zip-code-finder-service-template";
import { ZipCode } from "zip-code-finder-domain";
import { HttpUtilsImpl } from '../utils/http-utils'
import { ViaCepResponseDto } from "../dtos/viacep-response-dto";

export class ZipCodeFinderServiceByApis extends ZipCodeFinderServiceTemplate {

    async findAddressBySource(zipCode: ZipCode): Promise<void> {
        
        const httpUtils: HttpUtilsImpl = new HttpUtilsImpl();

        const response: ViaCepResponseDto = await httpUtils.getZipCodeByViaCep(zipCode.toString());

        if (response.erro == null) {

            super.resultDto.setError(response.erro);

        } else {

            super.resultDto.setAddress(response.toAddressDto());
        }
    }
}
