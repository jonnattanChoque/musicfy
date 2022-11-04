import * as Yup from "yup";

export function initialValues() {
    return {
        name: "",
        album: "",
        file: null,
    }
}

export function validationSchema() {
    return Yup.object({
        name: Yup.string().required("El nombre es obligatorio"),
        album: Yup.string().required("El album es obligatorio"),
        file: Yup.mixed().required("La canción es obligatoria").test("fileFormat", "El formato no es valido", value => {
            return value && ["audio/mpeg", "audio/mp3"].includes(value.type);
        }),
    })
}