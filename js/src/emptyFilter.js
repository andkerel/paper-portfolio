var emptyFilter = function() {

    return function(listItems){
        var results = {};
        for(var key in listItems) { 
            if(listItems[key] !== undefined || listItems[key] !== '') {
                results[key] = listItems[key];
            }
        }
        return results;
    };
};