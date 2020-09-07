import { HttpUtilsImpl } from '../../src/utils/http-utils'
import { ViaCepResponseDto } from '../../src/dtos/viacep-response-dto';

test('get invalid response', async () => {

    let httpUtils = new HttpUtilsImpl();

    let response: ViaCepResponseDto = await httpUtils.getZipCodeByViaCep('00000000');

    expect('erro' in response).toBe(true);
});

test('get valid response', async () => {

    let httpUtils = new HttpUtilsImpl();

    let response: ViaCepResponseDto = await httpUtils.getZipCodeByViaCep('14020525');

    expect(response.erro).toBe(undefined);

});
