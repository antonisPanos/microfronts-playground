import {GlobalStoreService} from '../GlobalStoreService';
import {MaestroWindow} from '../../models/types';
import {MaestroWindowService} from '../MaestroWindowService';

describe('GlobalStoreService', () => {
  beforeEach(() => {
    MaestroWindowService.initMaestroNamespace();
    GlobalStoreService.initStores();
  });
  it('should create a UserDetails Behavior Subject on Maestro window object', () => {
    expect((window as MaestroWindow).maestro.user$).toBeTruthy();
  });
});
