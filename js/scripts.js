// js cho noi Dung
// nhap email

function handlesubmit() {
  // lấy  gia tri cua input của email chuyển sang in thường
  const emailvalue = document.getElementById("email").value.toLocaleLowerCase();
  // lấy element của thẻ p hiển thi lỗi
  const errormail = document.getElementById("error-email");
  //điều kiện để la một email
  const checkMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //dung match để kt với email vừa nhập
  const check = checkMail.test(emailvalue);
  //lẤY PHẦN CHỨA THÔNG tin user
  const sectioncontent = document.querySelector(".ttcn");
  console.log("check section", sectioncontent);
  // lấy element để kiểm soát submit
  const submitcontrol = document.querySelector(".submit-email");
  if (check) {
    sectioncontent.style.display = "block";
    submitcontrol.style.display = "none";
    errormail.innerHTML = "";
  } else {
    errormail.innerHTML = "vui lòng nhập đúng định dạng email";
  }
}

/* 10. Chức năng ẩn thông tin nghề nghiệp  */

function handleOnMouseOver(element) {
  const viewMore = document.getElementById("container-btn-" + element);
  viewMore.className = "view-display";
}
function handleOnMouseOut(element) {
  const viewMore = document.getElementById("container-btn-" + element);
  viewMore.className = "view-hidden";
}

function handleViewMore(element) {
  let content = document.getElementById("kn" + element);
  let viewLess = document.getElementById("viewless" + element);
  let viewMore = document.getElementById("viewmore" + element);

  content.className = "view-more-hidden";
  viewLess.className = "view-display";
  viewMore.className = "view-hidden";
}

function handleViewLess(element) {
  let content = document.getElementById("kn" + element);
  let viewMore = document.getElementById("viewmore" + element);
  let viewLess = document.getElementById("viewless" + element);

  content.className = "view-hidden";
  viewMore.className = "view-display";
  viewLess.className = "view-hidden";
}
