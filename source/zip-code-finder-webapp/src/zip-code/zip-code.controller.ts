import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { ZipCodeService } from './zip-code.service';
import { Response } from 'express';

@Controller('zipcode')
export class ZipCodeController {

    constructor(private readonly zipCodeService: ZipCodeService) {}

    @Get(':zipcode/viacep')
    async getZipCode(@Res() response: Response, @Param('zipcode') zipCode?: string) {

      const result = await this.zipCodeService.findAddressByZipCode(zipCode);

      if (result.getError() == null) {

          response.status(HttpStatus.OK).json(result.getAddress());

      } else{

        response.status(HttpStatus.BAD_REQUEST).json(result.getError());
      }
    }
}
