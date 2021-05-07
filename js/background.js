//-------------------- 右键菜单演示 ------------------------//


chrome.contextMenus.create({
    title: '测试工具', // %s表示选中的文字
    id: '0',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
});

chrome.contextMenus.create({
    title: '商品系统', // %s表示选中的文字
    id: '1',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
});

chrome.contextMenus.create({
    title: '库存中台', // %s表示选中的文字
    id: '2',
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
    title: '采销平台', // %s表示选中的文字
    id: '3',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
});

chrome.contextMenus.create({
    title: '库存凭证', // %s表示选中的文字
    id: '4',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
});

chrome.contextMenus.create({
    title: '店务业务', // %s表示选中的文字
    id: '5',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
});


chrome.contextMenus.create({
    title: '生成条码：%s', // %s表示选中的文字
    parentId: '0',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function (params) {

        var iWidth = 400;                          //弹出窗口的宽度;
        var iHeight = 200;                         //弹出窗口的高度;
        //获得窗口的垂直位置
        var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
        //获得窗口的水平位置
        var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
        window.open("tiaoma.html?" + params.selectionText, "条形码", 'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no');
        // window.open("AddScfj.aspx", "newWindows", 'height=100,width=300,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');
    }
});


chrome.contextMenus.create({
    title: '查询MQ日志：%s', // %s表示选中的文字
    parentId: '0',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function (params) {
        var no = params.selectionText;
        var tabUrl = "";
        chrome.tabs.getSelected(null, function (tab) {
            tabUrl = tab.url;
            var urls = "";
            if (tabUrl.indexOf("dev") > 0) {
                urls = "https://dev";
            } else {
                urls = "https://test";
            }
            window.open(urls + "partner.dmall.com/#index/dmallQA/mqlist:billno=" + no, "MQ日志查询", "");
        });
    }
});

chrome.contextMenus.create({
    title: '门店商品查询：%s', // %s表示选中的文字
    parentId: '1',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function (params) {
        var no = params.selectionText;
        var tabUrl = "";
        chrome.tabs.getSelected(null, function (tab) {
            tabUrl = tab.url;
            var urls = "";
            if (tabUrl.indexOf("dev") > 0) {
                urls = "https://dev";
            } else {
                urls = "https://test";
            }
            window.open(urls + "partner.dmall.com/#index/x_onlinewareprice/storeWareManage:wlbh=" + no, "门店商品查询", "");
        });
    }
});

chrome.contextMenus.create({
    title: '商品管理查询：%s', // %s表示选中的文字
    parentId: '1',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function (params) {
        var no = params.selectionText;
        var tabUrl = "";
        chrome.tabs.getSelected(null, function (tab) {
            tabUrl = tab.url;
            var urls = "";
            if (tabUrl.indexOf("dev") > 0) {
                urls = "https://dev";
            } else {
                urls = "https://test";
            }
            window.open(urls + "partner.dmall.com/#index/ware/waremanager:rfIds=" + no, "商品管理查询", "");
        });
    }
});


chrome.contextMenus.create({
    title: '补全商品信息：%s', // %s表示选中的文字
    parentId: '1',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function (params) {
        var no = params.selectionText;
        var tabUrl = "";
        chrome.tabs.getSelected(null, function (tab) {
            tabUrl = tab.url;
            var urls = "";
            if (tabUrl.indexOf("dev") > 0) {
                urls = "https://dev";
            } else {
                urls = "https://test";
            }
            window.open(urls + "partner.dmall.com/#index/ware/waremanagermodify:rfId=" + no, "补全商品信息", "");
        });
    }
});

chrome.contextMenus.create({
    title: '库存全流程变化查询：%s', // %s表示选中的文字
    parentId: '2',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function (params) {
        var no = params.selectionText;
        var tabUrl = "";
        chrome.tabs.getSelected(null, function (tab) {
            tabUrl = tab.url;
            var urls = "";
            if (tabUrl.indexOf("dev") > 0) {
                urls = "https://dev";
            } else {
                urls = "https://test";
            }
            window.open(urls + "partner.dmall.com/#index/depotpartner/stockrecords:billno=" + no, "库存全流程变化查询", "");
        });
    }
});

