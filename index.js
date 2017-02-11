
const dog = { name: "Fido", age: 2 };

for (const key in dog) {
  console.log(dog[key]);
}

function forEach(iterable, callback) {
  if (Array.isArray(iterable)) {
    for (let i = 0, l = iterable.length; i < l; i++) {
      const element = iterable[i];
      callback(element, i, iterable);
    }
  } else if (typeof iterable === 'object') {
    for (const key in iterable) {
      var value = iterable[key];
      callback(value, key, iterable);
    }
  }
}
