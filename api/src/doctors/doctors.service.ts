import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

export const DoctorData = [
  {
    doctorId: "001",
    name: "หมอ ก.",
    appointmentDate: [
      "Monday",
      "Wednesday",
      "Friday"
    ],
    appointmentStartTime: "00:08:00",
    appointmentEndTime: "00:12:00",
    slotTime: 60,
  },
  {
    doctorId: "002",
    name: "หมอ ข.",
    appointmentDate: [
      "Tuesday",
      "Thursday",
      "Saturday"
    ],
    appointmentStartTime: "00:13:00",
    appointmentEndTime: "00:15:00",
    slotTime: 30,
  }
]

@Injectable()
export class DoctorsService {

  findAll() {
    return DoctorData;
  }

  findOne(id: string) {
    return DoctorData.filter((user: CreateDoctorDto) => user.doctorId === id );
  }
}
