import * as Yup from "yup";

export function initialValues() {
    return {
        email: "",
        password: ""
    }
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string().email("Correo invalido").required("Correo obligatorio"),
        password: Yup.string().required("Contraseña obligatoria")
    })
}