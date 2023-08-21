// import {process} from 'process' // To be fixed, not sure why process wont import

let timezone_generate; // Should clarify type, but not sure what it is yet
let chosen_timezone: string;

function timezone(chosen_timezone?: string)


{
    timezone_generate = new Intl.DateTimeFormat('en-US', 
    {
        timeZone: chosen_timezone,
        timeStyle: 'full',
        
    })
    console.log('Time time in', chosen_timezone, 'is', timezone_generate.format(new Date()))
}
timezone(chosen_timezone = 'Japan') // 
timezone(chosen_timezone = 'America/New_York')
timezone(chosen_timezone = 'Europe/London')

// timezone(chosen_timezone = process.argv[2]) //============ Call function to return a date, should pass argument to timezone to decide which timezone to use