/**
 * A&S Auto Premium Car Service — homepage interactions.
 * Every link and the form's fallback work without JavaScript.
 */

(() => {
  "use strict";

  const PHONE = "905330947401";
  const header = document.querySelector("[data-header]");
  const bookingForm = document.querySelector("#booking-form");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const normalise = (value) => value.trim().toLocaleLowerCase("tr-TR");

  const selectOptionByText = (select, value) => {
    if (!select || !value) return;
    const option = [...select.options].find((item) => normalise(item.text) === normalise(value));
    if (option) select.value = option.value || option.text;
  };

  const goToBooking = (focusField) => {
    document.querySelector("#randevu")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    window.setTimeout(() => focusField?.focus({ preventScroll: true }), reducedMotion ? 0 : 500);
  };

  // Header gets a border once the page is scrolled.
  const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 8);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  // Mobile navigation.
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector("#mobile-menu");

  const setMenu = (open, returnFocus = false) => {
    if (!mobileMenu || !menuToggle) return;
    mobileMenu.hidden = !open;
    mobileMenu.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Menüyü kapat" : "Menüyü aç");
    document.body.classList.toggle("menu-open", open);
    if (open) mobileMenu.querySelector("a")?.focus();
    else if (returnFocus) menuToggle.focus();
  };

  menuToggle?.addEventListener("click", () => setMenu(mobileMenu.hidden));
  mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileMenu && !mobileMenu.hidden) setMenu(false, true);
  });
  window.matchMedia("(min-width: 961px)").addEventListener("change", (event) => {
    if (event.matches) setMenu(false);
  });

  // One FAQ answer open at a time.
  document.querySelectorAll(".faq details").forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (!detail.open) return;
      document.querySelectorAll(".faq details[open]").forEach((other) => {
        if (other !== detail) other.open = false;
      });
    });
  });

  // Service links prefill the "İhtiyacınız" field.
  document.querySelectorAll("[data-service]").forEach((trigger) => {
    trigger.addEventListener("click", () => selectOptionByText(bookingForm?.elements.service, trigger.dataset.service));
  });

  // Symptom buttons write the symptom into the form.
  document.querySelectorAll("[data-symptom]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-symptom]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      if (!bookingForm) return;
      const symptom = button.dataset.symptom;
      bookingForm.elements.message.value = symptom;
      selectOptionByText(bookingForm.elements.service, symptom.includes("Bakım zamanı") ? "Periyodik bakım" : "Arıza tespiti");
      goToBooking(bookingForm.elements.model);
    });
  });

  // Model buttons select the model in the form.
  document.querySelectorAll("[data-model]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-model]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      selectOptionByText(bookingForm?.elements.model, button.dataset.model);
      goToBooking(bookingForm?.elements.service);
    });
  });

  // Turkish mobile number formatting: 0533 094 74 01
  const phoneInput = bookingForm?.elements.phone;
  phoneInput?.addEventListener("input", () => {
    let digits = phoneInput.value.replace(/\D/g, "");
    if (digits.startsWith("90")) digits = `0${digits.slice(2)}`;
    digits = digits.slice(0, 11);
    const parts = [digits.slice(0, 4), digits.slice(4, 7), digits.slice(7, 9), digits.slice(9, 11)].filter(Boolean);
    phoneInput.value = parts.join(" ");
  });

  // The form builds a WhatsApp message; nothing is stored on a server.
  bookingForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = bookingForm.querySelector(".form-status");
    const fields = [...bookingForm.querySelectorAll("[required]")];

    fields.forEach((field) => {
      field.setAttribute("aria-invalid", String(!field.checkValidity()));
      const clear = () => field.removeAttribute("aria-invalid");
      field.addEventListener("input", clear, { once: true });
      field.addEventListener("change", clear, { once: true });
    });

    if (!bookingForm.checkValidity()) {
      status.textContent = "Lütfen işaretli alanları doldurun.";
      status.classList.remove("is-success");
      bookingForm.querySelector(":invalid")?.focus();
      return;
    }

    const data = new FormData(bookingForm);
    const message = [
      "Merhaba, servis talebi oluşturmak istiyorum.",
      "",
      `Ad Soyad: ${data.get("name")}`,
      `Telefon: ${data.get("phone")}`,
      `Araç: ${data.get("model")}`,
      `İhtiyaç: ${data.get("service")}`,
      `Not: ${data.get("message") || "-"}`
    ].join("\n");

    status.textContent = "Mesajınız hazır, WhatsApp açılıyor.";
    status.classList.add("is-success");
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();
