import axios from "axios";

// Get entries
export const readEntriesRequest = async (scrutinizedUser) => {
    const dbname = scrutinizedUser.email.replace(".", "-");

    return (
        (await axios(`/entries`,
            {
                method: "get",
                headers: { dbname, authorization: `bearer ${scrutinizedUser.token}` }
            }
        ))?.data
    );
};