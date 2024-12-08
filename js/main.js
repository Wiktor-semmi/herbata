new WOW({
    animateClass: 'animate__animated',
}).init();

$("#accordion").accordion();

$('.card').magnificPopup({
    type: 'image'

});

// $('.carousel-inner').slick({
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 dots: true,
//                 arrows: false
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 dots: true,
//                 arrows: false
//             }
//         }
//     ]
// });


$('#codInput').on('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '').substring(0, 6)
});


$('#btn-add-to-cart').click(function () {
    let nameInput = $('#nameInput');
    let userNameInput = $('#userNameInput');
    let phoneInput = $('#phoneInput');
    let cantryInput = $('#cantryInput');
    let codInput = $('#codInput');
    let adressInput = $('#adressInput');


    if (!nameInput.val()) {
        alert('Заплните имя');
        return;
    }

    if (!userNameInput.val()) {
        alert('Заплните фамилию');
        return;
    }

    if (!phoneInput.val()) {
        alert('Заплните телефон');
        return;
    }

    if (!cantryInput.val()) {
        alert('Заплните страну');
        return;
    }

    if (!codInput.val()) {
        alert('Заплните индекс');
        return;
    }

    if (!adressInput.val()) {
        alert('Заплните адрес');
        return;
    }


    $("form").hide();
    $("<div>", {
        text: "Спасибо за заказ. Мы свяжемся с вами в ближайшее время!",
        css: {
            border: "1px solid black",
            borderRadius: '7px',
            padding: "20px",
            maxWidth: "400px",
            margin: '10px auto',
            width: '50%',
            fontSize: '18px',
            fontFamily: 'Arial',
            fontWeight: 'bold'
        }
    }).insertAfter("form");

});



