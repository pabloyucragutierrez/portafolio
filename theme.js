document.addEventListener("change", (e) => {
  setTimeout(() => {
    let dataTheme = document.querySelectorAll("[data-theme]");
    let dataThemeD = document.querySelector("[data-themeD]");
    let dataThemeD2 = document.querySelector("[data-themeD2]");
    let dataActive = document.querySelectorAll("header .links a");
    if (e.target.matches(".select-theme")) {
      if (e.target.value === "dark") {
        document.querySelector(".active").classList.add("active2");
        document.querySelector(".active").classList.remove("active");
        dataTheme.forEach((el) => {
          el.classList.add("dark");
        });
        dataThemeD.classList.add("darkD");
        dataThemeD2.classList.add("darkD2");
        document
          .querySelectorAll(".descripcion .informacion nav a")
          .forEach((el) => {
            el.classList.add("active3");
          });
        dataActive.forEach((el) => {
          el.classList.add("active3");
          el.addEventListener("click", (e) => {
            el.classList.remove("active");
            dataActive.forEach((el) => el.classList.remove("active2"));
            el.classList.add("active2");
          });
        });
      } else if (e.target.value === "light") {
        document.querySelector(".active2").classList.add("active");
        document.querySelector(".active2").classList.remove("active2");
        dataTheme.forEach((el) => {
          el.classList.remove("dark");
        });
        dataThemeD.classList.remove("darkD");
        dataThemeD2.classList.remove("darkD2");
        document
          .querySelectorAll(".descripcion .informacion nav a")
          .forEach((el) => {
            el.classList.remove("active3");
          });
        dataActive.forEach((el) => {
          el.classList.remove("active3");
          el.addEventListener("click", (e) => {
            el.classList.remove("active2");
            dataActive.forEach((el) => el.classList.remove("active"));
            el.classList.add("active");
          });
        });
      }
    }
  }, 100);
});
