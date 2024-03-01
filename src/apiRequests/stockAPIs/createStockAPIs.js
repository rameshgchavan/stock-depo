import axios from "axios";

// Save vehicle details
const createStockRequest = async (scrutinizedUser, stockData) => {
    const dbName = scrutinizedUser.email.replace(".", "-");
   
    return (
        (await axios(`/stock/save`,
            {
                method: "post",
                headers: { authorization: `bearer ${scrutinizedUser.token}` },
                data: { dbName, stockData }
            }
        ))?.data
    );
};

export {
    createStockRequest,
}