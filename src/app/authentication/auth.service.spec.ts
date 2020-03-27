import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getValue should return real value', () => {
    const status = <{userId:number, status: number}>JSON.parse(localStorage.getItem('userId'))
    expect(service.getLoggedInUser()).toBe( status);
  });

});
