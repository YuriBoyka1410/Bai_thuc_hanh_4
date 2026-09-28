function check_discount(user_Role, voucher_code, order_total) {
  let message = "";
  //Dùng === để tránh ép kiểu
  const has_voucher = voucher_code === true;
  switch (user_Role) {
    case "ADMIN":
      message = "Admin: giảm giá đặc biệt 50%";
      break;
    case "VIP":
      if (!has_voucher) {
        message = "VIP: cần có mã Voucher hợp lệ!";
      } else if (order_total >= 500) {
        message = "VIP : Giảm giá 30%";
      } else {
        message = "VIP: đơn hàng chưa đủ 500k để giảm giá!";
      }
      break;
    default:
      if (order_total >= 1000) {
        message = "Member: Đơn hàng lớn, giảm giá 10%";
      } else {
        message = "Khách hàng thường: Không có giảm giá";
      }
  }
  return message;
}
function result() {
  let out = "";
  out +=
    "Test case 1 (VIP, voucher=1,600): " + check_discount("VIP", 1, 600) + "\n";
  out +=
    "Test case 2 (VIP, voucher=0,600): " + check_discount("VIP", 0, 600) + "\n";
  out +=
    "Test case 3 (VIP, voucher=null,600): " +
    check_discount("VIP", null, 600) +
    "\n";
  out +=
    "Test case 4 (ADMIN,Bất kỳ): " + check_discount("ADMIN", true, 2000) + "\n";
  out +=
    "Test case 5 (Member, order=1200): " +
    check_discount("Member", false, 1200) +
    "\n";
  document.getElementById("output").innerText = out;
}
