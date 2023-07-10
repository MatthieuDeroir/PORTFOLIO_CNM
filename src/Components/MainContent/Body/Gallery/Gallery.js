import React from 'react';
import Section from './Section/Section';
import {Gallery} from 'react-grid-gallery';
import CustomGallery from './CustomGallery/CustomGallery';
import ImageOverlay from './ImageOverlay/ImageOverlay';
import GalleryWithOverlay from './GalleryWithOverlay/GalleryWithOverlay';

import Unedited from "./Unedited";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const GalleryComponent = () => {

    const backstage = [
        {
            src: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_BACKSTAGE_1.JPG'),
            thumbnail: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_BACKSTAGE_1.JPG'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            title: 'BACKSTAGE',
            caption: 'Backstage',
            description: 'Real flooring, real windows and artificial lights, it took a few weeks to source the materials and create this small room. '
        },
        {
            src: require('Assets/Images/white.avif'),
            thumbnail: require('Assets/Images/white.avif'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            title: '',
            caption: 'Backstage',
            description:'',
        },
        {
            src: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_BACKSTAGE_2.JPG'),
            thumbnail: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_BACKSTAGE_2.JPG'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            title: 'BACKSTAGE',
            caption: 'Backstage',
            description: 'A variety of objects represent people throughout the project, glowsticks, cat toys, cotton candy. The colours and textures of these objects evoke symbolical meaning. Cotton candy, like a cloud, reminds us of dreams.'
        },
    ];

    const blueHour = [
        {
            src: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_GIF_1.gif'),
            thumbnail: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_GIF_1.gif'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            title: 'BLUEHOUR',
            caption: 'GIF',
            description: 'A stop motion wave of pink sand. \n' +
                'Relaxation, imagination and memories.\n',
        },
        {
            src: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_GIF_2.gif'),
            thumbnail: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_GIF_2.gif'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            title: 'BLUEHOUR',
            caption: 'GIF',
            description: 'A variety of objects represent people throughout the project, glowsticks, cat toys, cotton candy. The colours and textures of these objects evoke symbolical meaning. Cotton candy, like a cloud, reminds us of dreams.',
        },
        {
            src: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_GIF_3.gif'),
            thumbnail: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_GIF_3.gif'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'GIF',
            title: 'BLUEHOUR',
            description: 'Still Dancers, changing lights.',
        },
        {
            src: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_GIF_4.JPG'),
            thumbnail: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_GIF_4.JPG'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'GIF',
            title: 'BLUEHOUR',
            description: 'This was shot in the reflection of the window',
        },

        {
            src: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_GIF_5.gif'),
            thumbnail: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_GIF_5.gif'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'GIF',
            title: 'BLUEHOUR',
            description: 'Dreaming about nature in the dark',
        },
        {
            src: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_GIF_6.gif'),
            thumbnail: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_GIF_6.gif'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            title: 'BLUEHOUR',
            caption: 'GIF',
            description: 'Our dreams become more personal as our consciousness separates into sleep',
        }
    ]


    const unedited = [
        {
            src: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_FLOWERPICKING_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_FLOWERPICKING_1.webp'),
            thumbnailWidth: 4,
            thumbnailHeight: 4,
            title: 'FLOWERPICKING',
            description: 'DIGITAL COLLAGE \n' +
                'early 2021\n' +
                'This flower wasn’t where it should be. \n',

        },
        {
            src: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_NEWBLUR_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_NEWBLUR_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            title: 'NEWBLUR',
            description: 'Photograph early 2021 Ø',
        },
        {
            src: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_GOLDHEAD_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_GOLDHEAD_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 2,
            title: 'GOLDHEAD',
            description: 'Close up photograph of an installation\n' +
                ' early 2022\n' +
                ' What is feminine ? Is it natural or artificial ?\n' +
                'The inspiration is natural but the medium is artificial. \n' +
                'As I make flowers out of my discarded padding and earrings I learn to let go of the physical objects that I have come to own. \n' +
                'They are the reflection of that “femininity”. It\'s supposedly harder to buy men gifts.\n',
        },
        {
            src: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_UNDERWATER_4.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_UNDERWATER_4.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            title: 'UNDERWATER',
            description: ' Digital montage\n' +
                ' late 2021\n',
        },
        {
            src: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_REDCURTAIN_5.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_REDCURTAIN_5.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            title: 'REDCURTAIN',
            description: 'Photograph \n' +
                'Early 2021 Ø \n' +
                'These photographs were the inspiration for Une heure bleue’s stage design. \n' +
                'In the morning, through a curtain, through a lens, colour can be so vibrant.\n',
        },
        {
            src: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_REDCURTAIN_6.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_REDCURTAIN_6.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            title: 'REDCURTAIN',
            description: 'Photograph \n' +
                'Early 2021 Ø \n' +
                'These photographs were the inspiration for Une heure bleue’s stage design. \n' +
                'In the morning, through a curtain, through a lens, colour can be so vibrant.\n',
        },
        {
            src: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_REFLECTIONS_7.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_REFLECTIONS_7.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            title: 'REFLECTIONS',
            description: 'Photograph Late 2020 Ø \n',
        },
        {
            src: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_SPACEAVOCADO_8.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_SPACEAVOCADO_8.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            title: 'SPACEAVOCADO',
            description: 'Digital montage \n' +
                'late 2020\n',
        },
        {
            src: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_PINKSUN_9.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_PINKSUN_9.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            title: 'PINKSUN',
            description: 'DIGITAL COLLAGE \n' +
                'late 2020\n' +
                'Layering of images is a means of digital journaling. \n' +
                'The colours hint to the peacefulness of urban escapism.\n',
        }
    ];


    const collages = [
        {
            src: require('Assets/Images/Art Projects/1_COLLAGE/COLLAGE_1_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_COLLAGE/COLLAGE_1_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            title: '1_1',
            description: 'Fashion magazine collage on canvas, untitled, 2021\n' +
                'My usual fascination for the contrast between natural and artificial shows once again\n',
        },
        {
            src: require('Assets/Images/Art Projects/1_COLLAGE/COLLAGE_1_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_COLLAGE/COLLAGE_1_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            title: '1_2',
            description: 'Collage on cardstock, untitled, late 2022',
        },
        {
            src: require('Assets/Images/Art Projects/1_COLLAGE/COLLAGE_1_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_COLLAGE/COLLAGE_1_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            title: '1_3',
            description: 'Collage on cardstock,untitled,  late 2022',
        }
    ]

    const angels = [
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_EYES_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_EYES_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'EYES',
            title: 'EYES :',
            description: 'small sculpture, Late 2021, \nA broken bracelet with many eyes, a bit of clay, wire and two pearls shape a delicate, white creature. The biblical mention of Angels having many eyes is what sparked the concept for this collection.',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_EYES_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_EYES_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'EYES',
            title: 'EYES :',
            description: 'small sculpture, Late 2021, \nA broken bracelet with many eyes, a bit of clay, wire and two pearls shape a delicate, white creature. The biblical mention of Angels having many eyes is what sparked the concept for this collection.',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_GLASS_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_GLASS_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'GLASS',
            title: 'GLASS :',
            description: 'glass painting, Early 2022, \nInspired by ancient cave paintings, this sun god turned love angel lives peacefully among animals and nature. The spiritual inspiration and the history of stained glass make this object liturgical to me.',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_LOVE_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_LOVE_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'LOVE',
            title: 'LOVE :',
            description: 'glass painting, Early 2022,\nInspired by ancient cave paintings, this sun god turned love angel lives peacefully among animals and nature. The spiritual inspiration and the history of stained-glass make this object liturgical to me.',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_LOVE_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_LOVE_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'LOVE',
            title: 'LOVE :',
            description: 'small sculpture, Mid 2022, \nClay and fabric collaborate to create a comforting angel. Monstrous eye tentacle contrast with soft wings and a halo underlines the moral goodness of the creature.',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_LOVE_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_LOVE_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'LOVE',
            title: 'LOVE :',
            description: 'small sculpture, Mid 2022, \nClay and fabric collaborate to create a comforting angel. Monstrous eye tentacle contrast with soft wings and a halo underlines the moral goodness of the creature.',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_LOVE_4.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_LOVE_4.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'LOVE',
            title: 'LOVE :',
            description: 'small sculpture, Mid 2022, \nClay and fabric collaborate to create a comforting angel. Monstrous eye tentacle contrast with soft wings and a halo underlines the moral goodness of the creature.',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'NATURE',
            title: 'NATURE :',
            description: 'small sculpture on canvas base, Early 2023, \nI divert from my white colour palette to create a more organic angel.\n' +
                'Red clay evokes the creation of man, as such this angel is closer to a human than the other ones.  \n' +
                'By entering a more material world this angel feels pain. This pain is both a personal catharsis and a comment on ecological catastrophes worldwide. \n' +
                'Artificial materials such as gemstones and plastic leaves are a cynical comment on my desire to honour nature.\n',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'NATURE',
            title: 'NATURE :',
            description: 'small sculpture on canvas base, Early 2023, \nI divert from my white colour palette to create a more organic angel.\n' +
                'Red clay evokes the creation of man, as such this angel is closer to a human than the other ones.  \n' +
                'By entering a more material world this angel feels pain. This pain is both a personal catharsis and a comment on ecological catastrophes worldwide. \n' +
                'Artificial materials such as gemstones and plastic leaves are a cynical comment on my desire to honour nature.',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_4.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_4.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'NATURE',
            title: 'NATURE :',
            description: 'small sculpture on canvas base, Early 2023, \nI divert from my white colour palette to create a more organic angel.\n' +
                'Red clay evokes the creation of man, as such this angel is closer to a human than the other ones.  \n' +
                'By entering a more material world this angel feels pain. This pain is both a personal catharsis and a comment on ecological catastrophes worldwide. \n' +
                'Artificial materials such as gemstones and plastic leaves are a cynical comment on my desire to honour nature.',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_5.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_5.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'NATURE',
            title: 'NATURE :',
            description: 'small sculpture on canvas base, Early 2023, \nI divert from my white colour palette to create a more organic angel.\n' +
                'Red clay evokes the creation of man, as such this angel is closer to a human than the other ones.  \n' +
                'By entering a more material world this angel feels pain. This pain is both a personal catharsis and a comment on ecological catastrophes worldwide. \n' +
                'Artificial materials such as gemstones and plastic leaves are a cynical comment on my desire to honour nature.',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_6.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_6.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'NATURE',
            title: 'NATURE :',
            description: 'small sculpture on canvas base, Early 2023, \nI divert from my white colour palette to create a more organic angel.\n' +
                'Red clay evokes the creation of man, as such this angel is closer to a human than the other ones.  \n' +
                'By entering a more material world this angel feels pain. This pain is both a personal catharsis and a comment on ecological catastrophes worldwide. \n' +
                'Artificial materials such as gemstones and plastic leaves are a cynical comment on my desire to honour nature.',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_7.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_7.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'NATURE',
            title: 'NATURE :',
            description: 'small sculpture on canvas base, Early 2023, \nI divert from my white colour palette to create a more organic angel.\n' +
                'Red clay evokes the creation of man, as such this angel is closer to a human than the other ones.  \n' +
                'By entering a more material world this angel feels pain. This pain is both a personal catharsis and a comment on ecological catastrophes worldwide. \n' +
                'Artificial materials such as gemstones and plastic leaves are a cynical comment on my desire to honour nature.',
        }
    ]

    const churchAndMountain = [
        {
            src: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Churchandmountain_2_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Churchandmountain_2_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Church and Mountain',
            title: 'Church and Mountain :',
            description: 'stained-glass objects, Early 2022, \nA church and a mountain, two timeless places. These two little objects create a scenery, like a miniature stage design.',
        },
        {
            src: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Churchandmountain_2_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Churchandmountain_2_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Church and Mountain',
            title: 'Church and Mountain :',
            description: 'stained-glass objects, Early 2022, \nA church and a mountain, two timeless places. These two little objects create a scenery, like a miniature stage design.',
        },
        {
            src: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Churchandmountain_2_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Churchandmountain_2_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Church and Mountain',
            title: 'Church and Mountain :',
            description: 'stained-glass objects, Early 2022, \nA church and a mountain, two timeless places. These two little objects create a scenery, like a miniature stage design.',
        },
        {
            src: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Churchandmountain_2_4.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Churchandmountain_2_4.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Church and Mountain',
            title: 'Church and Mountain :',
            description: 'stained-glass objects, Early 2022, \nA church and a mountain, two timeless places. These two little objects create a scenery, like a miniature stage design.',
        },
        {
            src: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Churchandmountain_2_5.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Churchandmountain_2_5.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Church and Mountain',
            title: 'Church and Mountain :',
            description: 'stained-glass objects, Early 2022, \nA church and a mountain, two timeless places. These two little objects create a scenery, like a miniature stage design.',
        },
    ]

    const camaieu = [
        {
            src: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Camaieu_ 2_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Camaieu_ 2_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Camaïeu',
            title: 'Camaïeu',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Camaieu_ 2_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Camaieu_ 2_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Camaïeu',
            title: 'Camaïeu',
            description: '',

        },
        {
            src: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Camaieu_ 2_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Camaieu_ 2_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Camaïeu',
            title: 'Camaïeu',
            description: '',

        },
        {
            src: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Camaieu_ 2_4.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Camaieu_ 2_4.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Camaieu',
            title: 'Camaïeu',
            description: '',

        },
        {
            src: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Camaieu_ 2_5.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Camaieu_ 2_5.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Camaieu',
            title: 'Camaïeu',
            description: '',

        },
    ]


    const motherNature = [
        {
            src: require('Assets/Images/Art Projects/2_MOTHERNATURE/MotherNature_2_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_MOTHERNATURE/MotherNature_2_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Mother Nature',
            title: 'Le vent sur nos corps d’arbres :',
            description: 'watercolour, early 2022, \n' +
                'Organic but vibrant colours draw “The wind on our body trees”,\n',
        },
        {
            src: require('Assets/Images/Art Projects/2_MOTHERNATURE/MotherNature_2_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_MOTHERNATURE/MotherNature_2_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Mother Nature',
            title: 'Mother Nature is on my mind',
            description: 'watercolour, early 2022,\n' +
                '\tWind and Fire draw dynamic lines, like the arms of nature controlling the elements.\n',
        },
        {
            src: require('Assets/Images/Art Projects/2_MOTHERNATURE/MotherNature_2_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_MOTHERNATURE/MotherNature_2_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Mother Nature',
            title: 'Sometimes it rains',
            description: 'watercolour, early 2022,\n' +
                '\tSometimes it rains is both a physical and an emotional reality.\n',
        },
        {
            src: require('Assets/Images/Art Projects/2_MOTHERNATURE/MotherNature_2_4.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_MOTHERNATURE/MotherNature_2_4.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Mother Nature',
            title: 'Is this a Shrimp ? ',
            description: ' watercolour, 2020',
        }
    ]

    const analogDrawings_JOURNALING = [
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_4.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_4.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_5.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_5.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_6.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_6.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            title: '',
            description: '',

        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_7.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_7.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_8.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_8.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_9.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_9.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_10.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_10.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_11.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_11.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_12.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_12.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            title: '',
            description: '',
        },
    ]

    const analogDrawings_ME = [
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'ME',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'ME',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'ME',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_4.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_4.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'ME',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_5.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_5.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'ME',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_6.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_6.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'ME',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_7.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_7.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'ME',
            title: '',
            description: '',
        }
    ]

    const analogDrawings_PORTRAIT = [
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_PORTRAIT_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_PORTRAIT_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'PORTRAIT',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_PORTRAIT_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_PORTRAIT_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'PORTRAIT',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_PORTRAIT_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_PORTRAIT_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'PORTRAIT',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_PORTRAIT_4.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_PORTRAIT_4.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'PORTRAIT',
            title: '',
            description: '',
        }
    ]

    const analogDrawings_LIFEDRAWING = [
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_wLIFEDRAWING_(1).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_wLIFEDRAWING_(1).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'LIFEDRAWING',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_wLIFEDRAWING_(2).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_wLIFEDRAWING_(2).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'LIFEDRAWING',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_wLIFEDRAWING_(3).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_wLIFEDRAWING_(3).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'LIFEDRAWING',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_wLIFEDRAWING_(4).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_wLIFEDRAWING_(4).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'LIFEDRAWING',
            title: '',
            description: '',
        }
    ]

    const digitalDrawings = [
        {
            src: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/Characters_3_(1).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/Characters_3_(1).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'CHARACTERS',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/Characters_3_(2).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/Characters_3_(2).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'CHARACTERS',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/Characters_3_(3).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/Characters_3_(3).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'CHARACTERS',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/Characters_3_(4).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/Characters_3_(4).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'CHARACTERS',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/Characters_3_(5).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/Characters_3_(5).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'CHARACTERS',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/characters_3_(8).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/characters_3_(8).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'CHARACTERS',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/characters_3_(9).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/characters_3_(9).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'CHARACTERS',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/characters_3_(10).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/characters_3_(10).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'CHARACTERS',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/characters_3_(11).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/characters_3_(11).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'CHARACTERS',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/characters_3_(12).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/characters_3_(12).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'CHARACTERS',
            title: '',
            description: '',
        }
    ]
    const objectPhotography = [
        {
            src: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_1_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_1_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'OBJECTPHOTOGRAPHY',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_1_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_1_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'OBJECTPHOTOGRAPHY',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_1_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_1_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'OBJECTPHOTOGRAPHY',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_2_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_2_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'OBJECTPHOTOGRAPHY',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_2_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_2_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'OBJECTPHOTOGRAPHY',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_2_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_2_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'OBJECTPHOTOGRAPHY',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_2_4.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_2_4.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'OBJECTPHOTOGRAPHY',
            title: '',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'OBJECTPHOTOGRAPHY',
            title: '',
            description: '',
        }
    ]


    return (
        <div className="gallery">
            <h1>INSPIRATIONS</h1>
            <section id="#section1-blueHour">

                <h2>BLUE HOUR</h2>
                <p>
                    Early 2023
                </p>

                <GalleryWithOverlay images={blueHour}/>
                <h2>Backstage</h2>
                <p>Words and drawings both help keep track of a blooming idea.

                    Une Heure Bleue went through multiple changes before coming to completion.
                    Starting from a window-based stage design and the idea of the bubble shot, the images are both
                    inspired by the narrative basis for the project and the available materials.

                    Ideas for dialog and a more character based video were explored, but the intention of blue hour is
                    to remind us of that time rather than show it.</p>
                <GalleryWithOverlay images={backstage}/>
            </section>
            <div>
                <h2>UN?EDITED</h2>
                <p>
                    This collection of images, both edited and unedited are a play on what visual queues we recognise as
                    artificial. Colours, textures and shapes and even composition can all indicate editing, here I play
                    with colour and light to blur the origins of sometimes untouched images. I've translated this
                    process in my video clip "I have these videos".
                    The mention Ø points to the lack of any digital editing. Not all mysteries/processes will be
                    explained.
                </p>
                <GalleryWithOverlay images={unedited}/>
            </div>
            <div>
                <h2>COLLAGES</h2>
                <p>

                </p>
                <GalleryWithOverlay images={collages}/>
            </div>
            <h1>Inspiration</h1>
            <div>
                <h2>Angels</h2>
                <p>Angels are a collection of affectionately created small sculptures. The variety of these figures
                    represents the plurality of the symbols I relate to angels.
                    This series is ongoing and started in 2022, through the sacralisation of a broken bracelet. The main
                    body of Angels are air-dry clay but materials vary revealing every angel's individuality.
                </p>
                <GalleryWithOverlay images={angels}/>
            </div>
            <div>
                <h1>
                    <i>Durable Materials</i>
                </h1>
                <h2>Church and Mountain</h2>
                <GalleryWithOverlay images={churchAndMountain}/>
                <h2>Camaïeu</h2>
                <p>Stained-glass and mirror, Early 2022, A camaïeu is the use of multiple shades of the same colour to
                    create a composition.
                    Recycling stained glass like a puzzle, I trained myself to weld glass together in tricky imperfect
                    ways.
                    As this meditative process happened over the course of a few weeks, the war broke out in Ukraine.
                    Two pieces do not match the palette, I express my opinion in a seemingly quiet piece.
                </p>
                <GalleryWithOverlay images={camaieu}/>
            </div>
            <div>
                <h2>Mother Nature is on my mind</h2>
                <p>Watercolour is a medium I enjoy because it guides you, I surrender part of my control to the water.
                    This has made this medium an intuitive expressive one for me, however I also enjoy the transparent
                    quality of watercolour for colouring of sketches.</p>
                <GalleryWithOverlay images={motherNature}/>
            </div>
            <h1>Practices</h1>
            <div>
                <h2>Analog drawings</h2>
                <h3>Journaling</h3>
                <GalleryWithOverlay images={analogDrawings_JOURNALING}/>

                <h3 style={{textAlign: "start", marginLeft: '10px'}}>Life Drawing</h3>
                <GalleryWithOverlay images={analogDrawings_PORTRAIT}/>
                <GalleryWithOverlay images={analogDrawings_LIFEDRAWING}/>
            </div>
            <div>
                <h2>Digital drawings</h2>
                <GalleryWithOverlay images={digitalDrawings}/>
            </div>
            <div>
                <h2>Object photography</h2>
                <GalleryWithOverlay images={objectPhotography}/>
            </div>
            <div>
                <h3>Self-Portaits</h3>
                <GalleryWithOverlay images={analogDrawings_ME}/>
            </div>
        </div>
    );
};

export default GalleryComponent;
