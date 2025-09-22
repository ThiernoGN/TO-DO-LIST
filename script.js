const form = document.querySelector(".form");
const saisie_tache = document.querySelector(".saisie-tache");
const btn_ajouter = document.querySelector(".btn-ajouter");
const message = document.querySelector(".message");
const tache = document.querySelector(".tache");

let tacheCount = 1;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = saisie_tache.value.trim();
  if (value !== "") {
    if (value.length <= 3) {
      message.textContent = "veillez saisir une tache un peu long";
      message.style.color = "red";
      setTimeout(() => {
        message.textContent = "";
      }, 2000);
    } else {
      const li = document.createElement("li");
      // Utiliser une span pour le texte de la tâche afin de pouvoir le modifier
      const tacheText = document.createElement("span");
      tacheText.textContent = `${tacheCount}. ${value}`;
      li.appendChild(tacheText);
      tache.appendChild(li);

      // Bouton "Modifier"
      const btn_modifier = document.createElement("button");
      btn_modifier.textContent = "Modifier";
      btn_modifier.classList.add("btn_modifier");
      li.appendChild(btn_modifier);

      // Bouton "Supprimer"
      const btn_suprimer = document.createElement("button");
      btn_suprimer.textContent = "Supprimer";
      btn_suprimer.classList.add("btn_suprimer");
      li.appendChild(btn_suprimer);

      // Gérer la modification
      btn_modifier.addEventListener("click", () => {
        const nouveauTexte = prompt("Modifiez la tâche :", value);
        // Vérifier si l'utilisateur a entré du texte et n'a pas annulé
        if (nouveauTexte !== null && nouveauTexte.trim() !== "") {
          // Mettre à jour la variable value pour la réinitialiser en cas de nouvelle modification
          value = nouveauTexte.trim();
          tacheText.textContent = `${tacheCount}. ${value}`;

          message.textContent = "Tache modifier avec success";
          message.style.color = "green";
          setTimeout(() => {
            message.textContent = "";
          }, 2000);
        }
      });

      // Gérer la suppression
      btn_suprimer.addEventListener("click", () => {
        if (confirm("Voulez-vous vraiment supprimer cette tâche ?")) {
          tache.removeChild(li);
        }
      });

      saisie_tache.value = "";
      tacheCount++;
    }
  } else {
    message.textContent = "veillez saisir la tache";
    message.style.color = "red";
    setTimeout(() => {
      message.textContent = "";
    }, 2000);
  }
});
