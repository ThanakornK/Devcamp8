import React from 'react'
import axios from 'axios'


// const EnrollData = {};
// axios.get(`http://8cf0d250a525.ngrok.io/api/courses/1`)
//     .then(res => {
//         EnrollData = res.data;
//         console.log(course);
//         this.setState({ course: course });
//         console.log(this.state.course);
//     })
// export const EnrollData = axios.get(`http://8cf0d250a525.ngrok.io/api/courses/1`)
//     .then(res => {
//         return res.data ;
//     })

export const EnrollData = [
    {
        id:1,
        title:"สอนทำสีที่แม้แต่ลิงอุรังอุตังแก่ยังทำตามได้",
        type:"Painting",
        cost:1500.00,
        toytype:"Figure",
        owner:"pondInw00725420924956120"
    },
    {
        id:2,
        title:"สอนปั้นโมเดลที่แม้แต่ลูกแมวน้ำยังทำตามได้",
        type:"Modeling",
        cost:3500.00,
        toytype:"Figure",
        owner:"pondInw00725420924956120"
    }
]
    


