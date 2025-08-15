import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private StudentModel: Model<StudentDocument>,
  ) {}
  async CreateStudent(data: Partial<Student>): Promise<Student> {
    const newStudent = new this.StudentModel(data);
    return newStudent.save();
  }
}
