import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'https://test.vmarmysh.com/',
  headers: {
    Accept: 'application/json',
  },
});

const TREE_NAME = '{C9232B85-AD10-459C-A44F-70CA30C60E5F}';

const apiRequest = async <T>(request: () => Promise<AxiosResponse<T>>): Promise<T | null> => {
  try {
    const response = await request();
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return null;
  }
};

export const API = {
  getTree(): Promise<Tree | null> {
    return apiRequest(() =>
      instance.post<Tree>('api.user.tree.get', null, {
        params: {
          treeName: TREE_NAME,
        },
      }),
    );
  },
  deleteTree(nodeId: string): Promise<Tree | null> {
    return apiRequest(() =>
      instance.post<Tree>('api.user.tree.node.delete', null, {
        params: {
          treeName: TREE_NAME,
          nodeId,
        },
      }),
    );
  },
};

export type Tree = {
  children: Tree[];
  id: string;
  name: string;
};
