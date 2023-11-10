function receivesAFunction(spy) {
    spy()
  }
  function returnsANamedFunction() {
    const fn = () => 2;
    return fn
  }
  function returnsAnAnonymousFunction() {
    return function () {
      console.log(`test test`);
    };
  }
  