// Una promesa siempre tiene un metodo then y un metodo catch
// then() cuando todo funciona super!
// catch() se produjo un error!
// Permite tener then() anidados de manera que el orden determina
// la secuencia de ejecucion, y se puede comunicar por medio de los return al siguiente then()
function requestHandler(req, res) {
  User.findById(req.userId)
    .then(function (user) {
      return Tasks.findById(user.tasksId)
    })
    .then(function (tasks) {
      tasks.completed = true;
      return tasks.save();
    })
    .then(function () {
      res.send('Tasks Completed!');
    })
    .catch(function (errors) {
      res.send(erros);
    });
}
