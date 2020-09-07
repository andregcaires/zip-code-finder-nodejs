export class AddressDto {

    zipCode: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;

    constructor(
        zipCode: string,
        state: string,
        city: string,
        neighborhood: string,
        street: string
    ) {

        this.zipCode = zipCode;
        this.state = state;
        this.city = city;
        this.neighborhood = neighborhood;
        this.street = street;
    }

}
