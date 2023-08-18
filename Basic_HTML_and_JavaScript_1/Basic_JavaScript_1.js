alert ("This is an ALERT!");
<body>
		<button onclick="My_First_Function()">
		Click me!
		</button>
		<p id="Irish"></p>
	<Script>
	function My_First_Function() {
		var String = "Kiss me, I'm Irish";
		var result = String.fontcolor("green");
		document.getElementById("Irish").innerHTML =
		result;
	}
	</script>
</body>