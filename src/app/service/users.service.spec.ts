import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { User } from '../model/data-model';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('#getValue should return real value', () => {
    const status = <User[]>JSON.parse(localStorage.getItem('users'))
    expect(service.getAllUsers()).toBe( status);
  });
});
