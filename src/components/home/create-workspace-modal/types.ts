export interface ICreateWorkspaceModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

export interface IWorkspaceAuthData {
  workspaceName: string;
  appId: string;
  appClientSecret: string;
  objectId: string;
}
