const persons = [
  { id: "person1", counterId: "Counter1", checked: [0] },
  { id: "person2", counterId: "Counter2", checked: [0, 1, 7] },
  { id: "person3", counterId: "Counter3", checked: [3, 6] },
  { id: "person4", counterId: "Counter4", checked: [1, 3, 6] },
];

const init = () => {
  persons.forEach((person) => {
    let nodes = document.querySelector(`#${person.id}`).children;
    let counter = 0;
    for (let i = 0; i < nodes.length - 1; i++) {
      for (let j = 0; j < person.checked.length; j++) {
        if (i == person.checked[j]) {
          nodes[i].children[0].checked = true;
          counter++;
          break;
        } else {
          nodes[i].children[0].checked = false;
        }
      }
    }
    document.querySelector(`#${person.counterId}`).innerHTML = counter;
    updateCounter(person);
  });
};

const updateCounter = (person) => {
  let nodes = document.querySelector(`#${person.id}`).children;
  let counter = parseInt(
    document.querySelector(`#${person.counterId}`).innerText
  );
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].children[0].addEventListener("click", () => {
      if (nodes[i].children[0].checked) {
        counter += 1;
      } else {
        counter -= 1;
      }
      document.querySelector(`#${person.counterId}`).innerText = counter;
    });
  }
};

init();
