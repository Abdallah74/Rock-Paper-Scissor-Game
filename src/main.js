const container = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  options = document.querySelectorAll(".option");

options.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    img.classList.add("active");
    userResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "Wait...";
    options.forEach((imgs, index2) => {
      index !== index2 && !imgs.classList.remove("active");
    });
    container.classList.add("start");
    setTimeout(() => {
      container.classList.remove("start");
      let imgSrc = e.target.src;
      userResult.src = imgSrc;

      let randomImg = Math.floor(Math.random() * 3);
      let cpuImgs = [
        "images/rock.png",
        "images/paper.png",
        "images/scissors.png",
      ];
      cpuResult.src = cpuImgs[randomImg];

      let cpuVlaue = ["R", "P", "S"][randomImg];
      let userVlaue = ["R", "P", "S"][index];
      let outComes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };
      let outComeValue = outComes[userVlaue + cpuVlaue];
      result.textContent =
        userVlaue === cpuVlaue ? "Match Draw" : `${outComeValue} Won!!`;
    }, 2000);
  });
});
