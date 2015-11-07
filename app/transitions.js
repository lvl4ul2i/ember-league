export default function() {
  this.transition(
    this.fromRoute(function(arg){
      console.log('fromRoute:', this.toString(), arg);
      return false;
    }),
    this.toRoute(function(arg) {
      console.log('toRoute:', this.toString(), arg);
      return false;
    }),
    this.use('fade')
  );
}
