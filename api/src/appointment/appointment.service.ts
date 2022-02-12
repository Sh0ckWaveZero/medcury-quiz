import { Injectable, Query } from '@nestjs/common';
import { Appointment } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService) { }

  async create(data: Appointment) {
    console.log(data);
    return await this.prisma.appointment.create({
      data
    })
  } catch(e: any) {
    throw e
  }

  async findAll(query: any) {
    let _query: any = {}

    // filter by start date and end date
    if (
      query.startDate !== 'undefined' &&
      query.startDate !== 'undefined'
    ) {
      let start = new Date(query.startDate)
      let end = new Date(query.endDate)
      start.setUTCHours(0, 0, 0, 0);
      end.setUTCHours(23, 59, 59, 999);
      _query.appointmentDate = {
        gte: start,
        lt: end
      }
    }

    // filter by status
    if (
      query.status !== 'null'
    ) {
      const status = (query.status.split(','))
      status.length === 2 ? "" : (_query.isReserve = status[0] === "false" ? false : true)
    }

    console.log(_query);
    return await this.prisma.appointment.findMany({
      where: _query,
      orderBy: {
        appointmentDate: 'asc',
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} appointment`;
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return `This action updates a #${id} appointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointment`;
  }
}
