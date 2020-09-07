import { ZipCodeFinderServiceByApis } from "../../src/services/zip-code-finder-service-by-apis";
import { ResultDto } from "../../src/dtos/result-dto";
import { AddressDto } from "../../src/dtos/address-dto";

test('get "not found" message', async () => {

    // given
    let service = new ZipCodeFinderServiceByApis();

    // when
    let resultDto: ResultDto = await service.findAddressByZipCode('00000000')

    // then
    expect(resultDto.getError()?.message).toBe("CEP não encontrado");
});

test('get "invalid" message', async () => {

    // given
    let service = new ZipCodeFinderServiceByApis();

    // when
    let resultDtoLongerLength: ResultDto = await service.findAddressByZipCode('140205250');
    let resultDtoShorterLength: ResultDto = await service.findAddressByZipCode('1402052');
    let resultDtoString: ResultDto = await service.findAddressByZipCode('ABCDEFGH');
    let resultDtoUndefined: ResultDto = await service.findAddressByZipCode(undefined);

    // then
    expect(resultDtoLongerLength.getError()?.message).toBe("CEP inválido");
    expect(resultDtoShorterLength.getError()?.message).toBe("CEP inválido");
    expect(resultDtoString.getError()?.message).toBe("CEP inválido");
    expect(resultDtoUndefined.getError()?.message).toBe("CEP inválido");
});

test('get valid address', async () => {

    // given
    let service = new ZipCodeFinderServiceByApis();
    let expectedAddress: AddressDto = new AddressDto('14020-525', 
        'SP', 'Ribeirão Preto', 'Jardim Santa Ângela', 
        'Avenida Presidente Vargas');

    // when
    let resultDto: ResultDto = await service.findAddressByZipCode('14020525');

    // then
    expect(resultDto.getAddress()?.zipCode).toEqual(expectedAddress.zipCode);
    expect(resultDto.getAddress()?.city).toEqual(expectedAddress.city);
    expect(resultDto.getAddress()?.neighborhood).toEqual(expectedAddress.neighborhood);
    expect(resultDto.getAddress()?.state).toEqual(expectedAddress.state);
    expect(resultDto.getAddress()?.street).toEqual(expectedAddress.street);
});
