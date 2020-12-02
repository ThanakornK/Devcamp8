import React from 'react';
import * as IoIcons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";
import userData from '../testData/userdata'

export const OwnBarData = [
    {
        title:"สร้าง",
        icon:<IoIcons.IoAddCircle />,
        path:"/createCourse/"+userData
    },
    {
        title:"กล่องคำถาม",
        icon:<RiIcons.RiInboxArchiveFill />,
        path:"/inbox"
    },
    {
        title:"บัญชี",
        icon:<RiIcons.RiMoneyDollarCircleFill />,
        path:"/account"
    }
]