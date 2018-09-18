import { Injectable } from '@angular/core';
import { LoggerService } from '../../indra-core';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    private listado: Array<String> = [];

    constructor(private out: LoggerService) { }

    public get Listado() { return this.listado; }
    public get HayNotificaciones() { return this.listado.length > 0; }

    public add(msg: string) {
        if (msg) {
            this.listado.push(msg);
            this.out.info(msg);
        } else {
            this.out.error('Notification not found');
        }
    }

    public remove(index: number) {
        if (0 <= index && index < this.listado.length) {
            this.listado.splice(index, 1);
        } else {
            this.out.error('Index out of range');
        }
    }

    public clear() {
        if (this.HayNotificaciones) {
            this.listado.splice(0);
        }
    }
}
