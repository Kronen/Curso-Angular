import { Component } from '@angular/core';
import { LoggerService } from '../indra-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggerService]
})
export class AppComponent {
  title = 'Curso de Angular';

  constructor(private out: LoggerService) {
      out.debug('Comentario de debug');
      out.info('Comentario de informacion');
      out.warn('Comentario de warning');
      out.error('Comentario de error');
  }

}
