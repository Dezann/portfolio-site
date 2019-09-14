import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import cardman from "../media/Projects/cardman.svg"
import "./Projects.scss"
import 'pure-react-carousel/dist/react-carousel.es.css';

class Projects extends Component {
    state = {}

    render() {
        return (
            <div className="projects-page-content">
                <div className="carousel-wrapper">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={225}
                        totalSlides={3}
                    >
                        <DotGroup />
                        <Slider>
                            <Slide index={0}>
                                <img src={cardman}></img>
                                <p className="project-title">Title</p>
                                <p className="project-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non ante vel velit convallis pulvinar. Sed condimentum mi sit amet nisl blandit dignissim vel vel nibh. Donec ultrices faucibus eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam facilisis augue sed iaculis congue. Curabitur tempor at risus non placerat.</p>
                            </Slide>
                            <Slide index={1}>
                                <img src={cardman}></img>
                                <p className="project-title">Title</p>
                                <p className="project-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non ante vel velit convallis pulvinar. Sed condimentum mi sit amet nisl blandit dignissim vel vel nibh. Donec ultrices faucibus eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam facilisis augue sed iaculis congue. Curabitur tempor at risus non placerat.</p>
                            </Slide>
                            <Slide index={2}>
                                <img src={cardman}></img>
                                <p className="project-title">Title</p>
                                <p className="project-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non ante vel velit convallis pulvinar. Sed condimentum mi sit amet nisl blandit dignissim vel vel nibh. Donec ultrices faucibus eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam facilisis augue sed iaculis congue. Curabitur tempor at risus non placerat.</p>
                            </Slide>
                        </Slider>
                    </CarouselProvider>
                </div>
            </div >
        );
    }
}

export default Projects;