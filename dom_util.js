import { onDragNDrop } from "./drag_n_drop.js";

const titleInput = document.getElementById("title_input");
const descriptionInput = document.getElementById("description_input");
const itemsContainer = document.getElementById("items_container");

// local functions
const getItemId = (id) => `item-${id}`

const itemTemplate = ({ id, title, desc }) => `
<li id="${getItemId(id)}" class="card mb-3 item-card" draggable="true">
    <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTitbad9JeaHzPzDWGV9Sfxta8kc76waRUUdw&usqp=CAU"
        class="items_container__image card-img-top"
        alt="card"/>
    <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${desc}</p>
    </div>
</li>`;

// exposed functions
export const clearInputs = () => {
  titleInput.value = "";

  descriptionInput.value = "";
};

export const addItemPage = ({ id, title, desc }) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, title, desc })
  );

  const element = document.getElementById(getItemId(id));
  
  element.onmousedown = onDragNDrop(element);
};

export const renderItemsList = (items) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    addItemPage(item);
  }
};

export const getInputValues = () => {
  return {
    title: titleInput.value,
    description: descriptionInput.value,
  };
};