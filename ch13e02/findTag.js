<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
  function talksAbout(node, string) {
  	if (node.nodeType == document.ELEMENT_NODE) {
    	for (var i = 0; i < node.childNodes.length; i++) {
      		if (talksAbout(node.childNodes[i], string))
        	return true;
    	}
    	return false;
  	} else if (node.nodeType == document.TEXT_NODE) {
    	return node.nodeValue.indexOf(string) > -1;
  	}
  }
  
  function byTagName(node, tagName) {
    var result = [];
  	if (node.nodeType == document.ELEMENT_NODE) {
        if (node.tagName.toLowerCase() == tagName) {
        	result.concat(node);
        }
    	for (var i = 0; i < node.childNodes.length; i++) {
        	result.concat(byTagName(node.childNodes[i], tagName));
        }
    }
    return result;
  }
  
  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>