export const professions = [
  { "value":0, "text":"Please select"},
  { "value":1,"text":"Business analyst"},
  { "value":2,"text":"Project manager"},
  { "value":3,"text":"Software Developer"},
  { "value":4,"text":"Software Tester"}
]

export function getProfessionTextById(id:string){
  return professions.find(p => p.value.toString() == id)?.text;
}

export const skillLevel = [
  { "value":0, "text":"Please select"},
  { "value":1,"text":"Intern"},
  { "value":2,"text":"Junior"},
  { "value":3,"text":"Intermediate"},
  { "value":4,"text":"Senior"},
  { "value":5,"text":"Lead"}
]

export function getSkillLevelById(id:string){
  return skillLevel.find(p => p.value.toString() == id)?.text;
}

export const skills = [
  { value:"software", label:"Software Development"},
  { value:"project",label:"Project Management"},
  { value:"testing",label:"Software Testing"},
  { value:"analyst",label:"Business Analysis"},
  { value:"devops",label:"Devops"},
  { value:"architecture",label:"Software Architecture"}
]

export const degrees = [
  {value:"0",label:"Please select"},
  {value:"1",label:"Bachelor of Science in Computer Science"},
  {value:"2",label:"Bachelor of Science in Information Technology"},
  {value:"3",label:"Bachelor of Science in Software Engineering"},
  {value:"4",label:"Bachelor of Business Administration"},
  {value:"5",label:"Bachelor of Project Management"},
  {value:"6",label:"Diploma in Software Development"},
  {value:"7",label:"Diploma in Information Technology"},
  {value:"8",label:"Diploma in Web Development"},
  {value:"9",label:"Diploma in Project Management"},
  {value:"10",label:"Associate Degree in Computer Science"},
]

export const competencies = [                                 
  { value: 'dotnet', label: '.Net' },
  { value: 'js', label: 'Javascript' },
  { value: 'python', label: 'Python' },
  { value: 'cplus', label: 'C/C+' },
  { value: 'sql', label: 'SQL' },
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'vue', label: 'Vue JS' },
  { value: 'blockchain', label: 'Blockchain' },
  { value: 'solidity', label: 'Solidity' },
  { value: 'ai', label: 'AI/ML' },
  { value: 'openai', label: 'Open AI' },
  { value: 'php', label: 'PHP' },
  { value: 'java', label: 'Java' },
  { value: 'aws', label: 'AWS' },
  { value: 'azure', label: 'Azure' },
  { value: 'docker', label: 'Docker' },
  { value: 'kubernates', label: 'Kubernates' },
  { value: 'truffle', label: 'Truffle Suite' },
  { value: 'git', label: 'Git' },
  { value: 'go', label: 'Go' },
  { value: 'powerapp', label: 'Power Apps' },
  { value: 'salesforce', label: 'Sales Force' },
  { value: 'sap', label: 'SAP' },
  { value: 'bpmn', label: 'BPMN' },
]

export const languages =[
  {value:"0",label:"Please select"},
  {value:"1",label:"English"},
  {value:"2",label:"French"},
  {value:"3",label:"Swahili"},
  {value:"4",label:"Portugese"},
]

export const countries =[
  {value:"0",label:"South Africa"},
  {value:"1",label:"Kenya"},
  {value:"2",label:"Ghana"},
  {value:"3",label:"Botswana"},
  {value:"4",label:"Tanzania"},
  {value:"5",label:"Other"},
]


export function getCountryById(id:string){
  return countries.find(p => p.value.toString() == id)?.label;
}

export interface IPartner{

}

