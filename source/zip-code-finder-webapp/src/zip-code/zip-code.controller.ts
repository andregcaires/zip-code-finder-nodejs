import { Controller, Get, Param } from '@nestjs/common';
import { ZipCodeService } from './zip-code.service';

@Controller('zipcode')
export class ZipCodeController {

    constructor(private readonly zipCodeService: ZipCodeService) {}

    @Get(':zipcode/viacep')
    async getZipCode(@Param('zipcode') zipCode?: string): Promise<string> {

      const result = await this.zipCodeService.findAddressByZipCode(zipCode);

      if (result.getError() == null) {

          return JSON.stringify(result.getAddress());
      }

      return JSON.stringify(result.getError());
    }
}
