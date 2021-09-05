$(document).ready(function() {
    $("#select1 input").on("click", function() {
        // console.log('test');
        $('#select1 input[type="checkbox"]:checked').each(function() {
            $(this)
                .prop("checked", false)
                .closest(".training-vault-file-item")
                .appendTo($("#select2"));
            var fileName = $(this).next("li").next("li").attr("value");
            // console.log('true');
            $(".resource").append(
                "<option value=" + $(this).val + ">" + fileName + "</option>"
            );
        });
    });

    // setTimeout(function () {
    //   $("#zmmtg-root").appendTo("#destination").html();
    // }, 1000);
});

$(function() {
    $(".trainer-create-training-time-schedule:nth-child(1) .select2").select2();
    // $('#select2 .training-vault-file-item option').clone().appendTo($( ".trainer-create-training-time-schedule .resource"));

    $(".select2bs4").select2({
        theme: "bootstrap4",
    });
});
$(document).on("click", ".dynamic-form-add", function(event) {
    // setTimeout(function(){
    //     // $('.select2').select2();
    //     // $('.trainer-create-training-vault-right-item #select2 li').appendTo($(this)('.training-resource .select2'));
    //     // $('.resource:first').appendTo($('.resource'));
    //     // $('.trainer-create-training-time-schedule:first-child .training-resource .select2 option').appendTo($('.trainer-create-training-time-schedule .training-resource select option'));
    //     // $(this).closest('.trainer-create-training-time-schedule .training-resource select option').appendTo($('.trainer-create-training-time-schedule .training-resource select option'));
    // }, 100);
    // debugger
    // $('.select2').select2();
    event.preventDefault();
    var triggerSelect = event.target.value;
    console.log(triggerSelect);
    // $('.trainer-create-training-time-schedule').next().find('.select2').select2();
    // $(this).parent().next().find('.select2').select2();
    // $( ".trainer-create-training-time-schedule:nth-child(" + triggerSelect + ") .select2").select2({
    //     tags: true
    // }); allowClear: true

    $(
        ".trainer-create-training-time-schedule:nth-child(" +
        triggerSelect +
        ") .select2"
    ).select2({
        tags: true,
    });
    // $(".select2").select2({
    //     tags: true
    // });
    // $(".resource").append('<option>'+'test'+'</option');
    // $('.trainer-create-training-time-schedule:first-child .training-resource .select2').find('option').appendTo($('.resource'));
    // $(".resource").empty();
    // $('#select2 .training-vault-file-item option').clone().appendTo($('.resource'));
    $("#select2 .training-vault-file-item option")
        .clone()
        .appendTo(
            $(
                ".trainer-create-training-time-schedule:nth-child(" +
                triggerSelect +
                ") .resource"
            )
        );
});
$(function() {
    $("[name=quiz_type]").each(function(i, d) {
        var p = $(this).prop("checked");
        //   console.log(p);
        if (p) {
            $(".question-page-trainer-card article").eq(i).addClass("on");
        }
    });

    $("[name=quiz_type]").on("change", function() {
        var p = $(this).prop("checked");

        // $(type).index(this) == nth-of-type
        var i = $("[name=quiz_type]").index(this);

        $(".question-page-trainer-card article").removeClass("on");
        $(".question-page-trainer-card article").eq(i).addClass("on");
    });
});

// // Set the date we're counting down to
// var countDownDate = new Date("Mar 9, 2021 18:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Output the result in an element with id="demo"
//   document.getElementById("participant-quiz-time").innerHTML = hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is over, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("participant-quiz-time").innerHTML = "EXPIRED";
//   }
// }, 1000);
// $(document).ready(function () {
//   bsCustomFileInput.init();
// });

// $(document).on('click', '#btn', function (event) {
//     console.log('start');
//     var doc = new jsPDF('p', 'pt', 'a4');
//     // var specialElementHandlers = { '#editor': function (element, renderer) { return true; } };
//     // doc.fromHTML($('#content').html(), 15, 15, {

//     //     'width': 170,

//     //     'elementHandlers': specialElementHandlers

//     //     });
//     doc.fromHTML(document.querySelector('#editor'), 15, 15, {
//         'width': 170,
//         'elementHandlers': function() {
//           return true;
//         }
//       });
//         doc.save('sample-content.pdf');
//         console.log('end');
// });
$(document).on("click", "#btn", function(event) {
    console.log("test");
    html2canvas(document.querySelector("#content")).then((canvas) => {
        var dataURL = canvas.toDataURL();
        var pdf = new jsPDF();
        pdf.addImage(dataURL, "PNG", 20, 20, 170, 120); //addImage(image, format, x-coordinate, y-coordinate, width, height)
        pdf.save("Certificate.pdf");
    });
});

// $(function () {

// })
var zoomCustomUI = setInterval(function() {
    $("#zmmtg-root").appendTo("#destination").html();
    var element = document.querySelector('#zmmtg-root');
    if (element === null) {
        clearInterval(zoomCustomUI);
    } else {
        console.log('qqqqqqqqqqq', element);
        element.classList.add('zoom-display');
        clearInterval(zoomCustomUI);
    }
}, 5000);

$(function () {
    bsCustomFileInput.init();
  });