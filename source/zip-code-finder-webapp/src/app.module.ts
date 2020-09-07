import { Module } from '@nestjs/common';
import { ZipCodeController } from './zip-code/zip-code.controller';
import { ZipCodeService } from './zip-code/zip-code.service';
import { ZipCodeModule } from './zip-code/zip-code.module';

@Module({
  imports: [ZipCodeModule],
  controllers: [ZipCodeController],
  providers: [ZipCodeService],
})
export class AppModule {}
