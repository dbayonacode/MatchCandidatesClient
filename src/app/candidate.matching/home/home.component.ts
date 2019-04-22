import { Component, OnInit } from '@angular/core';
import { MatchingDataService } from '../services/matching-data.service';
import { IJob } from '../interfaces/job';
import { ICandidate } from '../interfaces/candidate';

@Component({
  selector: 'matchcandidate-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _matchingService: MatchingDataService) { }


  private _jobId: number;
  private _numberCandidates: number;
  jobs: IJob[];
  jobSelected: IJob;
  candidates: any[];
  spinner: boolean = false;
  hideJobContainerOptions = false;
  hideButton = false;
  classButton = "secondary";
  errorMesage: string;

  relevance: string = 'quality';

  setOption(value) {
    this.relevance = value;
  }


  setNumberCandidates() {
    if (typeof this.numberCandidates != 'undefined') {
      this.hideButton = true;
      this.classButton = "primary";
    }
    else {
      this.hideButton = false;
      this.classButton = "secondary";
    }
  }

  get numberCandidates(): number {
    return this._numberCandidates;
  }

  set numberCandidates(value: number) {
    this._numberCandidates = value;
  }

  get jobId(): number {
    return this._jobId;
  }

  set jobId(value: number) {
    this._jobId = value;
  }

  ngOnInit() {
    this.errorMesage = "";
    this.spinner = true;
    this._matchingService.getJobs().subscribe(jobsResults => {
      this.jobs = jobsResults;
      this.spinner = false;

    }, error => {
      this.errorMesage = <any>error;
    });

  }

  getSingleCandidate() {
    this.jobSelected = this.jobs.find(x => x.jobId == this.jobId);
    if (typeof this.jobSelected != 'undefined') {
      this.hideJobContainerOptions = true;
    }
    else {
      this.candidates = null;
      this.hideJobContainerOptions = false;
    }
  }

  getCandidate() {
    this.spinner = true;

    if (typeof this.jobId != 'undefined') {
      this._matchingService.getMostQualifiedCandidate(this.jobId, this.numberCandidates, this.relevance).subscribe(candidateResult => {
        this.candidates = candidateResult;
        this.spinner = false;
      }, error => {
        this.errorMesage = <any>error;
        
      });
    }
    else {
      this.candidates = null;
      this.hideJobContainerOptions = false;
    }
  }

}
