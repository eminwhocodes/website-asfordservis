/**
 * A&S Auto Premium homepage interactions
 * Progressive enhancement: every core link remains usable without JavaScript.
 */

document.documentElement.classList.add("js");

(() => {
  "use strict";

  const PHONE = "905330947401";
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = document.querySelector("[data-header]");
  const bookingForm = document.querySelector("#booking-form");

  const setExpanded = (element, expanded) => {
    element?.setAttribute("aria-expanded", String(expanded));
  };

  const closeDropdowns = (except = null) => {
    document.querySelectorAll(".nav-dropdown.is-open, .language-switcher.is-open").forEach((dropdown) => {
      if (dropdown === except) return;
      dropdown.classList.remove("is-open");
      setExpanded(dropdown.querySelector("button"), false);
    });
  };

  const scrollToBooking = () => {
    document.querySelector("#randevu")?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  const selectOptionByText = (select, value) => {
    if (!select || !value) return false;
    const option = [...select.options].find((item) => item.text.trim().toLocaleLowerCase("tr-TR") === value.trim().toLocaleLowerCase("tr-TR"));
    if (!option) return false;
    select.value = option.value || option.text;
    select.dispatchEvent(new Event("change", { bubbles: true }));
    return true;
  };

  // Loader is decorative and never blocks the page for more than two seconds.
  const hideLoader = () => document.querySelector(".page-loader")?.classList.add("is-hidden");
  window.addEventListener("load", () => window.setTimeout(hideLoader, prefersReducedMotion ? 0 : 520), { once: true });
  window.setTimeout(hideLoader, 2000);

  // Sticky header with calm reveal/hide behavior.
  let previousScrollY = window.scrollY;
  let headerFrame = null;

  const updateHeader = () => {
    const currentScrollY = window.scrollY;
    const movingDown = currentScrollY > previousScrollY;
    const menuIsOpen = document.body.classList.contains("menu-open");

    header?.classList.toggle("is-scrolled", currentScrollY > 24);
    header?.classList.toggle("is-hidden", movingDown && currentScrollY > 420 && !menuIsOpen);
    previousScrollY = currentScrollY;
    headerFrame = null;
  };

  window.addEventListener("scroll", () => {
    if (headerFrame) return;
    headerFrame = window.requestAnimationFrame(updateHeader);
  }, { passive: true });

  // Desktop mega menu and language switcher.
  document.querySelectorAll(".nav-dropdown > button, .language-switcher > button").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const parent = button.parentElement;
      const nextState = !parent.classList.contains("is-open");
      closeDropdowns(parent);
      parent.classList.toggle("is-open", nextState);
      setExpanded(button, nextState);
    });
  });

  document.addEventListener("click", () => closeDropdowns());

  // Accessible mobile navigation.
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobilePanel = document.querySelector(".mobile-menu__panel");

  const closeMobileMenu = (returnFocus = false) => {
    if (!mobileMenu?.classList.contains("is-open")) return;
    mobileMenu.classList.remove("is-open");
    mobileMenu.setAttribute("aria-hidden", "true");
    setExpanded(menuToggle, false);
    document.body.classList.remove("menu-open");
    if (returnFocus) menuToggle?.focus();
  };

  const openMobileMenu = () => {
    mobileMenu?.classList.add("is-open");
    mobileMenu?.setAttribute("aria-hidden", "false");
    setExpanded(menuToggle, true);
    document.body.classList.add("menu-open");
    mobileMenu?.querySelector("a")?.focus({ preventScroll: true });
  };

  menuToggle?.addEventListener("click", () => {
    mobileMenu?.classList.contains("is-open") ? closeMobileMenu() : openMobileMenu();
  });

  mobileMenu?.addEventListener("click", (event) => {
    if (!mobilePanel?.contains(event.target)) closeMobileMenu();
  });

  mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => closeMobileMenu()));

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeDropdowns();
    closeMobileMenu(true);
  });

  // Keep one FAQ answer open at a time to reduce visual noise.
  document.querySelectorAll(".accordion details").forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (!detail.open) return;
      document.querySelectorAll(".accordion details[open]").forEach((openDetail) => {
        if (openDetail !== detail) openDetail.removeAttribute("open");
      });
    });
  });

  // Any service CTA can prefill the booking request.
  document.querySelectorAll("[data-service]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const value = trigger.dataset.service;
      const serviceSelect = bookingForm?.elements.service;
      selectOptionByText(serviceSelect, value);
    });
  });

  // Symptom selector turns plain-language symptoms into a useful request.
  document.querySelectorAll("[data-symptom]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-symptom]").forEach((item) => item.classList.remove("is-selected"));
      button.classList.add("is-selected");

      if (bookingForm) {
        bookingForm.elements.message.value = button.dataset.symptom;
        const generalMaintenance = button.dataset.symptom.includes("Bakım zamanı");
        selectOptionByText(bookingForm.elements.service, generalMaintenance ? "Periyodik bakım" : "Arıza tespiti");
      }

      scrollToBooking();
      window.setTimeout(() => bookingForm?.elements.model?.focus({ preventScroll: true }), prefersReducedMotion ? 0 : 650);
    });
  });

  // Model carousel keeps working as a horizontal native list if Swiper is unavailable.
  let modelSwiper = null;
  if (window.Swiper) {
    modelSwiper = new window.Swiper(".models-slider", {
      slidesPerView: "auto",
      spaceBetween: 14,
      grabCursor: true,
      speed: 700,
      navigation: {
        nextEl: ".models-next",
        prevEl: ".models-prev"
      },
      breakpoints: {
        821: { spaceBetween: 18 },
        1121: { spaceBetween: 24 }
      },
      on: {
        progress(swiper, progress) {
          const bar = document.querySelector(".models-progress span");
          if (bar) bar.style.transform = `scaleX(${Math.max(0.2, Math.min(1, progress))})`;
        }
      }
    });
  }

  document.querySelectorAll("[data-model]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-model]").forEach((item) => item.classList.remove("is-selected"));
      button.classList.add("is-selected");
      selectOptionByText(bookingForm?.elements.model, button.dataset.model);
      scrollToBooking();
      window.setTimeout(() => bookingForm?.elements.service?.focus({ preventScroll: true }), prefersReducedMotion ? 0 : 650);
    });
  });

  // Lightweight Turkish mobile phone formatting.
  const phoneInput = bookingForm?.elements.phone;
  phoneInput?.addEventListener("input", () => {
    let digits = phoneInput.value.replace(/\D/g, "").slice(0, 11);
    if (digits.startsWith("90")) digits = `0${digits.slice(2)}`;
    const parts = [];
    if (digits.length) parts.push(digits.slice(0, 4));
    if (digits.length > 4) parts.push(digits.slice(4, 7));
    if (digits.length > 7) parts.push(digits.slice(7, 9));
    if (digits.length > 9) parts.push(digits.slice(9, 11));
    phoneInput.value = parts.join(" ");
  });

  // Booking form validates locally, then opens a structured WhatsApp message.
  bookingForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = bookingForm.querySelector(".form-status");
    const requiredFields = [...bookingForm.querySelectorAll("[required]")];

    requiredFields.forEach((field) => {
      field.setAttribute("aria-invalid", String(!field.checkValidity()));
      field.addEventListener("input", () => field.removeAttribute("aria-invalid"), { once: true });
      field.addEventListener("change", () => field.removeAttribute("aria-invalid"), { once: true });
    });

    if (!bookingForm.checkValidity()) {
      status.textContent = "Lütfen zorunlu alanları kontrol edin.";
      status.classList.remove("is-success");
      bookingForm.querySelector(":invalid")?.focus();
      return;
    }

    const data = new FormData(bookingForm);
    const message = [
      "Merhaba A&S Auto, servis talebi oluşturmak istiyorum.",
      "",
      `Ad Soyad: ${data.get("name")}`,
      `Telefon: ${data.get("phone")}`,
      `Araç: ${data.get("model")}`,
      `İhtiyaç: ${data.get("service")}`,
      `Belirti / Not: ${data.get("message") || "Belirtilmedi"}`
    ].join("\n");

    status.textContent = "Talebiniz hazırlandı; WhatsApp açılıyor…";
    status.classList.add("is-success");
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });

  // Motion layer. Content is revealed with IntersectionObserver if GSAP is blocked.
  const setupMotion = () => {
    if (prefersReducedMotion) {
      document.querySelectorAll(".reveal-up").forEach((element) => {
        element.style.opacity = "1";
        element.style.transform = "none";
      });
      return;
    }

    if (window.Lenis) {
      const lenis = new window.Lenis({
        duration: 1.05,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.05
      });

      const raf = (time) => {
        lenis.raf(time);
        window.requestAnimationFrame(raf);
      };
      window.requestAnimationFrame(raf);

      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
          const target = document.querySelector(anchor.getAttribute("href"));
          if (!target) return;
          event.preventDefault();
          lenis.scrollTo(target, { offset: -70 });
        });
      });
    }

    if (window.gsap && window.ScrollTrigger) {
      const gsap = window.gsap;
      gsap.registerPlugin(window.ScrollTrigger);

      const heroTimeline = gsap.timeline({ delay: 0.25 });
      heroTimeline
        .fromTo(".hero .eyebrow", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" })
        .fromTo(".title-line > span", { yPercent: 110 }, { yPercent: 0, duration: 1.05, stagger: 0.1, ease: "power4.out" }, "-=0.35")
        .fromTo(".hero__lead, .hero__actions, .hero__proof", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.75, stagger: 0.1, ease: "power3.out" }, "-=0.55")
        .fromTo(".hero-photo", { autoAlpha: 0, x: 48 }, { autoAlpha: 1, x: 0, duration: 1.05, ease: "power3.out" }, "-=1.05");

      document.querySelectorAll(".reveal-up").forEach((element) => {
        if (element.closest(".hero")) return;
        gsap.fromTo(element,
          { autoAlpha: 0, y: 34 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true }
          }
        );
      });

      gsap.to(".hero-photo img", {
        yPercent: 4,
        scale: 1.04,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 }
      });

      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = "1";
        entry.target.style.transform = "none";
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal-up").forEach((element) => {
      element.style.transition = "opacity .7s ease, transform .7s ease";
      observer.observe(element);
    });
    document.querySelectorAll(".title-line > span").forEach((line) => { line.style.transform = "none"; });
  };

  setupMotion();

  // Subtle magnetic feedback is disabled on coarse pointers.
  if (!prefersReducedMotion && window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".magnetic").forEach((element) => {
      element.addEventListener("pointermove", (event) => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.08;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.1;
        element.style.transform = `translate(${x}px, ${y}px)`;
      });
      element.addEventListener("pointerleave", () => { element.style.transform = "translate(0, 0)"; });
    });
  }

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // Refresh slider measurements after web fonts settle.
  document.fonts?.ready.then(() => modelSwiper?.update());
})();
