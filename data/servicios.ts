export interface Servicio {
  nombre: string;
  descripcion: string;
}

export const servicios: Servicio[] = [
  {
    nombre: "Kapping",
    descripcion: "Elegí proteger y embellecer tus uñas con el servicios más elegido.",
    imagen: "/images/kapping.jpg",
  },
  {
    nombre: "Esculpidas",
    descripcion: "Conseguí ese largo que tanto buscas con nuestras esculpidas.",
    imagen: "/images/esculpidas.jpg",
  },
  {
    nombre: "Soft gel",
    descripcion: "Discreto, perfecto y duradero: Soft gel.",
    imagen: "/images/softgel.jpg",
  },
  {
    nombre: "Semipermanente",
    descripcion: "Dale color a tus uñas naturales con nuestra cartera de +180 colores.",
    imagen: "/images/semipermanente.jpg",
  },
];