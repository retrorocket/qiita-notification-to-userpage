const targets = document.querySelectorAll(".notification_icon > img");
targets.forEach((target) => {
  target.outerHTML = `<a href="https://qiita.com/${target.alt}">${target.outerHTML}</a>`;
});
