import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entity/User.schema';
import { UserController } from './user/user.controller';
import AuthService from './services/auth.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/state'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [AuthService],
})
export class AppModule {}
