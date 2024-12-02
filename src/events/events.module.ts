import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { EventsService } from './events.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from './events.entity';

@Module({
    imports: [TypeOrmModule.forFeature([EventEntity])],
    controllers: [], 
    providers: [EventsGateway, EventsService],
})
export class EventsModule {}
