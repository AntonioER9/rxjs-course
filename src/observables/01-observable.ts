import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('siguiente [next]: ', value),
  error: error => console.warn('error [obs]:', error),
  complete: () => console.log('completado [obs]')  
};

// const obs$ = Observable.create();
const obs$ = new Observable<string>( subscriber => { //Crear un observable

  subscriber.next('Hola');
  subscriber.next('Mundo');
  subscriber.complete(); //Fin del observable

}); 

obs$.subscribe(observer);

// obs$.subscribe( 
//   valor => console.log('next: ',valor),
//   error => console.warn('error ', error),
//   () => console.info('Completado')  
// );