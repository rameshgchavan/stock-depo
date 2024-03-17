import axios from "axios";

// Update entry
export const updateEntryRequest = async (scrutinizedUser, findVal, updateData) => {
    const dbName = scrutinizedUser.email.replace(".", "-");

    return (
        (await axios(`/entries/update`,
            {
                method: "put",
                headers: { authorization: `bearer ${scrutinizedUser.token}` },
                data: { dbName, findVal, updateData }
            }
        ))?.data
    );
};