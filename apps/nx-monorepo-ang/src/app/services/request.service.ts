import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService implements OnInit{
  private httpClient: HttpClient;
  apiEnow: string = '';
  apiCDN: string = '';
  apiNode: string = 'https://nodejs.byn.vn/api/get-user';
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
    const apiUrl = `${this.apiEnow}${url}${suffix}`;
    return this.http.get<T>(apiUrl).pipe(
      //retry(3), // retry a failed request up to 3 times
      //catchError(this.handleError) // then handle the error
    );
  }

  post<T>(url: string, body : any) {
    const apiUrl = `${this.apiEnow}${url}`;
    return this.http.post<T>(apiUrl, body);
  }

  upload<T>(url: string, body : any) {
    var data = new FormData();
    data.append("file", body);
    const apiUrl = `${this.apiCDN}${url}`;
    return this.httpClient.post<T>(apiUrl, data,{
      headers: {
      },
    });
  }
}

