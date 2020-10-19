$(document).ready(function() {


    var numOfOrders = 0;
	$(".num").text(numOfOrders);

    $("#thankMessage").hide();
    $("#finishOrderDialog").hide();


    $(".listOver").on("click", function() {
        $(".cart").css("right", "100px")
        $("#mymodal").modal('hide')
    })

    //if a topping is added or removed, add or minus 100
    function checkboxChange(pricing) {
        var totalCost = 0;
        var totalPrice = 

        $("#pizza"+pricing).children("li").children("input").each(function() {
            if($("input").is(":checked")) {
                totalCost = totalCost + 100
            }
            $("#Results"+pricing+">span").text(totalCost);
            $(this).change(function() {
                if($("input").is(":checked")) {
                    totalCost = totalCost + 100
                    $("#Results"+pricing+">span").text(totalCost);
                } else {
                    totalCost = totalCost - 100
                    $("#Results"+pricing+">span").text(totalCost)
                }
            })
        })
    }
    $('#pizza1').children('li').click(checkboxChange(1));
	$('#pizza2').children('li').click(checkboxChange(2));
	$('#pizza3').children('li').click(checkboxChange(3));
	$('#pizza4').children('li').click(checkboxChange(4));
	$('#pizza5').children('li').click(checkboxChange(5));
    $('#pizza6').children('li').click(checkboxChange(6));
    
    // opens the cart side menu
		if ($('#cartToggle').prop('checked')) {
			$("#cartToggle").prop("checked", true);
		}else{
			$("#cartToggle").prop("checked", true);
        }
        
        // display total price in cart orders
})

