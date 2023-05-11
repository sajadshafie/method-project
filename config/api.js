import config from "./global"

export default {
    getData: () => {
        return config.axiosHandler().post('/api/tsp/sync/GET_TOKEN', {
            "time": 1,
            "packet": {
                "uid": null,
                "packetType": "GET_TOKEN",
                "retry": false,
                "data": {
                    "username": "test-tsp-id-1"
                },
                "encryptionKeyId": "",
                "symmetricKey": "",
                "iv": "",
                "fiscalId": "",
                "dataSignature": ""
            },
            "signature":
                "IiIdkclswu3Krc8ZM7MQvEy7ZWzJmBPSl1CQrI0dhLGdRPRrmomVo+UkbdzRyuth9G4EnbgOjnjz5WJcfO8MuBVouASTMfv/OCOhAkxTudQtWzUO0d6BU/YiRT5alNwdey0dMsn3T083luLv9iG/lKKz9ewUem0RwBYOnehD6rJFXHirGDfJPHBOTSHCqHL1vQe0JLZAQwaTTieEE8zNWXwNr53BS2KxRKX8+MleoUl8LWUn6wZS/zs3auOKSRSO5pgJVq6zZCadd5D7vlhrw1KB/XfO4pv8GexAx2dbRMiGG5eumQGBcLo1RvJW2mZsGu+dQRm/NwnIpN7CP5qlkg=="
        })
    }
}