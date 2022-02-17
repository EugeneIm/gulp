//Imports for later

//Hello task

/*
    function gulpTemplate(cb){
        console.log("gulp template")
        cb();
    }
    exports.template = gulpTemplate;
    run the function as "template" and not "gulpTemplate"
*/

function helloTask(done){
    console.log("gulp test run")
    done();
}

exports.hello = helloTask;