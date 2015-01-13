function f() {
  {
    let x;
    {
      // okay, block scoped name
      const x = "sneaky";
    }
  }
}