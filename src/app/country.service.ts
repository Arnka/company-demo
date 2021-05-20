import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICountry } from './countries';
import { Observable, throwError } from 'rxjs';
import { catchError }from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _url: string = "/assets/data/countries.json";

  constructor(private http: HttpClient) { }

  getCountries(): Observable<ICountry[]>{
    return this.http.get<ICountry[]>(this._url)
                    .pipe(catchError(this.errorHandler));
  }

  //Displays error
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
