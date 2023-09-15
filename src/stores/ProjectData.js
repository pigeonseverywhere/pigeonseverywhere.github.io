import { writable } from "svelte/store"
import cuppa from "../assets/project_cuppa.png"
import shelves from "../assets/project_shelves.png"
import sunswift from "../assets/project_sunswift_erp.png"

const ProjectData =  writable([
    {
        name: "Sunswift ERP",
        description: "Enterprise resource management project created for Sunswift UNSW",
        img: sunswift,
        link: "/",
        skills : [
            "JavaScript",
            "React",
            "FastAPI",
            "Python",
            "AWS",
            "PostgreSQL"
        ]
    },
    {
        name: "Cuppa",
        description: "A minimalist MacOS menubar widget for keeping your mac screen awake",
        img: cuppa,
        link: "https://github.com/pigeonseverywhere/cuppa",
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
        link: "https://github.com/pigeonseverywhere/shelves",
        skills : [
            "Node.js",
            "TypeScript",
            "SQLite"
        ]
    },
])

export default ProjectData;