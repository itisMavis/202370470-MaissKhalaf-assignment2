// Elements for the time-based greeting and name personalization.
const greetingEl = document.getElementById("greeting");
const nameInput = document.getElementById("visitor-name");
const nameOutput = document.getElementById("name-output");
const yearEl = document.getElementById("year");

// Elements for the API-powered insight section.
const factButton = document.getElementById("load-fact");
const factStatus = document.getElementById("fact-status");
const factText = document.getElementById("fact-text");

// Returns a greeting based on the current time of day.
const getTimeGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "Good morning";
  }

  if (hour < 18) {
    return "Good afternoon";
  }

  return "Good evening";
};

// Updates the greeting when the user types their name.
const updateGreeting = () => {
  const baseGreeting = getTimeGreeting();
  const name = nameInput ? nameInput.value.trim() : "";

  if (greetingEl) {
    greetingEl.textContent = baseGreeting;
  }

  if (nameOutput) {
    nameOutput.textContent = name
      ? `Nice to meet you, ${name}!`
      : "Please enter your name above.";
  }
};

updateGreeting();

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (nameInput) {
  nameInput.addEventListener("input", updateGreeting);
}

// Updates the status text with optional error styling.
const setFactStatus = (message, isError = false) => {
  if (!factStatus) {
    return;
  }

  factStatus.textContent = message;
  factStatus.classList.toggle("error", isError);
};

// Fetches a short tip from a public API with loading and error states.
const loadFact = async () => {
  if (!factText || !factStatus) {
    return;
  }

  setFactStatus("Loading...");
  factText.textContent = "";

  if (factButton) {
    factButton.disabled = true;
  }

  try {
    const response = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    const advice = data && data.slip ? data.slip.advice : "";

    if (!advice) {
      setFactStatus("No tip available right now. Please try again.", true);
      return;
    }

    factText.textContent = `"${advice}"`;
    setFactStatus("");
  } catch (error) {
    setFactStatus("Sorry, could not load a tip. Please try again.", true);
  } finally {
    if (factButton) {
      factButton.disabled = false;
    }
  }
};

if (factButton) {
  factButton.addEventListener("click", loadFact);
}

// Simple contact form validation with feedback.
const contactForm = document.querySelector(".contact-form");
const formNote = document.getElementById("form-note");

if (contactForm && formNote) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameField = contactForm.querySelector("#name");
    const emailField = contactForm.querySelector("#email");
    const messageField = contactForm.querySelector("#message");

    const nameValue = nameField ? nameField.value.trim() : "";
    const emailValue = emailField ? emailField.value.trim() : "";
    const messageValue = messageField ? messageField.value.trim() : "";
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    if (!nameValue || !emailValue || !messageValue || !emailValid) {
      formNote.textContent =
        "Please enter your name, a valid email, and a message.";
      formNote.classList.add("visible", "error");
      return;
    }

    formNote.textContent = `Thanks, ${nameValue}! Your message has been received (demo form).`;
    formNote.classList.remove("error");
    formNote.classList.add("visible");
    contactForm.reset();
  });
}
