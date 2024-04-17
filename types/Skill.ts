export interface Skill {
    skillName: string;
    skillLevel: number;
    secondsToLevelUp: number;
    secondsToNextLevel: number;
    importance: 1 | 2 | 3;
}