import React from 'react'
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
    {
        title: "Library",
        icon: <IoIcons.IoIosArchive/>,
        path: '/library'
    },

    {
        title: "Course store",
        icon: <AiIcons.AiOutlineShoppingCart/>,
        path: '/store'
    },

    {
        title: "Help",
        icon: <IoIcons.IoIosHelpCircle/>,
        path: '/help'
    },
]


