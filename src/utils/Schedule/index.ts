import * as Yup from "yup"

export default Yup.object().shape({
  id_user: Yup.string().required("Este campo é obrigaotrio"),
  name_responsible: Yup.string().required("Este campo é obrigaotrio"),
  local: Yup.string().required("Este campo é obrigaotrio"),
  specialty: Yup.string().required("Este campo é obrigaotrio"),
  date_schedule: Yup.string().required("Este campo é obrigaotrio"),
  qrcode: Yup.string().required("Este campo é obrigaotrio"),
  phone: Yup.string().required("Este campo é obrigaotrio"),
})