document.addEventListener("DOMContentLoaded", function() {
  const envelope = document.getElementById("envelope");
  const btnOpen = document.getElementById("open");
  const btnReset = document.getElementById("reset");
  const btnNext = document.getElementById("next");

  envelope.addEventListener("click", function() {
      envelope.classList.toggle("open");
      if (envelope.classList.contains("open")) {
          alert("Envelope opened! Button activated.");
          showNextButtonAfterAnimation();
      } else {
          btnNext.style.display = "none";
      }
  });

  btnOpen.addEventListener("click", openEnvelope);
  btnReset.addEventListener("click", closeEnvelope);
  
  function openEnvelope() {
      envelope.classList.add("open");
      envelope.classList.remove("close");
      showNextButtonAfterAnimation();
  }

  function closeEnvelope() {
      envelope.classList.add("close");
      envelope.classList.remove("open");
      btnNext.style.display = "none";
  }

  function showNextButtonAfterAnimation() {
      setTimeout(() => {
          btnNext.style.display = "inline-block";
      }, 7000);
  }

  btnNext.addEventListener("click", function() {
      window.location.href = "naomi/index.html";
  });
});
