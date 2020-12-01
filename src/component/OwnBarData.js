import React from 'react';
import * as IoIcons from "react-icons/io5";
import * as AiIcons from "react-icons/ai";

export const OwnBarData = [
    {
        title:"สร้าง",
        icon:<IoIcons.IoAddCircle />,
        path:"/createCourse"
    },
    {
        title:"ข้อความ",
        icon:<AiIcons.AiFillMessage />,
        path:"/editCourse"
    }
]