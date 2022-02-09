import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super();
  }

  // automatically creates a connection (lazy) to the database
  async onModuleInit() {
    await this.$connect();
  }

  // stop a connection using
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
