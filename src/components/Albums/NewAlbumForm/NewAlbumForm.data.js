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
        image: Yup.mixed().required("La imagen es obligatoria").test("fileFormat", "El formato no es valido", value => {
            return value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type);
        }),
        artist: Yup.string().required("El artista es obligatorio"),
    })
}