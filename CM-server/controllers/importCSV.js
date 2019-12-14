module.exports = function (reqModel, path) { 

    var fs = require('fs'),
      async = require('async'),
      csv = require('csv');

  const model = require('../models/'+ reqModel +'.js');

   
  var input = fs.createReadStream(path);
  var parser = csv.parse({
    columns: true,
    relax: true
  });
   
  var inserter = async.cargo(function(tasks, inserterCallback) {
      model.bulkCreate(tasks).then(function() {
          inserterCallback();
        }
      );
    },
    1000
  );
   
  parser.on('readable', function () {
    while(line = parser.read()) {
      inserter.push(line);
    }
  });
   
  parser.on('end', function (count) {
    inserter.drain = function() {
      doneLoadingCallback();
    }
  });
   
  input.pipe(parser);
};