chrome.contextMenus.create({
    title: '货源信息查询：%s', // %s表示选中的文字
    parentId: '3',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function (params) {
        var no = params.selectionText;
        var tabUrl = "";
        chrome.tabs.getSelected(null, function (tab) {
            tabUrl = tab.url;
            var urls = "";
            if (tabUrl.indexOf("dev") > 0) {
                urls = "https://dev";
            } else {
                urls = "https://test";
            }
            window.open(urls + "partner.dmall.com/#index/cxPurchaseinfo/purchaseShopGoods:mantr=" + no, "货源信息查询", "");
        });
    }
});

chrome.contextMenus.create({
    title: '采购信息查询：%s', // %s表示选中的文字
    parentId: '3',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function (params) {
        var no = params.selectionText;
        var tabUrl = "";
        chrome.tabs.getSelected(null, function (tab) {
            tabUrl = tab.url;
            var urls = "";
            if (tabUrl.indexOf("dev") > 0) {
                urls = "https://dev";
            } else {
                urls = "https://test";
            }
            window.open(urls + "partner.dmall.com/#index/cxPurchaseinfo/cxGoodsPurchases:mantr=" + no, "采购信息查询", "");
        });
    }
});

chrome.contextMenus.create({
    title: '供应商查询：%s', // %s表示选中的文字
    parentId: '3',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function (params) {
        var no = params.selectionText;
        var tabUrl = "";
        chrome.tabs.getSelected(null, function (tab) {
            tabUrl = tab.url;
            var urls = "";
            if (tabUrl.indexOf("dev") > 0) {
                urls = "https://dev";
            } else {
                urls = "https://test";
            }
            window.open(urls + "partner.dmall.com/#index/cxpomana/cxdatahub/vendor:mantr=" + no, "供应商查询", "");
        });
    }
});


chrome.contextMenus.create({
    title: '库存台账：%s', // %s表示选中的文字
    parentId: '4',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function (params) {
        var no = params.selectionText;
        var tabUrl = "";
        chrome.tabs.getSelected(null, function (tab) {
            tabUrl = tab.url;
            var urls = "";
            if (tabUrl.indexOf("dev") > 0) {
                urls = "https://dev";
            } else {
                urls = "https://test";
            }
            window.open(urls + "partner.dmall.com/#index/invoucher/account:billno=" + no, "库存台账", "");
        });
    }
});
chrome.contextMenus.create({
    title: '库凭单据明细：%s', // %s表示选中的文字
    parentId: '4',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function (params) {
        var no = params.selectionText;
        var tabUrl = "";
        chrome.tabs.getSelected(null, function (tab) {
            tabUrl = tab.url;
            var urls = "";
            if (tabUrl.indexOf("dev") > 0) {
                urls = "https://dev";
            } else {
                urls = "https://test";
            }
            window.open(urls + "partner.dmall.com/#index/invoucher/sheetlist:billno=" + no, "库凭单据明细", "");
        });
    }
});

chrome.contextMenus.create({
    title: '库存凭证：%s', // %s表示选中的文字
    parentId: '4',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function (params) {
        var no = params.selectionText;
        var tabUrl = "";
        chrome.tabs.getSelected(null, function (tab) {
            tabUrl = tab.url;
            var urls = "";
            if (tabUrl.indexOf("dev") > 0) {
                urls = "https://dev";
            } else {
                urls = "https://test";
            }
            window.open(urls + "partner.dmall.com/#index/invoucher/voucher:billno=" + no, "库存凭证", "");
        });
    }
});

chrome.contextMenus.create({
    title: '库存初始化：%s', // %s表示选中的文字
    parentId: '4',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function (params) {
        var no = params.selectionText;
        var tabUrl = "";
        chrome.tabs.getSelected(null, function (tab) {
            tabUrl = tab.url;
            var urls = "";
            if (tabUrl.indexOf("dev") > 0) {
                urls = "https://dev";
            } else {
                urls = "https://test";
            }
            window.open(urls + "partner.dmall.com/#index/invoucher/init/initadd:billno=" + no, "库存初始化", "");
        });
    }
});

chrome.contextMenus.create({
    title: '商品信息查询：%s', // %s表示选中的文字
    parentId: '0',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function (params) {
        var matnr = params.selectionText;
        var tabUrl = "";
        chrome.tabs.getSelected(null, function (tab) {

            // console.log(test)
            tabUrl = tab.url;
            var urls = "";
            if (tabUrl.indexOf("dev") > 0) {
                urls = "https://dev";
            } else {
                urls = "https://test";
            }
            window.open(urls + "partner.dmall.com/#index/dmallQA/wareall:matnr=" + matnr, "商品基本信息", "");
        });
    }
});

