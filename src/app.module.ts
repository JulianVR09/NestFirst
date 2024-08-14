import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3000,
      username: "admin",
      password: "1234",
      database: "example",
      // autoLoadEntities: true, Trae todas la entidades que enceuntre sin preguntar
      entities: [User],
      synchronize: true
    }),
    UsersModule]
})
export class AppModule {}
