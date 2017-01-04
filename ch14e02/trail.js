<style>
  .trail { /* className for the trail elements */
    position: absolute;
    height: 6px; width: 6px;
    border-radius: 3px;
    background: teal;
  }
  body {
    height: 300px;
  }
</style>

<script>
  var M = 200;
  var trail = [];
  var p = 0;
  for (var i = 0; i < M; i++) {
    trail[i] = document.createElement("div");
  	trail[i].className = "trail";
    document.body.appendChild(trail[i]);
  }
  addEventListener("mousemove", function(event) {
    trail[p].style.left = (event.pageX - 4) + "px";
    trail[p].style.top = (event.pageY - 4) + "px";
    p = ++p % M;
  });
</script>