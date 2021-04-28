import {GlobalStoreService} from '../GlobalStoreService';
import {MaestroWindow} from '../../models/types';
import {MaestroWindowService} from '../MaestroWindowService';

describe('GlobalStoreService', () => {
  beforeEach(() => {
    MaestroWindowService.initMaestroNamespace();
  });

  it('should create the maestro property on Window', () => {
    expect((window as MaestroWindow).maestro).toBeTruthy();
  });
});
