export interface SelectedNavIconType {
  home: boolean;
  explore: boolean;
  notification: boolean;
  composepost: boolean;
  settings: boolean;
}

export interface childPropsNav {
  _isActive: SelectedNavIconType;
}
export interface childPropsNavNot {
  _isActive: SelectedNavIconType;
  onclick: () => void;
}

export interface childPropsNavSettings {
  _isActive: SelectedNavIconType;
  onclick: () => void;
}

export interface dtoSearch {
  data: {
    epoch: {
      id: number;
      title: string;
      location: string;
      year: number;
      imageUrl: string;
      description: string;
      userId: number;
      catId: number;
      createdOn: string;
    };
  }[];
}

export interface dtoResult {
  epoch: {
    id: number;
    title: string;
    location: string;
    year: number;
    imageUrl: string;
    description: string;
    userId: number;
    catId: number;
    createdOn: string;
  };
}
[];
