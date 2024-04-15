export interface Skill {
    skillName: string;
    level: number;
    secondsToLevelUp: number;
    secondsToNextLevel: number;
    importance: 1 | 2 | 3;
}