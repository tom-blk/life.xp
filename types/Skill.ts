interface SkillA{
    skillName: string;
    skillLevel: number;
    secondsToLevelUp: number;
    secondsToNextLevel: number;
    levelUpMethod: 'time';
    importance: 1 | 2 | 3;
    category: string;
}

interface SkillB {
    skillName: string;
    skillLevel: number;
    levelUpMethod: 'goal';
    goals: string[];
    importance: 1 | 2 | 3;
    category: string;
}

export type Skill = SkillA | SkillB;

