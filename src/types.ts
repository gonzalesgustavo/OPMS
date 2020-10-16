export interface InnerMeasurement {
  right: string;
  center: string;
  left: string;
}

export interface Message {
  to: string;
  from: string;
  msg: string;
  project: ProjectMicro;
}

export interface ProjectMicro {
  title: string;
  color: string;
}

export interface MessageState {
  messages: Array<Message>;
}

export interface Note {
  message: string;
  date: string;
  project: ProjectMicro;
}

export interface Project {
  title: string;
  userId: string;
}

export interface Task {
  message: string;
  project: ProjectMicro;
}

// ------> Vuex
export interface RootState {
  messages: Array<Message>;
}

// widthAdjuster(): InnerMeasurement {
//   const windowWidth = window.innerWidth;
//   const sideSizeAcommidator = windowWidth - 120;
//   const sides = (sideSizeAcommidator / 4).toString() + 'px';
//   console.log(sides);
//   return {
//     right: sides,
//     center: (sideSizeAcommidator / 2).toString() + 'px',
//     left: sides
//   };
// }
