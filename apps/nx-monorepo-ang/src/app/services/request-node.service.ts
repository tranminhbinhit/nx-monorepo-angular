import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestNodeService implements OnInit{
  private httpClient: HttpClient;
  apiBaseUrl: string = 'https://nodejs.byn.vn/';
  constructor(private http: HttpClient, private httpBackend: HttpBackend) { 
    this.httpClient = new HttpClient(httpBackend);
  }


  ngOnInit(): void {
  }

  get<T>(url: string, data: any = null) {
    let suffix = '';
    if (data) {
      suffix = `?${Object.keys(data)
        .map(key => [key, data[key]].map(encodeURIComponent).join('='))
        .join('&')}`;
    }
    const apiUrl = `${this.apiBaseUrl}${url}${suffix}`;
    return this.http.get<T>(apiUrl).pipe(
      //retry(3), // retry a failed request up to 3 times
      //catchError(this.handleError) // then handle the error
    );
  }

  post<T>(url: string, body : any) {
    const apiUrl = `${this.apiBaseUrl}${url}`;
    return this.http.post<T>(apiUrl, body);
  }
}