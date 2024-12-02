import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get<string>('POSTGRES_HOST', 'localhost'),
                database: configService.get<string>('POSTGRES_DB', 'websocket-backend'),
                port: configService.get<number>('POSTGRES_PORT', 5432),
                username: configService.get<string>('POSTGRES_USER', 'postgres'),
                password: configService.get<string>('POSTGRES_PASSWORD', '12345'),
                autoLoadEntities: true,
                synchronize: configService.get<boolean>('POSTGRES_SYNC', true),
                namingStrategy: new SnakeNamingStrategy(),
            }),
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule { }
