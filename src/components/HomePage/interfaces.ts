export interface ICreateWorkspaceModal {
  handleCloseModal: () => void;
}

export interface IWorkspaceAuthData {
  workspaceName: string;
  appId: string;
  appClientSecret: string;
  objectId: string;
}
