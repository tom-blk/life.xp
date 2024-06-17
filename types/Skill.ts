export interface SkillA{
    skillName: string;
    skillLevel: number;
    secondsToLevelUp: number;
    secondsToNextLevel: number;
    levelUpMetric: Extract<LevelUpMetric, "time">;
    importance: 1 | 2 | 3;
    category: string;
}

export interface SkillB {
    skillName: string;
    skillLevel: number;
    levelUpMetric: Extract<LevelUpMetric, "goal">;
    goals: string[];
    importance: 1 | 2 | 3;
    category: string;
}

export type LevelUpMetric = "goal" | "time";

export type Skill = SkillA | SkillB;

