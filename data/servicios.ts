export interface Servicio {
  nombre: string;
  descripcion: string;
  imagen: string;
}

export const servicios: Servicio[] = [
  {
    nombre: "Kapping",
    descripcion: "Elegí proteger y embellecer tus uñas con el servicio más elegido.",
    imagen: "/images/kapping.jpeg",
  },
  {
    nombre: "Esculpidas",
    descripcion: "Conseguí ese largo que tanto buscas con nuestras esculpidas.",
    imagen: "/images/esculpidas.jpeg",
  },
  {
    nombre: "Soft gel",
    descripcion: "Discreto, perfecto y duradero: Soft gel.",
    imagen: "/images/softgel.jpeg",
  },
  {
    nombre: "Semipermanente",
    descripcion: "Dale color a tus uñas naturales con nuestra cartera de +180 colores.",
    imagen: "/images/semipermanente.jpeg",
  },
];