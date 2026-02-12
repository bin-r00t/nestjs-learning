import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesModule } from './messages/messages.module';
import { Report } from './reports/reports.entity';
import { ReportsModule } from './reports/reports.module';
import { User } from './users/users.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Report],
      synchronize: true,
    }),
    UsersModule,
    MessagesModule,
    ReportsModule,
  ],
})
export class AppModule {}
