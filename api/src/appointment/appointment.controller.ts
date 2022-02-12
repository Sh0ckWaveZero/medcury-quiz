import { Controller, Get, Post, Body, Patch, Param, Delete, Req, HostParam, Query } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Request } from 'express';

import * as csv from 'csv-parser';
import * as fs from 'fs';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppointmentDto: UpdateAppointmentDto) {
    return this.appointmentService.update(+id, updateAppointmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentService.remove(+id);
  }
}
