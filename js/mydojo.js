require(["app/Hello","dojo/dom", "dojo/domReady!"], 
    function(Hello, dom){
		dom.byId("helloworld").innerHTML = "Hello New World!";
			var w = new Hello({
					id: "hello",
					content: "Hello World!"

				// place it in the DOM
				}).placeAt(document.body);

				// show it
				w.show();
    }
);
