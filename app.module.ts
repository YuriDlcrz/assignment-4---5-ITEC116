import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // Replace with your MySQL password
      database: 'student_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    StudentModule,
  ],
})
export class AppModule {}
