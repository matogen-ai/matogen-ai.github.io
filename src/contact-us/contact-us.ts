import { CurrentDates } from "../script/current-dates";
import { HoverEffect } from "../script/hover";
import { MobileBurgerMenu } from "../script/mobile-burger-menu";
import "../style.scss";

export class ContactUs {
    static init() {
        this.initMaterialInput();
        new HoverEffect(".responsibility", 3, 3);
        new MobileBurgerMenu().initMobileMenu();
        const dates = new CurrentDates();
        dates.current();
        this.confirmation();
    }

    static initMaterialInput() {
        const labels = document.querySelectorAll('.form-control label')
        
        labels.forEach(label => {
            label.innerHTML = (label as HTMLLabelElement).innerText
                .split('')
                .map((letter, idx) => `<span style="
                        transition-delay: ${idx * 50}ms
                    ">${letter}</span>`)
                .join('');
        });
         
    }

    static confirmation() {
        var modal = document.getElementById("dialogModal");
        var form = document.getElementById("contact-form") as HTMLFormElement; 
    
        if (modal !== null && form !== null) {
            $(document).on("click", "#submit", function(event) {
                // Prevent the form from being submitted normally
                event.preventDefault();
                const name = $("#name").val() 
                const email = $("#email").val()
                const subject = $("#subject").val()
                const message = $("#message").val()
                
                var url = "https://mai-test1.azurewebsites.net/email";
                 
                $.ajax({
                    url: url, 
                    type: 'POST',
                    data: JSON.stringify({
                        "name": name,
                        "email": email,
                        "subject": subject,
                        "message": message
                      }),
                      headers: {
                                 'Content-Type': "application/json"
                               },
                      
                    success: function(data) {
                        console.log(data)
                        // If the API call is successful, display the dialog box
                        if(modal!==null)
                            modal.style.display = "block";
    
                        // Get the <span> element that closes the modal
                        var span = document.getElementsByClassName("close")[0] as HTMLElement;
                        span.onclick = function() {
                            if(modal!==null)
                                modal.style.display = "none";
                            if (form!==null)
                                form.requestSubmit();
                        }
    
                        // When the user clicks anywhere outside of the modal, close it
                        window.onclick = function(event) {
                            if(modal!==null)
                                if (event.target == modal) {
                                    modal.style.display = "none";
                                    // Submit the form
                                    form.requestSubmit();
                                }
                        }
                    },
                    error: function(textStatus, errorThrown) {
                        console.error(textStatus, errorThrown);
                    }
                });
            });
        }
    }

}
    

ContactUs.init();