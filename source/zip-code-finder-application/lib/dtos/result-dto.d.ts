import { AddressDto } from "./address-dto";
import { ErrorDto } from "./error-dto";
export declare class ResultDto {
    private address?;
    private error?;
    setError(errorMessage: string): void;
    setAddress(address: AddressDto): void;
    getAddress(): AddressDto | undefined;
    getError(): ErrorDto | undefined;
    constructor();
}
//# sourceMappingURL=result-dto.d.ts.map