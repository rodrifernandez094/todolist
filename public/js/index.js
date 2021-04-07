const deleteBtn = document.querySelectorAll("a.delBtn");
const checkBtn = document.querySelectorAll(".check");

deleteBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const endpoint = `/${button.dataset.item}`;
    fetch(endpoint, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => (window.location.href = data.redirect))
      .catch((err) => console.log(err));
  });
});

checkBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    button.parentNode.classList.toggle("checked");
  });
});
