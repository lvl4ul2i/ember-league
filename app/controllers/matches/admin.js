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
        // Get the parent match
        var model = this.get('model');
        var self = this;
        var message_text=this.get("message_text");
        var newMessage = this.store.createRecord('message', {
          message: model.get('minutes') + ' min. - ' + message_text,
          timestamp: new Date().getTime()
        });

        model.get('messages.[]').pushObject(newMessage);
        // Save the message, then save the match
        newMessage.save().then(function() {
          self.set('message_text', '');
          return model.save();
        });
      },

      clearMessages() {
        this.get('controllers.messages').send('clear');
      }
   }
});
