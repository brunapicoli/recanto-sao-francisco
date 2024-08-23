import styled from 'styled-components';
import Cropper from 'react-cropper';

export const CropperContainer = styled(Cropper)`
  div.cropper-drag-box {
    opacity: 0.5;
  }

  span.cropper-view-box {
    outline: none;
  }
`;
