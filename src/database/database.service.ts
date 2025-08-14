import { Injectable, OnModuleInit, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  private isConnected = false;
  onModuleInit() {
    this.isConnected = true;
    console.log('Database Connect ');
  }
  onApplicationShutdown(signal: string) {
    this.isConnected = false;
    console.log(`DataBase Disconnected due to app shutdown signal ${signal}`);
  }
  getStatus() {
    return this.isConnected ? 'connected' : 'disconnected'; 
  }
}
