import { IChallenge } from "./IChallenge";

export interface IChallengesContextData {
	level: number;
	currentExperience: number;
	experienceToNextLevel: number;
	challengesCompleted: number;
	activeChallenge: IChallenge | null;

	levelUp: () => void;
	startNewChallenger: () => void;
	resetChallenge: () => void;
	completeChallenge: () => void;
	closeLevelUpModal: () => void;
}
