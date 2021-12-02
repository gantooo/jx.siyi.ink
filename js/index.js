$(function(){
	let noticeFlag = localStorage.getItem("noticeFlag");
	if(JSON.parse(noticeFlag) === false){
		$(".notice").hide();
	}
	let SI = localStorage.getItem("spanI");
	let urlV = localStorage.getItem("urlV");
	$("#urlV").val(urlV);
  let apilist = $("#apiList").val().split(/\r?\n/);
	for (let i = 0; i < apilist.length-1; i++) {
		if(i==SI){
			$(".jx").append("<span class='active' url='" + apilist[i].trim() + "'>线路" + (i+1) + "</span>");
		}else{
			$(".jx").append("<span url='" + apilist[i].trim() + "'>线路" + (i+1) + "</span>")
		}
	}
	$(".inp button").click(function(){
		let apiL = localStorage.getItem("apiL");
		let urlV = $("#urlV").val();
		localStorage.setItem("urlV",urlV);
		if(urlV.length <= 0){
			alert("请输入URL");
		}else{
			if(apiL == null){
				let flag = confirm("请选择解析线路,取消即不使用解析线路播放");
				if(!flag){
					$("#g").attr("src",(urlV).trim());
				}
			}else{
				$(".txt").html("<span style='color: #ff6b81;font-size: 20px;'>正在解析......</span>");
				$("#g").attr("src",(apiL+urlV).trim());
			}
		}
	})
	$("#urlV").focus(function(){
		$(this).select();
		$(this).css({"border":"2px solid #1e90ff","border-right":"0"});
	})
	$("#urlV").blur(function(){
		$(this).css({"border":"2px solid #555555","border-right":"0"});
	})
  $(".jx span").click(function(){
		let spanI = $(this).index();
		localStorage.setItem("spanI",spanI);
		localStorage.setItem("apiL",apilist[spanI]);
    $(this).addClass("active").siblings().removeClass("active");
  })
  $(window).resize(function(){
    resizeF();
  });
  function resizeF(){
    let mw = $("main").width();
    let mh = mw*9/16;
    $("#g").css({"width":"100%","height":mh});
  }
	$(".romve").click(function(){
		localStorage.setItem("noticeFlag",false);
		$(".notice").hide();
	})
  resizeF();
  console.log("Ganto：https://ganto.cn");
})
