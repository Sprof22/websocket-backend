import { AbstractEntity } from 'src/database/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity('events')
export class EventEntity extends AbstractEntity<EventEntity> {
    @Column()
    type: string;

    @Column('jsonb')
    payload: Record<string, any>;
}
