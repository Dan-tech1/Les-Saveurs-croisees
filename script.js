// Menu burger responsive
const burger = document.getElementById('burger-menu');
const nav = document.querySelector('.navigation');

burger.addEventListener('click', () => {
  nav.classList.toggle('show');
});


// Gestion de la modale de commande
document.querySelectorAll('.show-order-form').forEach(btn => {
  btn.addEventListener('click', function() {
    document.getElementById('order-modal').style.display = 'flex';
    // Affiche le nom du plat dans la modale
    const platName = this.getAttribute('data-plat');
    if (platName) {
      document.getElementById('modal-plat-name').textContent = platName;
    }
    // Réinitialise le formulaire à chaque ouverture
    const form = document.querySelector('.order-form-modal');
    form.reset();
    document.querySelector('.carte-info-modal').style.display = 'none';
  });
});

// Fermer la modale
document.querySelector('.close-modal').onclick = function() {
  document.getElementById('order-modal').style.display = 'none';
};
window.onclick = function(event) {
  const modal = document.getElementById('order-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Afficher/masquer et réinitialiser les champs carte bancaire selon la méthode de paiement
const paiementSelect = document.querySelector('.paiement-select-modal');
const carteInfo = document.querySelector('.carte-info-modal');
paiementSelect.addEventListener('change', function() {
  if (this.value === 'carte') {
    carteInfo.style.display = 'block';
    carteInfo.querySelectorAll('input').forEach(input => {
      input.required = true;
      input.value = '';
    });
  } else {
    carteInfo.style.display = 'none';
    carteInfo.querySelectorAll('input').forEach(input => {
      input.required = false;
      input.value = '';
    });
  }
});

// Données des chefs
const chefsData = {
  warris: {
    img: "chef1.jpg",
    name: "MOUTSINGA MOUTSINGA Warris",
    desc: "Chef international Gabonais de grande renommée. Spécialiste des saveurs africaines et de la cuisine fusion.Passionné par la gastronomie durable et les produits locaux."
  },
  rihaya: {
    img: "chef5.jpg",
    name: "RIH AYA",
    desc: "Chef international Marocaine de grande renommée. Maîtrise des épices et des plats traditionnels marocains.  Passionnée par la cuisine végétale et les recettes saines."
  },
  caleb: {
    img: "chef0.jpg",
    name: "MOUKOGHO ABOUE Caleb Exaucé Thierry",
    desc: "Chef international Gabonais de grande renommée. Passionné par la gastronomie moderne et créative.  Spécialiste des techniques de cuisson innovantes et des présentations artistiques."       
  }
};

// Ouvre la modale chef
document.querySelectorAll('.show-chef-modal').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const chefKey = this.getAttribute('data-chef');
    const chef = chefsData[chefKey];
    if (chef) {
      document.getElementById('chef-modal-img').src = chef.img;
      document.getElementById('chef-modal-name').textContent = chef.name;
      document.getElementById('chef-modal-desc').textContent = chef.desc;
      document.getElementById('chef-modal').style.display = 'flex';
    }
  });
});

// Fermer la modale chef
document.querySelector('.close-chef-modal').onclick = function() {
  document.getElementById('chef-modal').style.display = 'none';
};
window.addEventListener('click', function(event) {
  const modal = document.getElementById('chef-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// JS pour l'envoi du formulaire de contact avec Formspree
document.querySelectorAll('.contact-container .order-form-modal').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const data = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        alert("Votre message a bien été envoyé !");
        form.reset();
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    })
    .catch(() => {
      alert("Une erreur est survenue. Veuillez réessayer.");
    });
  });
});

document.getElementById('aide-btn').onclick = function() {
  var faq = document.getElementById('aide-faq');
  faq.style.display = faq.style.display === 'block' ? 'none' : 'block';
};



