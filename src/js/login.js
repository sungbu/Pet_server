(function () {
    $(".loginClose").on("click",function () {
        $(".login").hide();
    })
    $(".siginIn").on("click",function () {
        $(".login").show();
    })
    $(".signUpClose").on("click",function () {
        $(".signUp").hide();
    })
    $(".siginUp").on("click",function () {
        $(".signUp").show();
    })
    // console.log()
    if($.cookie('user') != undefined){
        $(".login").hide();
        $(".siginIn").html("Hello, "+ $.cookie('user'));
        $(".login").remove();
        $(".siginUp").html("注销");
        $(".siginUp").on("click",function () {
            $.removeCookie('user',{ path: '/'});
            $.removeCookie('id',{ path: '/'});
            window.location.href = "/"
        })
    }else{
        $("#loginBtn").on("click",function (e) {
            e.preventDefault();
            var phone = $("#loginPhone").val();
            var psw = $("#loginPassword").val();
            if(phone !== "" && psw !== ""){
                if(!isPhoneNumber(phone)){
                    $(".loginError").html("手机号码不正确");
                    console.log("手机号码不正确");
                }else{
                    $.post("/api/login",`phone=${phone}&psw=${psw}`,function (data) {
                        if(data.code == 1){
                            //密码正确
                            $(".loginError").html("密码正确");
                            console.log("密码正确");
                            $(".login").hide();
                            $(".siginIn").html("Hello, "+data.user);
                            $(".login").remove();
                            $(".siginUp").remove();
                            $(".siginUp").on("click",function () {
                                $.removeCookie('user',{ path: '/'});
                                $.removeCookie('id',{ path: '/'});
                                window.location.href = "/"
                            })
                            $.cookie('user', data.user);
                            $.cookie('id', data.id);
                            window.location.href = "/"
                        }else if(data.code == 2){
                            //密码错误
                            $(".loginError").html("密码错误");
                            console.log("密码错误")
                        }
                    })
                }
            }else{
                $(".loginError").html("输入内容为空");
                console.log("输入内容为空")
            }
        })
    }
    $("#signUpBtn").on("click",function (e) {
        e.preventDefault();
        // var str = "user=" + $(".user").val() + "&email=" + $(".email").val() + "&phone=" + $("#signUpPhone").val() + "&Password=" + $("#signUpPassword").val();
        // console.log(str);
        // if(!isEmail($(".email").val())){
        //     console.log("邮箱格式不正确")
        // }
        if($(".user").val() !== "" && $(".email").val() !== "" && $("#signUpPhone").val() !== "" && $("#signUpPassword").val() !== ""){
            if(!isEmail($(".email").val())){
                $(".signUpError").html("邮箱格式不正确");
                console.log("邮箱格式不正确")
            }else{
                if(!isPhoneNumber($("#signUpPhone").val())){
                    $(".signUpError").html("手机号不正确");
                    console.log("手机号不正确")
                }else{
                    var str = "user=" + $(".user").val() + "&email=" + $(".email").val() + "&phone=" + $("#signUpPhone").val() + "&psw=" + $("#signUpPassword").val();
                    $.post("/api/post/signUp",str,function (data) {
                        if(data.code == 1){
                            $(".signUpError").html("注册成功");
                            console.log("注册成功")
                        }else{
                            $(".signUpError").html("服务器在开小差");
                            console.log("服务器在开小差")
                        }
                    })
                }
            }
        }else{
            $(".signUpError").html("输入内容为空");
            console.log("输入内容为空")
        }
    })
    function isPhoneNumber(tel) {
        var reg =/^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
        return reg.test(tel);
    }
    function isEmail(email) {
        var reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        return reg.test(email);
    }
} ())