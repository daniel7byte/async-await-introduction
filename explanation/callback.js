//Tiene la desventaja de que es poco escalable. Es toda una Piramide de Callback.
// No se puede usar codigo afuera del codigo que haga referencia a la funcion asincrona ya que produce un error undefined.
function requestHandler(req, res) {
  User.findById(req.userId, function(err, user) {
    if (err) {
      res.send(err);
    } else {
      Tasks.findById(user.tasksId, function (err, tasks) {
        if (err) {
          return res.send(err);
        } else {
          tasks.completed = true;
          tasks.save(function(err) {
            if (err) {
              return res.send(err);
            } else {
              res.send('Task Completed');
            }
          });
        }
      });
    }
  });
}
