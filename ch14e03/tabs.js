<style>
  .selected {
    background: gray;
    color: 		lightgray;
  }
</style>

<div id="wrapper">
  <div data-tabname="one">Tab one</div>
  <div data-tabname="two">Tab two</div>
  <div data-tabname="three">Tab three</div>
</div>
<script>
  function asTabs(node) {
    var tab = [];
    var buttonDiv;
    var button = [];
    
    // find tab divs and hide them
    tab = byTagName(node, "div");
    tab.forEach(function(div) {div.style.display = "none"});
    
    // create tab buttons
    buttonDiv= document.createElement("div");
    tab.forEach(function(div) {
      var b = document.createElement("button");
      b.innerHTML = div.getAttribute("data-tabname");
      buttonDiv.appendChild(b);
      button.push(b);
    });
    node.insertBefore(buttonDiv, node.firstChild);
	
    // adding events to each one of the tab buttons
    button.forEach(function(b, i) {
    	b.addEventListener("click", function() {
          	tab.forEach(function(t) { t.style.display = "none"; });
            button.forEach(function(b) { b.className = ""; });
   			tab[i].style.display = "block";
          	b.className = "selected";
  		});
    });

    function byTagName(node, tagName) {
      var nodes = [];
      var tag = tagName.toUpperCase();
  
      function findTag(rootNode) {
        for (var i = 0; i < rootNode.childNodes.length; i++) {
          var child = rootNode.childNodes[i];
          if (child.nodeType == document.ELEMENT_NODE) {
            if (child.tagName == tag)
              nodes.push(child);
            findTag(child);
          }
        }
      }
      findTag(node);
      return nodes;
    }
    
    button[0].click();
  }

  asTabs(document.querySelector("#wrapper"));
  
</script>