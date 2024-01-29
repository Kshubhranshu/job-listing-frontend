import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { DEFAULT_SKILLS } from "../../utils/constant";
import { getAllJobs } from "../../apis/job";

export default function Home() {
    const navigate = useNavigate();

    const [jobs, setJobs] = useState([]);
    const [skills, setSkills] = useState([]);
    const [search, setSearch] = useState("");

    const handleSkill = (event) => {
        if (!event.target.value) return;

        const newArr = skills.filter((skill) => skill === event.target.value);
        if (!newArr.length) {
            setSkills([...skills, event.target.value]);
        }
    };

    const removeSkill = (selectedSkill) => {
        const newArr = skills.filter((skill) => skill !== selectedSkill);
        setSkills([...newArr]);
    };

    useEffect(() => {
        fetchAllJobs();
    }, [skills]);

    const fetchAllJobs = async () => {
        const reqPayload = {
            skills: skills.join(","),
            title: search?.trim(),
        };
        const jobList = await getAllJobs(reqPayload);
        console.log(jobList);
    };

    const handleKeyDown = (event) => {
        if (!search?.trim()) {
            return;
        }
        if (event.keyCode === 13) {
            fetchAllJobs();
        }
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.containerTop}>
                    <input
                        className={styles.inputTop}
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        onKeyDown={handleKeyDown}
                        type="text"
                        name="search"
                        placeholder="Type any job title"
                    />
                </div>
                <div className={styles.containerBottom}>
                    <select
                        onChange={handleSkill}
                        className={styles.inputSelect}
                        name="remote"
                    >
                        <option value="">Skills</option>
                        {DEFAULT_SKILLS.map((skill) => (
                            <option key={skill} value={skill}>
                                {skill}
                            </option>
                        ))}
                    </select>
                    {skills.map((skill) => {
                        return (
                            <span className={styles.chip} key={skill}>
                                {skill}
                                <span
                                    onClick={() => removeSkill(skill)}
                                    className={styles.cross}
                                >
                                    X
                                </span>
                            </span>
                        );
                    })}
                    <button
                        onClick={() => navigate("/addJob")}
                        className={styles.edit}
                    >
                        Add Job
                    </button>
                </div>
            </div>
            {/* <div className={styles.bottom}> */}
            {jobs.map((data) => {
                return (
                    <div key={data._id} className={styles.list}>
                        <div className={styles.listLeft}>
                            <div>
                                <img src={data.logoURL} />
                            </div>
                            <div className={styles.infoLeft}>
                                <p className={styles.position}>
                                    {data.position}
                                </p>
                                <p className={styles.extraInfo}>
                                    <span className={styles.greyText}>
                                        11-50
                                    </span>
                                    <span className={styles.greyText}>
                                        {data.salary}
                                    </span>
                                    <span className={styles.greyText}>
                                        {data.location}
                                    </span>
                                </p>
                                <p className={styles.extraInfo}>
                                    <span className={styles.redText}>
                                        {data.remote}
                                    </span>
                                    <span className={styles.redText}>
                                        {data.jobType}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                {data.skillsRequired.map((skill) => {
                                    return (
                                        <span
                                            className={styles.skill}
                                            key={skill}
                                        >
                                            {skill}
                                        </span>
                                    );
                                })}
                            </div>
                            <div className={styles.btnGroup}>
                                <button
                                    onClick={() =>
                                        navigate("/addJob", {
                                            state: { id: data._id, edit: true },
                                        })
                                    }
                                    className={styles.edit}
                                >
                                    Edit job
                                </button>
                                <button
                                    onClick={() =>
                                        navigate("/detail", {
                                            state: { id: data._id },
                                        })
                                    }
                                    className={styles.view}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
            {/* </div> */}
        </>
    );
}
