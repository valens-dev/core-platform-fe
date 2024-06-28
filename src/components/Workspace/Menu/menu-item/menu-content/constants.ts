import { ITool } from '@/types/tool';

import HTTP from '@/assets/icon/http-icon.svg?react';
import AzureIcon from '@/assets/icon/azure-icon.svg?react';
import AzureADIcon from '@/assets/icon/azure-ad-icon.svg?react';
import PortalIcon from '@/assets/icon/azure-portal-icon.svg?react';
import LogicAppsIcon from '@/assets/icon/logic-apps-icon.svg?react';
import ServiceIcon from '@/assets/icon/azure-service-icon.svg?react';
import CloudServices from '@/assets/icon/cloud-services-icon.svg?react';
import APIManagementIcon from '@/assets/icon/azure-gateway-icon.svg?react';

export const AZURE_TOOLS: ITool[] = [
  { tool: 'Azure Active Directory', icon: AzureADIcon },
  { tool: 'HTTP', icon: HTTP },
  { tool: 'Gateway', icon: APIManagementIcon },
  { tool: 'Logic apps', icon: LogicAppsIcon },
  { tool: 'Developer portal', icon: PortalIcon },
  { tool: 'Azure services', icon: AzureIcon },
  { tool: 'Cloud services', icon: CloudServices },
  { tool: 'Service', icon: ServiceIcon },
];
