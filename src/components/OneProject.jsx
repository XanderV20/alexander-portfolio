import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export const OneProject = ({description, images}) => {
    return (
        <div className="project-item">
            <div className="project-image">
                <ImageGallery items={images} showThumbnails={false} showBullets={false} showPlayButton={false} showFullscreenButton={true} autoPlay={true} slideInterval={2500}/>
            </div>
            <div className="project-description">
                <p style={{whiteSpace: "pre-line", margin: "0"}}>{description}</p>
            </div>
        </div>
    )
}