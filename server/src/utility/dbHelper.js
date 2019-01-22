const tedious = require('tedious');
const tdsConnection = tedious.Connection;
const tdsTypes = tedious.TYPES;
const tdsRequest = tedious.Request;
const procedureMapping = require('./procedureMapping');


const dbConnectionConfiguration ={
    userName : "smfmappuser",
    password : "smfm@12345",
    server : "localhost",
    options : {
        database: 'smfm'

    }
}

const sqlConnection = new tdsConnection(dbConnectionConfiguration);
sqlConnection.on('connect', (err)=>{
 if(err){ 
     console.log(`Error occurred while connection to server :${err}` );
    }
    else{
        console.log('SQL connecton established successfully.');
    }
});
const executeSelectQuery = (inputObject, query, callback)=>{
    
}
const executeInsertQuery = (inputObject, query, callback ) => {

    const sqlRequest = new tdsRequest(query, (err, rowCount, rows)=>{
       if(err){
        callback(err, null);
       }
       else{
          callback("inserted successfully", null);
         }
       
    });
    procedureMapping.get(query).forEach(element => {
        sqlRequest.addParameter(element.propColumn, getTediousType(element.type), getModelProperty(element.modelProperty, inputObject) )
    });
    sqlConnection.callProcedure(sqlRequest);
};

const getTediousType = (inputType)=>{
    switch (inputType.toLowerCase()){
        case "string":
        return tdsTypes.VarChar
        break;
        case "number":
        return tdsTypes.Int
        break;
        case "datetime":
        return tdsTypes.DateTime
        case "boolean":
        return tdsTypes.Bit
        
    }
};

const getModelProperty = (prop, inputObject) => {

    if (prop.indexOf('.' > 0)) {
        const props = prop.split('.');
        props.forEach(prop => {
        inputObject = inputObject[prop];
        });
        return inputObject;
    }
    else {
        return inputObject[prop];
    }
};

module.exports = {
insert : executeInsertQuery
}





