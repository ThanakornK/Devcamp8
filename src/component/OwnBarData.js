import React from 'react';
import * as IoIcons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";
import userData from '../testData/userdata'

export const OwnBarData = [
    {
        title:"Create Course",
        icon:<IoIcons.IoAddCircle />,
        path:"/createCourse/"+userData
    },
    {
        title:"Inbox",
        icon:<RiIcons.RiInboxArchiveFill />,
        path:"/inbox"
    },
    {
        title:"Account",
        icon:<RiIcons.RiMoneyDollarCircleFill />,
        path:"/account"
    }
]