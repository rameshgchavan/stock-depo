import axios from "axios";

// Get vehicles
const readStockRequest = async (scrutinizedUser) => {
    const dbname = scrutinizedUser.email.replace(".", "-");

    return (
        (await axios(`/stock`,
            {
                method: "get",
                headers: { dbname, authorization: `bearer ${scrutinizedUser.token}` }
            }
        ))?.data
    );
};

export {
    readStockRequest,
}