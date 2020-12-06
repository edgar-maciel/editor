import React from 'react';
import Button from '../../../../components/ui/Button';
import Logo from '../../../../components/ui/Logo/Logo';
import {
  FolderOpenOutline,
  SaveAsOutline,
  SparklesOutline,
  VideoCameraOutline,
} from 'heroicons-react';
import ClearButton from '../ui/ClearButton';
import ExportButton from './ExportButton';
import { UserContainer } from '../../../../containers/UserContainer';
import { Plan } from '../../../../containers/interfaces';

function EditorHeader() {
  const { userPlan } = UserContainer.useContainer();

  const isPro = userPlan.plan === Plan.Professional;

  return (
    <div className="flex bg-white border-b w-full p-2 items-center">
      <div className="flex pr-5 mr-5">
        <Logo dark pro={isPro} />
      </div>

      <div className="flex flex-grow items-center justify-between">
        <div className="flex items-center space-x-2">
          <ClearButton icon={FolderOpenOutline} className="px-2.5">
            Open template
          </ClearButton>

          <ClearButton icon={SaveAsOutline} className="px-2.5">
            Save template
          </ClearButton>

          <ClearButton className="px-2.5" icon={VideoCameraOutline}>
            Videos
          </ClearButton>

          <Button
            type="custom"
            icon={SparklesOutline}
            className="py-1.5 px-2.5 rounded-md font-semibold bg-yellow-50 hover:bg-yellow-100 focus:bg-yellow-100 transition duration-150 border border-transparent text-yellow-600 focus:text-yellow-700 hover:text-yellow-700 focus:ring-yellow-300 focus:outline-none focus:ring-2"
          >
            {isPro ? 'Professional' : 'Upgrade'}
          </Button>
        </div>

        <ExportButton />
      </div>
    </div>
  );
}

export default EditorHeader;
