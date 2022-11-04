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
        file: Yup.mixed().required("La imagen es obligatoria").test("fileFormat", "El formato no es valido", value => {
            return value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type);
        }),
    })
}