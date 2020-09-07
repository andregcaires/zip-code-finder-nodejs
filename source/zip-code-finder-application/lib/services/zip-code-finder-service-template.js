"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZipCodeFinderServiceTemplate = void 0;
const result_dto_1 = require("../dtos/result-dto");
const zip_code_finder_domain_1 = require("zip-code-finder-domain");
class ZipCodeFinderServiceTemplate {
    constructor() {
        this.resultDto = new result_dto_1.ResultDto();
        this.index = 0;
    }
    findAddressByZipCode(zipCodeString) {
        this.resultDto = new result_dto_1.ResultDto();
        let zipCode = zip_code_finder_domain_1.ZipCode.createNew(zipCodeString);
        if (zipCode.isValid()) {
            this.index = zipCode.zipCodeLength - 1;
            while (this.index >= 0) {
                this.findAddressBySource(zipCode);
                try {
                    if (this.resultDto.getError == null) {
                        zipCode.updateCharacterWithZeroByIndex(this.index);
                        this.index--;
                    }
                    else {
                        break;
                    }
                }
                catch (error) {
                    // TODO implement logging
                    console.log(error);
                }
            }
            if (this.index === 0) {
                this.resultDto.setError('CEP não encontrado');
            }
        }
        else {
            this.resultDto.setError('CEP inválido');
        }
        return this.resultDto;
    }
}
exports.ZipCodeFinderServiceTemplate = ZipCodeFinderServiceTemplate;
//# sourceMappingURL=zip-code-finder-service-template.js.map