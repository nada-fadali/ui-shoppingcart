$(".cart-delete a").on("click", function(ev){
  $(this).closest("tr").remove();
  ev.preventDefault();
});

$(".add-qty").on("click", function(ev){

  $qty = $(this).parent().siblings("input.qty");

  $qty.val( function(i, oldVal) {
    return updateQty(oldVal, 1);
  });

  ev.preventDefault();
});

$(".sub-qty").on("click", function(ev){

  $qty = $(this).parent().siblings("input.qty");

  $qty.val(function(i, oldVal){
    return updateQty(oldVal, 0);
  });

  ev.preventDefault();
});

function updateQty(oldVal, sign)
{
  newVal =(sign)? ++oldVal : --oldVal;

  if(newVal >= 0){
    console.log("true");
    return newVal;
  }
  else {
    // display error
    return 0;
  }
}

$("#post-code").on("change",function(){
  if(!$(this).val().match(/^\d+$/)){
    console.log("postal code is invalid error");
  }
});

$("#phone").on("change",function(){
  if(!$(this).val().match(/^\d+$/)){
    console.log("phone is invalid error");
  }
});
