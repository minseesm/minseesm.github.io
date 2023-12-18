const mainBtnContainer = document.querySelector(".container");
const snapSection = document.querySelector(".snap");
const weddingSection = document.querySelector(".wedding");
const engagementSection = document.querySelector(".engagement");
const maternitySection = document.querySelector(".maternity");
const babySection = document.querySelector(".baby");

const goToIndex = () => {
  mainBtnContainer.style.opacity = 0;
  mainBtnContainer.style.display = "none";
  setTimeout(() => {
    document.querySelector("body").style.backgroundColor = "#000";
  }, 200);
  setTimeout(() => {
    weddingSection.style.opacity = 1;
    weddingSection.style.marginBottom = 0;
  }, 700);
  setTimeout(() => {
    babySection.style.opacity = 1;
    babySection.style.marginBottom = 0;
  }, 1000);
  setTimeout(() => {
    maternitySection.style.opacity = 1;
    maternitySection.style.marginBottom = 0;
  }, 1300);
  setTimeout(() => {
    snapSection.style.opacity = 1;
    snapSection.style.marginBottom = 0;
  }, 1600);
  setTimeout(() => {
    engagementSection.style.opacity = 1;
    engagementSection.style.marginBottom = 0;
  }, 1900);
};

document.addEventListener("DOMContentLoaded", () => {
  if (location.hash) {
    goToIndex();
  }
});

document.querySelector(".main-btn").addEventListener("click", () => {
  location.hash = "index";
  document.querySelector("body").style.backgroundColor = "#fff";
  goToIndex();
});

document.querySelector(".info-btn-container").addEventListener("click", () => {
  document.querySelector("body").classList.add("open-card");
  document.querySelector(".info-container").style.opacity = 1;
});

document
  .querySelector(".info-btn-container")
  .addEventListener("mouseout", () => {
    if (!document.querySelector("body").classList.contains("open-card")) {
      document.querySelector(".info-container").style.opacity = 0.6;
    }
  });

document
  .querySelector(".info-btn-container")
  .addEventListener("mouseover", () => {
    document.querySelector(".info-container").style.opacity = 1;
  });

document.querySelector(".info-close").addEventListener("click", () => {
  document.querySelector("body").classList.remove("open-card");
  document.querySelector(".info-container").style.opacity = 0.6;
});

document.querySelector(".main-btn-wrap").addEventListener("mouseover", () => {
  document.querySelector(".main-lens-img").style.opacity = 1;
});
document.querySelector(".main-btn-wrap").addEventListener("mouseout", () => {
  document.querySelector(".main-lens-img").style.opacity = 0;
});

weddingSection.addEventListener("mouseover", () => {
  document.querySelector(".wedding .link-title").style.opacity = 1;
  document.querySelector(".wedding .link-title").style.top = "50%";
});

weddingSection.addEventListener("mouseout", () => {
  document.querySelector(".wedding .link-title").style.opacity = 0;
  document.querySelector(".wedding .link-title").style.top = "55%";
});

snapSection.addEventListener("mouseover", () => {
  document.querySelector(".snap .link-title").style.opacity = 1;
  document.querySelector(".snap .link-title").style.top = "50%";
});

snapSection.addEventListener("mouseout", () => {
  document.querySelector(".snap .link-title").style.opacity = 0;
  document.querySelector(".snap .link-title").style.top = "55%";
});

engagementSection.addEventListener("mouseover", () => {
  document.querySelector(".engagement .link-title").style.opacity = 1;
  document.querySelector(".engagement .link-title").style.top = "50%";
});

engagementSection.addEventListener("mouseout", () => {
  document.querySelector(".engagement .link-title").style.opacity = 0;
  document.querySelector(".engagement .link-title").style.top = "55%";
});

babySection.addEventListener("mouseover", () => {
  document.querySelector(".baby .link-title").style.opacity = 1;
  document.querySelector(".baby .link-title").style.top = "50%";
});

babySection.addEventListener("mouseout", () => {
  document.querySelector(".baby .link-title").style.opacity = 0;
  document.querySelector(".baby .link-title").style.top = "55%";
});

maternitySection.addEventListener("mouseover", () => {
  document.querySelector(".maternity .link-title").style.opacity = 1;
  document.querySelector(".maternity .link-title").style.top = "50%";
});

maternitySection.addEventListener("mouseout", () => {
  document.querySelector(".maternity .link-title").style.opacity = 0;
  document.querySelector(".maternity .link-title").style.top = "55%";
});
