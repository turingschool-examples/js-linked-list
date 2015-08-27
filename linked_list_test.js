mocha.setup("bdd");

describe('testing', function () {
  it('creates a new list with an empty head node', function () {
    var list = createList();
    assert.isNull(list.head);
  });

  it('appends an item to the list', function() {
    var list = createList();
    push(list, "pizza");
    assert.equal(list.head.data, "pizza");
  });
});
