export interface CreateImageState {
  isCreating: boolean;
  isCreatingWithNewTopic: boolean;
  generationTaskIds: Record<string, string>;
}

export const initialCreateImageState: CreateImageState = {
  isCreating: false,
  isCreatingWithNewTopic: false,
  generationTaskIds: {},
};
