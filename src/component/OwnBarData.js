import React from 'react';
import * as IoIcons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";

export const OwnBarData = [
    {
        title:"สร้าง",
        icon:<IoIcons.IoAddCircle />,
        path:"/createCourse"
    },
    {
        title:"กล่องคำถาม",
        icon:<RiIcons.RiInboxArchiveFill />,
        path:"/inbox"
    }
]