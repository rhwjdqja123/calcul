function updateOutput(value) {
  const output = document.forms.output.value;
  document.forms.output.value = output === "0" ? value : output + value;
}
function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  timeElement.textContent = `${hours}:${minutes}`;
}

// 매초마다 updateTime 함수를 호출하여 시간을 업데이트합니다.
setInterval(updateTime, 1000);

// 페이지가 로드될 때 시간을 즉시 표시합니다.
updateTime();
