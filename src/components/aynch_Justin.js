
//es5 Way







//Es6 using proised 

function asyncMap(tasks, callback){
  var arrayOfPromises = tasks.map(function(task){
    return new Promise(task);
  });
  
  return Promise.all(arrayOfPromises).then(function(values){
    callback(values);
  })
}