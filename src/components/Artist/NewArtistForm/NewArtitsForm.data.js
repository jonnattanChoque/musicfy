import * as Yup from "yup";

export function initialValues() {
    return {
        name: "",
        file: null,
    }
}

export function validationSchema() {
    return Yup.object({
        name: Yup.string().required("El nombre es obligatorio"),
        file: Yup.mixed().required("La imagen es obligatoria"),
    })
}