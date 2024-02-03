export type loginInputs = { email: string; password: string };

export type registerInputData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type registerInputs = {
  username: string;
  email: string;
  password: string;
};

export type loginWithGoogleInputs = {
  username: string;
  email: string;
  photo: string;
  authMethod: string;
};

export type userUpdateInputs = {
  username?: string;
  photo?: string;
};

export type changePasswordInputs = {
  oldPassword: string;
  password: string;
};

export type addIssueInputs = {
  title: string;
  description: string;
};

export type IUser = {
  _id: string;
  username: string;
  email: string;
  photo: string;
  authMethod: string;
};

export type Reporter = {
  _id: string;
  username: string;
  email: string;
  photo: string;
  authMethod: string;
  createdAt: string;
  updatedAt: string;
};

export type RegisterdUser = {
  _id: string;
  username: string;
};

export type IIssue = {
  _id: string;
  title: string;
  description: string;
  reporter: Reporter;
  status: string;
  assignee: string | null;
  createdAt: string;
  updatedAt: string;
};

export type initialAuthState = {
  user: IUser | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  updateUserLoading: boolean;
  changePasswordLoading: boolean;
  message: string;
  registeredUsers: RegisterdUser[];
};

export type initialIssueState = {
  issues: IIssue[];
  issuesByUser: IIssue[];
  isGetIssuesError: boolean;
  isGetIssuesByUserError: boolean;
  isGetIssuesSuccess: boolean;
  isGetIssuesByUserSuccess: boolean;
  isGetIssuesLoading: boolean;
  isGetIssuesByUserLoading: boolean;
  message: string;
  selectedIssue: null | IIssue;
};
