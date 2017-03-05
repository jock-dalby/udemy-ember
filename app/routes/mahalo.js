import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // Always extend Ember.Object when defining classes to get the full functionality of Ember
    const Surfer = Ember.Object.extend({
      // sup is a method of the Surfer class
      sup(comment) {
        console.log(`Sup? I am ${this.get('name')}! My comment is "${comment}"`);
      }
    });

    // When defining a subclass, call the extend() method on the parent
    // class you are subclassing.

    // When using a subclass we can call this._super() to access the
    // parent class properties and functions.
    const WahineSurfer = Surfer.extend({
      sup(comment) {
        this._super(`${comment}, :)`);
      }
    });

    let kai = Surfer.create({
      name: 'Jock'
    });
    kai.sup(`It's not easy being green!`);

    let sistah = WahineSurfer.create({
      name: 'Uncle Cracker'
    });
    sistah.sup('I am a Wahine');

    // When visit localhost:4200/mahalo, below alert will appear
    return kai;
  }
});
