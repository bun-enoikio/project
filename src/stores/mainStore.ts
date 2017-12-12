import { action, observable } from 'mobx';

export class MainStore {
  @observable showRecallInfo: boolean = false;

  @action
  toggleShowRecallInfo() {
    this.showRecallInfo = !this.showRecallInfo;
  }
}

export default new MainStore();
