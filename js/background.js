//-------------------- 右键菜单演示 ------------------------//


chrome.contextMenus.create({
    title: '测试工具', // %s表示选中的文字
    id: '0',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
});

//直接右键就可以显示出来，不需要选中某个东西
chrome.contextMenus.create({
    title: "测试右键菜单",
    id: '10',

    // onclick: function(){
    //     chrome.notifications.create(null, {
    //         type: 'basic',
    //         iconUrl: 'img/icon.png',
    //         title: '这是标题',
    //         message: '您刚才点击了自定义右键菜单！'
    //     });
    // }
});

chrome.contextMenus.create({
    title: '测试', // %s表示选中的文字
    id: '11',
    parentId: '10',

});


chrome.contextMenus.create({

    title: '任务通过：%s', // %s表示选中的文字
    parentId: '0',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function (params) {
        var no = params.selectionText;
        var tabUrl = "";
        chrome.tabs.getSelected(null, function (tab) {

            tabUrl = tab.url;
            if (tabUrl.indexOf("test") > 0) {
                var data = {
                    "businessKey": no.trim(),
                };
                $.ajax({
                    url: "https://testapiqatool-partner.xxx.com/task/taskQuery",
                    type: "POST",
                    data: data,
                    ContentType: "application/json",
                    dataType: "json",
                    xhrFields: {
                        withCredentials: false
                    },
                    success: function (response) {
                        var array = response.data;
                        for (var i = 0, l = array.length; i < l; i++) {
                            //alert(array[i].id)
                            var data1 = {
                                "id": array[i].id,
                            };
                            $.ajax({
                                url: "https://testapiqatool-partner.xxx.com/task/completeTask",
                                type: "POST",
                                data: data1,
                                ContentType: "application/json",
                                dataType: "json",
                                xhrFields: {
                                    withCredentials: false
                                },
                                success: function (response) {
                                    if (response.data.completeRes.code == "0000") {
                                        //alert("任务处理成功")
                                    } else {
                                        //alert(response.data.completeRes.result)
                                    }
                                },
                                error: function (response) {
                                }
                            }).done(function (response) {
                            })
                        }
                    },
                    error: function (response) {
                    }
                }).done(function (response) {
                })
            }
            if (tabUrl.indexOf("dev") > 0) {
                var data = {
                    "businessKey": no.trim(),
                };
                $.ajax({
                    url: "https://devapiqatool-partner.xxx.com/task/taskQuery",
                    type: "POST",
                    data: data,
                    ContentType: "application/json",
                    dataType: "json",
                    xhrFields: {
                        withCredentials: false
                    },
                    success: function (response) {
                        var array = response.data;
                        for (var i = 0, l = array.length; i < l; i++) {
                            //alert(array[i].id)
                            var data1 = {
                                "id": array[i].id,
                            };
                            $.ajax({
                                url: "https://devapiqatool-partner.xxx.com/task/completeTask",
                                type: "POST",
                                data: data1,
                                ContentType: "application/json",
                                dataType: "json",
                                xhrFields: {
                                    withCredentials: false
                                },
                                success: function (response) {
                                    if (response.data.completeRes.code == "0000") {
                                        //alert("任务处理成功")
                                    } else {
                                        //alert(response.data.completeRes.result)
                                    }
                                },
                                error: function (response) {
                                }
                            }).done(function (response) {
                            })
                        }
                    },
                    error: function (response) {
                    }
                }).done(function (response) {
                })
            }
        });

    }
});




