module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
//func  host start .\FuncAppTimeEntry\ -c "{\"name\": \"Donna\"}"

    if (req.query.id || (req.body && req.body.id)) {
        context.res = {
            headers: {
                'Content-Type': 'text/html; charset=utf-8'
            },
            // status: 200, /* Defaults to 200 */
            body: "Hello " + data // (req.query.id || req.body.id)
        };
        context.done();
    }
    else {
        context.res = {
            status: 400,
            body: "<h3>Please pass a name on the query string or in the request body</h3>"
        };
    }
};
var data=`
<!DOCTYPE html>
<head>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jsviews/0.9.90/jsrender.js"></script>
<style>
table {
    color: #333;
    font-family: Helvetica, Arial, sans-serif;
    width: 640px;
    border-collapse:
    collapse; border-spacing: 0;
}

td, th {
    border: 1px solid transparent; /* No more visible border */
    height: 30px;
    transition: all 0.3s;  /* Simple transition for hover effect */
}

th {
    background: #DFDFDF;  /* Darken header a bit */
    font-weight: bold;
}

td {
    background: #FAFAFA;
    text-align: center;
}

/* Cells in even rows (2,4,6...) are one color */
tr:nth-child(even) td { background: #F1F1F1; }

/* Cells in odd rows (1,3,5...) are another (excludes header cells)  */
tr:nth-child(odd) td { background: #FEFEFE; }

tr td:hover { background: #666; color: #FFF; }
/* Hover cell effect! */
</style>
</head>

<form action="https://johndog.herokuapp.com/ping">
<div>
   <em>Name:</em> Frank Mastronardi
   
      (Goes by <em>FM</em>)
   
   <input type="submit" value="Submit">
</div>

<table>
<tr></tr>
</table>

<table>
<tr>
    <th>Day</th>
    <th>Date</th>
    <th>Bill Code</th>
    <th>Hours</th>
    <th>Activities</th>
</tr>

<tr>
<td>Monday</td>
<td><i>tbc</i></td>
<td>MoVIS Phase I - (4018)</td>
<td><input id="idMon" name="Mon"type="text" size="4" > </input></td>
<td>ABC Eats Development</td>
</tr>

<tr>
<td>Tuesday</td>
<td><i>tbc</i></td>
<td>MoVIS Phase I - (4018)</td>
<td><input id="idMon" name="Mon"type="text" size="4" > </input></td>
<td>ABC Eats Development</td>
</tr>
<tr>
<td>Wednessday</td>
<td><i>tbc</i></td>
<td>MoVIS Phase I - (4018)</td>
<td><input id="idMon" name="Mon"type="text" size="4" > </input></td>
<td>ABC Eats Development</td>
</tr>
<tr>
<td>Thursday</td>
<td><i>tbc</i></td>
<td>MoVIS Phase I - (4018)</td>
<td><input id="idMon" name="Mon"type="text" size="4" > </input></td>
<td>ABC Eats Development</td>
</tr>
<tr>
<td>Friday</td>
<td><i>tbc</i></td>
<td>MoVIS Phase I - (4018)</td>
<td><input id="idMon" name="Mon"type="text" size="4" > </input></td>
<td>ABC Eats Development</td>
</tr>
</table>
</form>  <!DOCTYPE html>
<head>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jsviews/0.9.90/jsrender.js"></script>
<style>
table {
    color: #333;
    font-family: Helvetica, Arial, sans-serif;
    width: 640px;
    border-collapse:
    collapse; border-spacing: 0;
}

td, th {
    border: 1px solid transparent; /* No more visible border */
    height: 30px;
    transition: all 0.3s;  /* Simple transition for hover effect */
}

th {
    background: #DFDFDF;  /* Darken header a bit */
    font-weight: bold;
}

td {
    background: #FAFAFA;
    text-align: center;
}

/* Cells in even rows (2,4,6...) are one color */
tr:nth-child(even) td { background: #F1F1F1; }

/* Cells in odd rows (1,3,5...) are another (excludes header cells)  */
tr:nth-child(odd) td { background: #FEFEFE; }

tr td:hover { background: #666; color: #FFF; }
/* Hover cell effect! */
</style>
</head>

<form action="https://johndog.herokuapp.com/ping">
<div>
   <em>Name:</em> Susan
   
   <input type="submit" value="Submit">
</div>

<table>
<tr></tr>
</table>

<table>
<tr>
    <th>Day</th>
    <th>Date</th>
    <th>Bill Code</th>
    <th>Hours</th>
    <th>Activities</th>
</tr>

<tr>
<td>Monday</td>
<td><i>tbc</i></td>
<td>MoVIS Phase I - (4018)</td>
<td><input id="idMon" name="Mon"type="text" size="4" > </input></td>
<td>ABC Eats Development</td>
</tr>

<tr>
<td>Tuesday</td>
<td><i>tbc</i></td>
<td>MoVIS Phase I - (4018)</td>
<td><input id="idMon" name="Mon"type="text" size="4" > </input></td>
<td>ABC Eats Development</td>
</tr>
<tr>
<td>Wednessday</td>
<td><i>tbc</i></td>
<td>MoVIS Phase I - (4018)</td>
<td><input id="idMon" name="Mon"type="text" size="4" > </input></td>
<td>ABC Eats Development</td>
</tr>
<tr>
<td>Thursday</td>
<td><i>tbc</i></td>
<td>MoVIS Phase I - (4018)</td>
<td><input id="idMon" name="Mon"type="text" size="4" > </input></td>
<td>ABC Eats Development</td>
</tr>
<tr>
<td>Friday</td>
<td><i>tbc</i></td>
<td>MoVIS Phase I - (4018)</td>
<td><input id="idMon" name="Mon"type="text" size="4" > </input></td>
<td>ABC Eats Development</td>
</tr>
</table>
</form>  
`;