import MatchesBaseController from './base';

 export default MatchesBaseController.extend({
   actions:{
      cancel(){
          this.transitionToRoute('messages', this.get('model'));
          return false;
      },
      valueUp(field) {
        var model = this.get('content');
        var value = model.get(field) + 1;
        model.set(field, value);
        model.save();
      },

      valueDown(field) {
        var model = this.get('content');
        var value = model.get(field) - 1;
        model.set(field, value);
        model.save();
      },

      set(field, value) {
        var model = this.get('content');
        model.set(field, value);
        model.save();
      },

      saveMessage(){
        var model = this.get('model'),
            newMessage = this.store.createRecord('message', {
              message: model.get('minutes') + ' min. - ' + this.get('message_text'),
              timestamp: new Date().getTime()
            });

        var messages = model.get('messages');

        this.set('message_text', '');
        messages.addObject(newMessage);
        model.save();
      },

      clearMessages() {
        this.get('controllers.messages').send('clear');
      }
   }
});
