console.log("USA300 :-)")

USA300=function(){}

USA300.buildUI=function(){};

USA300.txt2docs=function(x){
    // convert \n\t text to Array
    var A = x.split('\n').map(function(r){return r.split("\t")});
    var docs={};
    var F = A[0]; // fields
    F.map(function(f){docs[f]=[]}); // initiatize document attributes
    for(var i=1;i<A.length;i++){ // for each row
        for(var j=0;j<F.length;j++){ // for each column
            docs[F[j]][i-1]=A[i][j]
        }
    }
    return docs;
};

USA300.ini=function(){
    // start by loading data
    $.get("PRJEB2870.txt",function(x){
        var y = USA300.txt2docs(x);
        console.log("done");
        }
     )
    
}

USA300.ini();