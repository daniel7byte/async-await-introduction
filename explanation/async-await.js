// Siempre se requiere async antes de function
// Await es el que indica que el proceso es asincrono
// Es mas amigable, siempre los await hacen que esperen para la siguiente linea.
// Los errores se pueden manejar con los try catch
async function requestHandler(req, res) {
  try {
    const user = await User.findById(req.userId);
    const tasks = await Tasks.findById(user.tasksId);
    tasks.completed = true;
    await tasks.save();
    res.send('Tasks Saved');
  }
  catch (e) {
    res.send(e);
  }
}
