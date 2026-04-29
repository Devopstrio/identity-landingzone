export enum IdentityProviderType {
  ACTIVE_DIRECTORY = "ACTIVE_DIRECTORY",
  ENTRA_ID = "ENTRA_ID",
  OKTA = "OKTA",
  PING = "PING",
  AUTH0 = "AUTH0",
  KEYCLOAK = "KEYCLOAK"
}

export enum FederationStatus {
  ACTIVE = "ACTIVE",
  PENDING = "PENDING",
  ERROR = "ERROR",
  DISABLED = "DISABLED"
}

export interface Tenant {
  id: string;
  name: string;
  domain: string;
  provider: IdentityProviderType;
  status: "ACTIVE" | "PROVISIONING" | "ERROR";
  createdAt: string;
  updatedAt: string;
}

export interface Directory {
  id: string;
  tenantId: string;
  name: string;
  type: IdentityProviderType;
  metadata: Record<string, any>;
  isMaster: boolean;
}

export interface SecurityPosture {
  mfaCoverage: number;
  passwordlessReadiness: number;
  privilegedAccessRisk: number;
  lastAssessed: string;
}

export interface ComplianceSummary {
  soc2: boolean;
  hipaa: boolean;
  gdpr: boolean;
  totalControls: number;
  passingControls: number;
}
