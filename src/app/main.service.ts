import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MainService {

  private azureUrl = 'https://schedule-server.azurewebsites.net';
  private appharborUrl = 'https://schedule-server2.apphb.com';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  testPaas(serverUrl, actionUrl): Promise<any> {
    const start = (new Date()).getTime();
    return this.http.get(serverUrl + actionUrl, {headers: this.headers}).toPromise()
      .then(response => {
        const durationMs = (new Date()).getTime() - start;
        const fail = !(response.json() && response.json().length > 1);
        return {duration: durationMs, failed: fail};
      })
      .catch(this.handleError);
  }

  testAzure(url): Promise<any> {
    return this.http.get(this.azureUrl + url, {headers: this.headers}).toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  testAppaharbor(url): Promise<any> {
    return this.http.get(this.appharborUrl + url, {headers: this.headers}).toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
