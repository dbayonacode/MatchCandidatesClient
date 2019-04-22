import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IJob } from '../interfaces/job';
import { ICandidate } from '../interfaces/candidate';

@Injectable({
  providedIn: 'root'
})
export class MatchingDataService {

  constructor(private _http: HttpClient) { }

  apiUrl: string = "https://localhost:44327/api/";

  getJobs(): Observable<IJob[]> {

    const headers = new HttpHeaders().set("Content-Type", 'application/json');

    let _utilsProjectUrl = this.apiUrl + 'jobs';

    return this._http.get(_utilsProjectUrl, { headers })

      .pipe(map((response: Response) => {

        return <any>response;
      })
        , catchError(this.handleError)
      )

  }

  getMostQualifiedCandidate(jobId: number, numberCandidates: number, relevance: string): Observable<ICandidate[]> {

    const headers = new HttpHeaders().set("Content-Type", 'application/json');

    let _utilsProjectUrl = this.apiUrl + 'candidates' + '/' + jobId + "/" + numberCandidates + "/" + relevance;

    return this._http.get(_utilsProjectUrl, { headers })

      .pipe(map((response: Response) => {

        return <any>response;
      })
        , catchError(this.handleError)
      )

  }
  private handleError(error: Response) {
    return throwError('Failed getting data');

  }

}
