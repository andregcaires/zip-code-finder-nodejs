import { Module } from '@nestjs/common';
import { ZipCodeController } from './zip-code/zip-code.controller';
import { ZipCodeService } from './zip-code/zip-code.service';
import { ZipCodeModule } from './zip-code/zip-code.module';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health/health.controller';

@Module({
  imports: [ZipCodeModule, TerminusModule],
  controllers: [ZipCodeController, HealthController],
  providers: [ZipCodeService],
})
export class AppModule {}
