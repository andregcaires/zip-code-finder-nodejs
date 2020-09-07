"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressDto = void 0;
class AddressDto {
    constructor(zipCode, state, city, neighborhood, street) {
        this.zipCode = zipCode;
        this.state = state;
        this.city = city;
        this.neighborhood = neighborhood;
        this.street = street;
    }
    static fromViaCepResponse(responseDto) {
        return new AddressDto(responseDto.cep, responseDto.uf, responseDto.localidade, responseDto.bairro, responseDto.logradouro);
    }
}
exports.AddressDto = AddressDto;
//# sourceMappingURL=address-dto.js.map