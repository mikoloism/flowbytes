import Circle from './shapes/circle';
import Rectangle from './shapes/rectangle';
import Square from './shapes/square';
import Triangle from './shapes/triangle';

export type Shape = Circle | Rectangle | Square | Triangle;

export type ShapeId = string;
