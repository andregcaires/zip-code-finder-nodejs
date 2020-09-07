import { AddressDto } from "./address-dto";
import { ErrorDto } from "./error-dto";

export class ResultDto {

    private address?: AddressDto;
    private error?: ErrorDto;

    setError(errorMessage: string): void {

        this.error = new ErrorDto(errorMessage);
    }

    setAddress(address: AddressDto): void {
        
        this.address = address;
    }

    getAddress(): AddressDto | undefined {

        return this.address;
    }

    getError(): ErrorDto | undefined {

        return this.error;
    }

    constructor() {
        
        this.address = undefined;
        this.error = undefined;
    }
}
