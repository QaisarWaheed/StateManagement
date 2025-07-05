import { HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDTO } from 'dto/CreateUser.dto';
import { Model } from 'mongoose';
import { User } from 'src/entity/User.schema';

export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async Signup(data: CreateUserDTO): Promise<User | null> {
    try {
      const existedUser = await this.userModel.findOne({ email: data.email });

      if (existedUser) {
        throw new HttpException('user Already Exist', HttpStatus.BAD_REQUEST);
      }

      const newUser = await this.userModel.create(data);
      return newUser;
    } catch (e) {
      throw new HttpException('something went wrong', HttpStatus.BAD_REQUEST);
    }
  }

  async Login(data: Partial<User>): Promise<User | null> {
    try {
      const existedUser = await this.userModel.findOne({ email: data.email });
      if (!existedUser) {
        throw new HttpException(
          'invalid email or passwrod',
          HttpStatus.UNAUTHORIZED,
        );
      }
      if (data.password !== existedUser.password) {
        throw new HttpException(
          'invalid email or passwrod',
          HttpStatus.UNAUTHORIZED,
        );
      }
      return existedUser;
    } catch (e) {
      throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED);
    }
  }
}
export default AuthService;
