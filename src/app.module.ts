import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User} from './user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'pass@word1',
      database: 'nestcrud',
      entities: [User],
      synchronize: true,
    }),
    
    UserModule,
  ],
  
})
export class AppModule {}
