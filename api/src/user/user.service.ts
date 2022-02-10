import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserNotFoundException } from './exceptions/userNotFound.exception';


@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  async create(user: User) {
    try {
      return await this.prisma.user.create({
        data: user
      });
    } catch (e: any) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
        throw new HttpException({
          status: HttpStatus.FORBIDDEN,
          error: 'There is a unique constraint violation, a new user cannot be created with this telephone number',
        }, HttpStatus.FORBIDDEN);
      }
      throw e
    }
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      }
    })
    if (!user) {
      throw new UserNotFoundException(id);
    }
    return user;
  }

  async update(id: string, user: User) {
    try {
      return await this.prisma.user.update({
        data: {
          ...user
        },
        where: {
          id,
        }
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new UserNotFoundException(id);
      }
      throw error;
    }
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
