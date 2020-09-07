import { AddressDto } from "./address-dto";

export class ViaCepResponseDto {
    
    erro: string;

    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;  
    
    toAddressDto(): AddressDto {

        return new AddressDto(this.cep, this.uf, this.localidade, this.bairro, this.logradouro);
    }
}
