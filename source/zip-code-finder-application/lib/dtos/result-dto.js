"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultDto = void 0;
const error_dto_1 = require("./error-dto");
class ResultDto {
    constructor() {
        this.address = undefined;
        this.error = undefined;
    }
    setError(errorMessage) {
        this.error = new error_dto_1.ErrorDto(errorMessage);
    }
    setAddress(errorMessage) {
        // TODO implementation
    }
    getAddress() {
        return this.address;
    }
    getError() {
        return this.error;
    }
}
exports.ResultDto = ResultDto;
//# sourceMappingURL=result-dto.js.map