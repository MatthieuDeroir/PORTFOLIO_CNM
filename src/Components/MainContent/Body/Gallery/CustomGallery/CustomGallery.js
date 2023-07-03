import React from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

class CustomGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImage: 0,
            viewerIsOpen: false,
        };

        this.openLightbox = this.openLightbox.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
    }

    openLightbox(event, { index }) {
        this.setState({
            currentImage: index,
            viewerIsOpen: true,
        });
    }

    closeLightbox() {
        this.setState({
            currentImage: 0,
            viewerIsOpen: false,
        });
    }

    render() {
        const { currentImage, viewerIsOpen } = this.state;
        const { images, enableImageSelection, rowHeight, margin, defaultContainerWidth } = this.props;

        const photos = images.map(image => ({
            src: image.src,
            width: image.width,
            height: image.height,
            srcSet: image.srcSet,
            alt: image.alt,
            title: image.caption,
            // Add other image attributes here as needed
        }));

        return (
            <div>
                <Gallery
                    photos={photos}
                    onClick={this.openLightbox}
                    margin={margin}
                    direction={"column"} // default direction
                    columns={3} // number of columns for the grid
                />
                <ModalGateway>
                    {viewerIsOpen && (
                        <Modal onClose={this.closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    )}
                </ModalGateway>
            </div>
        );
    }
}

export default CustomGallery;
