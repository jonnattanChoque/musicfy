import * as Yup from "yup";

export function initialValues() {
    return {
        email: "",
        password: "",
        username: "",
    }
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string().email("Correo invalido").required("Correo obligatorio"),
        password: Yup.string().required("Contraseña obligatoria").min(6, "La contraseña debe tener al menos 6 caracteres"),
        username: Yup.string().required("El apodo es obligatorio"),
    })
}