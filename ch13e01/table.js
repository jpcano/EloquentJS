<style>
  /* Defines a cleaner look for tables */
  table  { border-collapse: collapse; }
  td, th { border: 1px solid black; padding: 3px 8px; }
  td:nth-child(2) {text-align: right;}
  th     { text-align: left; }
</style>

<script>
  function buildTable(data) {
    var table = document.createElement("table");
    var keys = Object.keys(MOUNTAINS[0]);
  
    function row (data, header) {
   		var tr = document.createElement("tr");
    	for (var i = 0; i < data.length; i++) {
      		var tx = document.createElement(header);
    		var text = document.createTextNode(data[i]);
      		tx.appendChild(text);
      		tr.appendChild(tx);
    	}
      	return tr;
    }
  	
    // create the header
    table.appendChild(row(keys, "th"));
    // create the rest rows
    for (var i = 0; i < MOUNTAINS.length; i++) {
    	var texts = keys.map(function(v) {return MOUNTAINS[i][v]});
      	table.appendChild(row(texts, "td"));
    }
    return table;
  }

  document.body.appendChild(buildTable(MOUNTAINS));
</script>