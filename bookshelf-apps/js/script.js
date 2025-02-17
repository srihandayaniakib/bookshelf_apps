document.addEventListener("DOMContentLoaded", function () {
  const submitBook = document.getElementById("inputBook");

  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
  });
});

const searchBooks = document.getElementById("searchBook");

searchBooks.addEventListener("submit", function (event) {
  event.preventDefault();
  searchBooks();
});

if (isStorageExist()) {
  loadDataFromStorage();
}

document.addEventListener("ondatasaved", () => {
  console.log("Data berhasil disimpan.");
});

document.addEventListener("ondataloaded", () => {
  refreshDataFrombooks();
});

function changeText() {
  const checkbox = document.getElementById("inputBookIsComplete");
  const textSubmit = document.getElementById("textSubmit");
}

if (checkbox.checked == true) {
  textSubmit.innerText = "Sudah selesai dibaca";
}
