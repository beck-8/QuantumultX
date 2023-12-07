/*
亿学宝云 提交满分答案

***************************
QuantumultX:

[rewrite_local]
^https:\/\/ccsfdx\.yxbyun\.com\/student\/studentPaper\/updateStudentPaperExamSubmit url script-request-body https://raw.githubusercontent.com/beck-8/QuantumultX/main/scripts/yixuebao.js

[mitm]
hostname = ccsfdx.yxbyun.com

**************************/

var obj = JSON.parse($request.body);
obj.studentExamPaper.bigContent.forEach(bigContent => {
    bigContent.smallContent.forEach(smallContent =>{
      smallContent.question.studentAnswer = smallContent.question.questionAnswer
    })
});

$done({body: JSON.stringify(obj)});
