const mainFunction = () => {
  let isToggle = false;

  const toggleButton = () => {
    const container = document.querySelector(".container");
    const wrapper = document.querySelector(".wrapper");

    wrapper.addEventListener("click", () => {
      if (isToggle) container.classList.remove("dark");
      else container.classList.add("dark");

      isToggle = !isToggle;
    });
  };

  toggleButton();
};

window.onload = mainFunction;
