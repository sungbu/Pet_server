(function () {
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
    $(".dogFood .clearfix>li").click(function (e) {
        e.preventDefault()
        var active = $(this).attr("id")
        $(".dogFood .lib_conbox>div").hide();
        $(".dogFood #con_"+active).show();
        $(".dogFood .clearfix li").removeClass("hover");
        $(this).addClass("hover");
    })
    $(".dogSnacks .clearfix>li").click(function (e) {
        e.preventDefault()
        var active = $(this).attr("id")
        $(".dogSnacks .lib_conbox>div").hide();
        $(".dogSnacks #con_"+active).show();
        $(".dogSnacks .clearfix li").removeClass("hover");
        $(this).addClass("hover");
    })
    $(".dogCare .clearfix>li").click(function (e) {
        e.preventDefault()
        var active = $(this).attr("id")
        $(".dogCare .lib_conbox>div").hide();
        $(".dogCare #con_"+active).show();
        $(".dogCare .clearfix li").removeClass("hover");
        $(this).addClass("hover");
    })
    $(".dogProducts .clearfix>li").click(function (e) {
        e.preventDefault()
        var active = $(this).attr("id")
        $(".dogProducts .lib_conbox>div").hide();
        $(".dogProducts #con_"+active).show();
        $(".dogProducts .clearfix li").removeClass("hover");
        $(this).addClass("hover");
    })
    //请求并渲染热门狗粮
    $.get("/api/dogFood",function (data) {
        var popular = $(".dogFood .popular")
            data.forEach(function (ele,index) {
                var str = '';
                $(popular[index]).html(`<a target="_blank" href="/buy?id=${ele.id}">
                <div class="ad-font">
                    <p class="fontover ft16 c000" title="${ele.brand}">${ele.brand}</p>
                </div>
                <img src="${ele.src}">
            </a>`)
                str = `<li class="fl ftc"><a class="bgwhite db ft12" target="_blank" href="/buy?id=${ele.id}">${ele.brand}</a></li>`
                $(".dogFood .kind-name").append(str)
            })
    })
    //请求并渲染进口狗粮
    $.get("/api/dogFood/imported",function (data) {
        var popular = $(".dogFood .imported")
            data.forEach(function (ele,index) {
                $(popular[index]).html(`<a target="_blank" href="/buy?id=${ele.id}">
                <div class="eight-proimg"><img
                        src="${ele.src}"
                        class="zom"></div>
                <h1 class="ft12 c666 overflow">${ele.title}</h1>
                <div class="ft16 cred dprice mt5">￥${ele.price}</div>
                </a>`)
            })
    })
    // 请求并渲染国产狗粮数据
    $.get("/api/dogFood/domestic",function (data) {
        var popular = $(".dogFood .domestic")
            data.forEach(function (ele,index) {
                $(popular[index]).html(`<a target="_blank" href="/buy?id=${ele.id}">
                <div class="eight-proimg"><img
                        src="${ele.src}"
                        class="zom"></div>
                <h1 class="ft12 c666 overflow">${ele.title}</h1>
                <div class="ft16 cred dprice mt5">￥${ele.price}</div>
                </a>`)
            })
    })
    // 请求并渲染狗狗零食热门数据
    $.get("/api/dogSnacksAll",function (data) {
        var popular = $(".dogSnacks .popular")
            data.forEach(function (ele,index) {
                var str = '';
                $(popular[index]).html(`<a target="_blank" href="/buy?id=${ele.id}">
                <div class="ad-font">
                    <p class="fontover ft16 c000" title="${ele.brand}">${ele.brand}</p>
                </div>
                <img src="${ele.src}">
            </a>`)
            str = `<li class="fl ftc"><a class="bgwhite db ft12" target="_blank" href="/buy?id=${ele.id}">${ele.brand}</a></li>`
            $(".dogSnacks .kind-name").append(str)
            })
    })
    // 请求并渲染磨牙洁齿数据
    $.get("/api/dogTooth",function (data) {
        var popular = $(".dogSnacks .dogTooth2")
        console.log(popular)
        data.forEach(function (ele,index) {
            $(popular[index]).html(`<a target="_blank" href="/buy?id=${ele.id}">
            <div class="eight-proimg"><img
                    src="${ele.src}"
                    class="zom"></div>
            <h1 class="ft12 c666 overflow">${ele.title}</h1>
            <div class="ft16 cred dprice mt5">￥${ele.price}</div>
            </a>`)
        })
        
    })
    // 请求并渲染肉制零食数据
    $.get("/api/dogSnacks",function (data) {
        var popular = $(".dogSnacks .dogSnacks2")
        data.forEach(function (ele,index) {
            $(popular[index]).html(`<a target="_blank" href="/buy?id=${ele.id}">
            <div class="eight-proimg"><img
                    src="${ele.src}"
                    class="zom"></div>
            <h1 class="ft12 c666 overflow">${ele.title}</h1>
            <div class="ft16 cred dprice mt5">￥${ele.price}</div>
            </a>`)
        })
    })
    //请求并渲染狗狗医疗热门数据
    $.get("/api/queryDogCareAll",function (data) {
        // console.log(data)
        var popular = $(".dogCare .popular")
            data.forEach(function (ele,index) {
                var str = "";
                $(popular[index]).html(`<a target="_blank" href="/buy?id=${ele.id}">
                <div class="ad-font">
                    <p class="fontover ft16 c000" title="${ele.brand}">${ele.brand}</p>
                </div>
                <img src="${ele.src}">
            </a>`)
            str = `<li class="fl ftc"><a class="bgwhite db ft12" target="_blank" href="/buy?id=${ele.id}">${ele.brand}</a></li>`
            $(".dogCare .kind-name").append(str)
            })
    })
    // 请求并渲染体内驱虫数据
    $.get("/api/insectRepellent",function (data) {
        var popular = $(".dogCare .skinCare")
            data.forEach(function (ele,index) {
                $(popular[index]).html(`<a target="_blank" href="/buy?id=${ele.id}">
                <div class="eight-proimg"><img
                        src="${ele.src}"
                        class="zom"></div>
                <h1 class="ft12 c666 overflow">${ele.title}</h1>
                <div class="ft16 cred dprice mt5">￥${ele.price}</div>
                </a>`)
            })
    })
    // 请求并渲染皮肤护理数据
    $.get("/api/dogNursing",function (data) {
        var popular = $(".dogCare .insectRepellent")
            data.forEach(function (ele,index) {
                $(popular[index]).html(`<a target="_blank" href="/buy?id=${ele.id}">
                <div class="eight-proimg"><img
                        src="${ele.src}"
                        class="zom"></div>
                <h1 class="ft12 c666 overflow">${ele.title}</h1>
                <div class="ft16 cred dprice mt5">￥${ele.price}</div>
                </a>`)
            })
    })
    //请求并渲染狗狗日用热门数据
    $.get("/api/queryDogProductsAll",function (data) {
        var popular = $(".dogProducts .popular")
        data.forEach(function (ele,index) {
                var str = "";
                $(popular[index]).html(`<a target="_blank" href="/buy?id=${ele.id}">
                <div class="ad-font">
                    <p class="fontover ft16 c000" title="${ele.brand}">${ele.brand}</p>
                </div>
                <img src="${ele.src}">
            </a>`)
            str = `<li class="fl ftc"><a class="bgwhite db ft12" target="_blank" href="/buy?id=${ele.id}">${ele.brand}</a></li>`
            $(".dogProducts .kind-name").append(str)
            })
    })
    // 请求并渲染狗狗餐具数据
    $.get("/api/dogTableware",function (data) {
        var popular = $(".dogProducts .dogTableware")
            data.forEach(function (ele,index) {
                $(popular[index]).html(`<a target="_blank" href="/buy?id=${ele.id}">
                <div class="eight-proimg"><img
                        src="${ele.src}"
                        class="zom"></div>
                <h1 class="ft12 c666 overflow">${ele.title}</h1>
                <div class="ft16 cred dprice mt5">￥${ele.price}</div>
                </a>`)
            })
    })
    // 请求并渲染狗狗住所数据
    $.get("/api/dogResidence",function (data) {
        var popular = $(".dogProducts .dogResidence")
            data.forEach(function (ele,index) {
                $(popular[index]).html(`<a target="_blank" href="/buy?id=${ele.id}">
                <div class="eight-proimg"><img
                        src="${ele.src}"
                        class="zom"></div>
                <h1 class="ft12 c666 overflow">${ele.title}</h1>
                <div class="ft16 cred dprice mt5">￥${ele.price}</div>
                </a>`)
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
    
    //最热hot
    // $(".dogFood .kind-name")
    // <li class="fl ftc"><a class="bgwhite db ft12" target="_blank" href="#">海瑞特鲜肉粮</a></li>
    
} ())