import { AddressDto } from "./address-dto";

export class ViaCepResponseDto {
    
    erro: boolean = false;

    cep: string = '';
    logradouro: string = '';
    complemento: string = '';
    bairro: string = '';
    localidade: string = '';
    uf: string = '';
}
