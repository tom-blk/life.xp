export interface SkillA{
    skillName: string;
    skillLevel: number;
    secondsToLevelUp: number;
    secondsToNextLevel: number;
    levelUpMetric: Extract<LevelUpMetric, "time">;
    importance: SkillImportance;
    category: string;
}

export interface SkillB {
    skillName: string;
    skillLevel: number;
    levelUpMetric: Extract<LevelUpMetric, "goal">;
    goals: string[];
    importance: SkillImportance;
    category: string;
}

export type LevelUpMetric = "goal" | "time";

export type SkillImportance = 1 | 2 | 3;

export type Skill = SkillA | SkillB;

