import * as Yup from "yup";
import { User } from "../../../api";

const user = new User();

export function initialValues() {
    const { displayName } = user.getUser();
    
    return {
        displayName: displayName || "",
    }
}

export function validationSchema() {
    return Yup.object({
        displayName: Yup.string().required("El apodo es obligatorio"),
    })
}