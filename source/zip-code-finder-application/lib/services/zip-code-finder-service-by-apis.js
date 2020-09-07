"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZipCodeFinderServiceByApis = void 0;
const zip_code_finder_service_template_1 = require("./zip-code-finder-service-template");
const http_utils_1 = require("../utils/http-utils");
const result_dto_1 = require("../dtos/result-dto");
const address_dto_1 = require("../dtos/address-dto");
class ZipCodeFinderServiceByApis extends zip_code_finder_service_template_1.ZipCodeFinderServiceTemplate {
    findAddressBySource(zipCode) {
        return __awaiter(this, void 0, void 0, function* () {
            const httpUtils = new http_utils_1.HttpUtilsImpl();
            const resultDto = new result_dto_1.ResultDto();
            const response = yield httpUtils.getZipCodeByViaCep(zipCode.toString());
            if (response.erro != true) {
                resultDto.setAddress(address_dto_1.AddressDto.fromViaCepResponse(response));
            }
            return resultDto;
        });
    }
}
exports.ZipCodeFinderServiceByApis = ZipCodeFinderServiceByApis;
//# sourceMappingURL=zip-code-finder-service-by-apis.js.map