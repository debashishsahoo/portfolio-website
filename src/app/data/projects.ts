import { Project } from "../types/types";

export const projects: Project[] = [
    {
        "logoSrc": "/media/music_mates.png",
        "name": "MusicMates",
        "url": "https://github.com/debashishsahoo/music-mates-iOS",
        "tools": ["Swift", "Firebase"],
        "startDate": "May 2023",
        "endDate": "Jun 2023",
        "description": [
            "iOS app developed using Swift that allows music lovers to connect with nearby strangers sharing similar music tastes, chat with them about their favorite artist, and share their top Spotify songs and albums with each other.",
            "Utilizes Firebase and the Firestore Database for authentication, storing user data, and implementing chat messaging.",
            "Accesses the Spotify Web API to retrieves users’ music data using OAuth 2.0 authorization.",
            "Utilizes MapKit for location services and basic Cocoa Touch frameworks such as UIKit and Foundation Kit."
        ]
    },
    {
        "logoSrc": "/media/work_plus.svg",
        "name": "WorkPlus",
        "url": "https://github.com/debashishsahoo/work-plus",
        "tools": ["Python", "Django", "HTML", "CSS"],
        "startDate": "Mar 2021",
        "endDate": null,
        "description": [
            "Workplace platform that promotes a healthy lifestyle by enabling employees to play fun trivia and fitness challenges.",
            "Won 1st Place as a team at the Japan Inter-School Hackathon 2021.",
            "Implemented Fitbit API authorization which allows users to connect their Fitbit Account.",
            "Applied Image Recognition to enable users to upload screenshots of their daily run on the Nike Run App.",
            "Utilized Django Web Sockets and Channels to enable employees to chat with each other asynchronously."
        ]
    },
    {
        "logoSrc": "/media/weather_board.svg",
        "name": "Weather Board",
        "url": "https://github.com/debashishsahoo/weather-board",
        "tools": ["ReactJS", "Tailwind CSS"],
        "startDate": "Dec 2022",
        "endDate": null,
        "description": [
            "Dashboard that displays current weather data and forecasting for any city in the world.",
            "Fetches data from the OpenWeatherMap API and displays it seamlessly on the application."
        ]
    },
    {
        "logoSrc": "/media/todo_mate.svg",
        "name": "Todo Mate",
        "url": "https://github.com/debashishsahoo/todo-list",
        "tools": ["JavaScript", "HTML", "CSS"],
        "startDate": "Dec 2021",
        "endDate": null,
        "description": [
            "Simple to-do list application that allows users to keep track of their upcoming tasks, tick them off seamlessly when completed, and ensures that they don’t fall behind on their responsibilities.",
            "Centered on user experience and visual animations, displaying data to users in an interactive manner."
        ]
    },
    {
        "logoSrc": "/media/aus_vaccine_tracker.svg",
        "name": "Australia COVID-19 Vaccine Tracker",
        "url": "https://github.com/debashishsahoo/aus-vaccine-tracker",
        "tools": ["JavaScript", "HTML", "CSS"],
        "startDate": "Oct 2021",
        "endDate": null,
        "description": [
            "Dashboard tracker that displays up-to-date numbers regarding Australia's coronavirus vaccination rates on the national and state level, and originally counted down the days until the 80% vaccination target was met.",
            "Utilizes the Fetch API to retrieve raw JSON data daily.",
            "Uses the Chart.js open-source library to seamlessly plot and render charts with data and animations."
        ]
    },
    {
        "logoSrc": "/media/project_x.svg",
        "name": "ProjectX",
        "url": "https://github.com/debashishsahoo/project-x",
        "tools": ["Python (Django)", "MySQL", "HTML", "CSS"],
        "startDate": "Aug 2020",
        "endDate": null,
        "description": [
            "Django application that displays laptops and mobile phones from popular Japanese e-commerce websites on a single app — for users to search, compare and select their best product.",
            "Used the Django authentication system to create a fully functional login and registration portal, allowing users to save their search history and shopping cart details."
        ]
    }
]