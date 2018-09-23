var MongoClient = require('mongodb').MongoClient;
exports.myDateTime = function () {
    return Date();
};
exports.test = function () {
    return 'test test';
};

var mydburl = "mongodb://admin:admin@ds057254.mlab.com:57254/rdicode";

// May be retained between function executions depending on whether Azure
// cleans up memory
//let client = null;

exports.test_mongo = function() {
    MongoClient.connect(mydburl, {useNewUrlParser: true }, function (err, db) {   
        if(err) throw err;                    
    
        //Write databse Insert/Update/Query code here..
        var dbo = db.db("rdicode");
        var query;
        
        // cardusers (data)
        query = { cardId: "bk101" };
        getDataFromDB(dbo, "cardusers", query);
        //
        
        // templates
        query = { templateId: "timecard201" };
        getDataFromDB(dbo, "templates", query);	
    
        // decoded template
        query = { templateId: "timecard201" };
        getCardFromDB(dbo, "templates", query);
        //                
    });
}



exports.getDataFromDBAA =  function getDataFromDBAA(dbo, col, query) {
    var results='what the fuck';
    results = dbo.collection(col).find(query).toArray().then(function(it) {
        //console.log(`it = ${JSON.stringify(it)}`);
        
        return it;        
    });
    return results;
}

exports.getDataFromDB = function getDataFromDB(dbo, col, query) {
	dbo.collection(col).find(query).toArray(function(err, result) {    
		if (err) throw err;
		
		console.log('\n---------------c1-------------\n');
		console.log(result[0]);
		console.log('\n---------------c2-------------\n');
		//db.close();
	});	
}


function getDataFromDB(dbo, col, query) {
	dbo.collection(col).find(query).toArray(function(err, result) {    
		if (err) throw err;
		
		console.log('\n---------------b1-------------\n');
		console.log(result[0]);
		console.log('\n---------------b2-------------\n');
		//db.close();
	});	
}

exports.getCardFromDB = function  getCardFromDB(dbo, col, query) {

	dbo.collection(col).find(query).toArray(function(err, result) {
		if (err) throw err;
		
		console.log('\n---------------a1-------------\n');
		// decode
		let data = result[0].data;  
		let buff = new Buffer(data, 'base64');  
		let text = buff.toString('ascii');
		console.log("converted from Base64 to ASCII\n" + text );  

		//https://www.base64encode.org/
		console.log('\n---------------a2-------------\n');

		//db.close();
	});	
}