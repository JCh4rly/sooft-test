// Listar restaurantes.
const list = (req, res, next) => {
  res.json(global.data.restaurants);
}

// Filtrar restaurantes por kor.
const listByKindOfRestaurant = (req, res, next) => {
  let kor = req.params.kor;
  res.json({ success: true, restaurants: findByKOR(kor) });
}

// Crear un restaurant.
const insert = (req, res, next) => {
  // Crear restaurante con la estructura indicada en el test.
  let { name = "Nombre", kindOfRestaurant = "KOR", specials = [] } = req.body;
  let restaurant = { name, kindOfRestaurant, specials }

  // COntrolar restaurant repetido.
  if (restaurantExists(restaurant)) {
    return res.status('400').json({ success: false, message: `${restaurant.name} ya existe.` });
  }

  // Agregar restaurant a la lista.
  global.data.restaurants.push(restaurant);

  res.status('201').json({ success: true });
}

// Retorna true si restaurant r existe en la lista.
const restaurantExists = (r) => {
  let restaurants = global.data.restaurants
  let search = restaurants.filter(item => item.name === r.name)

  return search.length > 0
}

// Filtrar por kor.
const findByKOR = (kor) => {
  let restaurants = global.data.restaurants
  return restaurants.filter(item => item.kindOfRestaurant === kor)
}

module.exports = {
  list,
  listByKindOfRestaurant,
  insert
}