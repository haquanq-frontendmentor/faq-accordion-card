const accordion = {
  btnElements: document.querySelectorAll(".faq__btn"),
  contentElements: document.querySelectorAll(".faq__content"),
  init() {
    const transitionDuration = 300;

    this.btnElements.forEach((faqBtn, index) => {
      let requestingFrameId = null;

      const faqContentElement = this.contentElements[index];
      if (faqBtn.getAttribute("aria-expanded") == "true") {
        faqContentElement.style.height = `auto`;
      }

      const hideContent = () => {
        faqBtn.setAttribute("aria-expanded", "false");
        const currentHeight = faqContentElement.clientHeight;
        faqContentElement.style.height = `${currentHeight}px`;
        faqContentElement.style.transition = `height ${transitionDuration}ms ease`;

        if (requestingFrameId !== null) {
          cancelAnimationFrame(requestingFrameId);
          requestingFrameId = null;
        }
        requestAnimationFrame(() => {
          faqContentElement.style.height = "0";

          let startCleanUpTime;
          const cleanUpRequest = (t) => {
            if (!startCleanUpTime) startCleanUpTime = t;
            if (t - startCleanUpTime >= transitionDuration) {
              faqContentElement.style.height = "";
              faqContentElement.style.transition = "";
              faqContentElement.setAttribute("hidden", "");
              requestingFrameId = null;
              return;
            }
            requestingFrameId = requestAnimationFrame(cleanUpRequest);
          };
          requestingFrameId = requestAnimationFrame(cleanUpRequest);
        });
      };

      const showContent = () => {
        faqBtn.setAttribute("aria-expanded", "true");
        faqContentElement.removeAttribute("hidden");
        const currentHeight = faqContentElement.clientHeight;
        faqContentElement.style.height = "auto";
        const targetHeight = faqContentElement.clientHeight;

        if (requestingFrameId != null) {
          cancelAnimationFrame(requestingFrameId);
          requestingFrameId = null;
          faqContentElement.style.height = `${currentHeight}px`;
        } else {
          faqContentElement.style.height = "0";
        }

        requestAnimationFrame(() => {
          faqContentElement.style.transition = `height ${transitionDuration}ms ease`;
          faqContentElement.style.height = `${targetHeight}px`;

          let startCleanUpTime;
          const cleanUpRequest = (t) => {
            if (!startCleanUpTime) startCleanUpTime = t;
            if (t - startCleanUpTime >= transitionDuration) {
              faqContentElement.style.height = "";
              faqContentElement.style.transition = "";
              requestingFrameId = null;
              return;
            }
            requestingFrameId = requestAnimationFrame(cleanUpRequest);
          };
          requestingFrameId = requestAnimationFrame(cleanUpRequest);
        });
      };

      faqBtn.addEventListener("click", (e) => {
        const expanded = faqBtn.getAttribute("aria-expanded") === "true";
        if (expanded) hideContent();
        else showContent();
      });
    });
  },
};

accordion.init();
