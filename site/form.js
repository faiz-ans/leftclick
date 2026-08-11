(function () {
  const form = document.getElementById("inquiry-form");
  const status = document.getElementById("form-status");
  if (!form || !status) return;

  const endpoint = form.getAttribute("action") || "";
  const isPlaceholder = endpoint.includes("YOUR_FORM_ID");

  function showStatus(message, type) {
    status.hidden = false;
    status.textContent = message;
    status.classList.remove("is-success", "is-error");
    status.classList.add(type === "success" ? "is-success" : "is-error");
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (isPlaceholder) {
      showStatus(
        "Formspree is not configured yet. Email contact@theleft.click instead.",
        "error"
      );
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        showStatus("Thanks — your message was sent.", "success");
      } else {
        let detail = "Something went wrong. Try emailing contact@theleft.click.";
        try {
          const data = await response.json();
          if (data && data.errors && data.errors.length) {
            detail = data.errors.map(function (e) {
              return e.message;
            }).join(" ");
          }
        } catch (_) {
          /* ignore JSON parse errors */
        }
        showStatus(detail, "error");
      }
    } catch (_) {
      showStatus(
        "Could not reach the form service. Email contact@theleft.click.",
        "error"
      );
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
})();
