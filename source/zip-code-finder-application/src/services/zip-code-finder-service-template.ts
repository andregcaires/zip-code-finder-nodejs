import { ResultDto } from "../dtos/result-dto";
import { ZipCode } from 'zip-code-finder-domain';
import {} from 'zip-code-finder-domain'

export abstract class ZipCodeFinderServiceTemplate {

    resultDto: ResultDto = new ResultDto();

    abstract findAddressBySource(zipcode: ZipCode): void;

    findAddressByZipCode(zipCodeString?: string): ResultDto {

        this.resultDto = new ResultDto();

        let zipCode = ZipCode.createNew(zipCodeString);

        if (zipCode.isValid()) {

            while (zipCode.hasNextIndex()) {

                this.findAddressBySource(zipCode);

                try {

                    if (this.resultDto.getAddress() == null) {

                        zipCode.updateCharacterWithZeroByIndex();
                        
                        zipCode.nextIndex();
    
                    } else {
    
                        break;
                    }

                } catch (error) {

                    // TODO implement logging
                    console.log(error);
                    zipCode.nextIndex();
                }                
            }

            if (!zipCode.hasNextIndex()) {

                this.resultDto.setError('CEP não encontrado');
            }

        } else {

            this.resultDto.setError('CEP inválido');
        }

        return this.resultDto;
    }
}
