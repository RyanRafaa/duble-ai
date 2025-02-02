import { Module } from '@nestjs/common';
import { UserModule } from './modules/user-module/user.module';

@Module({
  imports: [UserModule],
})
export class AppModule {}
