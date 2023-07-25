export interface Event {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    startTime: string; 
    endTime: string;
  }
  
  export interface Day {
    date: string; 
    events: Event[];
  }
  