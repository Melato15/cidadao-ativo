import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { VotesModule } from './votes/votes.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, ProjectsModule, VotesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
