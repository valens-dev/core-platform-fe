import { ITool } from './interfaces';

import AzureADIcon from '@assets/azure-icons/Azure-ad-icon.svg?react';
import APIManagementIcon from '@assets/azure-icons/Azure-gateway-icon.svg?react';
import AzureIcon from '@assets/azure-icons/Azure-icon.svg?react';
import PortalIcon from '@assets/azure-icons/Azure-portal-icon.svg?react';
import ServiceIcon from '@assets/azure-icons/Azure-service-icon.svg?react';
import CloudServices from '@assets/azure-icons/Cloud-services-icon.svg?react';
import HTTP from '@assets/azure-icons/HTTP-icon.svg?react';
import LogicAppsIcon from '@assets/azure-icons/Logic-apps-icon.svg?react';

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
