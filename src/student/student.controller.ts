import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  /// HTTP GET METHOD
  @Get()
  getAllStudents() {
    return this.studentService.getAllStudents();
  }
  /// HTTP GET METHOD BY ID
  @Get(':id')
  getStudentById(@Param('id') id: string) {
    return this.studentService.getStudentById(Number(id));
  }
  /// HTTP POST METHOD
  @Post()
  create(@Body() body: { name: string; age: number }) {
    return this.studentService.createStudent(body);
  }
  /// HTTP PUT METHOD
  @Put(':id')
  update(@Param('id') id: string, @Body() body: { name: string; age: number }) {
    this.studentService.updateStudent(Number(id), body);
  }
  /// HTTP PATCH METHOD
  @Patch(':id')
  patch(
    @Param('id') id: string,
    @Body() body: Partial<{ name: string; age: number }>,
  ) {
    this.studentService.patchStudent(Number(id), body);
  }
  /// HTTP DELETE METHOD
  @Delete(':id')
  delete(@Param('id') id: string) {
    this.studentService.delestudent(Number(id));
  }
}
