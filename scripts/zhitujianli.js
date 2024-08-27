/*
小程序 职徒简历
永久简历会员
永久课程会员
***************************
QuantumultX:

[rewrite_local]
^https?:\/\/api.utrainee.com\/utrainee\/app\/user\/getUserInfo url script-response-body https://raw.githubusercontent.com/beck-8/QuantumultX/main/scripts/zhitujianli.js

[mitm]
hostname = api.utrainee.com
**************************/

var obj = JSON.parse($response.body);
obj.user.ifMember = 1
obj.user.gmtEnd = "2099-01-01"

obj.user.ifLifeMember = 1
obj.user.ifCourseMember = 1
obj.user.gmtEndCourse = "2099-01-01"

$done({body: JSON.stringify(obj)});
