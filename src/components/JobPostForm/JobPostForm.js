import React, { useState, useEffect } from "react";
import styles from "./JobPostForm.module.css";
import { createJobPost } from "../../apis/job";

export default function JobPostForm() {
    const [isEditExistingJobPost] = useState(false);
    const [formData, setFormData] = useState({
        companyName: "",
        logoUrl: "",
        title: "",
        description: "",
        skills: "",
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        await createJobPost({
            ...formData,
            skills: formData.skills.split(","),
        });
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>
                {isEditExistingJobPost ? <>Edit</> : <>Add</>} job description
            </h1>
            <div className={styles.jobForm}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="companyName">
                        Company Name:
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        name="companyName"
                        // value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Enter company name"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="logoURL">
                        Logo URL:
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        name="logoUrl"
                        // value={formData.logoURL}
                        onChange={handleChange}
                        placeholder="Enter logo URL"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="position">
                        Title:
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        name="title"
                        // value={formData.position}
                        onChange={handleChange}
                        placeholder="Enter job position"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="description">
                        Description:
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        name="description"
                        // value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter job salary"
                    />
                </div>
            </div>
            <button
                // onClick={() => navigate("/listing")}
                className={styles.cancel}
            >
                Cancel
            </button>
            {isEditExistingJobPost ? (
                <button onClick={handleSubmit} className={styles.add}>
                    Edit Job
                </button>
            ) : (
                <button onClick={handleSubmit} className={styles.add}>
                    + Add Job
                </button>
            )}
        </div>
    );
}
