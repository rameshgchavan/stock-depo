import axios from "axios";

// Save vehicle details
const updateVehicleRequest = async (scrutinizedUser, findVal, updateData) => {
    const dbName = scrutinizedUser.email.replace(".", "-");

    return (
        (await axios(`/vehicles/update`,
            {
                method: "put",
                headers: { authorization: `bearer ${scrutinizedUser.token}` },
                data: { dbName, findVal, updateData }
            }
        ))?.data
    );
};

export {
    updateVehicleRequest,
}