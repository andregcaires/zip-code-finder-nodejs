import axios from 'axios';

export class HttpUtilsImpl {

    async getZipCodeByViaCep(zipCode: string): Promise<any> {

        try {

            return await (await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`)).data;
            
        } catch (error) {
            
            return error;
        }
    }
}