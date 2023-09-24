function send() {
  let message = document.getElementById("floatingInput");
  let tmp = message.value;
  let tmpArray = [];
  var splitLength = 20;

  if (message.value == "") {
    return 0;
  }

  if (tmp.length > splitLength) {
    for (var i = splitLength; i < tmp.length; i += splitLength) {
      tmpArray.push(tmp.slice(i - splitLength, i));
    }
    tmpArray.push(tmp.slice(i - splitLength, tmp.length));
    tmpArray.push("\n");
    tmp = tmpArray.join("\n");
    console.log(tmp);
  }

  message.value = "";
  let cardBody = document.querySelector(".card-body");
  let html_data = document.createElement("div");
  html_data.classList.add("d-flex", "flex-row", "justify-content-end", "mb-4");

  html_data.innerHTML = `
                        <div
                        class="p-3 me-3 border"
                        style="border-radius: 15px; background-color: #fbfbfb"
                        >
                        <p class="small mb-0">${tmp}</p>
                        </div>
                        <img
                        src="{% static 'chatbot/human icon.png' %}"
                        alt="avatar 1"
                        style="width: 45px; height: 100%"
                        />`;

  cardBody.appendChild(html_data);
}
