export interface Agent {
  id: number;
  name: string;
  os: OS;
  created_datetime: string;
  last_connected_datetime: string;
  tags: string[];
  group: string;
  connected: boolean;
  authorization_status: AuthStatus;
}

export enum OS {
  Windows = 'windows',
  Linux = 'linux',
  Macos = 'macos'
}

export enum AuthStatus {
  Authorized = 'authorized',
  Unauthorized = 'unauthorized'
}