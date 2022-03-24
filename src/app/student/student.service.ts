import { Injectable }              from '@angular/core';
import { BordSpel } from './bordspel';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class StudentService {
    

    constructor(private http: HttpClient){

    }

    eenMethodeProberen():Observable<BordSpel[]>{
        console.log("dit is in de Service");
        return this.http.get<BordSpel[]>("http://localhost:8082/alle");
    }

    voegEenSpelToe():Observable<string>{
        const headers = { 'Content-Type': 'application/json' };
        const body = { bordspel : 'EenBordSpel' };
        return this.http.post<string>('http://localhost:8082/spelerbij', body, { headers });
    }

}
