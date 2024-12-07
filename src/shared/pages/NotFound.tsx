import { useEffect } from "react";

// components
import NavBar from "../components/Navigation/NavBar";

// styles
import "./NotFound.scss";

// assets
import notFoundImg from "../../assets/images/not-found/404.webp";

export default function NotFound() {
    useEffect(() => {
        document.title = "404 Not Found - Readme Forge";
    }, []);
    return (
        <div className="not-found-root">
            <NavBar />
            <div className="not-found-content">
                <div className="not-found-img">
                    <img
                        src={notFoundImg}
                        alt="Not found illustration"
                        draggable={false}
                    />
                </div>
                <div className="not-found-text">404 Not Found :(</div>
            </div>
        </div>
    );
}
