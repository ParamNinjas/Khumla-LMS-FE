export function getInitials(name:string) {
    if (!name) return ""; 
  
    const [firstName, lastName] = name.split(" ");
    const initials = (firstName[0] + (lastName ? lastName[0] : "")).toUpperCase();
  
    return initials;
  }