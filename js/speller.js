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
	// TODO: determine if `inputWord` can be spelled
	// with periodic table symbols; return array with
	// them if so (empty array otherwise)
    //console.log(inputWord)
	return ["y","u","c","k","y"];
}

function lookup(elementSymbol) {
	// TODO: return the element entry based on specified
	// symbol (case-insensitive)

    console.log(element)
    for(let element of elements){
        if(element.symbol.toLowerCase()==elementSymbol){
          return element  
        }
    }
    

}