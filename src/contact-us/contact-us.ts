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

        let element = document.querySelector('#dialog_place_holder');
        if (element !== null) {
            //insert the dialog html where the element placeholder is
            fetch('../partials/dialog.html')
                .then(response => response.text())
                .then(data => {
                    element!.innerHTML = data;
                });
        }
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

    static confirmation(){
        $(document).on("click", "#submit", function(event) {
            // Prevent the form from being submitted normally
            event.preventDefault();
        
            // Get the form data
            var formData = $("#contact-form").serialize();
        
            // Submit the form using AJAX
            $.ajax({
                type: "POST",
                url: "/path/to/your/form/handler",
                data: formData,
                //success: function() {
                complete: function() {
                    var modal = document.getElementById("dialogModal");
        
                    if (modal !== null) {
                        modal.style.display = "block";
        
                        // Get the <span> element that closes the modal
                        var span = document.getElementsByClassName("close")[0] as HTMLElement;
                        span.onclick = function() {
                            if (modal !== null)
                                modal.style.display = "none";
                        }                        // When the user clicks anywhere outside of the modal, close it
                
                        window.onclick = function(event) {
                            if (modal !== null && event.target == modal) {
                                modal.style.display = "none";
                            }
                        }
                    }
                }
            });
        });
    }
}
    

ContactUs.init();