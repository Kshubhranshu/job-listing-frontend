import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

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

export const getJobDetails = ({ jobId }) => {
    try {
        const reqUrl = `${backendUrl}/job-description/${jobId}`;
        const response = axios.get(reqUrl);
        console.log(response);
    } catch (error) {
        console.log(error);
        // toast with custom message for clients
    }
};
