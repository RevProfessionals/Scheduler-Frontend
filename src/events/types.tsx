export interface Event {
    id: number;
    title: string;
    time: string; 
  }
  
  export interface Day {
    date: string; 
    events: Event[];
  }
  