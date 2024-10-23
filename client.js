function sentToNgoc() {
//     lay dlieu trong on input
    let qadraf = document.getElementById("qa").value;
//     them vao thu nhap cua QA
    qa.typeMessage(qadraf);
//     gui thu cho Ngoc
    qa.send(ngoc)
//     Hien thi tin nhan ben Ngoc
    document.getElementById("inboxngoc").innerText = ngoc.inbox.join("-");

    document.getElementById("qa").value="";
}
function sentToQA() {
//     lay dlieu trong on input
    let ngocdraf = document.getElementById("ng").value;
//     them vao thu nhap cua QA
    ngoc.typeMessage(ngocdraf);
//     gui thu cho Ngoc
    ngoc.send(qa)
//     Hien thi tin nhan ben Ngoc
    document.getElementById("inboxqa").innerText = qa.inbox.join("-");
    document.getElementById("ng").value="";
}
