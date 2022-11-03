import * as Yup from "yup";

export function initialValues() {
    
    return {
        password: "",
        newEmail: "",
    }
}

export function validationSchema() {
    return Yup.object({
        newEmail: Yup.string().email("Correo invalido").required("Correo obligatorio"),
        password: Yup.string().required("Contraseña obligatoria").min(6, "La contraseña debe tener al menos 6 caracteres"),
    })
}