// Observables are like functions with zero arguments, but generalize those to allow multiple values.

// Subscribing to an Observable is like calling a function, providing callbacks where the data will be delivered to.

interface Observer {
  next(value);
  error?(error);
  complete?();
}

interface Observable {
  subscribe(callback);
}

function createObservable(fn): Observable {
  let observable: Observable = {
    subscribe(observer: Observer) {
      return fn(observer);
    }
  };

  return observable;
}

function map(source$, projectFn) {
  let map$ = createObservable((observer) => {
    const mapObserver = {
      next(x) {
        observer.next(projectFn(x));
      }
    };
    source$.subscribe(mapObserver);
  });

  return map$;
}

export function testRx() {

  // function passed to createObservable represents an "Observable execution",
  // a lazy computation that only happens for each Observer that subscribes

  let source$ = createObservable(function (observer: Observer) {
    observer.next(2);
    observer.next(3);
    observer.next(-4);
    // observer.complete();
  });

  let obs1: Observer = {
    next(value)  {
      console.log("obs1 val", value);
    }
  };

  let obs2: Observer = {
    next(value)  {
      let modified = value + 10;
      console.log("obs2 val", modified);
    }
  };

  source$.subscribe(obs1);
  source$.subscribe(obs2);

  let squares$ = map(source$, function (value) {
    return value * value;
  });

  squares$.subscribe(obs2);
}

function getValue() {
  console.log("getValue");
  return 123;
}
