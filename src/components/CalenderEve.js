import 'react-date-range/dist/styles.css';
import'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { intersectRanges } from '@fullcalendar/react';
import { isToday } from 'date-fns';
// import { Calendar } from 'react-date-range';

function CalenderEve(){
    // console.log(showSelectionPreview)
    const handleSelect = (ranges) => {
        if (ranges.selection.startDate === ranges.selection.endDate) {
            ranges.selection.endDate = new Date()
        }
        else if (ranges.selection.endDate < ranges.selection.startDate) {
            ranges.selection.endDate = new Date()
        }
        else if (ranges.selection.startDate === isToday) {
            ranges.selection.startDate = new Date()
        }
        console.log(ranges)
        console.log(ranges.selection)
        console.log(ranges.selection.startDate)   
        console.log(ranges.selection.endDate)
        console.log(ranges)
    }
    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        showSelectionPreview: true,
        selection: {
            startDate: new Date(),
            endDate: new Date()
        },
       key: 'selection',
        
    
   
        // startDate: new Date(),
        // endDate: new Date(),
        // // allDay: true,
        // key: 'selection',
        // onSelect: handleSelect,
        // isSelectable: true,
        // selectedDates: [new Date()]


    }
    
    return (
        <>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
        </>
    )
}

export default CalenderEve;