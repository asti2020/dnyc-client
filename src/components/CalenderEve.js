import 'react-date-range/dist/styles.css';
import'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
// import { Calendar } from 'react-date-range';


function CalenderEve(){

    const handleSelect = (ranges) => {
        console.log(ranges);           
    }

    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }


    return (
            <>
            {/* <Calendar 
                calendarType="US"
                defaultDate={new Date(Date.now())}
                onClick = {handleSelect}
                onChange={(date) => {
                    console.log(date);
                }}
            
            /> */}

        <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
      />
            </>
    )
}

export default CalenderEve;