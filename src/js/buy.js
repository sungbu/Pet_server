(function () {
    var id = window.location.search.split("=")[1]
    var tabId = 'id=' + id;
    // console.log(tabId)\
    var img = new Image();
    $(".lim-buynum").on("click",function () {
        if($("#cart_buynum").val() > 1){
            $("#cart_buynum").attr("value", $("#cart_buynum").val() - 1);
        }
    })
    $(".add-buynum").on("click",function () {
        if($("#cart_buynum").val() <= 5){
            $("#cart_buynum").attr("value", +$("#cart_buynum").val() + 1);
        }

    })
    $.post("/api/get/shopping",`userId=${$.cookie("id")}`,function (data) {
        // console.log(data.length);
        $(".shopping_num").html(data.length);
        data.forEach(function (ele,index) {
            $.post("/api/get/addDomShoppingCar",`tabId=${ele.tabId}`,function (data) {
                var str = `<li>
                                <img src="${data[0].src}">
                                <p>${data[0].brand}</p>
                                <div class="control">
                                    <input type="text" class="shoppingCart_num" value="${ele.number}">
                                </div>
                            </li>`;
                $(".shoppingCarBar").append(str)
            })
        })
    })
    $.post("/api/showTabData",`tabId=${id}}`,function (data) {
        // console.log($.cookie("id"))
        $('.gdtitle').html(data[0].title)
        $('#goods-sale-price').html(data[0].price)
        $(".norms-a").html(data[0].weight)
        $(".buyNum").html(data[0].buyNum + " ")
        // console.log(data[0].src)
        img.src = data[0].src;
        $(".tabPic").append(img);
        // console.log($(".tabPic"))
        $("#buyBtn").on("click",function () {
            console.log($('#cart_buynum').val())
            var val = `tabId=${id}&userId=${$.cookie("id")}&number=${$('#cart_buynum').val()}`
            $.post("/api/post/shopping",val,function (data) {
                
            })
            setInterval(function () {
                window.location.href = "/"
            },200)
        })
    })
    //关键词搜索
    var timer = null;
    $(".c999").on("input",function () {
        $(".searchKey").html("  ");
        var self = this;
        clearTimeout(timer);
        timer = setTimeout(function () {
            $.post("/api/search/key",`key=${$(self).val()}`,function (data) {
                data.forEach(function (ele,index) {
                    var str = `<li>
                                <a href="/buy?id=${ele.id}">
                                    <img src="${ele.src}" alt="">
                                    <h6>${ele.brand}</h6>
                                    <p>${ele.title}</p>
                                </a>
                            </li>`
                    $(".searchKey").append(str);
                })
            })
            $(".searchKey").show();
        },500)
    })
    $(".c999").on("blur",function () {
        setTimeout(function () {
            $(".searchKey").hide();
        },500)
    })
} ())