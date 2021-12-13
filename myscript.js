//btnsearch-NAVBAR//
function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}




function search() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//validate contact form//
$(document).ready(function() {

    $("#formDemo1").validate({
        rules: {

            name: "required",
            email: "required",

            comments: {
                required: true,
                minlength: 100,
            },
            phone: {
                required: true,
                minlength: 10,
            },
            Address: {
                required: true,
                minlength: 5,

            },

        },
        messages: {

            name: "Vui lòng nhập họ tên",
            email: "Vui lòng nhập địa chỉ email",

            comments: {
                required: "Vui lòng nhập nội dung",
                minlength: "Nội dung phải dài hơn 100 ký tự"
            },
            phone: {
                required: "Vui lòng nhập số điện thoại",
                minlength: "Vui lòng nhập số điện thoại thật !"
            },
            Address: {
                required: "Vui lòng nhập địa chỉ",
                minlength: "Vui lòng nhập địa chỉ thật !"
            }


        }
    });

});


//login form
var modal1 = document.getElementById('id01');
var modal2 = document.getElementById('id02');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    };
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}



//animate scroll and button footer
$(document).ready(function() {
    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
})




$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('.navbar').addClass('sticky1');
        } else {
            $('.navbar').removeClass('sticky1');
        }
    });
    $("#news button").click(function() {
        $("#buyModal").modal();
    });
    $('#login').click(function() {
        location.replace('login.html');
    })
})