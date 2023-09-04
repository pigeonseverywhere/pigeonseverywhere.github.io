import { writable } from "svelte/store"

const ProjectData =  writable([
    {
        name: "Cuppa",
        description: "MacOS menubar widget for keeping your mac awake",
        skills: [
            "Swift",
            "Objective-C",
            "Xcode"
        ]
    }, 
    {
        name: "Shelves",
        description: "A commandline book tracker",
        skills : [
            "Node.js",
            "TypeScript",
            "SQLite"
        ]
    },
    {
        name: "Sunswift ERP",
        description: "Enterprise resource management project",
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
        name: "placeholder a",
        description: "placeholder a random",
        skills: [
            "skill1",
            "skill2",
            "skill2",
            "skill4"
        ]
    },
    {
        name: "placeholder b",
        description: "placeholder b random",
        skills: [
            "skill x",
            "skill c"
        ]
    }
])

export default ProjectData;