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
  createTree(nodeId: string, name: string): Promise<Tree | null> {
    return apiRequest(() =>
      instance.post<Tree>('api.user.tree.node.create', null, {
        params: {
          treeName: TREE_NAME,
          parentNodeId: nodeId,
          nodeName: name,
        },
      }),
    );
  },
  renameTree(nodeId: string, name: string): Promise<Tree | null> {
    return apiRequest(() =>
      instance.post<Tree>('api.user.tree.node.rename', null, {
        params: {
          treeName: TREE_NAME,
          nodeId: nodeId,
          newNodeName: name,
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
  getJournalWithPagination({
    body,
    params,
  }: RequestWithPagination): Promise<ResponseWithPagination<Journal> | null> {
    return apiRequest(() =>
      instance.post('api.user.journal.getRange', body, {
        params,
      }),
    );
  },
};

export type Tree = {
  children: Tree[];
  id: string;
  name: string;
};

type Filter = {
  from?: string; // "2024-12-01T00:00:00.000Z"
  search?: string;
  to?: string; // "2024-12-26T00:00:00.000Z"
};

export type Pagination = {
  skip: number;
  take: number;
};

export type RequestWithPagination = {
  params: Pagination;
  body: Filter;
};

export type ResponseWithPagination<T> = {
  count: 13;
  skip: 0;
  items: T;
};

export type Journal = {
  createdAt: string; // "2024-12-02T10:47:05.018026Z"
  eventId: string;
  id: number;
};
