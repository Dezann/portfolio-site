import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import cardman from "../media/Projects/cardman.svg"
import "./Projects.scss"
import 'pure-react-carousel/dist/react-carousel.es.css';


class Projects extends Component {
    state = {}
    render() {
        return (
            <div className="projects-page-content">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={425}
                    totalSlides={3}
                    dragEnabled={true}
                >
                    <Slider>
                        <Slide index={0}><img src={cardman}></img></Slide>
                        <Slide index={1}><img src={cardman}></img></Slide>
                        <Slide index={2}><img src={cardman}></img></Slide>
                    </Slider>
                    <ButtonBack>Back</ButtonBack>
                    <ButtonNext>Next</ButtonNext>
                </CarouselProvider>
            </div >
        );
    }
}

export default Projects;