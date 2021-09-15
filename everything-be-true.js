function truthCheck(collection, pre) {
  return collection.every(i => i[pre]);
}