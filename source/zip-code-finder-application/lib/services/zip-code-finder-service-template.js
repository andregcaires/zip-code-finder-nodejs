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
exports.ZipCodeFinderServiceTemplate = void 0;
const result_dto_1 = require("../dtos/result-dto");
const zip_code_finder_domain_1 = require("zip-code-finder-domain");
class ZipCodeFinderServiceTemplate {
    constructor() {
        this.resultDto = new result_dto_1.ResultDto();
    }
    findAddressByZipCode(zipCodeString) {
        return __awaiter(this, void 0, void 0, function* () {
            let zipCode = zip_code_finder_domain_1.ZipCode.createNew(zipCodeString);
            if (zipCode.isValid()) {
                while (zipCode.hasNextIndex()) {
                    this.resultDto = yield this.findAddressBySource(zipCode);
                    try {
                        if (this.resultDto.getAddress() == null) {
                            zipCode.updateCharacterWithZeroByIndex();
                            zipCode.nextIndex();
                        }
                        else {
                            break;
                        }
                    }
                    catch (error) {
                        // TODO implement logging
                        console.log(error);
                        zipCode.nextIndex();
                    }
                }
                if (!zipCode.hasNextIndex()) {
                    this.resultDto.setError('CEP não encontrado');
                }
            }
            else {
                this.resultDto.setError('CEP inválido');
            }
            return this.resultDto;
        });
    }
}
exports.ZipCodeFinderServiceTemplate = ZipCodeFinderServiceTemplate;
//# sourceMappingURL=zip-code-finder-service-template.js.map