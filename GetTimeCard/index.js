var fs = require("fs")
var mime = require('mime-types')
var jsrender = require('jsrender');

module.exports = async function (context, req) {
    // https://github.com/Azure/azure-functions-core-tools/issues/269
    // func  host start .\FuncAppTimeEntry\ -c "{\"name\": \"Donna\"}"
      
    context.log('\n\t JavaScript HTTP trigger function processed a request.\n');
    var template = 'card.timeentry.001.tmpl.html';
    var dfInput = 'card.timeentry.001.data.json';

    //var contentType = "text/html";
    var contentType = 'text/html; charset=utf-8'; //mime.lookup(file) 

    try {
        var tmpl = fs.readFileSync(__dirname + "\\" +  template, 'utf8');
        var dataInput = JSON.parse(fs.readFileSync(__dirname + "\\" +  dfInput, 'utf8'));

        var myTmpl = jsrender.templates(tmpl);
        var html = myTmpl.render(dataInput);    

        data = html;

        context.res = {
            headers: {
            'Content-Type': contentType
            },
            // status: 200, /* Defaults to 200 */
            body: data
        };
        context.done();  
    }
    catch (err) {
        context.res = {
            headers: {
                'Content-Type': contentType
            },
            status: 500, /* Defaults to 200 */
            body: "FM Error: " + err
        };
        context.done();  
    }
};