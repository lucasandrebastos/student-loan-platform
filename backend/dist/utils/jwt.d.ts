import jwt, { SignOptions } from "jsonwebtoken";
export declare function signJwt(payload: object, expiresIn?: SignOptions["expiresIn"]): string;
export declare function verifyJwt(token: string): string | jwt.JwtPayload | null;
