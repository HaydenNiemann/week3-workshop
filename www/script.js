$(document).ready(function() {
    $("#loginForm").submit(function(event) {
        event.preventDefault(); 

        
        var formData = {
            email: $("#email").val(),
            password: $("#password").val()
        };

       
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "/homepage",
            data: JSON.stringify(formData),
            dataType: 'json',
            success: function(response) {
                if (response.valid) {
                    
                    $("#loginForm").css("background-color", "green");   //change the background color of the form to green
                    $("#errormsg").hide();                              
                } else {
                    $("#loginForm").css("background-color", "red");     //change the background color of the form to red
                    $("#errormsg").show(); 
                }
            },
            error: function() {
                alert("An error occurred during the login attempt.");
            }
        });
    });
});
