import axios from "axios";

// Save entry
export const createEntryRequest = async (scrutinizedUser, entry) => {
    const dbName = scrutinizedUser.email.replace(".", "-");
   
    return (
        (await axios(`/entries/save`,
            {
                method: "post",
                headers: { authorization: `bearer ${scrutinizedUser.token}` },
                data: { dbName, entry }
            }
        ))?.data
    );
};