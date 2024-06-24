export function formatTimeDifference(dateString:string) {
    // Convert the input string to a Date object
    const inputDate:any = new Date(dateString);
  
    // Get the current date and time
    const currentDate:any = new Date();
  
    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - inputDate;
  
    // Calculate time in minutes, hours, and days
    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    // Display the result based on conditions
    if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (hours < 24) {
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else {
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    }
  }