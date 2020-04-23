module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item }, item.enhancement < 20 && item.enhancement++;
}

function fail(item) {
   if (item.enhancement < 15) {
    return { ...item }, (item.durability = item.durability - 5);
  } else if (item.enhancement > 15 && item.enhancement < 17) {
    return { ...item }, (item.durability = item.durability - 10);
  } else if (item.enhancement > 17) {
    return (
      { ...item }, item.enhancement--, (item.durability = item.durability - 10)
    );
  };
}

function repair(item) {
  return { ...item }, (item.durability = 100);
}

function get(item) {
  return (
    { ...item },
    item.enhancement === 0
      ? (item.name = item.name)
      : item.enhancement > 0 &&
        (item.name = `${item.name}[${item.enhancement}]`)
  );
}
