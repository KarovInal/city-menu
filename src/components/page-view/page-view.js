import { useEffect } from 'react';
import { Analytics } from "aws-amplify";

export const PageView = ({ children, pageName }) => {
  useEffect(() => {
    Analytics.record({
      name: 'pageView',
      attributes: {
        pageName
      }
    });
  });

  return children;
};
