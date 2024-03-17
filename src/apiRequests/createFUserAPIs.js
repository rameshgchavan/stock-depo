import axios from "axios";

// Save form details
export const createFormRequest = async (scrutinizedUser, formData) => {
    return (
        (await axios(`/form/save`,
            {
                method: "post",
                headers: { authorization: `bearer ${scrutinizedUser.token}` },
                data: { formData }
            }
        ))?.data
    );
};