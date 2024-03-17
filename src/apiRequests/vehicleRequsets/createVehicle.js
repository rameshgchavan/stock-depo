import axios from "axios";

// Save vehicle details
const createVehicleRequest = async (scrutinizedUser, vehicleData) => {
    const dbName = scrutinizedUser.email.replace(".", "-");
   
    return (
        (await axios(`/vehicles/save`,
            {
                method: "post",
                headers: { authorization: `bearer ${scrutinizedUser.token}` },
                data: { dbName, vehicleData }
            }
        ))?.data
    );
};

export {
    createVehicleRequest,
}