import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZipCodeController } from './zip-code/zip-code.controller';
import { ZipCodeService } from './zip-code/zip-code.service';
import { ZipCodeModule } from './zip-code/zip-code.module';

@Module({
  imports: [ZipCodeModule],
  controllers: [AppController, ZipCodeController],
  providers: [AppService, ZipCodeService],
})
export class AppModule {}
