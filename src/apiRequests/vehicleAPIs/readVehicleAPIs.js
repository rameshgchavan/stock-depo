import axios from "axios";

// Get vehicles
const readVehiclesRequest = async (scrutinizedUser) => {
    const dbname = scrutinizedUser.email.replace(".", "-");

    return (
        (await axios(`/vehicles`,
            {
                method: "get",
                headers: { dbname, authorization: `bearer ${scrutinizedUser.token}` }
            }
        ))?.data
    );
};

export {
    readVehiclesRequest,
}