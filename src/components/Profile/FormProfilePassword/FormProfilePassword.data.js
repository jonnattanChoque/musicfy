import * as Yup from "yup";

export function initialValues() {
    
    return {
        oldPassword: "",
        password: "",
        repeatPassword: "",
    }
}

export function validationSchema() {
    return Yup.object({
        oldPassword: Yup.string().required("Contraseña obligatoria"),
        password: Yup.string().required("Contraseña obligatoria").min(6, "La contraseña debe tener al menos 6 caracteres"),
        repeatPassword: Yup.string().required("Repetir contraseña obligatoria").oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    })
}