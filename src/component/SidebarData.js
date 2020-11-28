import React from 'react'
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
    {
        title: "Home",
        icon: <IoIcons.IoIosArchive/>,
        path: "/"
    },

    {
        title: "Course store",
        icon: <AiIcons.AiOutlineShoppingCart/>,
        path: "/store"
    },

    {
        title: "Help",
        icon: <IoIcons.IoIosHelpCircle/>,
        path: "/help"
    },
]


