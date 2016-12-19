<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
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

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>