chrome.contextMenus.create({
    title: '店务配置', // %s表示选中的文字
    parentId: '5',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function (params) {
        var matnr = params.selectionText;
        var tabUrl = "";
        chrome.tabs.getSelected(null, function (tab) {

            // console.log(test)
            tabUrl = tab.url;
            var urls = "";
            if (tabUrl.indexOf("dev") > 0) {
                urls = "https://dev";
            } else {
                urls = "https://test";
            }
            window.open(urls + "partner.dmall.com/#index/rdp_config_center/detailOutTemplate", "店务配置", "");
        });
    }
});


chrome.contextMenus.create({
    title: '收货单管理', // %s表示选中的文字
    parentId: '5',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function (params) {
        var matnr = params.selectionText;
        var tabUrl = "";
        chrome.tabs.getSelected(null, function (tab) {

            // console.log(test)
            tabUrl = tab.url;
            var urls = "";
            if (tabUrl.indexOf("dev") > 0) {
                urls = "https://dev";
            } else {
                urls = "https://test";
            }
            window.open(urls + "partner.dmall.com/#index/rdp_sms/receiveBill/list", "收货单管理", "");
        });
    }
});

chrome.contextMenus.create({
    title: '采购下单', // %s表示选中的文字
    parentId: '3',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function (params) {
        var matnr = params.selectionText;
        var tabUrl = "";
        chrome.tabs.getSelected(null, function (tab) {

            // console.log(test)
            tabUrl = tab.url;
            var urls = "";
            if (tabUrl.indexOf("dev") > 0) {
                urls = "https://dev";
            } else {
                urls = "https://test";
            }
            window.open(urls + "partner.dmall.com/#index/cxpomana/cxHandsWorkBill", "采购下单", "");
        });
    }
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
                    url: "https://testapiqatool-partner.dmall.com/task/taskQuery",
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
                                url: "https://testapiqatool-partner.dmall.com/task/completeTask",
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
                    url: "https://devapiqatool-partner.dmall.com/task/taskQuery",
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
                                url: "https://devapiqatool-partner.dmall.com/task/completeTask",
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

chrome.contextMenus.create({

    title: '任务驳回：%s', // %s表示选中的文字
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
                    url: "https://testapiqatool-partner.dmall.com/task/taskQuery",
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
                                url: "https://testapiqatool-partner.dmall.com/task/rejectTask",
                                type: "POST",
                                data: data1,
                                ContentType: "application/json",
                                dataType: "json",
                                xhrFields: {
                                    withCredentials: false
                                },
                                success: function (response) {
                                    if (response.data.rejectRes.code == "0000") {
                                        //alert("任务驳回成功")
                                    } else {
                                        //alert(response.data.rejectRes.result)
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
                    url: "https://devapiqatool-partner.dmall.com/task/taskQuery",
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
                                url: "https://devapiqatool-partner.dmall.com/task/rejectTask",
                                type: "POST",
                                data: data1,
                                ContentType: "application/json",
                                dataType: "json",
                                xhrFields: {
                                    withCredentials: false
                                },
                                success: function (response) {
                                    if (response.data.rejectRes.code == "0000") {
                                        //alert("任务驳回成功")
                                    } else {
                                        //alert(response.data.rejectRes.result)
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

chrome.contextMenus.create({

    title: '增加库存：%s', // %s表示选中的文字
    parentId: '0',
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function (params) {
        var no = params.selectionText;
        var tabUrl = "";
        chrome.tabs.getSelected(null, function (tab) {

            tabUrl = tab.url;
            var urls = "";
            if (tabUrl.indexOf("dev")) {
                urls = "https://dev"
            } else {
                urls = "https://test"
            }
            var data = {
                "matnr": no.trim(),
                "mallStock": 100,
                "backHouseStock": 100,
                "erpStoreId": 112,
            };
            $.ajax({
                url: urls + "apiqatool-partner.dmall.com/rdp/addstock",
                type: "POST",
                data: data,
                ContentType: "application/json",
                dataType: "json",
                xhrFields: {
                    withCredentials: false
                },
                success: function (response) {
                    if (response.data.result == "SUCCESS") {
                        alert("库存添加成功")
                    }

                },
                error: function (response) {
                }
            }).done(function (response) {
            })
        })
    }
});

