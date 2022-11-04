import * as Yup from "yup";

export function initialValues() {
    return {
        name: "",
        image: null,
        artist: "",
    }
}

export function validationSchema() {
    return Yup.object({
        name: Yup.string().required("El nombre es obligatorio"),
        image: Yup.mixed().required("La imagen es obligatoria"),
        artist: Yup.string().required("El artista es obligatorio"),
    })
}