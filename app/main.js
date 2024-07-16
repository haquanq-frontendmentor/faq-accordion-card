const app = {
  faqButtons: document.querySelectorAll(".faq__title__btn"),
  faqContents: document.querySelectorAll(".faq__content"),
  init() {
    const transitionDuration = 300;

    this.faqButtons.forEach((faqBtn, index) => {
      let requestingFrameId = null;

      const faqContentElement = this.faqContents[index];
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
              faqContentElement.style.display = "";
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

      const showContent = () => {
        faqBtn.setAttribute("aria-expanded", "true");
        faqContentElement.style.display = "block";
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

      if (faqBtn.getAttribute("aria-expanded") === "true") {
        faqContentElement.style.display = "block";
      }

      faqBtn.addEventListener("click", (e) => {
        const expanded = faqBtn.getAttribute("aria-expanded") === "true";
        if (expanded) hideContent();
        else showContent();
      });
    });
  },
};

app.init();
