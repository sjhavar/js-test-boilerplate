import test from 'tape';
import { Animal, Reptile, Primate, Human } from './index';


test ('Animal', function ( test ){

let actual, expected;

  const human = new Human();

  test.ok( human instanceof Human, 'should be an instance of Human' );
  test.ok( human instanceof Primate, 'should be an instance of Primate' );
  test.ok( human instanceof Animal, 'should be an instance of Animal' );

  const message = 'hello';
  expected = message;
  actual = human.speak( message );
  test.equal( actual, expected, 'should speak what it is asked to speak' );

  test.end();
});

