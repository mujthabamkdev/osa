import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor() { }

  private classDataSubject = new BehaviorSubject<ExcelData[]>([]);
  classData$ = this.classDataSubject.asObservable();

  // Replace with your actual data retrieval logic
  getClassData(className: string): void {
    // ... your existing logic to fetch data based on className ...
    const data: ExcelData[] = /* fetched data */;
    this.classDataSubject.next(data);
  }
}
