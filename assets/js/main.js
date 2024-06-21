
const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: './assets/img/venta/01-venta.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: '4 Habitaciones',
        banos: '4 Baños',
        costo: 5.000,
        smoke: false,
        pets: false,
    },

    {
        nombre: 'Apartamento acogedor en la montaña',
        src: './assets/img/venta/02-venta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: '2 Habitaciones',
        banos: '1 Baño',
        costo: 1.200,
        smoke: true,
        pets: true,
    },

    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: './assets/img/venta/03-venta.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: '3 Habitaciones' ,
        banos: '3 Baños',
        costo: 4.500,
        smoke: false,
        pets: true,
    },

    {
        nombre: 'Lo mejor de la ciudad en medio de la naturaleza',
        src: './assets/img/venta/04-venta.jpg',
        descripcion: 'Amplio departamento con vista privilegiada y excelente iluminación',
        ubicacion: 'Los naranjos 1249, Tangamandapio',
        habitaciones: '2 Habitaciones' ,
        banos: '2 Baños',
        costo: 4.500,
        smoke: true,
        pets: false,
    },

    {
        nombre: 'Casa acojedora',
        src: './assets/img/venta/05-venta.jpg',
        descripcion: 'Hermosa casa ideal para vivir en familia',
        ubicacion: 'Los alerces 9585, Tangamandapio',
        habitaciones: '3 Habitaciones' ,
        banos: '2 Baños',
        costo: 6.500,
        smoke: true,
        pets: true,
    },

    {
        nombre: 'Calidez y modernidad',
        src: './assets/img/venta/06-venta.jpg',
        descripcion: 'Moderna casa funcional en medio del bosque',
        ubicacion: 'Los robles 9682, Tangamandapio',
        habitaciones: '1 Habitación' ,
        banos: '1 Baño',
        costo: 3.500,
        smoke: false,
        pets: true,
    },

    {
        nombre: 'Hermosa vista',
        src: './assets/img/venta/07-venta.jpg',
        descripcion: 'Casa moderna, diseñada para conectar con la naturaleza',
        ubicacion: 'Los olivos, Tangamandapio',
        habitaciones: '1 Habitación' ,
        banos: '1 Baño',
        costo: 5.500,
        smoke: true,
        pets: true,
    },
]



const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: './assets/img/alquiler/01-alquiler.jpg',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2 Habitaciones',
        banos: '2 Baños',
        costo: 2.000,
        smoke: false,
        pets: true,
    },

    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: './assets/img/alquiler/02-alquiler.jpg',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: '3 Habitaciones',
        banos: '3 Baños',
        costo: 2.500,
        smoke: true,
        pets: true,
    },

    {
        nombre: 'Condominio moderno en zona residencial',
        src: './assets/img/alquiler/03-alquiler.jpg',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2 Habitaciones',
        banos: '2 Baños',
        costo: 2.200,
        smoke: false,
        pets: false,
    },

    {
        nombre: 'Vista al bosque',
        src: './assets/img/alquiler/04-alquiler.jpg',
        descripcion: 'Amplia casa en medio del bosque',
        ubicacion: 'Los álamos 8848, Tangamandapio',
        habitaciones: '3 Habitaciones' ,
        banos: '3 Baños',
        costo: 7.000,
        smoke: false,
        pets: true,
    },

    {
        nombre: 'Cabaña sencilla',
        src: './assets/img/alquiler/05-alquiler.jpg',
        descripcion: 'Cabaña sencilla full equipada para un tiempo de relajo en medio de la naturaleza',
        ubicacion: 'Los boldos, Tangamandapio',
        habitaciones: '2 Habitaciones' ,
        banos: '1 Baño',
        costo: 3.500,
        smoke: true,
        pets: true,
    },

    {
        nombre: 'Vista al lago',
        src: './assets/img/alquiler/06-alquiler.jpg',
        descripcion: 'Departamento full equipado con vista al lago',
        ubicacion: 'Los Avellanos. Tangamandapio',
        habitaciones: '1 Habitación' ,
        banos: '1 Baño',
        costo: 4.000,
        smoke: false,
        pets: false,
    },

    {
        nombre: 'Casa antigua estilo alemán',
        src: './assets/img/alquiler/07-alquiler.jpg',
        descripcion: 'Hermosa y amplia casa estilo alemán',
        ubicacion: 'Los cerezos, Tangamandapio',
        habitaciones: '4 Habitaciones' ,
        banos: '4 baños',
        costo: 6.000,
        smoke: true,
        pets: false,
    },
]

const cargarTarjeta = (contenedor, tarjetas = []) => {
    const contenedorId = document.querySelector(contenedor)
    let tarjetaContenido = ""

    for (const tarjeta of tarjetas) {
        const {src, nombre, descripcion, ubicacion, habitaciones, banos, costo, smoke, pets} = tarjeta
        tarjetaContenido +=
        `
        <div class="cardPropiedad">
            <img class="imgPropiedad" src="${src}"  alt=""/>
            <div class="contenidoCardPropiedad">
                <p class="tituloCardPropiedad">${nombre}</p>
                <p>${descripcion}</p>
                <p><i class="fa-solid fa-location-dot"></i> ${ubicacion}</p>
                <p><i class="fa-solid fa-bed"></i> ${habitaciones} | <i class="fa-solid fa-bath"></i> ${ banos}</p>
                <p><i class="fa-solid fa-dollar-sign"></i> ${costo.toFixed(3)}</p>
                <div class="contenedorSmoke">
                    <i class="smoke${smoke == true ?  " verde fa-solid fa-smoking" : " rojo fa-solid fa-ban-smoking"}"></i>
                    <p class="smoke${smoke == true ?  " verde" : " rojo"}">${smoke == true ? "Permitido fumar" : "No se permite fumar"}</p>
                </div>
                <div class="contenedorPets">
                    <i class="pets${pets == true ?  " verde fa-solid fa-solid fa-paw" : " rojo fa-solid fa-ban"}"></i>
                    <p class="pets${pets == true ?  " verde" : " rojo"}">${pets == true ? "Mascotas permitidas" : "No se permiten mascotas"}</p>
                </div>
            </div>
        </div>
        `
        contenedorId.innerHTML =  tarjetaContenido
    }
}

cargarTarjeta ("#homeVenta", propiedades_venta.slice(0, 3))
cargarTarjeta ("#homeAlquiler", propiedades_alquiler.slice(0, 3))



