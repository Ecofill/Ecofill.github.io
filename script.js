const hamburger = document.getElementById('hamburger');
const sideNav = document.getElementById('side-nav');
const closeBtn = document.getElementById('close-btn');

hamburger.addEventListener('click', () => {
  sideNav.classList.add('active');
  sideNav.setAttribute('aria-hidden', 'false');
  hamburger.setAttribute('aria-expanded', 'true');
});

closeBtn.addEventListener('click', () => {
  sideNav.classList.remove('active');
  sideNav.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');
});

document.querySelectorAll('.side-link').forEach(link => {
  link.addEventListener('click', () => {
    sideNav.classList.remove('active');
    sideNav.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for booking with EcoFil! We'll contact you shortly.");
    form.reset();
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const outfitSelect = document.getElementById("outfit");
    const previewImg = document.getElementById("preview-img");
    const previewName = document.getElementById("preview-name");
    const previewDesc = document.getElementById("preview-desc");

    const outfitData = {
      ysabel: {
        img: "Ysabel.jpeg",
        name: "Ysabel",
        desc: "Katcha & Inabel | PHP 500",
      },
      diego: {
        img: "Diego.jpg",
        name: "Diego",
        desc: "Katcha & Inabel | PHP 500",
      },
      sinagtala: {
        img: "Sinagtala.jpeg",
        name: "Sinagtala",
        desc: "Katcha & Inabel | PHP 500",
      },
      rosenda: {
        img: "Rosenda.jpeg",
        name: "Rosenda",
        desc: "Katcha & Inabel | PHP 500",
      },
      catalina: {
        img: "Catalina.jpeg",
        name: "Catalina",
        desc: "Katcha & Inabel | PHP 500",
      },
      lorenza: {
        img: "Lorenza.jpeg",
        name: "Lorenza",
        desc: "Katcha & Inabel | PHP 500",
      },
    };

    function updatePreview(selected) {
      const data = outfitData[selected];
      previewImg.src = data.img;
      previewName.textContent = data.name;
      previewDesc.textContent = data.desc;
    }

    outfitSelect.addEventListener("change", function () {
      const selected = outfitSelect.value;
      updatePreview(selected);
    });

    updatePreview(outfitSelect.value);
  });


  function alertSupport() {
  alert("Thank you for supporting local artistry!");
}

