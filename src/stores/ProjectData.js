import { writable } from "svelte/store"
import cuppa from "../assets/project_cuppa.png"
import shelves from "../assets/project_shelves.png"
import sunswift from "../assets/project_sunswift_erp.png"

const ProjectData =  writable([
    {
        name: "ERP project for Sunswift",
        description: "Enterprise resource management project created for Sunswift UNSW",
        img: sunswift,
        link: "https://www.sunswift.com",
        external: false,
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
        external: true,
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
        external: true,
        link: "https://www.npmjs.com/package/shelves-cli",
        skills : [
            "Node.js",
            "TypeScript",
            "SQLite"
        ]
    },
])

export default ProjectData;