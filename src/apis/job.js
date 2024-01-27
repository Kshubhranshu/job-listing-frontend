import axios from "axios";
const backendUrl = `${process.env.REACT_APP_BACKEND_URL}/job`;

export const getAllJobs = ({ skills, title }) => {
    try {
        const reqUrl = `${backendUrl}/all?skills=${skills}&title=${title}`;
        const response = axios.get(reqUrl);
        console.log(response);
    } catch (error) {
        console.log(error);
        // toast with custom message for clients
    }
};

export const getJobDetails = async (jobId) => {
    try {
        const reqUrl = `${backendUrl}/job-description/${jobId}`;
        const response = await axios.get(reqUrl);
        return response.data?.data;
    } catch (error) {
        console.log(error);
        // toast with custom message for clients
    }
};

export const createJobPost = async ({
    companyName,
    logoUrl,
    title,
    description,
}) => {
    try {
        const reqUrl = `${backendUrl}/create`;
        const reqPayload = {
            companyName,
            logoUrl,
            title,
            description,
        };

        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;
        const response = await axios.post(reqUrl, reqPayload);
        return response;
    } catch (error) {
        console.log(error);
        // toast with custom message for clients
    }
};

export const updateJobPost = async (
    jobId,
    { companyName, logoUrl, title, description }
) => {
    try {
        const reqUrl = `${backendUrl}/edit/${jobId}`;
        const reqPayload = {
            companyName,
            logoUrl,
            title,
            description,
        };
        debugger;
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;
        const response = await axios.put(reqUrl, reqPayload);
        return response;
    } catch (error) {
        console.log(error);
        // toast with custom message for clients
    }
};
