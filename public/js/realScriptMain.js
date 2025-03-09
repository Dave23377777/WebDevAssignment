fetch("TopMenuBar.html")
    .then(response => response.text())
    .then(data => {
       	//console.log("TopMenuBar fetched:", data);
		// insert very top
		//document.body.insertAdjacentHTML('afterbegin', '<div class="pageContentContainer"></div>');
         document.body.insertAdjacentHTML('afterbegin', data); 
		 
		 // After the HTML has been inserted, now you can find and modify elements
		
    })
    .catch(error => console.error("Error loading the TopMenuBar.html:", error));

	//