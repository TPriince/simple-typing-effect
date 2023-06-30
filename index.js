function typingEffect(
  arrayOfWords,
  wrapperId,
  options = {
    textColor: "blue",
    cursorColor: "white",
    width: "2px",
    height: "2rem",
  },
  forwardSlashSpeed = 118,
  backwardSlashSpeed = 60,
  infinite = true
) {
  const wrapper = document.getElementById(wrapperId);
  const text = document.createElement("p");
  const cursor = document.createElement("span");
  text.style.color = options.textColor || "blue";
  cursor.style.backgroundColor = options.cursorColor || "white";
  cursor.style.marginLeft = "0.25rem";
  cursor.style.width = options.width || "2px";
  cursor.style.height = options.height || "2rem";
  cursor.animate(
    { opacity: [0, 1] },
    { duration: 1000, iterations: Infinity, easing: "linear" }
  );
  wrapper.appendChild(text);
  wrapper.appendChild(cursor);

  let empty = "";
  let forwardT;
  let backwardT;

  text.textContent = empty;

  let stringCounter = 0;
  let count = 1;

  function forwardSlash() {
    if (stringCounter === arrayOfWords.length) {
      if (infinite) {
        stringCounter = 0;
      } else {
        clearInterval(forwardT);
        return;
      }
    }

    text.textContent = arrayOfWords[stringCounter].slice(0, count);

    if (count === arrayOfWords[stringCounter].length) {
      clearInterval(forwardT);
      setTimeout(() => {
        backwardT = setInterval(backwardSlash, backwardSlashSpeed);
      }, 500);
    } else {
      count += 1;
    }
  }

  function backwardSlash() {
    text.textContent = arrayOfWords[stringCounter].slice(0, count);

    if (count === 0) {
      clearInterval(backwardT);
      stringCounter += 1;
      forwardT = setInterval(forwardSlash, forwardSlashSpeed);
    } else {
      count -= 1;
    }
  }

  setTimeout(() => {
    forwardT = setInterval(forwardSlash, forwardSlashSpeed);
  }, 2000);
}

module.exports = typingEffect;
