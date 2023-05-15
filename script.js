const display_time = () => {
    //  declearign the time ids 
    let seconds1 = document.getElementById('seconds')
    let minuts = document.getElementById('minuts')
    let hours = document.getElementById('hours')
    const time = new Date()

    // declearing the second is here 
    disp_second = ":" + time.getSeconds()
    seconds1.innerHTML = disp_second

    // declearing the second is here 
    disp_minuts = ":" + time.getMinutes()
    minuts.innerHTML = disp_minuts


    // declearing the hours is here 
    disp_hours = time.getHours()
    hours.innerHTML = disp_hours

}

const display_date = () => {
    let disp_date = document.getElementById("date")
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', options);
     disp_date.innerHTML = formattedDate

}
const disp_day = ()=>{
    let day = document.getElementById('day')
    const date = new Date();
    const options = {weekday: 'long'}
    const dayOfweek = date.toLocaleDateString('en-US', options)
    // console.log(dayOfweek)
    day.innerHTML = dayOfweek
}
display_date()
disp_day()
setInterval( display_time, 1000);