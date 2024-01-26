import React from "react";
import JobPostForm from "../../components/JobPostForm/JobPostForm";
import jobImage from "../../assets/images/job.png";

export default function JobPost() {
    return (
        <div style={{ display: "flex" }}>
            <JobPostForm />
            <img
                src={jobImage}
                style={{ maxHeight: "100vh", width: "50vw" }}
                alt="job cover"
            />
        </div>
    );
}
