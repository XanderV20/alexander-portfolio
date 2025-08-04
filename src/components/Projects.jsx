import HacsHome from '../assets/HACSHome.png';
import Login from '../assets/Login.jpg';
import Feed from '../assets/Feed.jpg';
import Navigation from '../assets/Navigation.jpg';
import Messages from '../assets/Messages.jpg';
import Profile from '../assets/Profile.jpg';
import Pokemon from '../assets/Pokemon.jpg';
import PokemonShiny from '../assets/Pokemon-Shiny.jpg';
import PokemonInfo from '../assets/Pokemon-Info.jpg';
import Games from '../assets/Games.jpg';
import TCGSets from '../assets/TCG-Sets.jpg';
import TCGCards from '../assets/TCG-Cards.jpg';
import TCGCardInfo from '../assets/TCG-Card-Info.jpg';
import ShelveItLogin from '../assets/ShelveIt-Login.png';
import Shelves from '../assets/Shelves.png';
import Movies from '../assets/Movies.png';
import Movie from '../assets/Movie.png';
import ShelveItProfile from '../assets/ShelveIt-Profile.png';
import Friends from '../assets/Friends.png';
import FriendProfile from '../assets/Friend-Profile.png';
import Recommended from '../assets/Recommended.png';
import { OneProject } from './OneProject';

export const Projects = () => {

    // Images for the projects
    const DexCentralImages = [
        {
            original: Login,
            thumbnail: Login,
        },
        {
            original: Feed,
            thumbnail: Feed,        
        },
        {
            original: Navigation,
            thumbnail: Navigation,
        },
        {
            original: Profile,
            thumbnail: Profile,
        },
        {
            original: Messages,
            thumbnail: Messages,
        },
        {
            original: Pokemon,
            thumbnail: Pokemon,
        },
        {
            original: PokemonShiny,
            thumbnail: PokemonShiny,
        },
        {
            original: PokemonInfo,
            thumbnail: PokemonInfo,
        },
        {
            original: Games,
            thumbnail: Games,
        },
        {
            original: TCGSets,
            thumbnail: TCGSets,
        },
        {
            original: TCGCards,
            thumbnail: TCGCards,
        },
        {
            original: TCGCardInfo,
            thumbnail: TCGCardInfo,
        }
    ];
    const HacsImages = [
        {
            original: HacsHome,
            thumbnail: HacsHome,
        }
    ];
    const ShelveItImages = [
        {
            original: ShelveItLogin,
            thumbnail: ShelveItLogin,
        },
        {
            original: Shelves,
            thumbnail: Shelves,
        },
        {
            original: Movies,
            thumbnail: Movies,
        },
        {
            original: Movie,
            thumbnail: Movie,
        },
        {
            original: ShelveItProfile,
            thumbnail: ShelveItProfile,
        },
        {
            original: Friends,
            thumbnail: Friends,
        },
        {
            original: FriendProfile,
            thumbnail: FriendProfile,
        },
        {
            original: Recommended,
            thumbnail: Recommended,
        }
    ]

    return (
        <div id="projects" className="projects">
            <h1>Projects</h1>
            <p style={{textAlign: "center", marginBottom: "3rem"}}>Here are some of the projects I've worked on. Feel free to check them out!</p>
            <div className="project-list">
                <div className="project-title">
                    <h2>DexCentral</h2>
                    <a href="https://github.com/XanderV20/DexCentral" target="_blank" rel="noopener noreferrer" style={{display: "flex", alignItems: "center"}}>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width={30} height={30}>
                            <title>GitHub</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                    </a>
                </div>
                <OneProject 
                    description="DexCentral is a social Android application built with Android Studio and Firebase that enables users to share and discover information related to Pokémon games and the Pokémon Trading Card Game (TCG). The app features a community feed where users can create posts, interact with others, and send direct messages.

                    Users can also track their Pokémon collections and explore detailed information about individual Pokémon and TCG cards. The app is built using the MVVM (Model-View-ViewModel) architecture to ensure clean separation of concerns and scalability, and leverages RecyclerView to efficiently display dynamic lists of posts, messages, and collection items.

                    DexCentral highlights my skills in mobile development, backend integration with Firebase (including authentication, Firestore, and storage), and creating smooth, responsive user experiences tailored for enthusiasts and collectors."
                    images={DexCentralImages}
                />

                <hr />

                <div className="project-title">
                    <h2>HACS Website</h2>
                    <a href="https://github.com/texas-HACS/hacs-frontend" target="_blank" rel="noopener noreferrer" style={{display: "flex", alignItems: "center"}}>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width={30} height={30}>
                            <title>GitHub</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                    </a>
                </div>
                <OneProject 
                    description="As the Web Development Officer for the Hispanic Association of Computer Scientists (HACS) during my undergraduate studies, I maintained and enhanced the organization’s website using React, Node.js, and Firebase. The site serves as an information hub for both new and current members, highlighting events, opportunities, and updates relevant to the community.
                    
                    I worked with my fellow officers in designing and implementing new pages, including People, Familias, and Sponsorships. I also removed outdated sections, optimized components for better usability, and introduced several improvements to the admin dashboard, making it easier for officers to manage content dynamically."
                    images={HacsImages}
                />

                <a href="https://texashacs.org/" target="_blank" rel="noopener noreferrer" style={{marginLeft: "auto", marginRight: "auto", textAlign: "center", display: "block", fontSize: "1.2rem"}}>
                    https://texashacs.org/
                </a>

                <hr />

                <div className="project-title">
                    <h2>Shelve It</h2>
                    <a href="https://github.com/XanderV20/Shelve-It" target="_blank" rel="noopener noreferrer" style={{display: "flex", alignItems: "center"}}>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width={30} height={30}>
                            <title>GitHub</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                    </a>
                </div>
                <OneProject 
                    description="Shelve It is an iOS app developed with Swift and Firebase that helps users track and organize their favorite movies, TV shows, books, and video games. The app uses three API's to allow users to discover specific titles, along with functionality for users to rate, review, and share their thoughts on items in their collection.

                    Shelve It also incorporates social features, allowing users to connect with friends, explore each other's libraries, and discover new content through shared interests. Built with Firebase for real-time data syncing and user authentication, the app showcases clean and responsive UI design, scalable architecture, and a user-first experience."
                    images={ShelveItImages}
                />
            </div>
        </div>
    )

}