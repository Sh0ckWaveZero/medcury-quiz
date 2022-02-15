import { Controller, Get, Post, Body, Patch, Query } from '@nestjs/common';
import { AppointmentService } from './appointment.service';

import { Appointment } from '@prisma/client';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) { }

  @Post()
  create(@Body() appointment: Appointment) {
    return this.appointmentService.create(appointment);
  }

  @Get()
  findAll(@Query() query: any) {
    return this.appointmentService.findAll(query);
  }

  @Patch()
  update(@Body() appointment: Appointment) {
    return this.appointmentService.update(appointment.id, appointment);
  }
}
