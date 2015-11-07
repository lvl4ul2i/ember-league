import MatchesBaseController from './base';

export default MatchesBaseController.extend({
  actions: {
    cancel() {
      this.transitionToRoute('matches.index');
      return false;
    }
  }
});
