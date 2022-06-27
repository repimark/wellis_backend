import swal from "sweetalert";
import axios from "../../API/axios";

export const getErrors = async () => {
    let data = await axios.get("error")
    return data.data
}
export const addError = async () => {
    await axios.post("error/add")
    swal("Sikeres jegy felvétel")
}
