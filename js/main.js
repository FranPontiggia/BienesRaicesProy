document.addEventListener("DOMContentLoaded", function () {
  // Array de propiedades en venta (se puede agregar más propiedades)
  const propiedadesEnVenta = [
    {
      titulo: "Casa en excelente estado",
      imagen: "img/CasaModerna.jpg",
      precio: "$250,000",
      descripcion: "Amplia casa de 3 habitaciones en el centro de la ciudad.",
    },
    {
      titulo: "Casa cerca del Mar",
      imagen: "img/CasaPlaya.jpg",
      precio: "$150,000",
      descripcion: "Acogedor apartamento con vistas panorámicas al mar.",
    },
    {
      titulo: "Locales Comerciales",
      imagen: "img/local.jpg",
      precio: "$250,000",
      descripcion: "Escelentes locales en el centro de la ciudad",
    },
    // Agrega más propiedades aquí
  ];

  // Contenedor donde se agregarán las tarjetas de propiedades
  const propiedadesVentaContainer = document.getElementById("propiedadesVentaContainer");

  // Recorre el array de propiedades y genera las tarjetas
  propiedadesEnVenta.forEach((propiedad) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("col-md-4", "mb-4");

    tarjeta.innerHTML = `
      <div class="card">
        <img src="${propiedad.imagen}" class="card-img-top" alt="${propiedad.titulo}">
        <div class="card-body">
          <h5 class="card-title">${propiedad.titulo}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p class="card-price">${propiedad.precio}</p>
          <a href="#" class="btn btn-primary">Ver Detalles</a>
        </div>
      </div>
    `;

    propiedadesVentaContainer.appendChild(tarjeta);
  });
});


  


const propiedadesEnAlquiler = [
  {
    titulo: "Casa en excelente estado",
    imagen: "img/CasaModerna.jpg",
    precio: "$250,000",
    descripcion: "Amplia casa de 3 habitaciones en el centro de la ciudad.",
  },
  {
    titulo: "Casa cerca del Mar",
    imagen: "img/CasaPlaya.jpg",
    precio: "$150,000",
    descripcion: "Acogedor apartamento con vistas panorámicas al mar.",
  },
  {
    titulo: "Locales Comerciales",
    imagen: "img/local.jpg",
    precio: "$250,000",
    descripcion: "Escelentes locales en el centro de la ciudad",
  },
  {
    titulo: "Locales Comerciales",
    imagen: "img/local.jpg",
    precio: "$250,000",
    descripcion: "Escelentes locales en el centro de la ciudad",
  },
  {
    titulo: "Locales Comerciales",
    imagen: "img/local.jpg",
    precio: "$250,000",
    descripcion: "Escelentes locales en el centro de la ciudad",
  },
  {
    titulo: "Locales Comerciales",
    imagen: "img/local.jpg",
    precio: "$250,000",
    descripcion: "Escelentes locales en el centro de la ciudad",
  },
  // Agrega más propiedades aquí
];

// Contenedor donde se agregarán las tarjetas de propiedades
const propiedadesAlquilerContainer = document.getElementById("propiedadesAlquilerContainer");

// Recorre el array de propiedades y genera las tarjetas
propiedadesEnAlquiler.forEach((propiedad) => {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("col-md-4", "mb-4");

  tarjeta.innerHTML = `
    <div class="card">
      <img src="${propiedad.imagen}" class="card-img-top" alt="${propiedad.titulo}">
      <div class="card-body">
        <h5 class="card-title">${propiedad.titulo}</h5>
        <p class="card-text">${propiedad.descripcion}</p>
        <p class="card-price">${propiedad.precio}</p>
        <a href="#" class="btn btn-primary">Ver Detalles</a>
      </div>
    </div>
  `;

  propiedadesAlquilerContainer.appendChild(tarjeta);
});



