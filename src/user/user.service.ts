import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private readonly configService: ConfigService,
    @Inject('USER_MODEL') private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const salt = this.configService.get<string | number>('salt');
    if (!salt) {
      throw new InternalServerErrorException();
    }
    const newPassword: string = createUserDto.password + salt;
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    createUserDto.password = hashedPassword;

    const newUser = await this.userModel.create(createUserDto);
    if (!newUser) {
      throw new InternalServerErrorException();
    }
    return newUser;
  }

  async findAll() {
    return await this.userModel.find();
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userModel.findOne({ email: email });
  }

  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.updateOne({ _id: id }, updateUserDto);
  }

  async delete(id: string) {
    return `This action removes a #${id} user`;
  }
}
