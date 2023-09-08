import { writable } from "svelte/store"
import cuppa from "../assets/project_cuppa.png"
import shelves from "../assets/project_shelves.png"
import sunswift from "../assets/project_sunswift_erp.png"

const ProjectData =  writable([
    {
        name: "Sunswift ERP",
        description: "Enterprise resource management project created for Sunswift UNSW",
        img: sunswift,
        skills : [
            "JavaScript",
            "React",
            "Rest API",
            "Python",
            "AWS",
            "PostgreSQL"
        ]
    },
    {
        name: "Cuppa",
        description: "A minimalist MacOS menubar widget for keeping your mac screen awake",
        img: cuppa,
        skills: [
            "Swift",
            "Objective-C",
            "Xcode"
        ]
    }, 
    {
        name: "Shelves",
        description: "A virtual bookshelf on the commandline to help you keep track of your readings",
        img: shelves,
        skills : [
            "Node.js",
            "TypeScript",
            "SQLite"
        ]
    },
    // {
    //     name: "placeholder a",
    //     description: "placeholder a random",
    //     img: shelves,
    //     skills: [
    //         "skill1",
    //         "skill2",
    //         "skill2",
    //         "skill4"
    //     ]
    // },
    // {
    //     name: "placeholder b",
    //     description: "placeholder b random",
    //     skills: [
    //         "skill x",
    //         "skill c"
    //     ]
    // }
])

export default ProjectData;