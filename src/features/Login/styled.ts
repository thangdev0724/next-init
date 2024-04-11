import { Button } from 'antd';
import styled from 'styled-components';

export const CaptchaWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  position: relative;
`;

export const ReloadCaptchaButton = styled(Button)`
  position: absolute;
  left: 100%;
  top: 0;
`;
