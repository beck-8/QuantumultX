/*
公众号 车主减分宝典
小程序 学法减分
无限拍照搜题
***************************
QuantumultX:

[rewrite_local]
^https:\/\/app.mocrew.com\/xuefaapp\/user\/info url script-request-body https://raw.githubusercontent.com/beck-8/QuantumultX/main/scripts/xuefajianfen.js
[mitm]
hostname = app.mocrew.com
**************************/

var obj = JSON.parse($request.body);
obj.vip_date = "2099-01-01"
obj.viptwo_date = "2099-01-01"
obj.isSubscription = "1"

$done({body: JSON.stringify(obj)});
