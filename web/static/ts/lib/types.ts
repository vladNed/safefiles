import { PeerMessageType } from "./constants";

export interface SessionResponse<T> {
  type: "ok" | "error" | "confirm_connection";
  payload: T;
}

export interface Response {
  message: string;
}

export interface OfferDataResponse {
  offerSDP: string;
  pubKey: string;
}

export interface AnswerDataResponse {
  answerSDP: string;
  sessionId: string;
  timestamp: string;
  pubKey: string;
}

/** Raw message structure of a message sent through the data channel between peers */
export interface PeerMessage {
  /** Message type is used to map to state management */
  type: PeerMessageType;

  /** Body of the message */
  body?: InitPayload | FilePayload | FileError;
}

/** Payload sent to the peer to initialize the transfer */
export interface InitPayload {
  fileName: string;
  fileType: string;
  fileSize: number;
  hash: string;
}

export interface FilePayload {
  data: ArrayBuffer;
  hash: string;
  stage: number;
  totalStages: number;
}

export interface FileError {
  msg: string;
}

export interface TransferSession {
  metadata: InitPayload;
  chunks: Blob[];
  chunksIndex: number;
  dataSent?: number;
  file?: File;
  fileId: string;
}

export interface SDPEventMessage {
  sdp: RTCSessionDescriptionInit;
}

export interface PinReceivedEvent {
  pin: string;
}

export interface InitTransferMessage {
  file: File;
}

export interface ReceiveTransferMessage {
  fileId: string;
  fileName: string;
  fileSize: number;
}

export interface FileUpdateEvent {
  fileId: string;
  totalData: number;
  currentData: number;
}

export interface ConnectionConfirmEvent {}

export interface CancelTransferEvent {
  fileId: string;
}
