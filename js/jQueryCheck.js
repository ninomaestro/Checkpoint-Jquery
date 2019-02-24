$("#gras").click(
    function () {
        $("p").css("font-weight") === "700" ? $("p").css("font-weight", "normal") : $("p").css("font-weight", "bold")
    }
)

$("#italic").click(
    function () {
        $("p").css("font-style") === "italic" ? $("p").css("font-style", "normal") : $("p").css("font-style", "italic")
    }
)


$("#underline").click(
    function () {
        $("p").css("text-decoration") === "underline" ? $("p").css("text-decoration", "none") : $("p").css("text-decoration", "underline")
    }

)



$("#size").change(
    function changeSize() {


        $("p").css("font-size", $("#size").val() + "px")

    }
)
    $("#family").change(changeFamily)
        function changeFamily() {


            var x = $("#family").val()
            $("p").css("font-family", x)
        }





        $("#family").change(changeFamily)