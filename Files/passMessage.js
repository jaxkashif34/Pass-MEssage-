$(document).ready(function () {
    $(".button2").click(function (e) {
        e.preventDefault();
        let input = document.querySelector("#inputField");
        if (input.value === "") {
            $(".last").text("Please Write Some text");
        } else {
            $(".last").text(input.value);
            input.value = ""
        }
    });
});