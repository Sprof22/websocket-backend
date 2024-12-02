import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEntity } from './events.entity';
// import { EventEntity } from '../database/entities/event.entity';

@Injectable()
export class EventsService {
    constructor(
        @InjectRepository(EventEntity)
        private readonly eventRepository: Repository<EventEntity>,
    ) {}

    async createEvent(type: string, payload: Record<string, any>): Promise<EventEntity> {
        const event = this.eventRepository.create({ type, payload });
        return this.eventRepository.save(event);
    }
}
