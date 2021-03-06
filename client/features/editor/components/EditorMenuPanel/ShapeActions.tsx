import {
  ArrowDownOutline,
  ArrowUpOutline,
  DuplicateOutline,
  TrashOutline,
} from 'heroicons-react';
import React from 'react';
import Popover from '../../../../components/ui/Popover/Popover';
import { EditorContainer } from '../../containers/EditorContainer/EditorContainer';
import useElements from '../../hooks/useElements';
import PanelActionButton from '../ui/PanelActionButton';

interface Props {
  elementId: string;
}

function ShapeActions({ elementId }: Props) {
  const { selectedElement, createElement } = useElements();
  const { dispatch, template } = EditorContainer.useContainer();

  const handleDuplicateClick = () => {
    if (selectedElement) {
      createElement(selectedElement.type, {
        ...selectedElement.props,
        x: undefined,
        y: undefined,
      });
    }
  };

  const handleDeleteClick = () => {
    dispatch({ type: 'delete_element', id: elementId });
  };

  const handleMoveUpClick = () => {
    dispatch({ type: 'reorder_element', id: elementId, inc: 1 });
  };

  const handleMoveDownClick = () => {
    dispatch({ type: 'reorder_element', id: elementId, inc: -1 });
  };

  const moveDownDisabled =
    template.elements[template.elements.length - 1]?.id === elementId;
  const moveUpDisabled = template.elements[0]?.id === elementId;

  return (
    <>
      <Popover
        content="Move layer up"
        placement="top"
        className="flex"
        closed={moveDownDisabled}
      >
        <PanelActionButton
          icon={ArrowUpOutline}
          onClick={handleMoveUpClick}
          disabled={moveDownDisabled}
        />
      </Popover>
      <Popover
        content="Move layer down"
        placement="top"
        className="flex"
        closed={moveUpDisabled}
      >
        <PanelActionButton
          icon={ArrowDownOutline}
          onClick={handleMoveDownClick}
          disabled={moveUpDisabled}
        />
      </Popover>
      <Popover content="Duplicate" placement="top" className="flex">
        <PanelActionButton
          icon={DuplicateOutline}
          onClick={handleDuplicateClick}
        />
      </Popover>
      <Popover content="Remove (delete)" placement="top" className="flex">
        <PanelActionButton icon={TrashOutline} onClick={handleDeleteClick} />
      </Popover>
    </>
  );
}

export default ShapeActions;
