import { ResultDto } from "../dtos/result-dto";
import { ZipCode } from 'zip-code-finder-domain';

export abstract class ZipCodeFinderServiceTemplate {

    resultDto: ResultDto = new ResultDto();

    index: number = 0;

    abstract findAddressBySource(zipcode: ZipCode): void;

    findAddressByZipCode(zipCodeString?: string): ResultDto {

        this.resultDto = new ResultDto();

        let zipCode = ZipCode.createNew(zipCodeString);

        if (zipCode.isValid()) {

            this.index = zipCode.zipCodeLength - 1;

            while (this.index >= 0) {

                this.findAddressBySource(zipCode);

                try {

                    if (this.resultDto.getAddress() == null) {

                        zipCode.updateCharacterWithZeroByIndex(this.index);
                        
                        this.index--;
    
                    } else {
    
                        break;
                    }

                } catch (error) {

                    // TODO implement logging
                    console.log(error);
                }                
            }

            if (this.index === 0) {

                this.resultDto.setError('CEP não encontrado');
            }

        } else {

            this.resultDto.setError('CEP inválido');
        }

        return this.resultDto;
    }
}
