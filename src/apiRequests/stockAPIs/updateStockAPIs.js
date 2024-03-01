import axios from "axios";

// Save vehicle details
const updateStockRequest = async (scrutinizedUser, findVal, updateData) => {
    const dbName = scrutinizedUser.email.replace(".", "-");

    return (
        (await axios(`/stock/update`,
            {
                method: "put",
                headers: { authorization: `bearer ${scrutinizedUser.token}` },
                data: { dbName, findVal, updateData }
            }
        ))?.data
    );
};

export {
    updateStockRequest,
}