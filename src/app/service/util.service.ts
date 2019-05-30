import { Injectable } from '@angular/core';
import { Label } from '../model/label';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http: HttpClient) { }

  public theme$: Subject<any> = new Subject();
   public labels$: Label[];
  public search$: Subject<any> = new Subject();
  public label$: Label;
  login(user: any) {
    throw new Error('Method not implemented.');
  }
  postService(url, object) {
    return this.http.post<any>(url, object, {observe : 'response'});
  }
  public setTheme(themeChanged: boolean) {
    this.theme$.next(themeChanged);
  }

  public getTheme() {
    return this.theme$;
  }
  public getSearch() {
    return this.search$;
  }

  public setLabel(label: Label) {
    this.label$ = (label);
  }

  public getLabel(): Label {
    return this.label$;
  }

  public setLabels(labels: Label[]) {
    this.labels$ = labels;
  }

  public getLabels() {
    return this.labels$;
  }

  public setSearch(search: string) {
    this.search$.next(search);
  }
  putService(url, object, header) {
    return this.http.put<any>(url, object, header);
  }

  getService(url, header) {
    return this.http.get<any>(url, header);
  }

  deleteService(url, header) {
    return this.http.delete<any>(url, header);
  }

  postForNoteCreate(url, header, object) {
    return this.http.post<any>(url, object, header);
  }

  putForNoteUpdate(url, object, header) {
    return this.http.put<any>(url, object, header);
  }

  deleteForNoteDelete(url, header) {
    return this.http.delete<any>(url, header);
  }

  putForLabelUpdate(url, object, header) {
    return this.http.put<any>(url, object, header);
  }

  deleteForLabelDelete(url, header) {
    return this.http.delete<any>(url, header);
  }

  postForLabelCreate(url, object, header) {
    return this.http.post<any>(url, object, header);
  }

  deleteForRemoveLabelFromNote(url, header) {
    return this.http.delete<any>(url, header);
  }

  addForAddLabelFromNote(url, object) {
    return this.http.put<any>(url, object, {observe : 'response'});
  }

  postToUploadImage({ url, object, header }: { url; object; header; }) {
    return this.http.post<any>(url, object, header);
  }

  getUserEmail(url, header) {
    return this.http.get<any>(url, header);
  }

  postForCollaborator(url, header) {
    return this.http.post<any>(url, {}, header);
  }

  getCollaborateUser(url) {
    return this.http.get<any>(url, {});
  }

  removeCollaborateUser(url) {
    return this.http.delete<any>(url, {});
  }

  postForAddImage(url, param, header) {
    return this.http.post<any>(url, param, header);
  }

  removeImage(url) {
    return this.http.delete<any>(url, {});
  }
}
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Login } from '../model/login';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { Register } from '../model/user';
// import { Note } from '../model/note';

// @Injectable({
//   providedIn: 'root'
// })
// export class HttpHandlerService {

//   constructor(private http: HttpClient ) { }

//   private httpheaders = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json'
//       // token: localStorage.getItem('token')
//     })
//   };

//   public login(config: Login): Observable<any> {
//     return this.http.post<any>(`${environment.base_url}login`, config, { observe: 'response' });
//   }
//   public register(config: Register): Observable<any> {
//     return this.http.post<any>(`${environment.base_url}registration`, config, { observe: 'response' });
//   }
//   public note(config: Note): Observable<any> {
//     return this.http.post<any>(`${environment.base_url}note`, config, { observe: 'response' });
//   }
// }
