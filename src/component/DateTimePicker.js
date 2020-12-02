// import React, { useState } from 'react';
// import DateFnsUtils from '@date-io/date-fns'; 
// import 'date-fns';
// import Grid from '@material-ui/core/Grid';
// import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

// function DateTimePicker() {

//     const [selectedDate, setSelectedDate] = useState( new Date() )

//     const handleDateChange = (date) => {
//         setSelectedDate(date)
//     }


//     return (
//         <div>
//             <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                 <Grid container justify='space-around'>
//                     <KeyboardDatePicker
//                         disableToolbar
//                         variant='inline'
//                         format='dd/MM/yyyy'
//                         margin='normal'
//                         id='date-picker'
//                         label='Date Picker'
//                         value={selectedDate}
//                         onChange={handleDateChange}
//                         KeyboardButtonProps={{ 
//                             'aria-lable': 'change date'
//                         }}
//                     />

//                     <KeyboardTimePicker 
//                         margin='normal'
//                         id='time-picker'
//                         label='Time Picker'
//                         value={selectedDate}
//                         onChange={handleDateChange}
//                         KeyboardButtonProps={{ 
//                             'aria-lable': 'change date'
//                         }}
//                     />

//                 </Grid>
//             </MuiPickersUtilsProvider>
//         </div>
//     )
// }

// export default DateTimePicker
