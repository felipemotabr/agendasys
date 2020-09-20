import axios from "axios"

export default axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNjY3N2Q5ZDc5MTIzMjM0OGFhYWQ5OSIsImlhdCI6MTYwMDYxNDg3MSwiZXhwIjoxNjMyMTUwODcxfQ.GuoEtUXjxLGdoWgf8OCXBOti6colgdcjxEXYBdhZwL4"
  }
})