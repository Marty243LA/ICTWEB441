    <script>
        function myFunction(){
            var myElement = document.getElementById("p1"); //Creates a variable and Finds the element "p1" inside of the HTML document
            myElement.innerHTML = "Button Clicked"; //Allows you to get or change the HTML content inside an element
        }
        function getRSS(){
            const myURL = "https://rss.app/feeds/v1.1/6OqxRHTi7PZtL6rr.json"; //declares the URL as a constant variable (can't be changed)
            fetch(myURL) //makes a HTTP request to server to fetch URL
            .then(response => response.json()) //converts the response data into json, result of response goes into data variable
            .then(data => { //data is passed to alert function and displays an alert dialog box 
            var htmlContent = data.items[0].description; //retrieves the first item of the HTML content in the 'items' list
            var secondItemTitle = data.items[0].title;
            var imageLink = data.items[0].link;
            alert(htmlContent); //'htmlcontent' variable is passed to alert function 
            alert(secondItemTitle);
            alert(imageLink);
            document.getElementById("rssContainer").innerHTML = htmlContent; //rssContainer inner HTML content is set the value of the htmlContent element
            document.getElementById("titleContainer").innerHTML = secondItemTitle;
            document.getElementById("imageContainer").innerHTML = imageLink;
         } )
        }
            
        
            function changeMode(){
            document.body.classList.toggle("darkMode"); //toggles between modes defined in CSS Styles sheet
        }

        //var submitButton = document.getElementByName("submit"); //Retrieve 'submit' element from document
        function dataValidation(){
         //submitButton.addEventListener("click", { //After button has been clicked, this is executed after that
            var email = document.getElementById("email").value; //Retrieve value of the variable from document
            var age = document.getElementById("age").value; //Retrieve value of variable from document
            var age_number = Number(age) //converts string into number
            if(age>200||age<=0) //Sets limits for what age can be entered
        {alert("Data entry invalid");} //Alert function is called if the data entry is invalid
        //})
        }

        
    </script> 