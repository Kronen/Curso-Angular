import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../indra-core';
import { NotificationService } from '../services/notification.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title = 'Curso de Angular';

    constructor(private notify: NotificationService) {
        const log = new LoggerService(1);
        log.error('Error');

        // notify.add('Esto es una notificacion');
        // notify.add('Esto es otra notificacion');
        // notify.remove(0);
        // notify.remove(0);

        log.debug('Creando componente Home');
        // log.info('Comentario de informacion');
        // log.warn('Comentario de warning');
        // log.error('Comentario de error');
    }

    ngOnInit() {
        log.debug('Iniciando componente Home');
    }

}
