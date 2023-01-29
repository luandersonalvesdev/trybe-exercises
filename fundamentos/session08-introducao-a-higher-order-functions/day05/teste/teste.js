const st = {
  name: 'aaaaaaaaa',
  age: 18,
}

const a = (obj) => {
  const { name } = obj
  console.log(name);
}

console.log(a(st));