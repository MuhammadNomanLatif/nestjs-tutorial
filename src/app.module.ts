import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { CatagoryModule } from './catagory/catagory.module';
import { StudentModule } from './student/student.module';
import { CostomerModule } from './costomer/costomer.module';
import { MynameController } from './myname/myname.controller';
import { UserRoleController } from './user-role/user-role.controller';
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { DatabaseService } from './database/database.service';
import { DatabaseController } from './database/database.controller';
import { ConfigModule } from '@nestjs/config';
import { EvService } from './ev/ev.service';
import { EvController } from './ev/ev.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
@Module({
  imports: [EmployeeModule,UserModule, CatagoryModule, StudentModule, CostomerModule,ConfigModule.forRoot()
  , MongooseModule.forRoot(process.env.MONGO_URL || 'mongodb://localhost:27017/'), ],
  controllers: [AppController, UserController, ProductController, MynameController, UserRoleController, ExceptionController, DatabaseController, EvController],
  providers: [AppService, ProductService, DatabaseService, EvService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}