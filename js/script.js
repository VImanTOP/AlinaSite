
// Форма обратной связи
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  if (!name || !email) {
    alert("Заполните обязательные поля!");
    return false;
  }
  alert("Сообщение отправлено!");
  return true;
}
