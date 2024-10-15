import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto,
) {
    try{
      await this.userService.create(
        createUserDto,
      );
      return{
        success: true,
        message: 'User created successfully',
      };
    }catch(error){
      return{
        success: false,
        message: error.message,
      };
    }  
    
  }

  @Get()
  async findAll() {

     try {
    const users =await this.userService.findAll();
    return {
      success: true,
      data: users,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
