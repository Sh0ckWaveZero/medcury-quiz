import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export const UserData: CreateUserDto[] = [
  {
    "telephone": "0810000001",
    "name": "นายกร",
    "pinCode": 111111
  },
  {
    "telephone": "0810000002",
    "name": "นายนก",
    "pinCode": 222222
  },
  {
    "telephone": "0810000003",
    "name": "นายตูน",
    "pinCode": 333333
  },
  {
    "telephone": "0810000004",
    "name": "นายหมาย",
    "pinCode": 444444
  }
]
@Injectable()
export class UsersService {

  findAll() {
    return UserData;
  }

  findByFilter(query: any) {
    const { telephone, pinCode } = { telephone: query.telephone, pinCode: +query.pinCode }
    return UserData.filter((user: CreateUserDto) => user.telephone === telephone && user.pinCode === pinCode);
  }
}
