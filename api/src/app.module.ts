import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { UsersModule } from './users/users.module';
import { DoctorsModule } from './doctors/doctors.module';
import { AppointmentModule } from './appointment/appointment.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, DoctorsModule, AppointmentModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
