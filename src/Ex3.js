// data from data_ex3.js
const { users } = require('./data_ex3');

//Retornar un array amb els noms de tots els usuaris que tenen el hobbie "running"
function getUsersByHobby(hobby) {
  const usersByHobby = users.filter((user) => user.hobbies.includes(hobby));
  return usersByHobby.map((user) => user.name);
}

//Calcular i retornar la mitjana d'edat (numero arrodonit a l'enter més petit) de les amistats de l'usuari en funció de l'id que li passem
function friendsAverageAge(userId) {
  const user = users.find((user) => user.id === userId);
  const friends = user.friends;
  // Ara tinc les usuaris amics de l'usuari
  // He de recuperar només l'edat de cada amic però tornant a mirar en users
  const friendsAge = friends.map((friend) => {
    // Busco l'usuari que té l'id de l'amic
    const friendUser = users.find((user) => user.id === friend.id);
    return friendUser.age;
  });
  // Ara tinc un array amb les edats dels amics. He de fer la mitjana
  // Sumo tot amb reduce
  const friendsAgeSum = friendsAge.reduce((acc, curr) => acc + curr, 0);
  // Divideixo i arrodoneixo a l'enetr més petit
  return Math.floor(friendsAgeSum / friends.length);
}

//Retornar un array amb els hobbies que comparteixen l'usuari i les seves amistats si existeixen
function sharedHobbies(userId) {
  const user = users.find((user) => user.id === userId);
  const friends = user.friends;
  //Ara em creo una array amb la informació dels users que son amics de l'usuari
  const userFriends = friends.map((friend) =>
    users.find((user) => user.id === friend.id)
  );
  //Anem a fer un array amb els hobbies de l'usuari i els seus amics
  const userFriendsHobbies = userFriends.map((friend) => friend.hobbies);
  console.log(userFriendsHobbies);
  //Ara he de buscar coincidencies entre els hobbies de l'usuari i els seus amics
  const userHobbies = user.hobbies;
  // Amb some miro si algun dels hobbies de l'usuari coincideix amb els hobbies dels seus amics
  // Amb filter m'asseguro de mantenir únicament amb aquells que coincideixen
  const sharedHobbies = userHobbies.filter((hobby) => {
    return userFriendsHobbies.some((friendHobbies) =>
      friendHobbies.includes(hobby)
    );
  });
  return sharedHobbies;
}

module.exports = { getUsersByHobby, friendsAverageAge, sharedHobbies };
