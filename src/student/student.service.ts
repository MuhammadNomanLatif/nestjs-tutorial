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
  async getAllStudent(): Promise<Student[]> {
    return this.StudentModel.find().exec();
  }
  async getStudentById(id: string): Promise<Student | null> {
    return this.StudentModel.findById(id).exec();
  }
  async updateStudent(id:string ,data:Partial<Student>):Promise<Student | null>{
return this.StudentModel.findByIdAndUpdate(id,data,{new:true}).exec()
  }
  async patchStudent(id:string ,data:Partial<Student>):Promise<Student | null>{
return this.StudentModel.findByIdAndUpdate(id,data,{new:true}).exec()
  }
  async deleteStudent(id:string ):Promise<Student | null>{
    return this.StudentModel.findByIdAndDelete(id).exec()
  }
}
