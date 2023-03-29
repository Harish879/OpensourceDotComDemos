<script>
        const providers = ["aad"];
        const loginButtons = document.getElementById("loginButtons");
        providers.forEach(provider => {
            const button = document.createElement("button");
            button.innerText = 'Login with Microsoft';
            button.onclick = () => {
                window.location.href = `/.auth/login/${provider}`;
            };
            loginButtons.appendChild(button);
        });
        fetch("/.auth/me")
            .then(response => response.json())
            .then(data => {
                if (data.clientPrincipal) {
                    var pattern = /@gmail.com/;
                    var result = pattern.test(`${data.clientPrincipal.userDetails}`);
                   if (result){
                    console.log("You are authorized");
                    window.location.href = '/main.html';
                   }
                   else{
                    console.log("You are not authorized");
                    window.location.href = '/index.html';
                   }
                } 
            });
    </script>
