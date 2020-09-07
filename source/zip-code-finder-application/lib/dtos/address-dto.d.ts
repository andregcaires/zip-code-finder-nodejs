import { ViaCepResponseDto } from "./viacep-response-dto";
export declare class AddressDto {
    zipCode: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    constructor(zipCode: string, state: string, city: string, neighborhood: string, street: string);
    static fromViaCepResponse(responseDto: ViaCepResponseDto): AddressDto;
}
//# sourceMappingURL=address-dto.d.ts.map