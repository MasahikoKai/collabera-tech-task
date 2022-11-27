import { BehaviorSubject, Observable } from 'rxjs';

export abstract class BaseState<T> {
  private readonly _data$ = new BehaviorSubject<T | null>(null);

  get data$(): Observable<T> {
    return this._data$.asObservable() as Observable<T>;
  }

  get data(): T {
    return this._data$.value as T;
  }

  protected setData(value: T): void {
    this._data$.next(value);
  }
}
