import { ITool } from '@utils/interfaces';

import AzureADIcon from '@assets/icons/azure-ad-icon.svg?react';
import APIManagementIcon from '@assets/icons/azure-gateway-icon.svg?react';
import AzureIcon from '@assets/icons/azure-icon.svg?react';
import PortalIcon from '@assets/icons/azure-portal-icon.svg?react';
import ServiceIcon from '@assets/icons/azure-service-icon.svg?react';
import CloudServices from '@assets/icons/cloud-services-icon.svg?react';
import HTTP from '@assets/icons/http-icon.svg?react';
import LogicAppsIcon from '@assets/icons/logic-apps-icon.svg?react';

export const azureTools: ITool[] = [
  { tool: 'Azure Active Directory', icon: AzureADIcon },
  { tool: 'HTTP', icon: HTTP },
  { tool: 'Gateway', icon: APIManagementIcon },
  { tool: 'Logic apps', icon: LogicAppsIcon },
  { tool: 'Developer portal', icon: PortalIcon },
  { tool: 'Azure services', icon: AzureIcon },
  { tool: 'Cloud services', icon: CloudServices },
  { tool: 'Service', icon: ServiceIcon },
];
