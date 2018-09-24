"use strict";
const mongodb = require('mongodb');
var dbhelp = require('./dbhelp');

//var mime = require('mime-types')
var jsrender = require('jsrender');

// May be retained between function executions depending on whether Azure
// cleans up memory
let client = null;
const uri = "mongodb://admin:admin@ds057254.mlab.com:57254/rdicode";

module.exports = async function (context, req) {
    // https://medium.com/@tkssharma/writing-neat-asynchronous-node-js-code-with-promises-async-await-fa8d8b0bcd7c
    // https://github.com/Azure/azure-functions-core-tools/issues/269
    // func  host start .\FuncAppTimeEntry\ -c "{\"name\": \"Donna\"}"

    context.log('\n\t GetTimeCard22 trigger function processed a request.\n');
// inputs id's
    let templateId = req.query.tid || 'timecard201';
    let cardId     = req.query.cid || 'bk101';
    let hasClient = client != null;

    if (client == null) {
        mongodb.MongoClient.connect(uri, {useNewUrlParser: true }, function (error, _client) {   
            if (error) {
                context.log('Failed to connect to DB');
                context.res = { status: 500, body: res.stack }
                return context.done();
            }
            client = _client;
            context.log('\n\tConnected 1st time!'); 
        });

        context.res = {
            headers: {
            'Content-Type': 'text/html; charset=utf-8'
            },
            // status: 200, /* Defaults to 200 */
            body: "First Time. Everyone in the pool.! "
        };
      } else {
        context.log('\n\tUsing client!!! ');

        //var query = { cardId: "bk101" };
        var query = {qtemplate: { templateId: templateId }, 
                         qcard: { cardId: cardId }                         
    };

        var data = await chicoDemia(client.db("rdicode"), "templates", query) ;
        context.res = {
            headers: {
            'Content-Type': 'text/html; charset=utf-8'
            },
            // status: 200, /* Defaults to 200 */
            body: data
        };
        //context.done();  
      }
 

};

/////
async function chicoDemia(dbo, col, query) {
    console.log('\n\t****\t async function chicoDemia(dbo, col, query) {');
    console.log(`\n\t****\t query = ${JSON.stringify(query)}`);
    //qt = query.qtemplate;
    //qc = querty.qcard;

    var tmplateData = await dbhelp.getDataFromDBAA(client.db("rdicode"), "templates", query.qtemplate )
    //var tmplateData = await dbhelp.getDataFromDBAA(client.db("rdicode"), "templates", { templateId: "timecard201" } )

    var UserData = await dbhelp.getDataFromDBAA(client.db("rdicode"), "cardusers", { cardId: "bk101" } )

    // decode
	let data = tmplateData[0].data;  
	let buff = new Buffer(data, 'base64');  
    let text = buff.toString('ascii');

    var myTmpl = jsrender.templates(text);
    var html = await myTmpl.render(UserData);    
    return html;
}