import { IRangeAssociation } from '../associator';
import * as Fpp from './ast';

export type IRange = [number, number, number, number];
export interface IDiagnostic {
    source: string;
    range: IRange;
    message: string;
}

export interface IFppMessage {
    ast: Fpp.TranslationUnit;
    path: string;
    dependencies: string[];
    ranges: [string, IRangeAssociation][];
    syntaxErrors: IDiagnostic[];
    version: number;
}

export interface IFppWorkerRequest {
    path: string;
    version: number;
    text: string;
    subText?: [string, string]
}
