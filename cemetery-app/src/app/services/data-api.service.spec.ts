import { TestBed } from '@angular/core/testing';
import { Person } from '../models/person.model';
import { HttpTestingController } from '@angular/common/http/testing';
import { DataApiService } from './data-api.service';
import { DatabaseDate } from '../models/databaseDate.model';

describe('DataApiService', () => {
  let service: DataApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check if people are returned by getAllPeople', () => {
    const dummyPeople: Person[] = [{
      id: 1,
      name: 'tom',
      surname: 'smith',
      birthDate: '1.01.1900',
      deathDate: '1.01.1999',
      tombId: 1,
      sex: 'M',
      pictures: []
    }, {
      id: 2,
      name: 'mark',
      surname: 'thompson',
      birthDate: '2.02.1920',
      deathDate: '2.02.1991',
      tombId: 2,
      sex: 'M',
      pictures: []
    }];
    service.getAllPeople().subscribe(people => {
      expect(people.length).toBe(2);
      expect(people).toEqual(dummyPeople);
    });
    const request = httpMock.expectOne( `http://localhost:3000/people`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyPeople);
  });

  it('should check if db date is returned by getDatabaseDate', () => {
    const dummyDate: DatabaseDate = {
      modifiedDate: '1.05.2022'
    };
    service.getDatabaseDate().subscribe(date => {
      expect(date).toEqual(dummyDate);
    });
    const request = httpMock.expectOne( `http://localhost:3000/date`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyDate);
  });
});
