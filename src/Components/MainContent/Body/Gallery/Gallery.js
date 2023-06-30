import React from 'react';
import Section from './Section/Section';
import {Gallery} from 'react-grid-gallery';
import ImageOverlay from './ImageOverlay/ImageOverlay';

import Unedited from "./Unedited";

const GalleryComponent = () => {

    const unedited = [
        {
            src: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_FLOWERPICKING_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_FLOWERPICKING_1.webp'),
            thumbnailWidth: 4,
            thumbnailHeight: 4,
            caption: 'FLOWERPICKING',
            description: 'DIGITAL COLLAGE \n' +
                'early 2021\n' +
                'This flower wasn’t where it should be. \n',
            customOverlay: <ImageOverlay title='FLOWERPICKING'
                                         description={'DIGITAL COLLAGE \n early 2021 \n This flower wasn’t where it should be.'}/>
        },
        {
            src: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_NEWBLUR_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_NEWBLUR_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'NEWBLUR',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_GOLDHEAD_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_GOLDHEAD_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 2,
            caption: 'GOLDHEAD',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_UNDERWATER_4.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_UNDERWATER_4.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'UNDERWATER',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_REDCURTAIN_5.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_REDCURTAIN_5.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'REDCURTAIN',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_REDCURTAIN_6.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_REDCURTAIN_6.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'REDCURTAIN',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_REFLECTIONS_7.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_REFLECTIONS_7.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'REFLECTIONS',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_SPACEAVOCADO_8.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_SPACEAVOCADO_8.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'SPACEAVOCADO',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_PINKSUN_9.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_UNEDITED/UNEDITED_1_PINKSUN_9.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'PINKSUN',
            description: '',
        }
    ];

    const blueHour = [
        {
            src: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_GIF_1.gif'),
            thumbnail: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_GIF_1.gif'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'GIF',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_GIF_2.gif'),
            thumbnail: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_GIF_2.gif'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'GIF',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_GIF_3.gif'),
            thumbnail: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_GIF_3.gif'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'GIF',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_GIF_5.gif'),
            thumbnail: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_GIF_5.gif'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'GIF',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_GIF_6.gif'),
            thumbnail: require('Assets/Images/Art Projects/1_BLUEHOUR/BLUEHOUR_1_GIF_6.gif'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'GIF',
            description: '',
        }
    ]

    const collage = [
        {
            src: require('Assets/Images/Art Projects/1_COLLAGE/COLLAGE_1_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_COLLAGE/COLLAGE_1_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'COLLAGE',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/1_COLLAGE/COLLAGE_1_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_COLLAGE/COLLAGE_1_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'COLLAGE',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/1_COLLAGE/COLLAGE_1_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/1_COLLAGE/COLLAGE_1_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'COLLAGE',
            description: '',
        }
    ]

    const angels = [
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_EYES_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_EYES_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'EYES',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_EYES_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_EYES_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'EYES',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_GLASS_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_GLASS_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'GLASS',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_LOVE_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_LOVE_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'LOVE',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_LOVE_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_LOVE_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'LOVE',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_LOVE_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_LOVE_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'LOVE',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_LOVE_4.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_LOVE_4.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'LOVE',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'NATURE',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'NATURE',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'NATURE',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_4.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_4.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'NATURE',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_5.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_5.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'NATURE',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_6.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_6.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'NATURE',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_7.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_ANGELS/ANGELS_1_NATURE_7.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'NATURE',
            description: '',
        }
    ]

    const durableMaterials = [
        {
            src: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Churchandmountain_2_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Churchandmountain_2_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Church and Mountain',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Churchandmountain_2_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Churchandmountain_2_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Church and Mountain',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Churchandmountain_2_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Churchandmountain_2_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Church and Mountain',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Churchandmountain_2_4.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Churchandmountain_2_4.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Church and Mountain',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Churchandmountain_2_5.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Churchandmountain_2_5.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Church and Mountain',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Camaieu_ 2_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Camaieu_ 2_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Camaieu',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Camaieu_ 2_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Camaieu_ 2_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Camaieu',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Camaieu_ 2_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Camaieu_ 2_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Camaieu',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Camaieu_ 2_4.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Camaieu_ 2_4.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Camaieu',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Camaieu_ 2_5.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_DURABLEMATERIALS/Camaieu_ 2_5.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Camaieu',
            description: '',
        }
    ]

    const motherNature = [
        {
            src: require('Assets/Images/Art Projects/2_MOTHERNATURE/MotherNature_2_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_MOTHERNATURE/MotherNature_2_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Mother Nature',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_MOTHERNATURE/MotherNature_2_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_MOTHERNATURE/MotherNature_2_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Mother Nature',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_MOTHERNATURE/MotherNature_2_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_MOTHERNATURE/MotherNature_2_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Mother Nature',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/2_MOTHERNATURE/MotherNature_2_4.webp'),
            thumbnail: require('Assets/Images/Art Projects/2_MOTHERNATURE/MotherNature_2_4.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Mother Nature',
            description: '',
        }
    ]

    const analogDrawings_Journaling = [
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_4.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_4.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_5.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_5.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_6.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_6.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            description: '',

        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_7.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_7.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_8.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_8.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_9.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_9.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_10.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_10.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_11.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_11.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_12.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_Journaling_12.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'Journaling',
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
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'ME',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'ME',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_4.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_4.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'ME',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_5.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_5.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'ME',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_6.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_6.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'ME',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_7.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_ME_7.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'ME',
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
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_PORTRAIT_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_PORTRAIT_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'PORTRAIT',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_PORTRAIT_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_PORTRAIT_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'PORTRAIT',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_PORTRAIT_4.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_PORTRAIT_4.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'PORTRAIT',
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
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_wLIFEDRAWING_(2).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_wLIFEDRAWING_(2).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'LIFEDRAWING',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_wLIFEDRAWING_(3).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_wLIFEDRAWING_(3).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'LIFEDRAWING',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_wLIFEDRAWING_(4).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_ANALOGDRAWINGS/REFERENCES_3_wLIFEDRAWING_(4).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'LIFEDRAWING',
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
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/Characters_3_(2).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/Characters_3_(2).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'CHARACTERS',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/Characters_3_(3).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/Characters_3_(3).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'CHARACTERS',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/Characters_3_(4).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/Characters_3_(4).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'CHARACTERS',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/Characters_3_(5).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/Characters_3_(5).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'CHARACTERS',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/characters_3_(8).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/characters_3_(8).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'CHARACTERS',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/characters_3_(9).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/characters_3_(9).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'CHARACTERS',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/characters_3_(10).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/characters_3_(10).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'CHARACTERS',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/characters_3_(11).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/characters_3_(11).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'CHARACTERS',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/characters_3_(12).webp'),
            thumbnail: require('Assets/Images/Art Projects/3_DIGITALDRAWINGS/characters_3_(12).webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'CHARACTERS',
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
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_1_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_1_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'OBJECTPHOTOGRAPHY',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_1_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_1_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'OBJECTPHOTOGRAPHY',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_2_1.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_2_1.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'OBJECTPHOTOGRAPHY',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_2_2.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_2_2.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'OBJECTPHOTOGRAPHY',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_2_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_2_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'OBJECTPHOTOGRAPHY',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_2_4.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_2_4.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'OBJECTPHOTOGRAPHY',
            description: '',
        },
        {
            src: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_3.webp'),
            thumbnail: require('Assets/Images/Art Projects/3_OBJECTPHOTOGRAPHY/objectphotos_3_3.webp'),
            thumbnailWidth: 2,
            thumbnailHeight: 4,
            caption: 'OBJECTPHOTOGRAPHY',
            description: '',
        }
    ]


    return (
        <div className="gallery">
            <h1>INSPIRATIONS</h1>
            <div>
                <h2>(UN)EDITED</h2>
                <Gallery
                    images={unedited}
                    enableImageSelection={false}
                    rowHeight={600}
                    margin={10}
                    lightboxWidth={1000}
                />
            </div>
            <div>
                <h2>BLUE HOUR</h2>
                <Gallery
                    images={blueHour}
                    enableImageSelection={false}
                    rowHeight={600}
                    margin={10}
                    lightboxWidth={1000}
                />
            </div>

            <h1>Inspiration</h1>
            <div>
                <h2>Angels</h2>
                <Gallery
                    images={angels}
                    enableImageSelection={false}
                    rowHeight={500}
                    margin={10}
                    lightboxWidth={1000}
                />
            </div>
            <div>
                <h2>Durable Materials</h2>
                <Gallery
                    images={durableMaterials}
                    enableImageSelection={false}
                    rowHeight={500}
                    margin={10}
                    lightboxWidth={1000}
                />

            </div>
            <div>
                <h2>Mother Nature is on my mind</h2>
                <Gallery
                    images={motherNature}
                    enableImageSelection={false}
                    rowHeight={500}
                    margin={10}
                    lightboxWidth={1000}
                />
            </div>
            <h1>Practices</h1>
            <div>
                <h2>Analog drawings</h2>
                <h3>Journaling</h3>
                <Gallery
                    images={analogDrawings_Journaling}
                    enableImageSelection={false}
                    rowHeight={500}
                    margin={10}
                    lightboxWidth={1000}
                />
                <h3>ME</h3>
                <Gallery
                    images={analogDrawings_ME}
                    enableImageSelection={false}
                    rowHeight={500}
                    margin={10}
                    lightboxWidth={1000}
                />
                <h3>PORTRAIT</h3>
                <Gallery
                    images={analogDrawings_PORTRAIT}
                    enableImageSelection={false}
                    rowHeight={500}
                    margin={10}
                    lightboxWidth={1000}
                />
                <h3>LIFEDRAWING</h3>
                <Gallery
                    images={analogDrawings_LIFEDRAWING}
                    enableImageSelection={false}
                    rowHeight={500}
                    margin={10}
                    lightboxWidth={1000}
                />


            </div>
            <div>
                <h2>Digital drawings</h2>
                <Gallery
                    images={digitalDrawings}
                    enableImageSelection={false}
                    rowHeight={500}
                    margin={10}
                    lightboxWidth={1000}
                />
            </div>
            <div>
                <h2>Object photography</h2>
                <Gallery
                    images={objectPhotography}
                    enableImageSelection={false}
                    rowHeight={500}
                    margin={10}
                    lightboxWidth={1000}
                />
            </div>
        </div>
    );
};

export default GalleryComponent;
