// 1. Get a reference to the target element
        const containerDiv = document.getElementById("home");

        // 2. Create the button element
        const myButton = document.createElement("button");

        // 3. Set button properties
        myButton.textContent = "Home";
        myButton.id = "dynamicButton";
        myButton.addEventListener("click", function() {
            document.location='index.html';
        });

        // 4. Append the button to the target element
        containerDiv.appendChild(myButton);