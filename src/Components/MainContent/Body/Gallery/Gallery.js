import React from 'react';
import Section from './Section/Section';
import bgImage from '../../../../Assets/Images/bg.webp';

const Gallery = () => {

    //TODO: Develop an algorithm to fetch images from a folder and display them in the gallery in function of their name.
    // Naming Convention : {categoryName}_{columnNumber}_{projectName}_{imageIndex})
    // Example : artProject_1_unedited_1.webp
    // Example : artProject_1_unedited_2.webp
    // Example : artProject_1_unedited_3.webp
    // Example : artProject_1_unedited_4.webp
    // Example : artProject_1_unedited_5.webp

    // Example : artProject_1_blueHour_1.webp
    // Example : artProject_1_blueHour_2.webp
    // Example : artProject_1_blueHour_3.webp
    // Example : artProject_1_blueHour_4.webp
    // Example : artProject_1_blueHour_5.webp

    // Example : artProject_1_collage_1.webp
    // Example : artProject_1_collage_2.webp

    function importAll(r) {
        return r.keys().map(r);
    }


    //Column 1 : INSPIRATIONS
    const images_1_unedited = [
        {url: `${bgImage}`, description: '(UN)EDITED'},
    ];

    const images_1_blueHour = [
        {url: `${bgImage}`, description: 'BLUE HOUR'},
    ];

    const images_1_collage = [
        {url: `${bgImage}`, description: 'COLLAGE'},
    ];

    //Column 2 : Inspirations

    const images_2_angels = [
        {url: `${bgImage}`, description: 'Angels'},
    ];

    const images_2_churchAndMountain = [
        {url: `${bgImage}`, description: 'Church and Mountain'},
    ];

    const images_2_motherNature = [
        {url: `${bgImage}`, description: 'Mother Nature is on my mind'},
    ];

    //Column 3 : Skillful

    const images_3_monumental = [
        {url: `${bgImage}`, description: 'a miniature MONUMENTAL space'},
    ];

    const images_3_personalPractice = [
        {url: `${bgImage}`, description: 'Personal practice and inspirations'},
    ];

    const images_3_welding = [
        {url: `${bgImage}`, description: 'Welding and stained glass process'},
    ];

    const images_3_observationalDrawing = [
        {url: `${bgImage}`, description: 'Observational drawing'},
    ];

    //Column 4 : Thoughtful


    return (
        <div>
            <h2 id="section1">INSPIRATIONS</h2>
            <h3 id="section1-unedited">(UN)EDITED</h3>
            <Section images={images_1_unedited}/>
            <h3 id="section1-blueHour">BLUE HOUR</h3>
            <Section images={images_1_blueHour}/>
            <h3 id="section1-collage">COLLAGE</h3>
            <Section images={images_1_collage}/>

            <h2 id="section2">Inspirations</h2>
            <h3 id="section2-angels">Angels</h3>
            <Section images={images_2_angels}/>
            <h3 id="section2-churchAndMountain">Church and Mountain</h3>
            <Section images={images_2_churchAndMountain}/>
            <h3 id="section2-motherNature">Mother Nature is on my mind</h3>
            <Section images={images_2_motherNature}/>

            <h2 id="section3">Skillful</h2>
            <h3 id="section3-observationalDrawing">Observational drawing (Carousel)</h3>
            <Section images={images_3_observationalDrawing}/>
            <h3 id="section3-monumental">a miniature MONUMENTAL space</h3>
            <Section images={images_3_monumental}/>
            <h3 id="section3-welding">Welding and stained glass process (linked through Church and Mountain)</h3>
            <Section images={images_3_welding}/>

            <h2 id="section4">Thoughtful</h2>

        </div>
    );
};

export default Gallery;
