import axios from "axios"

 const config = {
    udata: null,
    BASE_URL: "https://tp.tax.gov.ir/req/",
    axiosHandler: () => {
        return (
            axios.create({
                baseURL: config.BASE_URL,
                headers: {
                    Authorization: "Bearer " + config.udata
                }
            })
        )
    }
}

export default config