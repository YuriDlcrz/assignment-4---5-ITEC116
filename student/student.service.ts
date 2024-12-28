import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async create(student: Partial<Student>): Promise<Student> {
    const newStudent = this.studentRepository.create(student);
    return await this.studentRepository.save(newStudent);
  }

  async findAll(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  async update(id: number, student: Partial<Student>): Promise<Student> {
    await this.studentRepository.update(id, student);
    return await this.studentRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }
}
