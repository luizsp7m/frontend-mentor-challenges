var filter = "weekly";

async function toggleFilter(param, element) {
  filter = param;

  const lastElement = document.querySelector('.selected');

  if(lastElement !== element) {
    lastElement.classList.remove('selected');
    element.classList.add('selected');
  }

  const result = await fetch("data.json");
  const data = await result.json();

  data.map((item, index) => {
    const h1 = document.querySelectorAll('.wrapper-data h1')[index];
    h1.innerHTML = `${filter === 'daily' ? item.timeframes.daily.current : filter === 'weekly' ? item.timeframes.weekly.current : item.timeframes.monthly.current }hrs`;

    const span = document.querySelectorAll('.wrapper-data span')[index];
    span.innerHTML = `Last Week - ${filter === 'daily' ? item.timeframes.daily.previous : filter === 'weekly' ? item.timeframes.weekly.previous : item.timeframes.monthly.previous }hrs`;
  });
}

async function getData() {
  const result = await fetch("data.json");
  const data = await result.json();

  const grid = document.querySelector(".grid");

  data.map(item => {
    const wrapper = document.createElement("div");
    wrapper.classList.add('wrapper-data');
    
    const top = document.createElement("div");
    top.classList.add("top");
    top.style.background = item.background;
    wrapper.appendChild(top);

    const img = document.createElement("img");
    img.src = `/images/${item.image}`;
    img.alt = "Icon";
    top.appendChild(img);

    const body = document.createElement("div");
    body.classList.add("body");
    wrapper.appendChild(body);

    const row = document.createElement("div");
    row.classList.add("row");
    body.appendChild(row);

    const h5 = document.createElement("h5");
    h5.innerHTML = `${item.title}`;
    row.appendChild(h5);

    const ellipsis = document.createElement("img");
    ellipsis.src = `/images/icon-ellipsis.svg`;
    ellipsis.alt = "Icon";
    row.appendChild(ellipsis);

    const h1 = document.createElement("h1");
    h1.innerHTML =  `${filter === 'daily' ? item.timeframes.daily.current : filter === 'weekly' ? item.timeframes.weekly.current : item.timeframes.monthly.current }hrs`;
    body.appendChild(h1);

    const span = document.createElement("span");
    span.innerHTML =  `Last Week - ${filter === 'daily' ? item.timeframes.daily.previous : filter === 'weekly' ? item.timeframes.weekly.previous : item.timeframes.monthly.previous }hrs`;
    body.appendChild(span);

    grid.appendChild(wrapper);
  });
}

getData();