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
export const EnrollData = axios.get(`http://8cf0d250a525.ngrok.io/api/courses/1`)
    .then(res => {
        return res.data ;
    })



