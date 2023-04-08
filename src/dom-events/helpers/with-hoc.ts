import withEvent from './base';

export const withClick = withEvent('click', document);
export const withKeyPress = withEvent('keypress', window);
export const withMouseDown = withEvent('mousedown', document);
export const withMouseMove = withEvent('mousemove', document);
export const withMouseUp = withEvent('mouseup', document);
