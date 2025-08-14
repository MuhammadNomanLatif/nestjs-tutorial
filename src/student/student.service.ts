import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private student = [
    {
      id: 1,
      name: 'Noman',
      age: 23,
    },
    {
      id: 2,
      name: 'Ali',
      age: 25,
    },
    {
      id: 3,
      name: 'Naseem',
      age: 30,
    },
  ];
  getAllStudents() {
    return this.student;
  }
  getStudentById(id: number) {
    const student = this.student.find((s) => s.id === id);
    if (!student) {
      throw new NotFoundException('student not found');
    }

    return student;
  }
  // post
  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };
    this.student.push(newStudent);
    return newStudent;
  }
  /// put
  updateStudent(id: number, data: { name: string; age: number }) {
    const index = this.student.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new NotFoundException('Student not Found!');
    }
    this.student[index] = { id, ...data };
    return this.student[index];
  }
  // Patch
  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const student = this.getStudentById(id);
    Object.assign(student, data);
    return student;
  }
  // Delete

  delestudent(id: number) {
    const index = this.student.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new NotFoundException('Student not Found!');
    }
    this.student.splice(index, 1);
    return { message: 'Student deleted successfully' };
  }
}
