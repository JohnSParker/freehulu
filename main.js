function C1() {
    if ($("#HULUEMAIL").val() == "" || $("#HULUREGION").val() == "") {
        alert("Type in your real Email address and choose your server.")
    } else {
        $(".S1").fadeOut(1000);
        setTimeout(function() {

            $(".S2").fadeIn(1000);

            setTimeout(function() {

                var TYPED = new Typed(".LOADING", {
                    strings: ["Loading <strong>HULU Account Key Generator</strong>^500.^500.^500.^1000", "<strong>HULU." + $("#VALORANTREGION").val() + ".CONFIG</strong> loaded^500.^500.^500.^1000", "Generating <strong>HULU Account Key</strong> for you^500.^500.^500.^3000", "Composing email with generated code to <strong>" + $("#HULUEMAIL").val() + "</strong>^500.^500.^500.^1000", "<strong class='RED'>FAIL!^1000 Traffic anomaly detected.^1000</strong> Validate with activity to continue and receive <strong>your free HULU Account Key</strong>."],
                    typeSpeed: 75,
                    backSpeed: 75,
                    backDelay: 500,
                    showCursor: false,
                    onComplete: function() {
                        $(".lds-ellipsis").fadeOut(1000);
                        $(".HV").fadeIn(1000);
                    }
                })

            }, 1000)

        }, 1000) 
    }
}