import { Injectable, Query } from '@nestjs/common';
import { Appointment } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService) { }

  async create(data: Appointment) {

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
    if (query.status !== 'null') {
      const isReserve = (query.status.split(','))
      isReserve.length === 2 ? "" : (_query.isReserve = isReserve[0] === "false" ? false : true)
    }

    // filter by doctor id
    if (query.doctorId !== 'null') {
      const doctorId = (query.doctorId.split(','))
      if (doctorId.length === 1) {
        _query.doctorId = {
          in: doctorId[0]
        }
      } else if (doctorId.length > 1) {
        _query.doctorId = {
          in: doctorId
        }
      }
    }
    return await this.prisma.appointment.findMany({
      where: _query,
      orderBy: {
        appointmentDate: 'asc',
      }
    })
  }

  update(id: string, data: Appointment) {
    return this.prisma.appointment.update({
      where: {
        id: id
      },
      data: {
        isReserve: data.isReserve,
        doctorId: data.doctorId,
        appointmentDate: data.appointmentDate,
        name: data.name,
        pinCode: data.pinCode,
        telephone: data.telephone,
      },
    })
  }
}
