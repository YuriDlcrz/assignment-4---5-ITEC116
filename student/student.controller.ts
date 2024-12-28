import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
  } from '@nestjs/common';
  import { StudentService } from './student.service';
  import { Student } from './student.entity';
  
  @Controller('students')
  export class StudentController {
    constructor(private readonly studentService: StudentService) {}
  
    @Post()
    async create(@Body() student: Partial<Student>): Promise<Student> {
      return await this.studentService.create(student);
    }
  
    @Get()
    async findAll(): Promise<Student[]> {
      return await this.studentService.findAll();
    }
  
    @Put(':id')
    async update(
      @Param('id') id: number,
      @Body() student: Partial<Student>,
    ): Promise<Student> {
      return await this.studentService.update(id, student);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
      return await this.studentService.delete(id);
    }
  }
  