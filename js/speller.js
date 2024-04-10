export default {
	check,
	lookup,
};

var elements;

await loadPeriodicTable();


// ****************************

async function loadPeriodicTable() {
	elements = await (await fetch("periodic-table.json")).json();
}

function check(inputWord) {

    if (inputWord.length>0) {
        for (const element of elements) {
                let symbol=element.symbol.toLowerCase()
                if(symbol.length <=inputWord.length){
                    
                    //did the symbol match the first 
                    //one or two characters in "input word"
                    if(inputWord.slice(0,symbol.length)==symbol){
                       // still have characters left
                       if(inputWord.length>symbol.length){
                            let res=check(inputWord.slice(symbol.length))
                            console.log(res)
                       }
                    }
                }
        }
    }
    return []
}

function lookup(elementSymbol) {
	// TODO: return the element entry based on specified
	// symbol (case-insensitive)

    
    for(let element of elements){
        if(element.symbol.toLowerCase()==elementSymbol){
          return element  
        }
    }
    
}